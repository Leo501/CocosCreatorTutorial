import {AbsAdapter} from "./ListView";

const ListItem = require('./ListItem');

cc.Class({
    extends: AbsAdapter,
    updateView(item, posIndex) {
        let comp = item.getComponent(ListItem);
        if (comp) {
            comp.setData(this.getItem(posIndex));
        }
    }
})