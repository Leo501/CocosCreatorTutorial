var LayoutUtil = /** @class */ (function () {
  function LayoutUtil() {
  }
  LayoutUtil.vertical_layout = function (index, item_width, item_height, column, gap_x, gap_y, padding_left, padding_top) {
      if (column === void 0) { column = 1; }
      if (gap_x === void 0) { gap_x = 0; }
      if (gap_y === void 0) { gap_y = 0; }
      if (padding_left === void 0) { padding_left = 0; }
      if (padding_top === void 0) { padding_top = 0; }
      var x = (index % column) * (item_width + gap_x) + padding_left;
      var y = -Math.floor(index / column) * (item_height + gap_y) - padding_top;
      return [x, y];
  };
  LayoutUtil.horizontal_layout = function (index, item_width, item_height, row, gap_x, gap_y, padding_left, padding_top) {
      if (row === void 0) { row = 1; }
      if (gap_x === void 0) { gap_x = 0; }
      if (gap_y === void 0) { gap_y = 0; }
      if (padding_left === void 0) { padding_left = 0; }
      if (padding_top === void 0) { padding_top = 0; }
      var x = Math.floor(index / row) * (item_width + gap_x) + padding_left;
      var y = -(index % row) * (item_height + gap_y) - padding_top;
      return [x, y];
  };
  LayoutUtil.set_pivot_smart = function (node, ax, ay, recursive) {
      if (recursive === void 0) { recursive = false; }
      var deltaAx = ax - node.anchorX;
      var deltaAy = ay - node.anchorY;
      node.anchorX = ax;
      node.anchorY = ay;
      //改变节点锚点，位置值相对锚点不变。需要调整节点至新位置才能保持一致视觉效果
      var deltaX = deltaAx * node.width;
      var deltaY = deltaAy * node.height;
      node.x += deltaX;
      node.y += deltaY;
      node.children.forEach(function (child) {
          //父节点锚点改变，子节点相对父节点位置值不变，需要调整子节点至新位置才能保持一致视觉效果
          child.x -= deltaX;
          child.y -= deltaY;
          if (recursive) {
              LayoutUtil.set_pivot_smart(child, ax, ay);
          }
      });
  };
  return LayoutUtil;
}());
exports.LayoutUtil = LayoutUtil;