#box2d物理如何效果

### ApplyForce
body的三种作用力效果–ApplyForce, ApplyImpulse

this.rigibody.applyForceToCenter(cc.v2(0, 100000), true);

### ApplyImpulse

this.rigibody.applyLinearImpulse(cc.v2(0, 4000), worldPos, true);

