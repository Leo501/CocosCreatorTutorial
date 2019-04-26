# TouchPointDemo
> 使用collision来实现触摸系统,
### 环境
* creator 2.0.6
### 介绍
例子使用碰撞系统 
* 设置碰撞分组 [官方教程](https://docs.cocos.com/creator/manual/zh/physics/collision/collision-group.html)
![image.png](https://upload-images.jianshu.io/upload_images/2315803-2ac2b9ae0bb392f2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

* 设置碰撞大小 [官方教程](https://docs.cocos.com/creator/manual/zh/physics/collision/edit-collider-component.html)
![image.png](https://upload-images.jianshu.io/upload_images/2315803-aea4315bd9a4f9ec.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

* 脚本设置碰撞事件 [官方教程](https://docs.cocos.com/creator/manual/zh/physics/collision/collision-manager.html)
~~~
    /**
     * 当碰撞产生的时候调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionEnter(other: cc.BoxCollider, self: cc.BoxCollider) {
        console.log('on collision enter');
        console.log(other, self);
        let node = self.node;
        this.isSelect = !this.isSelect;
        if (this.isSelect) {
            node.color = new cc.Color().fromHEX('#D8D8D8');
        } else {
            node.color = new cc.Color().fromHEX('#FFFFFF');
        }
    }

    /**
     * 当碰撞产生后，碰撞结束前的情况下，每次计算碰撞结果后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionStay(other: cc.BoxCollider, self: cc.BoxCollider) {
        console.log('on collision stay');
    }

    /**
     * 当碰撞结束后调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionExit(other: cc.BoxCollider, self: cc.BoxCollider) {
        console.log('on collision exit');
    }
~~~
* 对node选择碰撞分组 
![](https://upload-images.jianshu.io/upload_images/2315803-80de7cbc1a9f9930.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 最后 
介绍完了，放出一个例子。给大家参考~