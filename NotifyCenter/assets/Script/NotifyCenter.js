cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad() {

    },

    /**
     * 输入数组
     * @param {*} infos 
     */
    init(infos) {
        delete this.infos;
        this.infos = infos;
        this.next(this.infos);
    },

    /**
     * 开始执行
     * @param {*} infos 
     */
    next(infos) {
        let instance = infos.shift();
        console.log('infos=', this.infos, instance);
        instance && this.createInstantiate(instance);
    },

    /**
     * 创建实例
     * @param {*} data 
     */
    createInstantiate(data) {
        let self = data.self || this;
        let node = cc.instantiate(data.prefab);
        this.node.addChild(node);
        try {
            data.before && data.before.bind(self)();
        } catch (error) {
            console.log('before err, data=', data);
        }
        node.script = node.getComponent(data.componentName);
        node.script.init && node.script.init(data.args, (event) => {
            try {
                data.after && data.after.bind(self)();
            } catch (error) {
                console.log('alert err=', error, 'data=', data);
            }
            this.next(this.infos);
        });
    },

    // update (dt) {},
});