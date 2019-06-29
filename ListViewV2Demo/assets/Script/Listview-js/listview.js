var layout_utils_1 = require("layout_utils");
var ListView = /** @class */ (function () {
  function ListView(params) {
    this._selected_index = -1;
    this.scrollview = params.scrollview;
    this.mask = params.mask;
    this.content = params.content;
    this.item_tpl = params.item_tpl;
    this.item_tpl.active = false;
    this.item_width = this.item_tpl.width;
    this.item_height = this.item_tpl.height;
    this.dir = params.direction || ListViewDir.Vertical;
    this.width = params.width || this.scrollview.node.width;
    this.height = params.height || this.scrollview.node.height;
    this.gap_x = params.gap_x || 0;
    this.gap_y = params.gap_y || 0;
    this.padding_left = params.padding_left || 0;
    this.padding_right = params.padding_right || 0;
    this.padding_top = params.padding_top || 0;
    this.padding_bottom = params.padding_bottom || 0;
    this.item_anchorX = params.item_anchorX != null ? params.item_anchorX : 0;
    this.item_anchorY = params.item_anchorY != null ? params.item_anchorY : 1;
    this.row = params.row || 1;
    this.col = params.column || 1;
    this.cb_host = params.cb_host;
    this.scroll_to_end_cb = params.scroll_to_end_cb;
    this.item_class = params.item_class;
    this.auto_scrolling = params.auto_scrolling || false;
    this.item_pool = [];
    if (this.dir == ListViewDir.Vertical) {
      var content_width = (this.item_width + this.gap_x) * this.col - this.gap_x + this.padding_left + this.padding_right;
      if (content_width > this.width) {
        cc.log("content_width > width, resize listview to content_width,", this.width, "->", content_width);
        this.width = content_width;
      }
      this.set_content_size(this.width, 0);
    }
    else {
      var content_height = (this.item_height + this.gap_y) * this.row - this.gap_y + this.padding_top + this.padding_bottom;
      if (content_height > this.height) {
        cc.log("content_height > height, resize listview to content_height,", this.height, "->", content_height);
        this.height = content_height;
      }
      this.set_content_size(0, this.height);
    }
    this.original_width = this.width;
    this.original_height = this.height;
    this.mask.node.setContentSize(this.width, this.height);
    this.scrollview.node.setContentSize(this.width, this.height);
    this.scrollview.vertical = this.dir == ListViewDir.Vertical;
    this.scrollview.horizontal = this.dir == ListViewDir.Horizontal;
    this.scrollview.inertia = true;
    this.scrollview.node.on("scrolling", this.on_scrolling, this);
    this.scrollview.node.on("scroll-to-bottom", this.on_scroll_to_end, this);
    this.scrollview.node.on("scroll-to-right", this.on_scroll_to_end, this);
    this.scrollview.node.on(cc.Node.EventType.TOUCH_START, this.on_scroll_touch_start, this);
    this.scrollview.node.on(cc.Node.EventType.TOUCH_END, this.on_scroll_touch_end, this);
    this.scrollview.node.on(cc.Node.EventType.TOUCH_CANCEL, this.on_scroll_touch_cancel, this);
  }
  ListView.prototype.on_scroll_touch_start = function (event) {
    this._touchBeganPosition = cc.v2(event.touch.getLocation().x, event.touch.getLocation().y);
  };
  ListView.prototype.on_scroll_touch_cancel = function (event) {
    this._touchEndPosition = event.touch.getLocation();
    this.handle_release_logic();
  };
  ListView.prototype.on_scroll_touch_end = function (event) {
    this._touchEndPosition = event.touch.getLocation();
    this.handle_release_logic();
  };
  ListView.prototype.handle_release_logic = function () {
    var touchPos = this._touchEndPosition;
    var moveOffset = this._touchBeganPosition.sub(this._touchEndPosition);
    var dragDirection = this.get_drag_direction(moveOffset);
    if (dragDirection != 0) {
      return;
    }
    if (!this.packItems || !this.packItems.length) {
      return;
    }
    //无滑动的情况下点击
    var touchPosInContent = this.content.convertToNodeSpaceAR(touchPos);
    for (var i = this.start_index; i <= this.stop_index; i++) {
      var packItem = this.packItems[i];
      if (packItem && packItem.item && packItem.item.node.getBoundingBox().contains(touchPosInContent)) {
        packItem.item.onTouchEnd(packItem.item.node.convertToNodeSpaceAR(touchPos), packItem.data, i);
        break;
      }
    }
  };
  ListView.prototype.get_drag_direction = function (moveOffset) {
    if (this.dir === ListViewDir.Horizontal) {
      if (Math.abs(moveOffset.x) < 3) {
        return 0;
      }
      return (moveOffset.x > 0 ? 1 : -1);
    }
    else if (this.dir === ListViewDir.Vertical) {
      // 由于滚动 Y 轴的原点在在右上角所以应该是小于 0
      if (Math.abs(moveOffset.y) < 3) {
        return 0;
      }
      return (moveOffset.y < 0 ? 1 : -1);
    }
  };
  ListView.prototype.on_scroll_to_end = function () {
    if (this.scroll_to_end_cb) {
      this.scroll_to_end_cb.call(this.cb_host);
    }
  };
  ListView.prototype.on_scrolling = function () {
    var pos;
    var threshold;
    if (this.dir == ListViewDir.Vertical) {
      pos = this.content.y;
      threshold = this.item_height;
    }
    else {
      pos = this.content.x;
      threshold = this.item_width;
    }
    if (this.last_content_pos != null && Math.abs(pos - this.last_content_pos) < threshold) {
      return;
    }
    this.last_content_pos = pos;
    this.render();
  };
  ListView.prototype.render = function () {
    if (!this.packItems || !this.packItems.length) {
      return;
    }
    if (this.dir == ListViewDir.Vertical) {
      var posy = this.content.y;
      // cc.log("onscrolling, content posy=", posy);
      if (posy < 0) {
        posy = 0;
      }
      else if (posy > this.content_height - this.height) {
        posy = this.content_height - this.height;
      }
      var viewport_start = -posy;
      var viewport_stop = viewport_start - this.height;
      // while(this.packItems[start].y - this.item_height > viewport_start)
      // {
      //     start++;
      // }
      // while(this.packItems[stop].y < viewport_stop)
      // {
      //     stop--;
      // }
      var start = this.indexFromOffset(viewport_start);
      var stop = this.indexFromOffset(viewport_stop);
      //expand viewport for better experience
      start = Math.max(start - this.col, 0);
      stop = Math.min(this.packItems.length - 1, stop + this.col);
      if (start != this.start_index) {
        this.start_index = start;
        this.renderDirty = true;
      }
      if (stop != this.stop_index) {
        this.stop_index = stop;
        this.renderDirty = true;
      }
    }
    else {
      var posx = this.content.x;
      // cc.log("onscrolling, content posx=", posx);
      if (posx > 0) {
        posx = 0;
      }
      else if (posx < this.width - this.content_width) {
        posx = this.width - this.content_width;
      }
      var viewport_start = -posx;
      var viewport_stop = viewport_start + this.width;
      // while(this.packItems[start].x + this.item_width < viewport_start)
      // {
      //     start++;
      // }
      // while(this.packItems[stop].x > viewport_stop)
      // {
      //     stop--;
      // }
      var start = this.indexFromOffset(viewport_start);
      var stop = this.indexFromOffset(viewport_stop);
      //expand viewport for better experience
      start = Math.max(start - this.row, 0);
      stop = Math.min(this.packItems.length - 1, stop + this.row);
      if (start != this.start_index) {
        this.start_index = start;
        this.renderDirty = true;
      }
      if (stop != this.stop_index) {
        this.stop_index = stop;
        this.renderDirty = true;
      }
    }
  };
  ListView.prototype.onUpdate = function () {
    if (this.renderDirty && cc.isValid(this.scrollview.node)) {
      // cc.log("listView, render_from:", this.start_index, this.stop_index);
      this.render_items();
      
      this.renderDirty = false;
    }
  };
  //不支持多行多列
  ListView.prototype.indexFromOffset = function (offset) {
    var low = 0;
    var high = 0;
    var max_idx = 0;
    high = max_idx = this.packItems.length - 1;
    if (this.dir == ListViewDir.Vertical) {
      while (high >= low) {
        var index = low + Math.floor((high - low) / 2);
        var itemStart = this.packItems[index].y;
        var itemStop = index < max_idx ? this.packItems[index + 1].y : -this.content_height;
        if (offset <= itemStart && offset >= itemStop) {
          return index;
        }
        else if (offset > itemStart) {
          high = index - 1;
        }
        else {
          low = index + 1;
        }
      }
    }
    else {
      while (high >= low) {
        var index = low + Math.floor((high - low) / 2);
        var itemStart = this.packItems[index].x;
        var itemStop = index < max_idx ? this.packItems[index + 1].x : this.content_width;
        if (offset >= itemStart && offset <= itemStop) {
          return index;
        }
        else if (offset > itemStart) {
          low = index + 1;
        }
        else {
          high = index - 1;
        }
      }
    }
    return -1;
  };
  ListView.prototype.select_data = function (data) {
    var idx = this.packItems.findIndex(function (item) { return item.data == data; });
    if (idx != -1) {
      this.select_item(idx);
    }
  };
  ListView.prototype.select_item = function (index) {
    if (index == this._selected_index) {
      return;
    }
    if (this._selected_index != -1) {
      this.inner_select_item(this._selected_index, false);
    }
    this._selected_index = index;
    this.inner_select_item(index, true);
  };
  ListView.prototype.inner_select_item = function (index, is_select) {
    var packItem = this.packItems[index];
    if (!packItem) {
      cc.warn("inner_select_item index is out of range{", 0, this.packItems.length - 1, "}", index);
      return;
    }
    packItem.is_select = is_select;
    if (packItem.item) {
      packItem.item.onSetSelect(is_select, index);
      if (is_select) {
        packItem.item.onSelected(packItem.data, index);
      }
    }
  };
  ListView.prototype.spawn_item = function (index) {
    var item = this.item_pool.pop();
    if (!item) {
      item = cc.instantiate(this.item_tpl).getComponent(this.item_class);
      item.node.active = true;
      //仅仅改变父节点锚点，子元素位置不会随之变化
      // item.node.setAnchorPoint(this.item_anchorX, this.item_anchorY);
      layout_utils_1.LayoutUtil.set_pivot_smart(item.node, this.item_anchorX, this.item_anchorY);
      item.onInit();
      // cc.log("spawn_item", index);
    }
    item.node.parent = this.content;
    return item;
  };
  ListView.prototype.recycle_item = function (packItem) {
    var item = packItem.item;
    if (item && cc.isValid(item.node)) {
      item.onRecycle(packItem.data);
      item.node.removeFromParent();
      this.item_pool.push(item);
      packItem.item = null;
    }
  };
  ListView.prototype.clear_items = function () {
    var _this = this;
    if (this.packItems) {
      this.packItems.forEach(function (packItem) {
        _this.recycle_item(packItem);
      });
    }
  };
  ListView.prototype.render_items = function () {
    var packItem;
    for (var i = 0; i < this.start_index; i++) {
      packItem = this.packItems[i];
      if (packItem.item) {
        // cc.log("recycle_item", i);
        this.recycle_item(packItem);
      }
    }
    for (var i = this.packItems.length - 1; i > this.stop_index; i--) {
      packItem = this.packItems[i];
      if (packItem.item) {
        // cc.log("recycle_item", i);
        this.recycle_item(packItem);
      }
    }
    for (var i = this.start_index; i <= this.stop_index; i++) {
      packItem = this.packItems[i];
      if (!packItem.item) {
        // cc.log("render_item", i);
        packItem.item = this.spawn_item(i);
        packItem.item.onSetData(packItem.data, i);
        packItem.item.onSetSelect(packItem.is_select, i);
        if (packItem.is_select) {
          packItem.item.onSelected(packItem.data, i);
        }
      }
      //列表添加与删除时item位置会变化，因此每次render_items都要执行
      // packItem.item.node.setPosition(packItem.x, packItem.y);
      packItem.item.setLeftTop(packItem.x, packItem.y);
    }
  };
  ListView.prototype.pack_item = function (data) {
    return { x: 0, y: 0, data: data, item: null, is_select: false };
  };
  ListView.prototype.layout_items = function (start) {
    // cc.log("layout_items, start=", start);
    for (var index = start, stop = this.packItems.length; index < stop; index++) {
      var packItem = this.packItems[index];
      if (this.dir == ListViewDir.Vertical) {
        _a = layout_utils_1.LayoutUtil.vertical_layout(index, this.item_width, this.item_height, this.col, this.gap_x, this.gap_y, this.padding_left, this.padding_top), packItem.x = _a[0], packItem.y = _a[1];
      }
      else {
        _b = layout_utils_1.LayoutUtil.horizontal_layout(index, this.item_width, this.item_height, this.row, this.gap_x, this.gap_y, this.padding_left, this.padding_top), packItem.x = _b[0], packItem.y = _b[1];
      }
    }
    var _a, _b;
  };
  ListView.prototype.adjust_content = function () {
    if (this.packItems.length <= 0) {
      this.set_content_size(0, 0);
      return;
    }
    var last_packItem = this.packItems[this.packItems.length - 1];
    if (this.dir == ListViewDir.Vertical) {
      var height = Math.max(this.height, this.item_height - last_packItem.y + this.padding_bottom);
      this.set_content_size(this.content_width, height);
    }
    else {
      var width = Math.max(this.width, last_packItem.x + this.item_width + this.padding_right);
      this.set_content_size(width, this.content_height);
    }
  };
  ListView.prototype.set_content_size = function (width, height) {
    if (this.content_width != width) {
      this.content_width = width;
      this.content.width = width;
    }
    if (this.content_height != height) {
      this.content_height = height;
      this.content.height = height;
    }
    // cc.log("ListView, set_content_size", width, height, this.content.width, this.content.height);
  };
  ListView.prototype.set_viewport = function (width, height) {
    if (width == null) {
      width = this.width;
    }
    else if (width > this.content_width) {
      width = this.content_width;
    }
    if (height == null) {
      height = this.height;
    }
    else if (height > this.content_height) {
      height = this.content_height;
    }
    //设置遮罩区域尺寸
    this.width = width;
    this.height = height;
    this.mask.node.setContentSize(width, height);
    this.scrollview.node.setContentSize(width, height);
    this.render();
  };
  ListView.prototype.renderAll = function (value) {
    var width;
    var height;
    if (value) {
      width = this.content_width;
      height = this.content_height;
    }
    else {
      width = this.original_width;
      height = this.original_height;
    }
    this.set_viewport(width, height);
  };
  ListView.prototype.set_data = function (datas) {
    var _this = this;
    if (this.packItems) {
      this.clear_items();
      this.packItems.length = 0;
    }
    else {
      this.packItems = [];
    }
    datas.forEach(function (data) {
      var packItem = _this.pack_item(data);
      _this.packItems.push(packItem);
    });
    this.layout_items(0);
    this.adjust_content();
    this.start_index = -1;
    this.stop_index = -1;
    if (this.dir == ListViewDir.Vertical) {
      this.content.y = 0;
    }
    else {
      this.content.x = 0;
    }
    if (this.packItems.length > 0) {
      this.render();
    }
  };
  ListView.prototype.insert_data = function (index) {
    var _this = this;
    var datas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      datas[_i - 1] = arguments[_i];
    }
    if (datas.length == 0) {
      cc.log("nothing to insert");
      return;
    }
    if (!this.packItems) {
      this.packItems = [];
    }
    if (index < 0 || index > this.packItems.length) {
      cc.warn("insert_data, invalid index", index);
      return;
    }
    var is_append = index == this.packItems.length;
    var packItems = [];
    datas.forEach(function (data) {
      var packItem = _this.pack_item(data);
      packItems.push(packItem);
    });
    (_a = this.packItems).splice.apply(_a, [index, 0].concat(packItems));
    this.layout_items(index);
    this.adjust_content();
    this.start_index = -1;
    this.stop_index = -1;
    if (this.auto_scrolling && is_append) {
      this.scroll_to_end();
    }
    this.render();
    var _a;
  };
  ListView.prototype.remove_data = function (index, count) {
    var _this = this;
    if (count === void 0) { count = 1; }
    if (!this.packItems) {
      cc.log("call set_data before call this method");
      return;
    }
    if (index < 0 || index >= this.packItems.length) {
      cc.warn("remove_data, invalid index", index);
      return;
    }
    if (count < 1) {
      cc.log("nothing to remove");
      return;
    }
    var old_length = this.packItems.length;
    var del_items = this.packItems.splice(index, count);
    //回收node
    del_items.forEach(function (packItem) {
      _this.recycle_item(packItem);
    });
    //重新排序index后面的
    if (index + count < old_length) {
      this.layout_items(index);
    }
    this.adjust_content();
    if (this.packItems.length > 0) {
      this.start_index = -1;
      this.stop_index = -1;
      this.render();
    }
  };
  ListView.prototype.append_data = function () {
    var datas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      datas[_i] = arguments[_i];
    }
    if (!this.packItems) {
      this.packItems = [];
    }
    this.insert_data.apply(this, [this.packItems.length].concat(datas));
  };
  ListView.prototype.scroll_to = function (index, time) {
    if (time === void 0) { time = 0; }
    if (!this.packItems) {
      return;
    }
    var packItem = this.packItems[index];
    if (!packItem) {
      cc.log("scroll_to, index out of range");
      return;
    }
    if (this.dir == ListViewDir.Vertical) {
      var min_y = this.height - this.content_height;
      if (min_y >= 0) {
        cc.log("no need to scroll");
        return;
      }
      var y = packItem.y;
      if (y < min_y) {
        y = min_y;
        cc.log("content reach bottom");
      }
      var x = this.content.x;
      if (time == 0) {
        this.scrollview.setContentPosition(cc.v2(x, -y));
      }
      else {
        this.scrollview.scrollToOffset(cc.v2(x, -y), time);
      }
      this.render();
    }
    else {
      var max_x = this.content_width - this.width;
      if (max_x <= 0) {
        cc.log("no need to scroll");
        return;
      }
      var x = packItem.x;
      if (x > max_x) {
        x = max_x;
        cc.log("content reach right");
      }
      var y = this.content.y;
      if (time == 0) {
        this.scrollview.setContentPosition(cc.v2(-x, y));
      }
      else {
        this.scrollview.scrollToOffset(cc.v2(-x, y), time);
      }
      this.render();
    }
  };
  ListView.prototype.get_scroll_offset = function () {
    var offset = this.scrollview.getScrollOffset();
    if (this.dir == ListViewDir.Vertical) {
      return offset.y;
    }
    else {
      return offset.x;
    }
  };
  ListView.prototype.scroll_to_offset = function (value, time) {
    if (time === void 0) { time = 0; }
    if (this.dir == ListViewDir.Vertical) {
      var x = this.content.x;
      if (time == 0) {
        this.scrollview.setContentPosition(cc.v2(x, value));
      }
      else {
        this.scrollview.scrollToOffset(cc.v2(x, value), time);
      }
      this.render();
    }
    else {
      var y = this.content.y;
      if (time == 0) {
        this.scrollview.setContentPosition(cc.v2(value, y));
      }
      else {
        this.scrollview.scrollToOffset(cc.v2(value, y), time);
      }
      this.render();
    }
  };
  ListView.prototype.scroll_to_end = function () {
    if (this.dir == ListViewDir.Vertical) {
      this.scrollview.scrollToBottom();
    }
    else {
      this.scrollview.scrollToRight();
    }
  };
  ListView.prototype.refresh_item = function (index, data) {
    var packItem = this.get_pack_item(index);
    if (!packItem) {
      return;
    }
    var oldData = packItem.data;
    packItem.data = data;
    if (packItem.item) {
      packItem.item.onRecycle(oldData);
      packItem.item.onSetData(data, index);
    }
  };
  ListView.prototype.reload_item = function (index) {
    var packItem = this.get_pack_item(index);
    if (packItem && packItem.item) {
      packItem.item.onRecycle(packItem.data);
      packItem.item.onSetData(packItem.data, index);
    }
  };
  ListView.prototype.get_pack_item = function (index) {
    if (!this.packItems) {
      cc.log("call set_data before call this method");
      return null;
    }
    if (index < 0 || index >= this.packItems.length) {
      cc.warn("get_pack_item, invalid index", index);
      return null;
    }
    return this.packItems[index];
  };
  ListView.prototype.get_item = function (index) {
    var packItem = this.get_pack_item(index);
    return packItem ? packItem.item : null;
  };
  ListView.prototype.get_data = function (index) {
    var packItem = this.get_pack_item(index);
    return packItem ? packItem.data : null;
  };
  ListView.prototype.find_item = function (predicate) {
    if (!this.packItems || !this.packItems.length) {
      cc.log("call set_data before call this method");
      return null;
    }
    for (var i = this.start_index; i <= this.stop_index; i++) {
      var packItem = this.packItems[i];
      if (predicate(packItem.data)) {
        return packItem.item;
      }
    }
    return null;
  };
  ListView.prototype.find_index = function (predicate) {
    if (!this.packItems || !this.packItems.length) {
      cc.log("call set_data before call this method");
      return -1;
    }
    return this.packItems.findIndex(function (packItem) {
      return predicate(packItem.data);
    });
  };
  Object.defineProperty(ListView.prototype, "renderedItems", {
    get: function () {
      var items = [];
      for (var i = this.start_index; i <= this.stop_index; i++) {
        var packItem = this.packItems[i];
        if (packItem && packItem.item) {
          items.push(packItem.item);
        }
      }
      return items;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ListView.prototype, "length", {
    get: function () {
      if (!this.packItems) {
        cc.log("call set_data before call this method");
        return 0;
      }
      return this.packItems.length;
    },
    enumerable: true,
    configurable: true
  });
  ListView.prototype.destroy = function () {
    this.clear_items();
    this.item_pool.forEach(function (item) {
      item.onUnInit();
      item.node.destroy();
    });
    this.item_pool = null;
    this.packItems = null;
    this.renderDirty = null;
    if (cc.isValid(this.scrollview.node)) {
      this.scrollview.node.off("scrolling", this.on_scrolling, this);
      this.scrollview.node.off("scroll-to-bottom", this.on_scroll_to_end, this);
      this.scrollview.node.off("scroll-to-right", this.on_scroll_to_end, this);
      this.scrollview.node.off(cc.Node.EventType.TOUCH_START, this.on_scroll_touch_start, this);
      this.scrollview.node.off(cc.Node.EventType.TOUCH_END, this.on_scroll_touch_end, this);
      this.scrollview.node.off(cc.Node.EventType.TOUCH_CANCEL, this.on_scroll_touch_cancel, this);
    }
  };
  Object.defineProperty(ListView.prototype, "selected_index", {
    get: function () {
      return this._selected_index;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ListView.prototype, "selected_data", {
    get: function () {
      var packItem = this.packItems[this._selected_index];
      if (packItem) {
        return packItem.data;
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ListView.prototype, "scrollable", {
    set: function (value) {
      if (this.dir == ListViewDir.Vertical) {
        this.scrollview.vertical = value;
      }
      else {
        this.scrollview.horizontal = value;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ListView.prototype, "startIndex", {
    get: function () {
      return this.start_index;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ListView.prototype, "stopIndex", {
    get: function () {
      return this.stop_index;
    },
    enumerable: true,
    configurable: true
  });
  return ListView;
}());
exports.ListView = ListView;
var ListViewDir;
(function (ListViewDir) {
  ListViewDir[ListViewDir["Vertical"] = 1] = "Vertical";
  ListViewDir[ListViewDir["Horizontal"] = 2] = "Horizontal";
})(ListViewDir = exports.ListViewDir || (exports.ListViewDir = {}));