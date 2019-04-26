# 模拟球弹跳

* 定义两个变量，一个speed，一个accelerate。
* 设置 ball 与 ground 为BoxCollider。检测下落碰撞，设置speed为defaultSpeed
* 在update中设置代码
~~~
   /**
     * 球运动计算
     */
    drop() {
        this.node.y += this.speed;
        this.speed += this.accelerate;
    }
~~~
