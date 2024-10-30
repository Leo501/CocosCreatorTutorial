(function() {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }
        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function(r) {
          var n = e[i][1][r];
          return o(n || r);
        }, p, p.exports, r, e, n, t);
      }
      return n[i].exports;
    }
    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
    return o;
  }
  return r;
})()({
  1: [ function(require, module, exports) {
    "use strict";
    exports.__esModule = true;
    exports.CannonRigidBody = void 0;
    var _cannon = _interopRequireDefault(require("../../../../../external/cannon/cannon"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var v3_cannon0 = new _cannon["default"].Vec3();
    var v3_cannon1 = new _cannon["default"].Vec3();
    var Vec3 = cc.Vec3;
    var CannonRigidBody = function() {
      function CannonRigidBody() {
        this._rigidBody = void 0;
        this._sharedBody = void 0;
        this._isEnabled = false;
      }
      var _proto = CannonRigidBody.prototype;
      _proto.__preload = function __preload(com) {
        this._rigidBody = com;
        this._sharedBody = cc.director.getPhysics3DManager().physicsWorld.getSharedBody(this._rigidBody.node);
        this._sharedBody.reference = true;
        this._sharedBody.wrappedBody = this;
      };
      _proto.onLoad = function onLoad() {};
      _proto.onEnable = function onEnable() {
        this._isEnabled = true;
        this.mass = this._rigidBody.mass;
        this.allowSleep = this._rigidBody.allowSleep;
        this.linearDamping = this._rigidBody.linearDamping;
        this.angularDamping = this._rigidBody.angularDamping;
        this.useGravity = this._rigidBody.useGravity;
        this.isKinematic = this._rigidBody.isKinematic;
        this.fixedRotation = this._rigidBody.fixedRotation;
        this.linearFactor = this._rigidBody.linearFactor;
        this.angularFactor = this._rigidBody.angularFactor;
        this._sharedBody.enabled = true;
      };
      _proto.onDisable = function onDisable() {
        this._isEnabled = false;
        this._sharedBody.enabled = false;
      };
      _proto.onDestroy = function onDestroy() {
        this._sharedBody.reference = false;
        this._rigidBody = null;
        this._sharedBody = null;
      };
      _proto.wakeUp = function wakeUp() {
        return this._sharedBody.body.wakeUp();
      };
      _proto.sleep = function sleep() {
        return this._sharedBody.body.sleep();
      };
      _proto.getLinearVelocity = function getLinearVelocity(out) {
        Vec3.copy(out, this._sharedBody.body.velocity);
        return out;
      };
      _proto.setLinearVelocity = function setLinearVelocity(value) {
        var body = this._sharedBody.body;
        body.isSleeping() && body.wakeUp();
        Vec3.copy(body.velocity, value);
      };
      _proto.getAngularVelocity = function getAngularVelocity(out) {
        Vec3.copy(out, this._sharedBody.body.angularVelocity);
        return out;
      };
      _proto.setAngularVelocity = function setAngularVelocity(value) {
        var body = this._sharedBody.body;
        body.isSleeping() && body.wakeUp();
        Vec3.copy(body.angularVelocity, value);
      };
      _proto.applyForce = function applyForce(force, worldPoint) {
        null == worldPoint && (worldPoint = Vec3.ZERO);
        var body = this._sharedBody.body;
        body.isSleeping() && body.wakeUp();
        body.applyForce(Vec3.copy(v3_cannon0, force), Vec3.copy(v3_cannon1, worldPoint));
      };
      _proto.applyImpulse = function applyImpulse(impulse, worldPoint) {
        null == worldPoint && (worldPoint = Vec3.ZERO);
        var body = this._sharedBody.body;
        body.isSleeping() && body.wakeUp();
        body.applyImpulse(Vec3.copy(v3_cannon0, impulse), Vec3.copy(v3_cannon1, worldPoint));
      };
      _proto.applyLocalForce = function applyLocalForce(force, localPoint) {
        null == localPoint && (localPoint = Vec3.ZERO);
        var body = this._sharedBody.body;
        body.isSleeping() && body.wakeUp();
        body.applyLocalForce(Vec3.copy(v3_cannon0, force), Vec3.copy(v3_cannon1, localPoint));
      };
      _proto.applyLocalImpulse = function applyLocalImpulse(impulse, localPoint) {
        null == localPoint && (localPoint = Vec3.ZERO);
        var body = this._sharedBody.body;
        body.isSleeping() && body.wakeUp();
        body.applyLocalImpulse(Vec3.copy(v3_cannon0, impulse), Vec3.copy(v3_cannon1, localPoint));
      };
      _proto.applyTorque = function applyTorque(torque) {
        var body = this._sharedBody.body;
        body.isSleeping() && body.wakeUp();
        body.torque.x += torque.x;
        body.torque.y += torque.y;
        body.torque.z += torque.z;
      };
      _proto.applyLocalTorque = function applyLocalTorque(torque) {
        var body = this._sharedBody.body;
        body.isSleeping() && body.wakeUp();
        Vec3.copy(v3_cannon0, torque);
        body.vectorToWorldFrame(v3_cannon0, v3_cannon0);
        body.torque.x += v3_cannon0.x;
        body.torque.y += v3_cannon0.y;
        body.torque.z += v3_cannon0.z;
      };
      _createClass(CannonRigidBody, [ {
        key: "isAwake",
        get: function get() {
          return this._sharedBody.body.isAwake();
        }
      }, {
        key: "isSleepy",
        get: function get() {
          return this._sharedBody.body.isSleepy();
        }
      }, {
        key: "isSleeping",
        get: function get() {
          return this._sharedBody.body.isSleeping();
        }
      }, {
        key: "allowSleep",
        set: function set(v) {
          var body = this._sharedBody.body;
          body.isSleeping() && body.wakeUp();
          body.allowSleep = v;
        }
      }, {
        key: "mass",
        set: function set(value) {
          var body = this._sharedBody.body;
          body.mass = value;
          0 == body.mass ? body.type = _cannon["default"].Body.STATIC : body.type = this._rigidBody.isKinematic ? _cannon["default"].Body.KINEMATIC : _cannon["default"].Body.DYNAMIC;
          body.updateMassProperties();
          body.isSleeping() && body.wakeUp();
        }
      }, {
        key: "isKinematic",
        set: function set(value) {
          var body = this._sharedBody.body;
          0 == body.mass ? body.type = _cannon["default"].Body.STATIC : body.type = value ? _cannon["default"].Body.KINEMATIC : _cannon["default"].Body.DYNAMIC;
        }
      }, {
        key: "fixedRotation",
        set: function set(value) {
          var body = this._sharedBody.body;
          body.isSleeping() && body.wakeUp();
          body.fixedRotation = value;
          body.updateMassProperties();
        }
      }, {
        key: "linearDamping",
        set: function set(value) {
          this._sharedBody.body.linearDamping = value;
        }
      }, {
        key: "angularDamping",
        set: function set(value) {
          this._sharedBody.body.angularDamping = value;
        }
      }, {
        key: "useGravity",
        set: function set(value) {
          var body = this._sharedBody.body;
          body.isSleeping() && body.wakeUp();
          body.useGravity = value;
        }
      }, {
        key: "linearFactor",
        set: function set(value) {
          var body = this._sharedBody.body;
          body.isSleeping() && body.wakeUp();
          Vec3.copy(body.linearFactor, value);
        }
      }, {
        key: "angularFactor",
        set: function set(value) {
          var body = this._sharedBody.body;
          body.isSleeping() && body.wakeUp();
          Vec3.copy(body.angularFactor, value);
        }
      }, {
        key: "rigidBody",
        get: function get() {
          return this._rigidBody;
        }
      }, {
        key: "sharedBody",
        get: function get() {
          return this._sharedBody;
        }
      }, {
        key: "isEnabled",
        get: function get() {
          return this._isEnabled;
        }
      } ]);
      return CannonRigidBody;
    }();
    exports.CannonRigidBody = CannonRigidBody;
  }, {
    "../../../../../external/cannon/cannon": 24
  } ],
  2: [ function(require, module, exports) {
    "use strict";
    exports.__esModule = true;
    exports.CannonSharedBody = void 0;
    var _cannon = _interopRequireDefault(require("../../../../../external/cannon/cannon"));
    var _physicsEnum = require("../framework/physics-enum");
    var _util = require("../framework/util");
    var _cannonUtil = require("./cannon-util");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var LocalDirtyFlag = cc.Node._LocalDirtyFlag;
    var PHYSICS_SCALE = LocalDirtyFlag.PHYSICS_SCALE;
    var Quat = cc.Quat;
    var Vec3 = cc.Vec3;
    var fastRemoveAt = cc.js.array.fastRemoveAt;
    var v3_0 = new Vec3();
    var quat_0 = new Quat();
    var contactsPool = [];
    var CollisionEventObject = {
      type: "collision-enter",
      selfCollider: null,
      otherCollider: null,
      contacts: []
    };
    var CannonSharedBody = function() {
      CannonSharedBody.getSharedBody = function getSharedBody(node, wrappedWorld) {
        var key = node._id;
        if (CannonSharedBody.sharedBodiesMap.has(key)) return CannonSharedBody.sharedBodiesMap.get(key);
        var newSB = new CannonSharedBody(node, wrappedWorld);
        CannonSharedBody.sharedBodiesMap.set(node._id, newSB);
        return newSB;
      };
      function CannonSharedBody(node, wrappedWorld) {
        this.node = void 0;
        this.wrappedWorld = void 0;
        this.body = new _cannon["default"].Body();
        this.shapes = [];
        this.wrappedBody = null;
        this.index = -1;
        this.ref = 0;
        this.onCollidedListener = this.onCollided.bind(this);
        this.wrappedWorld = wrappedWorld;
        this.node = node;
        this.body.material = this.wrappedWorld.world.defaultMaterial;
        this.body.addEventListener("cc-collide", this.onCollidedListener);
        this._updateGroup();
        this.node.on(cc.Node.EventType.GROUP_CHANGED, this._updateGroup, this);
      }
      var _proto = CannonSharedBody.prototype;
      _proto._updateGroup = function _updateGroup() {
        (0, _cannonUtil.groupIndexToBitMask)(this.node.groupIndex, this.body);
      };
      _proto.addShape = function addShape(v) {
        var index = this.shapes.indexOf(v);
        if (index < 0) {
          var _index = this.body.shapes.length;
          this.body.addShape(v.shape);
          this.shapes.push(v);
          v.setIndex(_index);
          var offset = this.body.shapeOffsets[_index];
          var orient = this.body.shapeOrientations[_index];
          v.setOffsetAndOrient(offset, orient);
        }
      };
      _proto.removeShape = function removeShape(v) {
        var index = this.shapes.indexOf(v);
        if (index >= 0) {
          fastRemoveAt(this.shapes, index);
          this.body.removeShape(v.shape);
          v.setIndex(-1);
        }
      };
      _proto.syncSceneToPhysics = function syncSceneToPhysics(force) {
        void 0 === force && (force = false);
        var node = this.node;
        var needUpdateTransform = (0, _util.worldDirty)(node);
        if (!force && !needUpdateTransform) return;
        this.body.aabbNeedsUpdate = true;
        node.getWorldPosition(v3_0);
        node.getWorldRotation(quat_0);
        Vec3.copy(this.body.position, v3_0);
        Quat.copy(this.body.quaternion, quat_0);
        if (node._localMatDirty & PHYSICS_SCALE) {
          var wscale = node.__wscale;
          for (var i = 0; i < this.shapes.length; i++) this.shapes[i].setScale(wscale);
          (0, _cannonUtil.commitShapeUpdates)(this.body);
        }
        this.body.isSleeping() && this.body.wakeUp();
      };
      _proto.syncPhysicsToScene = function syncPhysicsToScene() {
        if (this.body.type != _physicsEnum.ERigidBodyType.STATIC && !this.body.isSleeping()) {
          Vec3.copy(v3_0, this.body.position);
          Quat.copy(quat_0, this.body.quaternion);
          this.node.setWorldPosition(v3_0);
          this.node.setWorldRotation(quat_0);
        }
      };
      _proto.destroy = function destroy() {
        this.body.removeEventListener("cc-collide", this.onCollidedListener);
        this.node.off(cc.Node.EventType.GROUP_CHANGED, this._updateGroup, this);
        CannonSharedBody.sharedBodiesMap["delete"](this.node._id);
        delete _cannon["default"].World["idToBodyMap"][this.body.id];
        this.node = null;
        this.wrappedWorld = null;
        this.body = null;
        this.shapes = null;
        this.onCollidedListener = null;
      };
      _proto.onCollided = function onCollided(event) {
        CollisionEventObject.type = event.event;
        var self = (0, _util.getWrap)(event.selfShape);
        var other = (0, _util.getWrap)(event.otherShape);
        if (self) {
          CollisionEventObject.selfCollider = self.collider;
          CollisionEventObject.otherCollider = other ? other.collider : null;
          var i = 0;
          for (i = CollisionEventObject.contacts.length; i--; ) contactsPool.push(CollisionEventObject.contacts.pop());
          for (i = 0; i < event.contacts.length; i++) {
            var cq = event.contacts[i];
            if (contactsPool.length > 0) {
              var c = contactsPool.pop();
              Vec3.copy(c.contactA, cq.ri);
              Vec3.copy(c.contactB, cq.rj);
              Vec3.copy(c.normal, cq.ni);
              CollisionEventObject.contacts.push(c);
            } else {
              var _c = {
                contactA: Vec3.copy(new Vec3(), cq.ri),
                contactB: Vec3.copy(new Vec3(), cq.rj),
                normal: Vec3.copy(new Vec3(), cq.ni)
              };
              CollisionEventObject.contacts.push(_c);
            }
          }
          for (i = 0; i < this.shapes.length; i++) {
            var shape = this.shapes[i];
            CollisionEventObject.type = _cannonUtil.deprecatedEventMap[CollisionEventObject.type];
            shape.collider.emit(CollisionEventObject.type, CollisionEventObject);
            CollisionEventObject.type = event.event;
            shape.collider.emit(CollisionEventObject.type, CollisionEventObject);
          }
        }
      };
      _createClass(CannonSharedBody, [ {
        key: "enabled",
        set: function set(v) {
          if (v) {
            if (this.index < 0) {
              this.index = this.wrappedWorld.bodies.length;
              this.wrappedWorld.addSharedBody(this);
              var node = this.node;
              this.body.aabbNeedsUpdate = true;
              node.getWorldPosition(v3_0);
              node.getWorldRotation(quat_0);
              var pos = this.body.position;
              pos.x = parseFloat(v3_0.x.toFixed(3));
              pos.y = parseFloat(v3_0.y.toFixed(3));
              pos.z = parseFloat(v3_0.z.toFixed(3));
              var rot = this.body.quaternion;
              rot.x = parseFloat(quat_0.x.toFixed(12));
              rot.y = parseFloat(quat_0.y.toFixed(12));
              rot.z = parseFloat(quat_0.z.toFixed(12));
              rot.w = parseFloat(quat_0.w.toFixed(12));
              if (node._localMatDirty & PHYSICS_SCALE) {
                var wscale = node.__wscale;
                for (var i = 0; i < this.shapes.length; i++) this.shapes[i].setScale(wscale);
                (0, _cannonUtil.commitShapeUpdates)(this.body);
              }
              this.body.isSleeping() && this.body.wakeUp();
            }
          } else if (this.index >= 0) {
            var isRemove = 0 == this.shapes.length && null == this.wrappedBody || 0 == this.shapes.length && null != this.wrappedBody && !this.wrappedBody.rigidBody.enabledInHierarchy || 0 == this.shapes.length && null != this.wrappedBody && !this.wrappedBody.isEnabled;
            if (isRemove) {
              this.body.sleep();
              this.index = -1;
              this.wrappedWorld.removeSharedBody(this);
            }
          }
        }
      }, {
        key: "reference",
        set: function set(v) {
          v ? this.ref++ : this.ref--;
          0 == this.ref && this.destroy();
        }
      } ]);
      return CannonSharedBody;
    }();
    exports.CannonSharedBody = CannonSharedBody;
    CannonSharedBody.sharedBodiesMap = new Map();
  }, {
    "../../../../../external/cannon/cannon": 24,
    "../framework/physics-enum": 19,
    "../framework/util": 23,
    "./cannon-util": 3
  } ],
  3: [ function(require, module, exports) {
    "use strict";
    exports.__esModule = true;
    exports.commitShapeUpdates = commitShapeUpdates;
    exports.deprecatedEventMap = void 0;
    exports.fillRaycastResult = fillRaycastResult;
    exports.groupIndexToBitMask = groupIndexToBitMask;
    exports.toCannonRaycastOptions = toCannonRaycastOptions;
    var _util = require("../framework/util");
    var Vec3 = cc.Vec3;
    function groupIndexToBitMask(groupIndex, out) {
      var categoryBits = 1 << groupIndex;
      var maskBits = 0;
      var bits = cc.game.collisionMatrix[groupIndex];
      if (!bits) {
        cc.error("cannon-utils: group is not exist", groupIndex);
        return;
      }
      for (var i = 0; i < bits.length; i++) {
        if (!bits[i]) continue;
        maskBits |= 1 << i;
      }
      out.collisionFilterGroup = categoryBits;
      out.collisionFilterMask = maskBits;
    }
    function toCannonRaycastOptions(out, options) {
      out.checkCollisionResponse = !options.queryTrigger;
      groupIndexToBitMask(options.groupIndex, out);
      out.skipBackFaces = false;
    }
    function fillRaycastResult(result, cannonResult) {
      result._assign(Vec3.copy(new Vec3(), cannonResult.hitPointWorld), cannonResult.distance, (0, 
      _util.getWrap)(cannonResult.shape).collider);
    }
    function commitShapeUpdates(body) {
      body.aabbNeedsUpdate = true;
      body.updateMassProperties();
      body.updateBoundingRadius();
    }
    var deprecatedEventMap = {
      onCollisionEnter: "collision-enter",
      onCollisionStay: "collision-stay",
      onCollisionExit: "collision-exit",
      onTriggerEnter: "trigger-enter",
      onTriggerStay: "trigger-stay",
      onTriggerExit: "trigger-exit"
    };
    exports.deprecatedEventMap = deprecatedEventMap;
  }, {
    "../framework/util": 23
  } ],
  4: [ function(require, module, exports) {
    "use strict";
    exports.__esModule = true;
    exports.CannonWorld = void 0;
    var _cannon = _interopRequireDefault(require("../../../../../external/cannon/cannon"));
    var _cannonUtil = require("./cannon-util");
    var _cannonShape = require("./shapes/cannon-shape");
    var _cannonSharedBody = require("./cannon-shared-body");
    var _util = require("../framework/util");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Vec3 = cc.Vec3;
    var fastRemoveAt = cc.js.array.fastRemoveAt;
    var CannonWorld = function() {
      function CannonWorld() {
        this.bodies = [];
        this._world = void 0;
        this._raycastResult = new _cannon["default"].RaycastResult();
        this._world = new _cannon["default"].World();
        this._world.broadphase = new _cannon["default"].NaiveBroadphase();
        this._world.addEventListener("postStep", this.onPostStep.bind(this));
      }
      var _proto = CannonWorld.prototype;
      _proto.onPostStep = function onPostStep() {
        var p3dm = cc.director.getPhysics3DManager();
        if (p3dm.useFixedDigit) {
          var pd = p3dm.fixDigits.position;
          var rd = p3dm.fixDigits.rotation;
          var bodies = this._world.bodies;
          for (var i = 0; i < bodies.length; i++) {
            var bi = bodies[i];
            if (bi.type != _cannon["default"].Body.STATIC && !bi.isSleeping()) {
              var pos = bi.position;
              pos.x = parseFloat(pos.x.toFixed(pd));
              pos.y = parseFloat(pos.y.toFixed(pd));
              pos.z = parseFloat(pos.z.toFixed(pd));
              var rot = bi.quaternion;
              rot.x = parseFloat(rot.x.toFixed(rd));
              rot.y = parseFloat(rot.y.toFixed(rd));
              rot.z = parseFloat(rot.z.toFixed(rd));
              rot.w = parseFloat(rot.w.toFixed(rd));
              var vel = bi.velocity;
              vel.x = parseFloat(vel.x.toFixed(pd));
              vel.y = parseFloat(vel.y.toFixed(pd));
              vel.z = parseFloat(vel.z.toFixed(pd));
              var avel = bi.angularVelocity;
              avel.x = parseFloat(avel.x.toFixed(pd));
              avel.y = parseFloat(avel.y.toFixed(pd));
              avel.z = parseFloat(avel.z.toFixed(pd));
            }
          }
        }
      };
      _proto.step = function step(deltaTime, timeSinceLastCalled, maxSubStep) {
        this.syncSceneToPhysics();
        this._world.step(deltaTime, timeSinceLastCalled, maxSubStep);
        this.syncPhysicsToScene();
        this.emitEvents();
      };
      _proto.syncSceneToPhysics = function syncSceneToPhysics() {
        (0, _util.clearNodeTransformRecord)();
        for (var i = 0; i < this.bodies.length; i++) this.bodies[i].syncSceneToPhysics();
        (0, _util.clearNodeTransformDirtyFlag)();
      };
      _proto.syncPhysicsToScene = function syncPhysicsToScene() {
        for (var i = 0; i < this.bodies.length; i++) this.bodies[i].syncPhysicsToScene();
      };
      _proto.emitEvents = function emitEvents() {
        this._world.emitTriggeredEvents();
        this._world.emitCollisionEvents();
      };
      _proto.raycastClosest = function raycastClosest(worldRay, options, result) {
        setupFromAndTo(worldRay, options.maxDistance);
        (0, _cannonUtil.toCannonRaycastOptions)(raycastOpt, options);
        var hit = this._world.raycastClosest(from, to, raycastOpt, this._raycastResult);
        hit && (0, _cannonUtil.fillRaycastResult)(result, this._raycastResult);
        return hit;
      };
      _proto.raycast = function raycast(worldRay, options, pool, results) {
        setupFromAndTo(worldRay, options.maxDistance);
        (0, _cannonUtil.toCannonRaycastOptions)(raycastOpt, options);
        var hit = this._world.raycastAll(from, to, raycastOpt, function(result) {
          var r = pool.add();
          (0, _cannonUtil.fillRaycastResult)(r, result);
          results.push(r);
        });
        return hit;
      };
      _proto.getSharedBody = function getSharedBody(node) {
        return _cannonSharedBody.CannonSharedBody.getSharedBody(node, this);
      };
      _proto.addSharedBody = function addSharedBody(sharedBody) {
        var i = this.bodies.indexOf(sharedBody);
        if (i < 0) {
          this.bodies.push(sharedBody);
          this._world.addBody(sharedBody.body);
        }
      };
      _proto.removeSharedBody = function removeSharedBody(sharedBody) {
        var i = this.bodies.indexOf(sharedBody);
        if (i >= 0) {
          fastRemoveAt(this.bodies, i);
          this._world.remove(sharedBody.body);
        }
      };
      _createClass(CannonWorld, [ {
        key: "world",
        get: function get() {
          return this._world;
        }
      }, {
        key: "defaultMaterial",
        set: function set(mat) {
          this._world.defaultMaterial.friction = mat.friction;
          this._world.defaultMaterial.restitution = mat.restitution;
          null != _cannonShape.CannonShape.idToMaterial[mat._uuid] && (_cannonShape.CannonShape.idToMaterial[mat._uuid] = this._world.defaultMaterial);
        }
      }, {
        key: "allowSleep",
        set: function set(v) {
          this._world.allowSleep = v;
        }
      }, {
        key: "gravity",
        set: function set(gravity) {
          Vec3.copy(this._world.gravity, gravity);
        }
      } ]);
      return CannonWorld;
    }();
    exports.CannonWorld = CannonWorld;
    var from = new _cannon["default"].Vec3();
    var to = new _cannon["default"].Vec3();
    function setupFromAndTo(worldRay, distance) {
      Vec3.copy(from, worldRay.o);
      worldRay.computeHit(to, distance);
    }
    var raycastOpt = {
      checkCollisionResponse: false,
      collisionFilterGroup: -1,
      collisionFilterMask: -1,
      skipBackFaces: false
    };
  }, {
    "../../../../../external/cannon/cannon": 24,
    "../framework/util": 23,
    "./cannon-shared-body": 2,
    "./cannon-util": 3,
    "./shapes/cannon-shape": 7
  } ],
  5: [ function(require, module, exports) {
    "use strict";
    var _physicsSelector = require("../framework/physics-selector");
    var _cannonRigidBody = require("./cannon-rigid-body");
    var _cannonWorld = require("./cannon-world");
    var _cannonBoxShape = require("./shapes/cannon-box-shape");
    var _cannonSphereShape = require("./shapes/cannon-sphere-shape");
    true;
    (0, _physicsSelector.instantiate)(_cannonBoxShape.CannonBoxShape, _cannonSphereShape.CannonSphereShape, _cannonRigidBody.CannonRigidBody, _cannonWorld.CannonWorld);
  }, {
    "../framework/physics-selector": 22,
    "./cannon-rigid-body": 1,
    "./cannon-world": 4,
    "./shapes/cannon-box-shape": 6,
    "./shapes/cannon-sphere-shape": 8
  } ],
  6: [ function(require, module, exports) {
    "use strict";
    exports.__esModule = true;
    exports.CannonBoxShape = void 0;
    var _cannon = _interopRequireDefault(require("../../../../../../external/cannon/cannon"));
    var _cannonUtil = require("../cannon-util");
    var _cannonShape = require("./cannon-shape");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    var Vec3 = cc.Vec3;
    var v3_0 = new Vec3();
    var CannonBoxShape = function(_CannonShape) {
      _inheritsLoose(CannonBoxShape, _CannonShape);
      function CannonBoxShape(size) {
        var _this;
        _this = _CannonShape.call(this) || this;
        _this.halfExtent = new _cannon["default"].Vec3();
        Vec3.multiplyScalar(_this.halfExtent, size, .5);
        _this._shape = new _cannon["default"].Box(_this.halfExtent.clone());
        return _this;
      }
      var _proto = CannonBoxShape.prototype;
      _proto.onLoad = function onLoad() {
        _CannonShape.prototype.onLoad.call(this);
        this.size = this.boxCollider.size;
      };
      _proto.setScale = function setScale(scale) {
        _CannonShape.prototype.setScale.call(this, scale);
        this.size = this.boxCollider.size;
      };
      _createClass(CannonBoxShape, [ {
        key: "boxCollider",
        get: function get() {
          return this.collider;
        }
      }, {
        key: "box",
        get: function get() {
          return this._shape;
        }
      }, {
        key: "size",
        set: function set(v) {
          this.collider.node.getWorldScale(v3_0);
          v3_0.x = Math.abs(v3_0.x);
          v3_0.y = Math.abs(v3_0.y);
          v3_0.z = Math.abs(v3_0.z);
          Vec3.multiplyScalar(this.halfExtent, v, .5);
          Vec3.multiply(this.box.halfExtents, this.halfExtent, v3_0);
          this.box.updateConvexPolyhedronRepresentation();
          -1 != this._index && (0, _cannonUtil.commitShapeUpdates)(this._body);
        }
      } ]);
      return CannonBoxShape;
    }(_cannonShape.CannonShape);
    exports.CannonBoxShape = CannonBoxShape;
  }, {
    "../../../../../../external/cannon/cannon": 24,
    "../cannon-util": 3,
    "./cannon-shape": 7
  } ],
  7: [ function(require, module, exports) {
    "use strict";
    exports.__esModule = true;
    exports.CannonShape = void 0;
    var _cannon = _interopRequireDefault(require("../../../../../../external/cannon/cannon"));
    var _util = require("../../framework/util");
    var _cannonUtil = require("../cannon-util");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var TriggerEventObject = {
      type: "trigger-enter",
      selfCollider: null,
      otherCollider: null
    };
    var Vec3 = cc.Vec3;
    var v3_0 = new Vec3();
    var CannonShape = function() {
      function CannonShape() {
        this._collider = void 0;
        this._shape = void 0;
        this._offset = new _cannon["default"].Vec3();
        this._orient = new _cannon["default"].Quaternion();
        this._index = -1;
        this._sharedBody = void 0;
        this.onTriggerListener = this.onTrigger.bind(this);
      }
      var _proto = CannonShape.prototype;
      _proto.__preload = function __preload(comp) {
        this._collider = comp;
        (0, _util.setWrap)(this._shape, this);
        this._shape.addEventListener("cc-trigger", this.onTriggerListener);
        this._sharedBody = cc.director.getPhysics3DManager().physicsWorld.getSharedBody(this._collider.node);
        this._sharedBody.reference = true;
      };
      _proto.onLoad = function onLoad() {
        this.center = this._collider.center;
        this.isTrigger = this._collider.isTrigger;
      };
      _proto.onEnable = function onEnable() {
        this._sharedBody.addShape(this);
        this._sharedBody.enabled = true;
      };
      _proto.onDisable = function onDisable() {
        this._sharedBody.removeShape(this);
        this._sharedBody.enabled = false;
      };
      _proto.onDestroy = function onDestroy() {
        this._sharedBody.reference = false;
        this._shape.removeEventListener("cc-trigger", this.onTriggerListener);
        delete _cannon["default"].World["idToShapeMap"][this._shape.id];
        this._sharedBody = null;
        (0, _util.setWrap)(this._shape, null);
        this._offset = null;
        this._orient = null;
        this._shape = null;
        this._collider = null;
        this.onTriggerListener = null;
      };
      _proto.setScale = function setScale(scale) {
        this._setCenter(this._collider.center);
      };
      _proto.setIndex = function setIndex(index) {
        this._index = index;
      };
      _proto.setOffsetAndOrient = function setOffsetAndOrient(offset, orient) {
        cc.Vec3.copy(offset, this._offset);
        cc.Vec3.copy(orient, this._orient);
        this._offset = offset;
        this._orient = orient;
      };
      _proto._setCenter = function _setCenter(v) {
        var lpos = this._offset;
        Vec3.copy(lpos, v);
        this._collider.node.getWorldScale(v3_0);
        Vec3.multiply(lpos, lpos, v3_0);
      };
      _proto.onTrigger = function onTrigger(event) {
        TriggerEventObject.type = event.event;
        var self = (0, _util.getWrap)(event.selfShape);
        var other = (0, _util.getWrap)(event.otherShape);
        if (self) {
          TriggerEventObject.selfCollider = self.collider;
          TriggerEventObject.otherCollider = other ? other.collider : null;
          TriggerEventObject.type = _cannonUtil.deprecatedEventMap[TriggerEventObject.type];
          this._collider.emit(TriggerEventObject.type, TriggerEventObject);
          TriggerEventObject.type = event.event;
          this._collider.emit(TriggerEventObject.type, TriggerEventObject);
        }
      };
      _createClass(CannonShape, [ {
        key: "shape",
        get: function get() {
          return this._shape;
        }
      }, {
        key: "collider",
        get: function get() {
          return this._collider;
        }
      }, {
        key: "attachedRigidBody",
        get: function get() {
          if (this._sharedBody.wrappedBody) return this._sharedBody.wrappedBody.rigidBody;
          return null;
        }
      }, {
        key: "sharedBody",
        get: function get() {
          return this._sharedBody;
        }
      }, {
        key: "material",
        set: function set(mat) {
          if (null == mat) this._shape.material = null; else {
            null == CannonShape.idToMaterial[mat._uuid] && (CannonShape.idToMaterial[mat._uuid] = new _cannon["default"].Material(mat._uuid));
            this._shape.material = CannonShape.idToMaterial[mat._uuid];
            this._shape.material.friction = mat.friction;
            this._shape.material.restitution = mat.restitution;
          }
        }
      }, {
        key: "isTrigger",
        set: function set(v) {
          this._shape.collisionResponse = !v;
          this._index >= 0 && this._body.updateHasTrigger();
        }
      }, {
        key: "center",
        set: function set(v) {
          this._setCenter(v);
          this._index >= 0 && (0, _cannonUtil.commitShapeUpdates)(this._body);
        }
      }, {
        key: "_body",
        get: function get() {
          return this._sharedBody.body;
        }
      } ]);
      return CannonShape;
    }();
    exports.CannonShape = CannonShape;
    CannonShape.idToMaterial = {};
  }, {
    "../../../../../../external/cannon/cannon": 24,
    "../../framework/util": 23,
    "../cannon-util": 3
  } ],
  8: [ function(require, module, exports) {
    "use strict";
    exports.__esModule = true;
    exports.CannonSphereShape = void 0;
    var _cannon = _interopRequireDefault(require("../../../../../../external/cannon/cannon"));
    var _cannonUtil = require("../cannon-util");
    var _cannonShape = require("./cannon-shape");
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    var v3_0 = new cc.Vec3();
    var CannonSphereShape = function(_CannonShape) {
      _inheritsLoose(CannonSphereShape, _CannonShape);
      function CannonSphereShape(radius) {
        var _this;
        _this = _CannonShape.call(this) || this;
        _this._radius = void 0;
        _this._radius = radius;
        _this._shape = new _cannon["default"].Sphere(_this._radius);
        return _this;
      }
      var _proto = CannonSphereShape.prototype;
      _proto.onLoad = function onLoad() {
        _CannonShape.prototype.onLoad.call(this);
        this.radius = this.sphereCollider.radius;
      };
      _proto.setScale = function setScale(scale) {
        _CannonShape.prototype.setScale.call(this, scale);
        this.radius = this.sphereCollider.radius;
      };
      _createClass(CannonSphereShape, [ {
        key: "sphereCollider",
        get: function get() {
          return this.collider;
        }
      }, {
        key: "sphere",
        get: function get() {
          return this._shape;
        }
      }, {
        key: "radius",
        get: function get() {
          return this._radius;
        },
        set: function set(v) {
          this.collider.node.getWorldScale(v3_0);
          var max = v3_0.maxAxis();
          this.sphere.radius = v * Math.abs(max);
          this.sphere.updateBoundingSphereRadius();
          -1 != this._index && (0, _cannonUtil.commitShapeUpdates)(this._body);
        }
      } ]);
      return CannonSphereShape;
    }(_cannonShape.CannonShape);
    exports.CannonSphereShape = CannonSphereShape;
  }, {
    "../../../../../../external/cannon/cannon": 24,
    "../cannon-util": 3,
    "./cannon-shape": 7
  } ],
  9: [ function(require, module, exports) {
    "use strict";
    require("../cannon/instantiate");
    var _cannon = _interopRequireDefault(require("../../../../../external/cannon/cannon"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    window && (window.CANNON = _cannon["default"]);
  }, {
    "../../../../../external/cannon/cannon": 24,
    "../cannon/instantiate": 5
  } ],
  10: [ function(require, module, exports) {
    "use strict";
    exports.__esModule = true;
    var _framework = require("../framework");
    Object.keys(_framework).forEach(function(key) {
      if ("default" === key || "__esModule" === key) return;
      if (key in exports && exports[key] === _framework[key]) return;
      exports[key] = _framework[key];
    });
  }, {
    "../framework": 17
  } ],
  11: [ function(require, module, exports) {
    "use strict";
    exports.__esModule = true;
    exports.PhysicsMaterial = void 0;
    var _dec, _class, _class2, _descriptor, _descriptor2, _class3, _temp;
    function _initializerDefineProperty(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _assertThisInitialized(self) {
      if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return self;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;
      ("value" in desc || desc.initializer) && (desc.writable = true);
      desc = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator(target, property, desc) || desc;
      }, desc);
      if (context && void 0 !== desc.initializer) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = void 0;
      }
      if (void 0 === desc.initializer) {
        Object.defineProperty(target, property, desc);
        desc = null;
      }
      return desc;
    }
    function _initializerWarningHelper(descriptor, context) {
      throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
    }
    var _cc$_decorator = cc._decorator, ccclass = _cc$_decorator.ccclass, property = _cc$_decorator.property;
    var fastRemove = cc.js.array.fastRemove;
    var equals = cc.math.equals;
    var PhysicsMaterial = (_dec = ccclass("cc.PhysicsMaterial"), _dec(_class = (_class2 = (_temp = _class3 = function(_cc$Asset) {
      _inheritsLoose(PhysicsMaterial, _cc$Asset);
      function PhysicsMaterial() {
        var _this;
        _this = _cc$Asset.call(this) || this;
        _initializerDefineProperty(_this, "_friction", _descriptor, _assertThisInitialized(_this));
        _initializerDefineProperty(_this, "_restitution", _descriptor2, _assertThisInitialized(_this));
        cc.EventTarget.call(_assertThisInitialized(_this));
        PhysicsMaterial.allMaterials.push(_assertThisInitialized(_this));
        "" == _this._uuid && (_this._uuid = "pm_" + PhysicsMaterial._idCounter++);
        return _this;
      }
      var _proto = PhysicsMaterial.prototype;
      _proto.clone = function clone() {
        var c = new PhysicsMaterial();
        c._friction = this._friction;
        c._restitution = this._restitution;
        return c;
      };
      _proto.destroy = function destroy() {
        if (_cc$Asset.prototype.destroy.call(this)) {
          fastRemove(PhysicsMaterial.allMaterials, this);
          return true;
        }
        return false;
      };
      _createClass(PhysicsMaterial, [ {
        key: "friction",
        get: function get() {
          return this._friction;
        },
        set: function set(value) {
          if (!equals(this._friction, value)) {
            this._friction = value;
            this.emit("physics_material_update");
          }
        }
      }, {
        key: "restitution",
        get: function get() {
          return this._restitution;
        },
        set: function set(value) {
          if (!equals(this._restitution, value)) {
            this._restitution = value;
            this.emit("physics_material_update");
          }
        }
      } ]);
      return PhysicsMaterial;
    }(cc.Asset), _class3.allMaterials = [], _class3._idCounter = 0, _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_friction", [ property ], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return .1;
      }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_restitution", [ property ], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return .1;
      }
    }), _applyDecoratedDescriptor(_class2.prototype, "friction", [ property ], Object.getOwnPropertyDescriptor(_class2.prototype, "friction"), _class2.prototype), 
    _applyDecoratedDescriptor(_class2.prototype, "restitution", [ property ], Object.getOwnPropertyDescriptor(_class2.prototype, "restitution"), _class2.prototype), 
    _class2)) || _class);
    exports.PhysicsMaterial = PhysicsMaterial;
    cc.js.mixin(PhysicsMaterial.prototype, cc.EventTarget.prototype);
    cc.PhysicsMaterial = PhysicsMaterial;
  }, {} ],
  12: [ function(require, module, exports) {
    "use strict";
    exports.__esModule = true;
    exports.BoxCollider3D = void 0;
    var _instance = require("../../instance");
    var _colliderComponent = require("./collider-component");
    var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor;
    function _initializerDefineProperty(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _assertThisInitialized(self) {
      if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return self;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    function _initializerWarningHelper(descriptor, context) {
      throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
    }
    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;
      ("value" in desc || desc.initializer) && (desc.writable = true);
      desc = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator(target, property, desc) || desc;
      }, desc);
      if (context && void 0 !== desc.initializer) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = void 0;
      }
      if (void 0 === desc.initializer) {
        Object.defineProperty(target, property, desc);
        desc = null;
      }
      return desc;
    }
    var _cc$_decorator = cc._decorator, ccclass = _cc$_decorator.ccclass, executeInEditMode = _cc$_decorator.executeInEditMode, executionOrder = _cc$_decorator.executionOrder, menu = _cc$_decorator.menu, property = _cc$_decorator.property;
    var Vec3 = cc.Vec3;
    var BoxCollider3D = (_dec = ccclass("cc.BoxCollider3D"), _dec2 = executionOrder(98), 
    _dec3 = menu("i18n:MAIN_MENU.component.physics/Collider/Box 3D"), _dec4 = property({
      type: cc.Vec3
    }), _dec(_class = _dec2(_class = _dec3(_class = executeInEditMode(_class = (_class2 = function(_Collider3D) {
      _inheritsLoose(BoxCollider3D, _Collider3D);
      function BoxCollider3D() {
        var _this;
        _this = _Collider3D.call(this) || this;
        _initializerDefineProperty(_this, "_size", _descriptor, _assertThisInitialized(_this));
        true;
        _this._shape = (0, _instance.createBoxShape)(_this._size);
        return _this;
      }
      _createClass(BoxCollider3D, [ {
        key: "size",
        get: function get() {
          return this._size;
        },
        set: function set(value) {
          Vec3.copy(this._size, value);
          true;
          this.boxShape.size = this._size;
        }
      }, {
        key: "boxShape",
        get: function get() {
          return this._shape;
        }
      } ]);
      return BoxCollider3D;
    }(_colliderComponent.Collider3D), _applyDecoratedDescriptor(_class2.prototype, "size", [ _dec4 ], Object.getOwnPropertyDescriptor(_class2.prototype, "size"), _class2.prototype), 
    _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_size", [ property ], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return new Vec3(1, 1, 1);
      }
    }), _class2)) || _class) || _class) || _class) || _class);
    exports.BoxCollider3D = BoxCollider3D;
  }, {
    "../../instance": 18,
    "./collider-component": 13
  } ],
  13: [ function(require, module, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Collider3D = void 0;
    var _physicsMaterial = require("../../assets/physics-material");
    var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
    function _initializerDefineProperty(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _assertThisInitialized(self) {
      if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return self;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    function _initializerWarningHelper(descriptor, context) {
      throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
    }
    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;
      ("value" in desc || desc.initializer) && (desc.writable = true);
      desc = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator(target, property, desc) || desc;
      }, desc);
      if (context && void 0 !== desc.initializer) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = void 0;
      }
      if (void 0 === desc.initializer) {
        Object.defineProperty(target, property, desc);
        desc = null;
      }
      return desc;
    }
    var _cc$_decorator = cc._decorator, ccclass = _cc$_decorator.ccclass, property = _cc$_decorator.property;
    var Vec3 = cc.Vec3;
    var Collider3D = (_dec = ccclass("cc.Collider3D"), _dec2 = property({
      type: _physicsMaterial.PhysicsMaterial,
      displayName: "Material",
      displayOrder: -1
    }), _dec3 = property({
      displayOrder: 0
    }), _dec4 = property({
      type: cc.Vec3,
      displayOrder: 1
    }), _dec5 = property({
      type: _physicsMaterial.PhysicsMaterial
    }), _dec(_class = (_class2 = function(_cc$Component) {
      _inheritsLoose(Collider3D, _cc$Component);
      function Collider3D() {
        var _this;
        _this = _cc$Component.call(this) || this;
        _this._shape = void 0;
        _this._isSharedMaterial = true;
        _initializerDefineProperty(_this, "_material", _descriptor, _assertThisInitialized(_this));
        _initializerDefineProperty(_this, "_isTrigger", _descriptor2, _assertThisInitialized(_this));
        _initializerDefineProperty(_this, "_center", _descriptor3, _assertThisInitialized(_this));
        cc.EventTarget.call(_assertThisInitialized(_this));
        return _this;
      }
      var _proto = Collider3D.prototype;
      _proto.on = function on(type, callback, target, useCapture) {};
      _proto.off = function off(type, callback, target) {};
      _proto.once = function once(type, callback, target) {};
      _proto.emit = function emit(key) {};
      _proto.__preload = function __preload() {
        true;
        this._shape.__preload(this);
      };
      _proto.onLoad = function onLoad() {
        true;
        true;
        this.sharedMaterial = null == this._material ? cc.director.getPhysics3DManager().defaultMaterial : this._material;
        this._shape.onLoad();
      };
      _proto.onEnable = function onEnable() {
        true;
        this._shape.onEnable();
      };
      _proto.onDisable = function onDisable() {
        true;
        this._shape.onDisable();
      };
      _proto.onDestroy = function onDestroy() {
        true;
        this._material && this._material.off("physics_material_update", this._updateMaterial, this);
        this._shape.onDestroy();
      };
      _proto._updateMaterial = function _updateMaterial() {
        true;
        this._shape.material = this._material;
      };
      _createClass(Collider3D, [ {
        key: "sharedMaterial",
        get: function get() {
          return this._material;
        },
        set: function set(value) {
          this.material = value;
        }
      }, {
        key: "material",
        get: function get() {
          true;
          if (this._isSharedMaterial && null != this._material) {
            this._material.off("physics_material_update", this._updateMaterial, this);
            this._material = this._material.clone();
            this._material.on("physics_material_update", this._updateMaterial, this);
            this._isSharedMaterial = false;
          }
          return this._material;
        },
        set: function set(value) {
          false, false;
          if (null != value && null != this._material) {
            if (this._material._uuid != value._uuid) {
              this._material.off("physics_material_update", this._updateMaterial, this);
              value.on("physics_material_update", this._updateMaterial, this);
              this._isSharedMaterial = false;
              this._material = value;
            }
          } else if (null != value && null == this._material) {
            value.on("physics_material_update", this._updateMaterial, this);
            this._material = value;
          } else if (null == value && null != this._material) {
            this._material.off("physics_material_update", this._updateMaterial, this);
            this._material = value;
          }
          this._updateMaterial();
        }
      }, {
        key: "isTrigger",
        get: function get() {
          return this._isTrigger;
        },
        set: function set(value) {
          this._isTrigger = value;
          true;
          this._shape.isTrigger = this._isTrigger;
        }
      }, {
        key: "center",
        get: function get() {
          return this._center;
        },
        set: function set(value) {
          Vec3.copy(this._center, value);
          true;
          this._shape.center = this._center;
        }
      }, {
        key: "attachedRigidbody",
        get: function get() {
          return this.shape.attachedRigidBody;
        }
      }, {
        key: "shape",
        get: function get() {
          return this._shape;
        }
      }, {
        key: "_assertOnload",
        get: function get() {
          var r = 0 == this._isOnLoadCalled;
          r && cc.error("Physics Error: Please make sure that the node has been added to the scene");
          return !r;
        }
      } ]);
      return Collider3D;
    }(cc.Component), _applyDecoratedDescriptor(_class2.prototype, "sharedMaterial", [ _dec2 ], Object.getOwnPropertyDescriptor(_class2.prototype, "sharedMaterial"), _class2.prototype), 
    _applyDecoratedDescriptor(_class2.prototype, "isTrigger", [ _dec3 ], Object.getOwnPropertyDescriptor(_class2.prototype, "isTrigger"), _class2.prototype), 
    _applyDecoratedDescriptor(_class2.prototype, "center", [ _dec4 ], Object.getOwnPropertyDescriptor(_class2.prototype, "center"), _class2.prototype), 
    _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_material", [ _dec5 ], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return null;
      }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_isTrigger", [ property ], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return false;
      }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_center", [ property ], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return new Vec3();
      }
    }), _class2)) || _class);
    exports.Collider3D = Collider3D;
    cc.js.mixin(Collider3D.prototype, cc.EventTarget.prototype);
  }, {
    "../../assets/physics-material": 11
  } ],
  14: [ function(require, module, exports) {
    "use strict";
    exports.__esModule = true;
    exports.SphereCollider3D = void 0;
    var _instance = require("../../instance");
    var _colliderComponent = require("./collider-component");
    var _dec, _dec2, _dec3, _class, _class2, _descriptor;
    function _initializerDefineProperty(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _assertThisInitialized(self) {
      if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return self;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    function _initializerWarningHelper(descriptor, context) {
      throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
    }
    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;
      ("value" in desc || desc.initializer) && (desc.writable = true);
      desc = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator(target, property, desc) || desc;
      }, desc);
      if (context && void 0 !== desc.initializer) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = void 0;
      }
      if (void 0 === desc.initializer) {
        Object.defineProperty(target, property, desc);
        desc = null;
      }
      return desc;
    }
    var _cc$_decorator = cc._decorator, ccclass = _cc$_decorator.ccclass, executeInEditMode = _cc$_decorator.executeInEditMode, executionOrder = _cc$_decorator.executionOrder, menu = _cc$_decorator.menu, property = _cc$_decorator.property;
    var SphereCollider3D = (_dec = ccclass("cc.SphereCollider3D"), _dec2 = executionOrder(98), 
    _dec3 = menu("i18n:MAIN_MENU.component.physics/Collider/Sphere 3D"), _dec(_class = _dec2(_class = _dec3(_class = executeInEditMode(_class = (_class2 = function(_Collider3D) {
      _inheritsLoose(SphereCollider3D, _Collider3D);
      function SphereCollider3D() {
        var _this;
        _this = _Collider3D.call(this) || this;
        _initializerDefineProperty(_this, "_radius", _descriptor, _assertThisInitialized(_this));
        true;
        _this._shape = (0, _instance.createSphereShape)(_this._radius);
        return _this;
      }
      _createClass(SphereCollider3D, [ {
        key: "radius",
        get: function get() {
          return this._radius;
        },
        set: function set(value) {
          this._radius = value;
          true;
          this.sphereShape.radius = this._radius;
        }
      }, {
        key: "sphereShape",
        get: function get() {
          return this._shape;
        }
      } ]);
      return SphereCollider3D;
    }(_colliderComponent.Collider3D), _applyDecoratedDescriptor(_class2.prototype, "radius", [ property ], Object.getOwnPropertyDescriptor(_class2.prototype, "radius"), _class2.prototype), 
    _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_radius", [ property ], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return .5;
      }
    }), _class2)) || _class) || _class) || _class) || _class);
    exports.SphereCollider3D = SphereCollider3D;
  }, {
    "../../instance": 18,
    "./collider-component": 13
  } ],
  15: [ function(require, module, exports) {
    "use strict";
    exports.__esModule = true;
    exports.ConstantForce = void 0;
    var _rigidBodyComponent = require("./rigid-body-component");
    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
    function _initializerDefineProperty(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _assertThisInitialized(self) {
      if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return self;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;
      ("value" in desc || desc.initializer) && (desc.writable = true);
      desc = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator(target, property, desc) || desc;
      }, desc);
      if (context && void 0 !== desc.initializer) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = void 0;
      }
      if (void 0 === desc.initializer) {
        Object.defineProperty(target, property, desc);
        desc = null;
      }
      return desc;
    }
    function _initializerWarningHelper(descriptor, context) {
      throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
    }
    var _cc$_decorator = cc._decorator, ccclass = _cc$_decorator.ccclass, executeInEditMode = _cc$_decorator.executeInEditMode, executionOrder = _cc$_decorator.executionOrder, menu = _cc$_decorator.menu, property = _cc$_decorator.property, requireComponent = _cc$_decorator.requireComponent, disallowMultiple = _cc$_decorator.disallowMultiple;
    var Vec3 = cc.Vec3;
    var ConstantForce = (_dec = ccclass("cc.ConstantForce"), _dec2 = executionOrder(98), 
    _dec3 = requireComponent(_rigidBodyComponent.RigidBody3D), _dec4 = menu("i18n:MAIN_MENU.component.physics/Constant Force 3D"), 
    _dec5 = property({
      displayOrder: 0
    }), _dec6 = property({
      displayOrder: 1
    }), _dec7 = property({
      displayOrder: 2
    }), _dec8 = property({
      displayOrder: 3
    }), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = disallowMultiple(_class = executeInEditMode(_class = (_class2 = function(_cc$Component) {
      _inheritsLoose(ConstantForce, _cc$Component);
      function ConstantForce() {
        var _this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
        _this = _cc$Component.call.apply(_cc$Component, [ this ].concat(args)) || this;
        _this._rigidbody = null;
        _initializerDefineProperty(_this, "_force", _descriptor, _assertThisInitialized(_this));
        _initializerDefineProperty(_this, "_localForce", _descriptor2, _assertThisInitialized(_this));
        _initializerDefineProperty(_this, "_torque", _descriptor3, _assertThisInitialized(_this));
        _initializerDefineProperty(_this, "_localTorque", _descriptor4, _assertThisInitialized(_this));
        _this._mask = 0;
        return _this;
      }
      var _proto = ConstantForce.prototype;
      _proto.onLoad = function onLoad() {
        true;
        this._rigidbody = this.node.getComponent(_rigidBodyComponent.RigidBody3D);
        this._maskUpdate(this._force, 1);
        this._maskUpdate(this._localForce, 2);
        this._maskUpdate(this._torque, 4);
        this._maskUpdate(this._localTorque, 8);
      };
      _proto.lateUpdate = function lateUpdate(dt) {
        true;
        if (null != this._rigidbody && 0 != this._mask) {
          1 & this._mask && this._rigidbody.applyForce(this._force);
          2 & this._mask && this._rigidbody.applyLocalForce(this.localForce);
          4 & this._mask && this._rigidbody.applyTorque(this._torque);
          8 & this._mask && this._rigidbody.applyLocalTorque(this._localTorque);
        }
      };
      _proto._maskUpdate = function _maskUpdate(t, m) {
        Vec3.strictEquals(t, Vec3.ZERO) ? this._mask &= ~m : this._mask |= m;
      };
      _createClass(ConstantForce, [ {
        key: "force",
        get: function get() {
          return this._force;
        },
        set: function set(value) {
          Vec3.copy(this._force, value);
          this._maskUpdate(this._force, 1);
        }
      }, {
        key: "localForce",
        get: function get() {
          return this._localForce;
        },
        set: function set(value) {
          Vec3.copy(this._localForce, value);
          this._maskUpdate(this.localForce, 2);
        }
      }, {
        key: "torque",
        get: function get() {
          return this._torque;
        },
        set: function set(value) {
          Vec3.copy(this._torque, value);
          this._maskUpdate(this._torque, 4);
        }
      }, {
        key: "localTorque",
        get: function get() {
          return this._localTorque;
        },
        set: function set(value) {
          Vec3.copy(this._localTorque, value);
          this._maskUpdate(this._localTorque, 8);
        }
      } ]);
      return ConstantForce;
    }(cc.Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_force", [ property ], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return new Vec3();
      }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_localForce", [ property ], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return new Vec3();
      }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_torque", [ property ], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return new Vec3();
      }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_localTorque", [ property ], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return new Vec3();
      }
    }), _applyDecoratedDescriptor(_class2.prototype, "force", [ _dec5 ], Object.getOwnPropertyDescriptor(_class2.prototype, "force"), _class2.prototype), 
    _applyDecoratedDescriptor(_class2.prototype, "localForce", [ _dec6 ], Object.getOwnPropertyDescriptor(_class2.prototype, "localForce"), _class2.prototype), 
    _applyDecoratedDescriptor(_class2.prototype, "torque", [ _dec7 ], Object.getOwnPropertyDescriptor(_class2.prototype, "torque"), _class2.prototype), 
    _applyDecoratedDescriptor(_class2.prototype, "localTorque", [ _dec8 ], Object.getOwnPropertyDescriptor(_class2.prototype, "localTorque"), _class2.prototype), 
    _class2)) || _class) || _class) || _class) || _class) || _class) || _class);
    exports.ConstantForce = ConstantForce;
  }, {
    "./rigid-body-component": 16
  } ],
  16: [ function(require, module, exports) {
    "use strict";
    exports.__esModule = true;
    exports.RigidBody3D = void 0;
    var _instance = require("../instance");
    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
    function _initializerDefineProperty(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _assertThisInitialized(self) {
      if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return self;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    function _initializerWarningHelper(descriptor, context) {
      throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
    }
    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;
      ("value" in desc || desc.initializer) && (desc.writable = true);
      desc = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator(target, property, desc) || desc;
      }, desc);
      if (context && void 0 !== desc.initializer) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = void 0;
      }
      if (void 0 === desc.initializer) {
        Object.defineProperty(target, property, desc);
        desc = null;
      }
      return desc;
    }
    var _cc$_decorator = cc._decorator, ccclass = _cc$_decorator.ccclass, disallowMultiple = _cc$_decorator.disallowMultiple, executeInEditMode = _cc$_decorator.executeInEditMode, executionOrder = _cc$_decorator.executionOrder, menu = _cc$_decorator.menu, property = _cc$_decorator.property;
    var Vec3 = cc.Vec3;
    var RigidBody3D = (_dec = ccclass("cc.RigidBody3D"), _dec2 = executionOrder(99), 
    _dec3 = menu("i18n:MAIN_MENU.component.physics/Rigid Body 3D"), _dec4 = property({
      displayOrder: 0
    }), _dec5 = property({
      displayOrder: 1
    }), _dec6 = property({
      displayOrder: 2
    }), _dec7 = property({
      displayOrder: 3
    }), _dec8 = property({
      displayOrder: 4
    }), _dec9 = property({
      displayOrder: 5
    }), _dec10 = property({
      displayOrder: 6
    }), _dec11 = property({
      displayOrder: 7
    }), _dec(_class = _dec2(_class = _dec3(_class = executeInEditMode(_class = disallowMultiple(_class = (_class2 = function(_cc$Component) {
      _inheritsLoose(RigidBody3D, _cc$Component);
      function RigidBody3D() {
        var _this;
        _this = _cc$Component.call(this) || this;
        _this._body = void 0;
        _this._allowSleep = true;
        _initializerDefineProperty(_this, "_mass", _descriptor, _assertThisInitialized(_this));
        _initializerDefineProperty(_this, "_linearDamping", _descriptor2, _assertThisInitialized(_this));
        _initializerDefineProperty(_this, "_angularDamping", _descriptor3, _assertThisInitialized(_this));
        _initializerDefineProperty(_this, "_fixedRotation", _descriptor4, _assertThisInitialized(_this));
        _initializerDefineProperty(_this, "_isKinematic", _descriptor5, _assertThisInitialized(_this));
        _initializerDefineProperty(_this, "_useGravity", _descriptor6, _assertThisInitialized(_this));
        _initializerDefineProperty(_this, "_linearFactor", _descriptor7, _assertThisInitialized(_this));
        _initializerDefineProperty(_this, "_angularFactor", _descriptor8, _assertThisInitialized(_this));
        true, true;
        _this._body = (0, _instance.createRigidBody)();
        return _this;
      }
      var _proto = RigidBody3D.prototype;
      _proto.__preload = function __preload() {
        true, true;
        this._body.__preload(this);
      };
      _proto.onEnable = function onEnable() {
        true, true;
        this._body.onEnable();
      };
      _proto.onDisable = function onDisable() {
        true, true;
        this._body.onDisable();
      };
      _proto.onDestroy = function onDestroy() {
        true, true;
        this._body.onDestroy();
      };
      _proto.applyForce = function applyForce(force, relativePoint) {
        this._assertOnload && true && this._body.applyForce(force, relativePoint);
      };
      _proto.applyLocalForce = function applyLocalForce(force, localPoint) {
        this._assertOnload && true && this._body.applyLocalForce(force, localPoint);
      };
      _proto.applyImpulse = function applyImpulse(impulse, relativePoint) {
        this._assertOnload && true && this._body.applyImpulse(impulse, relativePoint);
      };
      _proto.applyLocalImpulse = function applyLocalImpulse(impulse, localPoint) {
        this._assertOnload && true && this._body.applyLocalImpulse(impulse, localPoint);
      };
      _proto.applyTorque = function applyTorque(torque) {
        this._assertOnload && true && this._body.applyTorque(torque);
      };
      _proto.applyLocalTorque = function applyLocalTorque(torque) {
        this._assertOnload && true && this._body.applyLocalTorque(torque);
      };
      _proto.wakeUp = function wakeUp() {
        this._assertOnload && true && this._body.wakeUp();
      };
      _proto.sleep = function sleep() {
        this._assertOnload && true && this._body.sleep();
      };
      _proto.getLinearVelocity = function getLinearVelocity(out) {
        this._assertOnload && true && this._body.getLinearVelocity(out);
      };
      _proto.setLinearVelocity = function setLinearVelocity(value) {
        this._assertOnload && true && this._body.setLinearVelocity(value);
      };
      _proto.getAngularVelocity = function getAngularVelocity(out) {
        this._assertOnload && true && this._body.getAngularVelocity(out);
      };
      _proto.setAngularVelocity = function setAngularVelocity(value) {
        this._assertOnload && true && this._body.setAngularVelocity(value);
      };
      _createClass(RigidBody3D, [ {
        key: "allowSleep",
        get: function get() {
          return this._allowSleep;
        },
        set: function set(v) {
          this._allowSleep = v;
          true, true;
          this._body.allowSleep = v;
        }
      }, {
        key: "mass",
        get: function get() {
          return this._mass;
        },
        set: function set(value) {
          this._mass = value;
          true, true;
          this._body.mass = value;
        }
      }, {
        key: "linearDamping",
        get: function get() {
          return this._linearDamping;
        },
        set: function set(value) {
          this._linearDamping = value;
          true, true;
          this._body.linearDamping = value;
        }
      }, {
        key: "angularDamping",
        get: function get() {
          return this._angularDamping;
        },
        set: function set(value) {
          this._angularDamping = value;
          true, true;
          this._body.angularDamping = value;
        }
      }, {
        key: "isKinematic",
        get: function get() {
          return this._isKinematic;
        },
        set: function set(value) {
          this._isKinematic = value;
          true, true;
          this._body.isKinematic = value;
        }
      }, {
        key: "useGravity",
        get: function get() {
          return this._useGravity;
        },
        set: function set(value) {
          this._useGravity = value;
          true, true;
          this._body.useGravity = value;
        }
      }, {
        key: "fixedRotation",
        get: function get() {
          return this._fixedRotation;
        },
        set: function set(value) {
          this._fixedRotation = value;
          true, true;
          this._body.fixedRotation = value;
        }
      }, {
        key: "linearFactor",
        get: function get() {
          return this._linearFactor;
        },
        set: function set(value) {
          Vec3.copy(this._linearFactor, value);
          true, true;
          this._body.linearFactor = this._linearFactor;
        }
      }, {
        key: "angularFactor",
        get: function get() {
          return this._angularFactor;
        },
        set: function set(value) {
          Vec3.copy(this._angularFactor, value);
          true, true;
          this._body.angularFactor = this._angularFactor;
        }
      }, {
        key: "isAwake",
        get: function get() {
          if (this._assertOnload && true) return this._body.isAwake;
          return false;
        }
      }, {
        key: "isSleepy",
        get: function get() {
          if (this._assertOnload && true) return this._body.isSleepy;
          return false;
        }
      }, {
        key: "isSleeping",
        get: function get() {
          if (this._assertOnload && true) return this._body.isSleeping;
          return false;
        }
      }, {
        key: "rigidBody",
        get: function get() {
          return this._body;
        }
      }, {
        key: "_assertOnload",
        get: function get() {
          var r = 0 == this._isOnLoadCalled;
          r && cc.error("Physics Error: Please make sure that the node has been added to the scene");
          return !r;
        }
      } ]);
      return RigidBody3D;
    }(cc.Component), _applyDecoratedDescriptor(_class2.prototype, "mass", [ _dec4 ], Object.getOwnPropertyDescriptor(_class2.prototype, "mass"), _class2.prototype), 
    _applyDecoratedDescriptor(_class2.prototype, "linearDamping", [ _dec5 ], Object.getOwnPropertyDescriptor(_class2.prototype, "linearDamping"), _class2.prototype), 
    _applyDecoratedDescriptor(_class2.prototype, "angularDamping", [ _dec6 ], Object.getOwnPropertyDescriptor(_class2.prototype, "angularDamping"), _class2.prototype), 
    _applyDecoratedDescriptor(_class2.prototype, "isKinematic", [ _dec7 ], Object.getOwnPropertyDescriptor(_class2.prototype, "isKinematic"), _class2.prototype), 
    _applyDecoratedDescriptor(_class2.prototype, "useGravity", [ _dec8 ], Object.getOwnPropertyDescriptor(_class2.prototype, "useGravity"), _class2.prototype), 
    _applyDecoratedDescriptor(_class2.prototype, "fixedRotation", [ _dec9 ], Object.getOwnPropertyDescriptor(_class2.prototype, "fixedRotation"), _class2.prototype), 
    _applyDecoratedDescriptor(_class2.prototype, "linearFactor", [ _dec10 ], Object.getOwnPropertyDescriptor(_class2.prototype, "linearFactor"), _class2.prototype), 
    _applyDecoratedDescriptor(_class2.prototype, "angularFactor", [ _dec11 ], Object.getOwnPropertyDescriptor(_class2.prototype, "angularFactor"), _class2.prototype), 
    _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_mass", [ property ], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return 10;
      }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_linearDamping", [ property ], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return .1;
      }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_angularDamping", [ property ], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return .1;
      }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_fixedRotation", [ property ], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return false;
      }
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_isKinematic", [ property ], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return false;
      }
    }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_useGravity", [ property ], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return true;
      }
    }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_linearFactor", [ property ], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return new Vec3(1, 1, 1);
      }
    }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_angularFactor", [ property ], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return new Vec3(1, 1, 1);
      }
    }), _class2)) || _class) || _class) || _class) || _class) || _class);
    exports.RigidBody3D = RigidBody3D;
  }, {
    "../instance": 18
  } ],
  17: [ function(require, module, exports) {
    "use strict";
    exports.__esModule = true;
    var _physicsManager = require("./physics-manager");
    exports.Physics3DManager = _physicsManager.Physics3DManager;
    var _physicsRayResult = require("./physics-ray-result");
    exports.PhysicsRayResult = _physicsRayResult.PhysicsRayResult;
    var _boxColliderComponent = require("./components/collider/box-collider-component");
    exports.BoxCollider3D = _boxColliderComponent.BoxCollider3D;
    var _colliderComponent = require("./components/collider/collider-component");
    exports.Collider3D = _colliderComponent.Collider3D;
    var _sphereColliderComponent = require("./components/collider/sphere-collider-component");
    exports.SphereCollider3D = _sphereColliderComponent.SphereCollider3D;
    var _rigidBodyComponent = require("./components/rigid-body-component");
    exports.RigidBody3D = _rigidBodyComponent.RigidBody3D;
    var _constantForce = require("./components/constant-force");
    var _physicsMaterial = require("./assets/physics-material");
    exports.PhysicsMaterial = _physicsMaterial.PhysicsMaterial;
    cc.Physics3DManager = _physicsManager.Physics3DManager;
    cc.Collider3D = _colliderComponent.Collider3D;
    cc.BoxCollider3D = _boxColliderComponent.BoxCollider3D;
    cc.SphereCollider3D = _sphereColliderComponent.SphereCollider3D;
    cc.RigidBody3D = _rigidBodyComponent.RigidBody3D;
    cc.PhysicsRayResult = _physicsRayResult.PhysicsRayResult;
    cc.ConstantForce = _constantForce.ConstantForce;
  }, {
    "./assets/physics-material": 11,
    "./components/collider/box-collider-component": 12,
    "./components/collider/collider-component": 13,
    "./components/collider/sphere-collider-component": 14,
    "./components/constant-force": 15,
    "./components/rigid-body-component": 16,
    "./physics-manager": 20,
    "./physics-ray-result": 21
  } ],
  18: [ function(require, module, exports) {
    "use strict";
    exports.__esModule = true;
    exports.createBoxShape = createBoxShape;
    exports.createPhysicsWorld = createPhysicsWorld;
    exports.createRigidBody = createRigidBody;
    exports.createSphereShape = createSphereShape;
    var _physicsSelector = require("./physics-selector");
    function createPhysicsWorld() {
      return new _physicsSelector.PhysicsWorld();
    }
    function createRigidBody() {
      return new _physicsSelector.RigidBody();
    }
    function createBoxShape(size) {
      return new _physicsSelector.BoxShape(size);
    }
    function createSphereShape(radius) {
      return new _physicsSelector.SphereShape(radius);
    }
  }, {
    "./physics-selector": 22
  } ],
  19: [ function(require, module, exports) {
    "use strict";
    exports.__esModule = true;
    exports.ERigidBodyType = void 0;
    var ERigidBodyType;
    exports.ERigidBodyType = ERigidBodyType;
    (function(ERigidBodyType) {
      ERigidBodyType[ERigidBodyType["DYNAMIC"] = 1] = "DYNAMIC";
      ERigidBodyType[ERigidBodyType["STATIC"] = 2] = "STATIC";
      ERigidBodyType[ERigidBodyType["KINEMATIC"] = 4] = "KINEMATIC";
    })(ERigidBodyType || (exports.ERigidBodyType = ERigidBodyType = {}));
  }, {} ],
  20: [ function(require, module, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Physics3DManager = void 0;
    var _instance = require("./instance");
    var _physicsMaterial = require("./assets/physics-material");
    var _physicsRayResult = require("./physics-ray-result");
    var _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
    function _initializerDefineProperty(target, property, descriptor, context) {
      if (!descriptor) return;
      Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
      });
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
      var desc = {};
      Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
      });
      desc.enumerable = !!desc.enumerable;
      desc.configurable = !!desc.configurable;
      ("value" in desc || desc.initializer) && (desc.writable = true);
      desc = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator(target, property, desc) || desc;
      }, desc);
      if (context && void 0 !== desc.initializer) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = void 0;
      }
      if (void 0 === desc.initializer) {
        Object.defineProperty(target, property, desc);
        desc = null;
      }
      return desc;
    }
    function _initializerWarningHelper(descriptor, context) {
      throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
    }
    var _cc$_decorator = cc._decorator, property = _cc$_decorator.property, ccclass = _cc$_decorator.ccclass;
    var Physics3DManager = (_dec = ccclass("cc.Physics3DManager"), _dec(_class = (_class2 = function() {
      function Physics3DManager() {
        this.physicsWorld = void 0;
        this.raycastClosestResult = new _physicsRayResult.PhysicsRayResult();
        this.raycastResults = [];
        _initializerDefineProperty(this, "_enabled", _descriptor, this);
        _initializerDefineProperty(this, "_allowSleep", _descriptor2, this);
        _initializerDefineProperty(this, "_gravity", _descriptor3, this);
        _initializerDefineProperty(this, "_maxSubStep", _descriptor4, this);
        _initializerDefineProperty(this, "_fixedTime", _descriptor5, this);
        _initializerDefineProperty(this, "_useFixedTime", _descriptor6, this);
        this.useAccumulator = false;
        this._accumulator = 0;
        this.useFixedDigit = false;
        this.useInternalTime = false;
        this.fixDigits = {
          position: 5,
          rotation: 12,
          timeNow: 3
        };
        this._deltaTime = 0;
        this._lastTime = 0;
        this._material = null;
        this.raycastOptions = {
          groupIndex: -1,
          queryTrigger: true,
          maxDistance: Infinity
        };
        this.raycastResultPool = new cc.RecyclePool(function() {
          return new _physicsRayResult.PhysicsRayResult();
        }, 1);
        cc.director._scheduler && cc.director._scheduler.enableForTarget(this);
        this.physicsWorld = (0, _instance.createPhysicsWorld)();
        this._lastTime = performance.now();
        true;
        this.gravity = this._gravity;
        this.allowSleep = this._allowSleep;
        this._material = new _physicsMaterial.PhysicsMaterial();
        this._material.friction = .1;
        this._material.restitution = .1;
        this._material.on("physics_material_update", this._updateMaterial, this);
        this.physicsWorld.defaultMaterial = this._material;
      }
      var _proto = Physics3DManager.prototype;
      _proto.update = function update(deltaTime) {
        false;
        if (!this._enabled) return;
        if (this.useInternalTime) {
          var now = parseFloat(performance.now().toFixed(this.fixDigits.timeNow));
          this._deltaTime = now > this._lastTime ? (now - this._lastTime) / 1e3 : 0;
          this._lastTime = now;
        } else this._deltaTime = deltaTime;
        cc.director.emit(cc.Director.EVENT_BEFORE_PHYSICS);
        false;
        if (this._useFixedTime) this.physicsWorld.step(this._fixedTime); else if (this.useAccumulator) {
          var i = 0;
          this._accumulator += this._deltaTime;
          while (i < this._maxSubStep && this._accumulator > this._fixedTime) {
            this.physicsWorld.step(this._fixedTime);
            this._accumulator -= this._fixedTime;
            i++;
          }
        } else this.physicsWorld.step(this._fixedTime, this._deltaTime, this._maxSubStep);
        cc.director.emit(cc.Director.EVENT_AFTER_PHYSICS);
      };
      _proto.raycast = function raycast(worldRay, groupIndexOrName, maxDistance, queryTrigger) {
        void 0 === groupIndexOrName && (groupIndexOrName = 0);
        void 0 === maxDistance && (maxDistance = Infinity);
        void 0 === queryTrigger && (queryTrigger = true);
        this.raycastResultPool.reset();
        this.raycastResults.length = 0;
        if ("string" == typeof groupIndexOrName) {
          var groupIndex = cc.game.groupList.indexOf(groupIndexOrName);
          -1 == groupIndex && (groupIndex = 0);
          this.raycastOptions.groupIndex = groupIndex;
        } else this.raycastOptions.groupIndex = groupIndexOrName;
        this.raycastOptions.maxDistance = maxDistance;
        this.raycastOptions.queryTrigger = queryTrigger;
        var result = this.physicsWorld.raycast(worldRay, this.raycastOptions, this.raycastResultPool, this.raycastResults);
        if (result) return this.raycastResults;
        return null;
      };
      _proto.raycastClosest = function raycastClosest(worldRay, groupIndexOrName, maxDistance, queryTrigger) {
        void 0 === groupIndexOrName && (groupIndexOrName = 0);
        void 0 === maxDistance && (maxDistance = Infinity);
        void 0 === queryTrigger && (queryTrigger = true);
        if ("string" == typeof groupIndexOrName) {
          var groupIndex = cc.game.groupList.indexOf(groupIndexOrName);
          -1 == groupIndex && (groupIndex = 0);
          this.raycastOptions.groupIndex = groupIndex;
        } else this.raycastOptions.groupIndex = groupIndexOrName;
        this.raycastOptions.maxDistance = maxDistance;
        this.raycastOptions.queryTrigger = queryTrigger;
        var result = this.physicsWorld.raycastClosest(worldRay, this.raycastOptions, this.raycastClosestResult);
        if (result) return this.raycastClosestResult;
        return null;
      };
      _proto._updateMaterial = function _updateMaterial() {
        true;
        this.physicsWorld.defaultMaterial = this._material;
      };
      _createClass(Physics3DManager, [ {
        key: "enabled",
        get: function get() {
          return this._enabled;
        },
        set: function set(value) {
          this._enabled = value;
        }
      }, {
        key: "allowSleep",
        get: function get() {
          return this._allowSleep;
        },
        set: function set(v) {
          this._allowSleep = v;
          true, true;
          this.physicsWorld.allowSleep = this._allowSleep;
        }
      }, {
        key: "maxSubStep",
        get: function get() {
          return this._maxSubStep;
        },
        set: function set(value) {
          this._maxSubStep = value;
        }
      }, {
        key: "deltaTime",
        get: function get() {
          return this._fixedTime;
        },
        set: function set(value) {
          this._fixedTime = value;
        }
      }, {
        key: "useFixedTime",
        get: function get() {
          return this._useFixedTime;
        },
        set: function set(value) {
          this._useFixedTime = value;
        }
      }, {
        key: "gravity",
        get: function get() {
          return this._gravity;
        },
        set: function set(gravity) {
          this._gravity.set(gravity);
          true, true;
          this.physicsWorld.gravity = gravity;
        }
      }, {
        key: "defaultMaterial",
        get: function get() {
          return this._material;
        }
      } ]);
      return Physics3DManager;
    }(), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_enabled", [ property ], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return false;
      }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_allowSleep", [ property ], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return true;
      }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_gravity", [ property ], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return new cc.Vec3(0, -10, 0);
      }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_maxSubStep", [ property ], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return 1;
      }
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_fixedTime", [ property ], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return 1 / 60;
      }
    }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_useFixedTime", [ property ], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function initializer() {
        return true;
      }
    }), _class2)) || _class);
    exports.Physics3DManager = Physics3DManager;
  }, {
    "./assets/physics-material": 11,
    "./instance": 18,
    "./physics-ray-result": 21
  } ],
  21: [ function(require, module, exports) {
    "use strict";
    exports.__esModule = true;
    exports.PhysicsRayResult = void 0;
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Vec3 = cc.Vec3;
    var PhysicsRayResult = function() {
      function PhysicsRayResult() {
        this._hitPoint = new Vec3();
        this._distance = 0;
        this._collidier = null;
      }
      var _proto = PhysicsRayResult.prototype;
      _proto._assign = function _assign(hitPoint, distance, collider) {
        Vec3.copy(this._hitPoint, hitPoint);
        this._distance = distance;
        this._collidier = collider;
      };
      _proto.clone = function clone() {
        var c = new PhysicsRayResult();
        Vec3.copy(c._hitPoint, this._hitPoint);
        c._distance = this._distance;
        c._collidier = this._collidier;
        return c;
      };
      _createClass(PhysicsRayResult, [ {
        key: "hitPoint",
        get: function get() {
          return this._hitPoint;
        }
      }, {
        key: "distance",
        get: function get() {
          return this._distance;
        }
      }, {
        key: "collider",
        get: function get() {
          return this._collidier;
        }
      } ]);
      return PhysicsRayResult;
    }();
    exports.PhysicsRayResult = PhysicsRayResult;
  }, {} ],
  22: [ function(require, module, exports) {
    "use strict";
    exports.__esModule = true;
    exports.SphereShape = exports.RigidBody = exports.PhysicsWorld = exports.BoxShape = void 0;
    exports.instantiate = instantiate;
    var BoxShape;
    exports.BoxShape = BoxShape;
    var SphereShape;
    exports.SphereShape = SphereShape;
    var RigidBody;
    exports.RigidBody = RigidBody;
    var PhysicsWorld;
    exports.PhysicsWorld = PhysicsWorld;
    function instantiate(boxShape, sphereShape, body, world) {
      exports.BoxShape = BoxShape = boxShape;
      exports.SphereShape = SphereShape = sphereShape;
      exports.RigidBody = RigidBody = body;
      exports.PhysicsWorld = PhysicsWorld = world;
    }
  }, {} ],
  23: [ function(require, module, exports) {
    "use strict";
    exports.__esModule = true;
    exports.clearNodeTransformDirtyFlag = clearNodeTransformDirtyFlag;
    exports.clearNodeTransformRecord = clearNodeTransformRecord;
    exports.getWrap = getWrap;
    exports.setWrap = setWrap;
    exports.stringfyQuat = stringfyQuat;
    exports.stringfyVec3 = stringfyVec3;
    exports.updateWorldRT = updateWorldRT;
    exports.updateWorldTransform = updateWorldTransform;
    exports.worldDirty = worldDirty;
    function stringfyVec3(value) {
      return "(x: " + value.x + ", y: " + value.y + ", z: " + value.z + ")";
    }
    function stringfyQuat(value) {
      return "(x: " + value.x + ", y: " + value.y + ", z: " + value.z + ", w: " + value.w + ")";
    }
    function setWrap(object, wrapper) {
      object.__cc_wrapper__ = wrapper;
    }
    function getWrap(object) {
      return object.__cc_wrapper__;
    }
    var LocalDirtyFlag = cc.Node._LocalDirtyFlag;
    var PHYSICS_TRS = LocalDirtyFlag.PHYSICS_TRS;
    var ALL_TRS = LocalDirtyFlag.ALL_TRS;
    var SKEW = LocalDirtyFlag.SKEW;
    var FLAG_TRANSFORM = cc.RenderFlow.FLAG_TRANSFORM;
    var Mat3 = cc.Mat3;
    var Mat4 = cc.Mat4;
    var Vec3 = cc.Vec3;
    var Quat = cc.Quat;
    var Trs = cc.Trs;
    var _nodeArray = [];
    var _lpos = cc.v3();
    var _lrot = cc.quat();
    var _mat3 = new Mat3();
    var _mat3m = _mat3.m;
    var _quat = cc.quat();
    var _mat4 = cc.mat4();
    var _nodeTransformRecord = {};
    function clearNodeTransformDirtyFlag() {
      for (var key in _nodeTransformRecord) {
        var physicsNode = _nodeTransformRecord[key];
        physicsNode._localMatDirty &= ~ALL_TRS;
        if (!(physicsNode._localMatDirty & SKEW)) {
          physicsNode._worldMatDirty = false;
          true, physicsNode._renderFlag &= ~FLAG_TRANSFORM;
        }
      }
      _nodeTransformRecord = {};
      _nodeArray.length = 0;
    }
    function clearNodeTransformRecord() {
      _nodeTransformRecord = {};
      _nodeArray.length = 0;
    }
    function updateWorldTransform(node, traverseAllNode) {
      void 0 === traverseAllNode && (traverseAllNode = false);
      var cur = node;
      var i = 0;
      var needUpdateTransform = false;
      var physicsDirtyFlag = 0;
      while (cur) {
        if (!traverseAllNode && _nodeTransformRecord[cur._id]) {
          physicsDirtyFlag |= cur._localMatDirty & PHYSICS_TRS;
          needUpdateTransform = needUpdateTransform || !!physicsDirtyFlag;
          break;
        }
        _nodeArray[i++] = cur;
        cur._localMatDirty & PHYSICS_TRS && (needUpdateTransform = true);
        cur = cur._parent;
      }
      if (!needUpdateTransform) return false;
      var child;
      var childWorldMat, curWorldMat, childTrs, childLocalMat;
      var wpos, wrot, wscale;
      _nodeArray.length = i;
      while (i) {
        child = _nodeArray[--i];
        !traverseAllNode && (_nodeTransformRecord[child._id] = child);
        childWorldMat = child._worldMatrix;
        childLocalMat = child._matrix;
        childTrs = child._trs;
        wpos = child.__wpos = child.__wpos || cc.v3();
        wrot = child.__wrot = child.__wrot || cc.quat();
        wscale = child.__wscale = child.__wscale || cc.v3();
        child._localMatDirty & PHYSICS_TRS && Trs.toMat4(childLocalMat, childTrs);
        child._localMatDirty |= physicsDirtyFlag;
        physicsDirtyFlag |= child._localMatDirty & PHYSICS_TRS;
        if (!(physicsDirtyFlag & PHYSICS_TRS)) {
          cur = child;
          continue;
        }
        if (cur) {
          curWorldMat = cur._worldMatrix;
          Trs.toPosition(_lpos, childTrs);
          Vec3.transformMat4(wpos, _lpos, curWorldMat);
          Mat4.multiply(childWorldMat, curWorldMat, childLocalMat);
          Trs.toRotation(_lrot, childTrs);
          Quat.multiply(wrot, cur.__wrot, _lrot);
          Mat3.fromQuat(_mat3, Quat.conjugate(_quat, wrot));
          Mat3.multiplyMat4(_mat3, _mat3, childWorldMat);
          wscale.x = _mat3m[0];
          wscale.y = _mat3m[4];
          wscale.z = _mat3m[8];
        } else {
          Trs.toPosition(wpos, childTrs);
          Trs.toRotation(wrot, childTrs);
          Trs.toScale(wscale, childTrs);
          Mat4.copy(childWorldMat, childLocalMat);
        }
        cur = child;
      }
      return true;
    }
    function updateWorldRT(node, position, rotation) {
      var parent = node.parent;
      if (parent) {
        updateWorldTransform(parent, true);
        Vec3.transformMat4(_lpos, position, Mat4.invert(_mat4, parent._worldMatrix));
        Quat.multiply(_quat, Quat.conjugate(_quat, parent.__wrot), rotation);
        node.setPosition(_lpos);
        node.setRotation(_quat);
      } else {
        node.setPosition(position);
        node.setRotation(rotation);
      }
    }
    function worldDirty(node) {
      var cur = node;
      while (cur) {
        if (cur._worldMatDirty) return true;
        cur = cur._parent;
      }
      return false;
    }
  }, {} ],
  24: [ function(require, module, exports) {
    (function(global) {
      "use strict";
      !function(e) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
          var f;
          "undefined" != typeof window ? f = window : "undefined" != typeof global ? f = global : "undefined" != typeof self && (f = self), 
          f.CANNON = e();
        }
      }(function() {
        var define, module, exports;
        return function e(t, n, r) {
          function s(o, u) {
            if (!n[o]) {
              if (!t[o]) {
                var a = "function" == typeof require && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                throw new Error("Cannot find module '" + o + "'");
              }
              var f = n[o] = {
                exports: {}
              };
              t[o][0].call(f.exports, function(e) {
                var n = t[o][1][e];
                return s(n || e);
              }, f, f.exports, e, t, n, r);
            }
            return n[o].exports;
          }
          var i = "function" == typeof require && require;
          for (var o = 0; o < r.length; o++) s(r[o]);
          return s;
        }({
          1: [ function(_dereq_, module, exports) {
            module.exports = {
              name: "@cocos/cannon",
              version: "1.1.1-exp.3",
              description: "A lightweight 3D physics engine written in JavaScript.",
              homepage: "https://github.com/cocos-creator/cannon.js",
              author: "Stefan Hedman <schteppe@gmail.com> (http://steffe.se), JayceLai",
              keywords: [ "cannon.js", "cocos", "creator", "physics.9d2de", "engine", "3d" ],
              scripts: {
                build: "grunt && npm run preprocess && grunt addLicense && grunt addDate",
                preprocess: "node node_modules/uglify-js/bin/uglifyjs build/cannon.js -o build/cannon.min.js -c -m"
              },
              main: "./build/cannon.min.js",
              engines: {
                node: "*"
              },
              repository: {
                type: "git",
                url: "https://github.com/cocos-creator/cannon.js.git"
              },
              bugs: {
                url: "https://github.com/cocos-creator/cannon.js/issues"
              },
              licenses: [ {
                type: "MIT"
              } ],
              devDependencies: {
                jshint: "latest",
                "uglify-js": "latest",
                nodeunit: "^0.9.0",
                grunt: "~0.4.0",
                "grunt-contrib-jshint": "~0.1.1",
                "grunt-contrib-nodeunit": "^0.4.1",
                "grunt-contrib-concat": "~0.1.3",
                "grunt-contrib-uglify": "^0.5.1",
                "grunt-browserify": "^2.1.4",
                "grunt-contrib-yuidoc": "^0.5.2",
                browserify: "*"
              },
              dependencies: {}
            };
          }, {} ],
          2: [ function(_dereq_, module, exports) {
            module.exports = {
              version: _dereq_("../package.json").version,
              AABB: _dereq_("./collision/AABB"),
              ArrayCollisionMatrix: _dereq_("./collision/ArrayCollisionMatrix"),
              Body: _dereq_("./objects/Body"),
              Box: _dereq_("./shapes/Box"),
              Broadphase: _dereq_("./collision/Broadphase"),
              Constraint: _dereq_("./constraints/Constraint"),
              ContactEquation: _dereq_("./equations/ContactEquation"),
              Narrowphase: _dereq_("./world/Narrowphase"),
              ConeTwistConstraint: _dereq_("./constraints/ConeTwistConstraint"),
              ContactMaterial: _dereq_("./material/ContactMaterial"),
              ConvexPolyhedron: _dereq_("./shapes/ConvexPolyhedron"),
              Cylinder: _dereq_("./shapes/Cylinder"),
              DistanceConstraint: _dereq_("./constraints/DistanceConstraint"),
              Equation: _dereq_("./equations/Equation"),
              EventTarget: _dereq_("./utils/EventTarget"),
              FrictionEquation: _dereq_("./equations/FrictionEquation"),
              GSSolver: _dereq_("./solver/GSSolver"),
              GridBroadphase: _dereq_("./collision/GridBroadphase"),
              Heightfield: _dereq_("./shapes/Heightfield"),
              HingeConstraint: _dereq_("./constraints/HingeConstraint"),
              LockConstraint: _dereq_("./constraints/LockConstraint"),
              Mat3: _dereq_("./math/Mat3"),
              Material: _dereq_("./material/Material"),
              NaiveBroadphase: _dereq_("./collision/NaiveBroadphase"),
              ObjectCollisionMatrix: _dereq_("./collision/ObjectCollisionMatrix"),
              Pool: _dereq_("./utils/Pool"),
              Particle: _dereq_("./shapes/Particle"),
              Plane: _dereq_("./shapes/Plane"),
              PointToPointConstraint: _dereq_("./constraints/PointToPointConstraint"),
              Quaternion: _dereq_("./math/Quaternion"),
              Ray: _dereq_("./collision/Ray"),
              RaycastVehicle: _dereq_("./objects/RaycastVehicle"),
              RaycastResult: _dereq_("./collision/RaycastResult"),
              RigidVehicle: _dereq_("./objects/RigidVehicle"),
              RotationalEquation: _dereq_("./equations/RotationalEquation"),
              RotationalMotorEquation: _dereq_("./equations/RotationalMotorEquation"),
              SAPBroadphase: _dereq_("./collision/SAPBroadphase"),
              SPHSystem: _dereq_("./objects/SPHSystem"),
              Shape: _dereq_("./shapes/Shape"),
              Solver: _dereq_("./solver/Solver"),
              Sphere: _dereq_("./shapes/Sphere"),
              SplitSolver: _dereq_("./solver/SplitSolver"),
              Spring: _dereq_("./objects/Spring"),
              Transform: _dereq_("./math/Transform"),
              Trimesh: _dereq_("./shapes/Trimesh"),
              Vec3: _dereq_("./math/Vec3"),
              Vec3Pool: _dereq_("./utils/Vec3Pool"),
              World: _dereq_("./world/World"),
              Octree: _dereq_("./utils/Octree"),
              CMath: _dereq_("./math/CMath")
            };
          }, {
            "../package.json": 1,
            "./collision/AABB": 3,
            "./collision/ArrayCollisionMatrix": 4,
            "./collision/Broadphase": 5,
            "./collision/GridBroadphase": 6,
            "./collision/NaiveBroadphase": 7,
            "./collision/ObjectCollisionMatrix": 8,
            "./collision/Ray": 10,
            "./collision/RaycastResult": 11,
            "./collision/SAPBroadphase": 12,
            "./constraints/ConeTwistConstraint": 13,
            "./constraints/Constraint": 14,
            "./constraints/DistanceConstraint": 15,
            "./constraints/HingeConstraint": 16,
            "./constraints/LockConstraint": 17,
            "./constraints/PointToPointConstraint": 18,
            "./equations/ContactEquation": 20,
            "./equations/Equation": 21,
            "./equations/FrictionEquation": 22,
            "./equations/RotationalEquation": 23,
            "./equations/RotationalMotorEquation": 24,
            "./material/ContactMaterial": 25,
            "./material/Material": 26,
            "./math/CMath": 27,
            "./math/Mat3": 29,
            "./math/Quaternion": 30,
            "./math/Transform": 31,
            "./math/Vec3": 32,
            "./objects/Body": 33,
            "./objects/RaycastVehicle": 34,
            "./objects/RigidVehicle": 35,
            "./objects/SPHSystem": 36,
            "./objects/Spring": 37,
            "./shapes/Box": 39,
            "./shapes/ConvexPolyhedron": 40,
            "./shapes/Cylinder": 41,
            "./shapes/Heightfield": 42,
            "./shapes/Particle": 43,
            "./shapes/Plane": 44,
            "./shapes/Shape": 45,
            "./shapes/Sphere": 46,
            "./shapes/Trimesh": 47,
            "./solver/GSSolver": 48,
            "./solver/Solver": 49,
            "./solver/SplitSolver": 50,
            "./utils/EventTarget": 51,
            "./utils/Octree": 52,
            "./utils/Pool": 53,
            "./utils/Vec3Pool": 56,
            "./world/Narrowphase": 57,
            "./world/World": 58
          } ],
          3: [ function(_dereq_, module, exports) {
            var Vec3 = _dereq_("../math/Vec3");
            var Utils = _dereq_("../utils/Utils");
            module.exports = AABB;
            function AABB(options) {
              options = options || {};
              this.lowerBound = new Vec3();
              options.lowerBound && this.lowerBound.copy(options.lowerBound);
              this.upperBound = new Vec3();
              options.upperBound && this.upperBound.copy(options.upperBound);
            }
            var tmp = new Vec3();
            AABB.prototype.setFromPoints = function(points, position, quaternion, skinSize) {
              var l = this.lowerBound, u = this.upperBound, q = quaternion;
              l.copy(points[0]);
              q && q.vmult(l, l);
              u.copy(l);
              for (var i = 1; i < points.length; i++) {
                var p = points[i];
                if (q) {
                  q.vmult(p, tmp);
                  p = tmp;
                }
                p.x > u.x && (u.x = p.x);
                p.x < l.x && (l.x = p.x);
                p.y > u.y && (u.y = p.y);
                p.y < l.y && (l.y = p.y);
                p.z > u.z && (u.z = p.z);
                p.z < l.z && (l.z = p.z);
              }
              if (position) {
                position.vadd(l, l);
                position.vadd(u, u);
              }
              if (skinSize) {
                l.x -= skinSize;
                l.y -= skinSize;
                l.z -= skinSize;
                u.x += skinSize;
                u.y += skinSize;
                u.z += skinSize;
              }
              return this;
            };
            AABB.prototype.copy = function(aabb) {
              this.lowerBound.copy(aabb.lowerBound);
              this.upperBound.copy(aabb.upperBound);
              return this;
            };
            AABB.prototype.clone = function() {
              return new AABB().copy(this);
            };
            AABB.prototype.extend = function(aabb) {
              this.lowerBound.x = Math.min(this.lowerBound.x, aabb.lowerBound.x);
              this.upperBound.x = Math.max(this.upperBound.x, aabb.upperBound.x);
              this.lowerBound.y = Math.min(this.lowerBound.y, aabb.lowerBound.y);
              this.upperBound.y = Math.max(this.upperBound.y, aabb.upperBound.y);
              this.lowerBound.z = Math.min(this.lowerBound.z, aabb.lowerBound.z);
              this.upperBound.z = Math.max(this.upperBound.z, aabb.upperBound.z);
            };
            AABB.prototype.overlaps = function(aabb) {
              var l1 = this.lowerBound, u1 = this.upperBound, l2 = aabb.lowerBound, u2 = aabb.upperBound;
              var overlapsX = l2.x <= u1.x && u1.x <= u2.x || l1.x <= u2.x && u2.x <= u1.x;
              var overlapsY = l2.y <= u1.y && u1.y <= u2.y || l1.y <= u2.y && u2.y <= u1.y;
              var overlapsZ = l2.z <= u1.z && u1.z <= u2.z || l1.z <= u2.z && u2.z <= u1.z;
              return overlapsX && overlapsY && overlapsZ;
            };
            AABB.prototype.volume = function() {
              var l = this.lowerBound, u = this.upperBound;
              return (u.x - l.x) * (u.y - l.y) * (u.z - l.z);
            };
            AABB.prototype.contains = function(aabb) {
              var l1 = this.lowerBound, u1 = this.upperBound, l2 = aabb.lowerBound, u2 = aabb.upperBound;
              return l1.x <= l2.x && u1.x >= u2.x && l1.y <= l2.y && u1.y >= u2.y && l1.z <= l2.z && u1.z >= u2.z;
            };
            AABB.prototype.getCorners = function(a, b, c, d, e, f, g, h) {
              var l = this.lowerBound, u = this.upperBound;
              a.copy(l);
              b.set(u.x, l.y, l.z);
              c.set(u.x, u.y, l.z);
              d.set(l.x, u.y, u.z);
              e.set(u.x, l.y, u.z);
              f.set(l.x, u.y, l.z);
              g.set(l.x, l.y, u.z);
              h.copy(u);
            };
            var transformIntoFrame_corners = [ new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3() ];
            AABB.prototype.toLocalFrame = function(frame, target) {
              var corners = transformIntoFrame_corners;
              var a = corners[0];
              var b = corners[1];
              var c = corners[2];
              var d = corners[3];
              var e = corners[4];
              var f = corners[5];
              var g = corners[6];
              var h = corners[7];
              this.getCorners(a, b, c, d, e, f, g, h);
              for (var i = 0; 8 !== i; i++) {
                var corner = corners[i];
                frame.pointToLocal(corner, corner);
              }
              return target.setFromPoints(corners);
            };
            AABB.prototype.toWorldFrame = function(frame, target) {
              var corners = transformIntoFrame_corners;
              var a = corners[0];
              var b = corners[1];
              var c = corners[2];
              var d = corners[3];
              var e = corners[4];
              var f = corners[5];
              var g = corners[6];
              var h = corners[7];
              this.getCorners(a, b, c, d, e, f, g, h);
              for (var i = 0; 8 !== i; i++) {
                var corner = corners[i];
                frame.pointToWorld(corner, corner);
              }
              return target.setFromPoints(corners);
            };
            AABB.prototype.overlapsRay = function(ray) {
              var t = 0;
              var dirFracX = 1 / ray._direction.x;
              var dirFracY = 1 / ray._direction.y;
              var dirFracZ = 1 / ray._direction.z;
              var t1 = (this.lowerBound.x - ray.from.x) * dirFracX;
              var t2 = (this.upperBound.x - ray.from.x) * dirFracX;
              var t3 = (this.lowerBound.y - ray.from.y) * dirFracY;
              var t4 = (this.upperBound.y - ray.from.y) * dirFracY;
              var t5 = (this.lowerBound.z - ray.from.z) * dirFracZ;
              var t6 = (this.upperBound.z - ray.from.z) * dirFracZ;
              var tmin = Math.max(Math.max(Math.min(t1, t2), Math.min(t3, t4)), Math.min(t5, t6));
              var tmax = Math.min(Math.min(Math.max(t1, t2), Math.max(t3, t4)), Math.max(t5, t6));
              if (tmax < 0) return false;
              if (tmin > tmax) return false;
              return true;
            };
          }, {
            "../math/Vec3": 32,
            "../utils/Utils": 55
          } ],
          4: [ function(_dereq_, module, exports) {
            module.exports = ArrayCollisionMatrix;
            function ArrayCollisionMatrix() {
              this.matrix = [];
            }
            ArrayCollisionMatrix.prototype.get = function(i, j) {
              i = i.index;
              j = j.index;
              if (j > i) {
                var temp = j;
                j = i;
                i = temp;
              }
              return this.matrix[(i * (i + 1) >> 1) + j - 1];
            };
            ArrayCollisionMatrix.prototype.set = function(i, j, value) {
              i = i.index;
              j = j.index;
              if (j > i) {
                var temp = j;
                j = i;
                i = temp;
              }
              this.matrix[(i * (i + 1) >> 1) + j - 1] = value ? 1 : 0;
            };
            ArrayCollisionMatrix.prototype.reset = function() {
              for (var i = 0, l = this.matrix.length; i !== l; i++) this.matrix[i] = 0;
            };
            ArrayCollisionMatrix.prototype.setNumObjects = function(n) {
              this.matrix.length = n * (n - 1) >> 1;
            };
          }, {} ],
          5: [ function(_dereq_, module, exports) {
            var Body = _dereq_("../objects/Body");
            var Vec3 = _dereq_("../math/Vec3");
            var Quaternion = _dereq_("../math/Quaternion");
            var Shape = _dereq_("../shapes/Shape");
            var Plane = _dereq_("../shapes/Plane");
            module.exports = Broadphase;
            function Broadphase() {
              this.world = null;
              this.useBoundingBoxes = false;
              this.dirty = true;
            }
            Broadphase.prototype.collisionPairs = function(world, p1, p2) {
              throw new Error("collisionPairs not implemented for this BroadPhase class!");
            };
            Broadphase.prototype.needBroadphaseCollision = function(bodyA, bodyB) {
              if (0 === (bodyA.collisionFilterGroup & bodyB.collisionFilterMask) || 0 === (bodyB.collisionFilterGroup & bodyA.collisionFilterMask)) return false;
              if (bodyA.hasTrigger || bodyB.hasTrigger) return true;
              if ((0 !== (bodyA.type & Body.STATIC) || bodyA.sleepState === Body.SLEEPING) && (0 !== (bodyB.type & Body.STATIC) || bodyB.sleepState === Body.SLEEPING)) return false;
              return true;
            };
            Broadphase.prototype.intersectionTest = function(bodyA, bodyB, pairs1, pairs2) {
              this.useBoundingBoxes ? this.doBoundingBoxBroadphase(bodyA, bodyB, pairs1, pairs2) : this.doBoundingSphereBroadphase(bodyA, bodyB, pairs1, pairs2);
            };
            var Broadphase_collisionPairs_r = new Vec3(), Broadphase_collisionPairs_normal = new Vec3(), Broadphase_collisionPairs_quat = new Quaternion(), Broadphase_collisionPairs_relpos = new Vec3();
            Broadphase.prototype.doBoundingSphereBroadphase = function(bodyA, bodyB, pairs1, pairs2) {
              var r = Broadphase_collisionPairs_r;
              bodyB.position.vsub(bodyA.position, r);
              var boundingRadiusSum2 = Math.pow(bodyA.boundingRadius + bodyB.boundingRadius, 2);
              var norm2 = r.norm2();
              if (norm2 < boundingRadiusSum2) {
                pairs1.push(bodyA);
                pairs2.push(bodyB);
              }
            };
            Broadphase.prototype.doBoundingBoxBroadphase = function(bodyA, bodyB, pairs1, pairs2) {
              bodyA.aabbNeedsUpdate && bodyA.computeAABB();
              bodyB.aabbNeedsUpdate && bodyB.computeAABB();
              if (bodyA.aabb.overlaps(bodyB.aabb)) {
                pairs1.push(bodyA);
                pairs2.push(bodyB);
              }
            };
            var Broadphase_makePairsUnique_temp = {
              keys: []
            }, Broadphase_makePairsUnique_p1 = [], Broadphase_makePairsUnique_p2 = [];
            Broadphase.prototype.makePairsUnique = function(pairs1, pairs2) {
              var t = Broadphase_makePairsUnique_temp, p1 = Broadphase_makePairsUnique_p1, p2 = Broadphase_makePairsUnique_p2, N = pairs1.length;
              for (var i = 0; i !== N; i++) {
                p1[i] = pairs1[i];
                p2[i] = pairs2[i];
              }
              pairs1.length = 0;
              pairs2.length = 0;
              for (var i = 0; i !== N; i++) {
                var id1 = p1[i].id, id2 = p2[i].id;
                var key = id1 < id2 ? id1 + "," + id2 : id2 + "," + id1;
                t[key] = i;
                t.keys.push(key);
              }
              for (var i = 0; i !== t.keys.length; i++) {
                var key = t.keys.pop(), pairIndex = t[key];
                pairs1.push(p1[pairIndex]);
                pairs2.push(p2[pairIndex]);
                delete t[key];
              }
            };
            Broadphase.prototype.setWorld = function(world) {};
            var bsc_dist = new Vec3();
            Broadphase.boundingSphereCheck = function(bodyA, bodyB) {
              var dist = bsc_dist;
              bodyA.position.vsub(bodyB.position, dist);
              return Math.pow(bodyA.shape.boundingSphereRadius + bodyB.shape.boundingSphereRadius, 2) > dist.norm2();
            };
            Broadphase.prototype.aabbQuery = function(world, aabb, result) {
              console.warn(".aabbQuery is not implemented in this Broadphase subclass.");
              return [];
            };
          }, {
            "../math/Quaternion": 30,
            "../math/Vec3": 32,
            "../objects/Body": 33,
            "../shapes/Plane": 44,
            "../shapes/Shape": 45
          } ],
          6: [ function(_dereq_, module, exports) {
            module.exports = GridBroadphase;
            var Broadphase = _dereq_("./Broadphase");
            var Vec3 = _dereq_("../math/Vec3");
            var Shape = _dereq_("../shapes/Shape");
            function GridBroadphase(aabbMin, aabbMax, nx, ny, nz) {
              Broadphase.apply(this);
              this.nx = nx || 10;
              this.ny = ny || 10;
              this.nz = nz || 10;
              this.aabbMin = aabbMin || new Vec3(100, 100, 100);
              this.aabbMax = aabbMax || new Vec3(-100, -100, -100);
              var nbins = this.nx * this.ny * this.nz;
              if (nbins <= 0) throw "GridBroadphase: Each dimension's n must be >0";
              this.bins = [];
              this.binLengths = [];
              this.bins.length = nbins;
              this.binLengths.length = nbins;
              for (var i = 0; i < nbins; i++) {
                this.bins[i] = [];
                this.binLengths[i] = 0;
              }
            }
            GridBroadphase.prototype = new Broadphase();
            GridBroadphase.prototype.constructor = GridBroadphase;
            var GridBroadphase_collisionPairs_d = new Vec3();
            var GridBroadphase_collisionPairs_binPos = new Vec3();
            GridBroadphase.prototype.collisionPairs = function(world, pairs1, pairs2) {
              var N = world.numObjects(), bodies = world.bodies;
              var max = this.aabbMax, min = this.aabbMin, nx = this.nx, ny = this.ny, nz = this.nz;
              var xstep = ny * nz;
              var ystep = nz;
              var zstep = 1;
              var xmax = max.x, ymax = max.y, zmax = max.z, xmin = min.x, ymin = min.y, zmin = min.z;
              var xmult = nx / (xmax - xmin), ymult = ny / (ymax - ymin), zmult = nz / (zmax - zmin);
              var binsizeX = (xmax - xmin) / nx, binsizeY = (ymax - ymin) / ny, binsizeZ = (zmax - zmin) / nz;
              var binRadius = .5 * Math.sqrt(binsizeX * binsizeX + binsizeY * binsizeY + binsizeZ * binsizeZ);
              var types = Shape.types;
              var SPHERE = types.SPHERE, PLANE = types.PLANE, BOX = types.BOX, COMPOUND = types.COMPOUND, CONVEXPOLYHEDRON = types.CONVEXPOLYHEDRON;
              var bins = this.bins, binLengths = this.binLengths, Nbins = this.bins.length;
              for (var i = 0; i !== Nbins; i++) binLengths[i] = 0;
              var ceil = Math.ceil;
              var min = Math.min;
              var max = Math.max;
              function addBoxToBins(x0, y0, z0, x1, y1, z1, bi) {
                var xoff0 = (x0 - xmin) * xmult | 0, yoff0 = (y0 - ymin) * ymult | 0, zoff0 = (z0 - zmin) * zmult | 0, xoff1 = ceil((x1 - xmin) * xmult), yoff1 = ceil((y1 - ymin) * ymult), zoff1 = ceil((z1 - zmin) * zmult);
                xoff0 < 0 ? xoff0 = 0 : xoff0 >= nx && (xoff0 = nx - 1);
                yoff0 < 0 ? yoff0 = 0 : yoff0 >= ny && (yoff0 = ny - 1);
                zoff0 < 0 ? zoff0 = 0 : zoff0 >= nz && (zoff0 = nz - 1);
                xoff1 < 0 ? xoff1 = 0 : xoff1 >= nx && (xoff1 = nx - 1);
                yoff1 < 0 ? yoff1 = 0 : yoff1 >= ny && (yoff1 = ny - 1);
                zoff1 < 0 ? zoff1 = 0 : zoff1 >= nz && (zoff1 = nz - 1);
                xoff0 *= xstep;
                yoff0 *= ystep;
                zoff0 *= zstep;
                xoff1 *= xstep;
                yoff1 *= ystep;
                zoff1 *= zstep;
                for (var xoff = xoff0; xoff <= xoff1; xoff += xstep) for (var yoff = yoff0; yoff <= yoff1; yoff += ystep) for (var zoff = zoff0; zoff <= zoff1; zoff += zstep) {
                  var idx = xoff + yoff + zoff;
                  bins[idx][binLengths[idx]++] = bi;
                }
              }
              for (var i = 0; i !== N; i++) {
                var bi = bodies[i];
                var si = bi.shape;
                switch (si.type) {
                 case SPHERE:
                  var x = bi.position.x, y = bi.position.y, z = bi.position.z;
                  var r = si.radius;
                  addBoxToBins(x - r, y - r, z - r, x + r, y + r, z + r, bi);
                  break;

                 case PLANE:
                  si.worldNormalNeedsUpdate && si.computeWorldNormal(bi.quaternion);
                  var planeNormal = si.worldNormal;
                  var xreset = xmin + .5 * binsizeX - bi.position.x, yreset = ymin + .5 * binsizeY - bi.position.y, zreset = zmin + .5 * binsizeZ - bi.position.z;
                  var d = GridBroadphase_collisionPairs_d;
                  d.set(xreset, yreset, zreset);
                  for (var xi = 0, xoff = 0; xi !== nx; xi++, xoff += xstep, d.y = yreset, d.x += binsizeX) for (var yi = 0, yoff = 0; yi !== ny; yi++, 
                  yoff += ystep, d.z = zreset, d.y += binsizeY) for (var zi = 0, zoff = 0; zi !== nz; zi++, 
                  zoff += zstep, d.z += binsizeZ) if (d.dot(planeNormal) < binRadius) {
                    var idx = xoff + yoff + zoff;
                    bins[idx][binLengths[idx]++] = bi;
                  }
                  break;

                 default:
                  bi.aabbNeedsUpdate && bi.computeAABB();
                  addBoxToBins(bi.aabb.lowerBound.x, bi.aabb.lowerBound.y, bi.aabb.lowerBound.z, bi.aabb.upperBound.x, bi.aabb.upperBound.y, bi.aabb.upperBound.z, bi);
                }
              }
              for (var i = 0; i !== Nbins; i++) {
                var binLength = binLengths[i];
                if (binLength > 1) {
                  var bin = bins[i];
                  for (var xi = 0; xi !== binLength; xi++) {
                    var bi = bin[xi];
                    for (var yi = 0; yi !== xi; yi++) {
                      var bj = bin[yi];
                      this.needBroadphaseCollision(bi, bj) && this.intersectionTest(bi, bj, pairs1, pairs2);
                    }
                  }
                }
              }
              this.makePairsUnique(pairs1, pairs2);
            };
          }, {
            "../math/Vec3": 32,
            "../shapes/Shape": 45,
            "./Broadphase": 5
          } ],
          7: [ function(_dereq_, module, exports) {
            module.exports = NaiveBroadphase;
            var Broadphase = _dereq_("./Broadphase");
            var AABB = _dereq_("./AABB");
            function NaiveBroadphase() {
              Broadphase.apply(this);
            }
            NaiveBroadphase.prototype = new Broadphase();
            NaiveBroadphase.prototype.constructor = NaiveBroadphase;
            NaiveBroadphase.prototype.collisionPairs = function(world, pairs1, pairs2) {
              var bodies = world.bodies, n = bodies.length, i, j, bi, bj;
              for (i = 0; i !== n; i++) for (j = 0; j !== i; j++) {
                bi = bodies[i];
                bj = bodies[j];
                if (!this.needBroadphaseCollision(bi, bj)) continue;
                this.intersectionTest(bi, bj, pairs1, pairs2);
              }
            };
            var tmpAABB = new AABB();
            NaiveBroadphase.prototype.aabbQuery = function(world, aabb, result) {
              result = result || [];
              for (var i = 0; i < world.bodies.length; i++) {
                var b = world.bodies[i];
                b.aabbNeedsUpdate && b.computeAABB();
                b.aabb.overlaps(aabb) && result.push(b);
              }
              return result;
            };
          }, {
            "./AABB": 3,
            "./Broadphase": 5
          } ],
          8: [ function(_dereq_, module, exports) {
            module.exports = ObjectCollisionMatrix;
            function ObjectCollisionMatrix() {
              this.matrix = {};
            }
            ObjectCollisionMatrix.prototype.get = function(i, j) {
              i = i.id;
              j = j.id;
              if (j > i) {
                var temp = j;
                j = i;
                i = temp;
              }
              return i + "-" + j in this.matrix;
            };
            ObjectCollisionMatrix.prototype.set = function(i, j, value) {
              i = i.id;
              j = j.id;
              if (j > i) {
                var temp = j;
                j = i;
                i = temp;
              }
              value ? this.matrix[i + "-" + j] = true : delete this.matrix[i + "-" + j];
            };
            ObjectCollisionMatrix.prototype.reset = function() {
              this.matrix = {};
            };
            ObjectCollisionMatrix.prototype.setNumObjects = function(n) {};
          }, {} ],
          9: [ function(_dereq_, module, exports) {
            module.exports = OverlapKeeper;
            function OverlapKeeper() {
              this.current = [];
              this.previous = [];
            }
            OverlapKeeper.prototype.getKey = function(i, j) {
              if (j < i) {
                var temp = j;
                j = i;
                i = temp;
              }
              return i << 16 | j;
            };
            OverlapKeeper.prototype.set = function(i, j) {
              var key = this.getKey(i, j);
              var current = this.current;
              var index = 0;
              while (key > current[index]) index++;
              if (key === current[index]) return;
              for (var j = current.length - 1; j >= index; j--) current[j + 1] = current[j];
              current[index] = key;
            };
            OverlapKeeper.prototype.tick = function() {
              var tmp = this.current;
              this.current = this.previous;
              this.previous = tmp;
              this.current.length = 0;
            };
            function unpackAndPush(array, key) {
              array.push((4294901760 & key) >> 16, 65535 & key);
            }
            OverlapKeeper.prototype.getDiff = function(additions, removals) {
              var a = this.current;
              var b = this.previous;
              var al = a.length;
              var bl = b.length;
              var j = 0;
              for (var i = 0; i < al; i++) {
                var found = false;
                var keyA = a[i];
                while (keyA > b[j]) j++;
                found = keyA === b[j];
                found || unpackAndPush(additions, keyA);
              }
              j = 0;
              for (var i = 0; i < bl; i++) {
                var found = false;
                var keyB = b[i];
                while (keyB > a[j]) j++;
                found = a[j] === keyB;
                found || unpackAndPush(removals, keyB);
              }
            };
          }, {} ],
          10: [ function(_dereq_, module, exports) {
            module.exports = Ray;
            var Vec3 = _dereq_("../math/Vec3");
            var Quaternion = _dereq_("../math/Quaternion");
            var Transform = _dereq_("../math/Transform");
            var ConvexPolyhedron = _dereq_("../shapes/ConvexPolyhedron");
            var Box = _dereq_("../shapes/Box");
            var RaycastResult = _dereq_("../collision/RaycastResult");
            var Shape = _dereq_("../shapes/Shape");
            var AABB = _dereq_("../collision/AABB");
            function Ray(from, to) {
              this.from = from ? from.clone() : new Vec3();
              this.to = to ? to.clone() : new Vec3();
              this._direction = new Vec3();
              this.precision = 1e-4;
              this.checkCollisionResponse = true;
              this.skipBackfaces = false;
              this.collisionFilterMask = -1;
              this.collisionFilterGroup = -1;
              this.mode = Ray.ANY;
              this.result = new RaycastResult();
              this.hasHit = false;
              this.callback = function(result) {};
            }
            Ray.prototype.constructor = Ray;
            Ray.CLOSEST = 1;
            Ray.ANY = 2;
            Ray.ALL = 4;
            var tmpAABB = new AABB();
            var tmpArray = [];
            Ray.prototype.intersectWorld = function(world, options) {
              this.mode = options.mode || Ray.ANY;
              this.result = options.result || new RaycastResult();
              this.skipBackfaces = !!options.skipBackfaces;
              this.checkCollisionResponse = !!options.checkCollisionResponse;
              this.collisionFilterMask = "undefined" !== typeof options.collisionFilterMask ? options.collisionFilterMask : -1;
              this.collisionFilterGroup = "undefined" !== typeof options.collisionFilterGroup ? options.collisionFilterGroup : -1;
              options.from && this.from.copy(options.from);
              options.to && this.to.copy(options.to);
              this.callback = options.callback || function() {};
              this.hasHit = false;
              this.result.reset();
              this._updateDirection();
              this.getAABB(tmpAABB);
              tmpArray.length = 0;
              world.broadphase.aabbQuery(world, tmpAABB, tmpArray);
              this.intersectBodies(tmpArray);
              return this.hasHit;
            };
            var v1 = new Vec3(), v2 = new Vec3();
            Ray.pointInTriangle = pointInTriangle;
            function pointInTriangle(p, a, b, c) {
              c.vsub(a, v0);
              b.vsub(a, v1);
              p.vsub(a, v2);
              var dot00 = v0.dot(v0);
              var dot01 = v0.dot(v1);
              var dot02 = v0.dot(v2);
              var dot11 = v1.dot(v1);
              var dot12 = v1.dot(v2);
              var u, v;
              return (u = dot11 * dot02 - dot01 * dot12) >= 0 && (v = dot00 * dot12 - dot01 * dot02) >= 0 && u + v < dot00 * dot11 - dot01 * dot01;
            }
            var intersectBody_xi = new Vec3();
            var intersectBody_qi = new Quaternion();
            Ray.prototype.intersectBody = function(body, result) {
              if (result) {
                this.result = result;
                this._updateDirection();
              }
              var checkCollisionResponse = this.checkCollisionResponse;
              if (checkCollisionResponse && !body.collisionResponse) return;
              if (0 === (this.collisionFilterGroup & body.collisionFilterMask) || 0 === (body.collisionFilterGroup & this.collisionFilterMask)) return;
              var xi = intersectBody_xi;
              var qi = intersectBody_qi;
              for (var i = 0, N = body.shapes.length; i < N; i++) {
                var shape = body.shapes[i];
                if (checkCollisionResponse && !shape.collisionResponse) continue;
                body.quaternion.mult(body.shapeOrientations[i], qi);
                body.quaternion.vmult(body.shapeOffsets[i], xi);
                xi.vadd(body.position, xi);
                this.intersectShape(shape, qi, xi, body);
                if (this.result._shouldStop) break;
              }
            };
            Ray.prototype.intersectBodies = function(bodies, result) {
              if (result) {
                this.result = result;
                this._updateDirection();
              }
              for (var i = 0, l = bodies.length; !this.result._shouldStop && i < l; i++) this.intersectBody(bodies[i]);
            };
            Ray.prototype._updateDirection = function() {
              this.to.vsub(this.from, this._direction);
              this._direction.normalize();
            };
            Ray.prototype.intersectShape = function(shape, quat, position, body) {
              var from = this.from;
              var distance = distanceFromIntersection(from, this._direction, position);
              if (distance > shape.boundingSphereRadius) return;
              var intersectMethod = this[shape.type];
              intersectMethod && intersectMethod.call(this, shape, quat, position, body, shape);
            };
            var vector = new Vec3();
            var normal = new Vec3();
            var intersectPoint = new Vec3();
            var a = new Vec3();
            var b = new Vec3();
            var c = new Vec3();
            var d = new Vec3();
            var tmpRaycastResult = new RaycastResult();
            Ray.prototype.intersectBox = function(shape, quat, position, body, reportedShape) {
              return this.intersectConvex(shape.convexPolyhedronRepresentation, quat, position, body, reportedShape);
            };
            Ray.prototype[Shape.types.BOX] = Ray.prototype.intersectBox;
            Ray.prototype.intersectPlane = function(shape, quat, position, body, reportedShape) {
              var from = this.from;
              var to = this.to;
              var direction = this._direction;
              var worldNormal = new Vec3(0, 0, 1);
              quat.vmult(worldNormal, worldNormal);
              var len = new Vec3();
              from.vsub(position, len);
              var planeToFrom = len.dot(worldNormal);
              to.vsub(position, len);
              var planeToTo = len.dot(worldNormal);
              if (planeToFrom * planeToTo > 0) return;
              if (from.distanceTo(to) < planeToFrom) return;
              var n_dot_dir = worldNormal.dot(direction);
              if (Math.abs(n_dot_dir) < this.precision) return;
              var planePointToFrom = new Vec3();
              var dir_scaled_with_t = new Vec3();
              var hitPointWorld = new Vec3();
              from.vsub(position, planePointToFrom);
              var t = -worldNormal.dot(planePointToFrom) / n_dot_dir;
              direction.scale(t, dir_scaled_with_t);
              from.vadd(dir_scaled_with_t, hitPointWorld);
              this.reportIntersection(worldNormal, hitPointWorld, reportedShape, body, -1);
            };
            Ray.prototype[Shape.types.PLANE] = Ray.prototype.intersectPlane;
            Ray.prototype.getAABB = function(result) {
              var to = this.to;
              var from = this.from;
              result.lowerBound.x = Math.min(to.x, from.x);
              result.lowerBound.y = Math.min(to.y, from.y);
              result.lowerBound.z = Math.min(to.z, from.z);
              result.upperBound.x = Math.max(to.x, from.x);
              result.upperBound.y = Math.max(to.y, from.y);
              result.upperBound.z = Math.max(to.z, from.z);
            };
            var intersectConvexOptions = {
              faceList: [ 0 ]
            };
            var worldPillarOffset = new Vec3();
            var intersectHeightfield_localRay = new Ray();
            var intersectHeightfield_index = [];
            var intersectHeightfield_minMax = [];
            Ray.prototype.intersectHeightfield = function(shape, quat, position, body, reportedShape) {
              var data = shape.data, w = shape.elementSize;
              var localRay = intersectHeightfield_localRay;
              localRay.from.copy(this.from);
              localRay.to.copy(this.to);
              Transform.pointToLocalFrame(position, quat, localRay.from, localRay.from);
              Transform.pointToLocalFrame(position, quat, localRay.to, localRay.to);
              localRay._updateDirection();
              var index = intersectHeightfield_index;
              var iMinX, iMinY, iMaxX, iMaxY;
              iMinX = iMinY = 0;
              iMaxX = iMaxY = shape.data.length - 1;
              var aabb = new AABB();
              localRay.getAABB(aabb);
              shape.getIndexOfPosition(aabb.lowerBound.x, aabb.lowerBound.y, index, true);
              iMinX = Math.max(iMinX, index[0]);
              iMinY = Math.max(iMinY, index[1]);
              shape.getIndexOfPosition(aabb.upperBound.x, aabb.upperBound.y, index, true);
              iMaxX = Math.min(iMaxX, index[0] + 1);
              iMaxY = Math.min(iMaxY, index[1] + 1);
              for (var i = iMinX; i < iMaxX; i++) for (var j = iMinY; j < iMaxY; j++) {
                if (this.result._shouldStop) return;
                shape.getAabbAtIndex(i, j, aabb);
                if (!aabb.overlapsRay(localRay)) continue;
                shape.getConvexTrianglePillar(i, j, false);
                Transform.pointToWorldFrame(position, quat, shape.pillarOffset, worldPillarOffset);
                this.intersectConvex(shape.pillarConvex, quat, worldPillarOffset, body, reportedShape, intersectConvexOptions);
                if (this.result._shouldStop) return;
                shape.getConvexTrianglePillar(i, j, true);
                Transform.pointToWorldFrame(position, quat, shape.pillarOffset, worldPillarOffset);
                this.intersectConvex(shape.pillarConvex, quat, worldPillarOffset, body, reportedShape, intersectConvexOptions);
              }
            };
            Ray.prototype[Shape.types.HEIGHTFIELD] = Ray.prototype.intersectHeightfield;
            var Ray_intersectSphere_intersectionPoint = new Vec3();
            var Ray_intersectSphere_normal = new Vec3();
            Ray.prototype.intersectSphere = function(shape, quat, position, body, reportedShape) {
              var from = this.from, to = this.to, r = shape.radius;
              var a = Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2) + Math.pow(to.z - from.z, 2);
              var b = 2 * ((to.x - from.x) * (from.x - position.x) + (to.y - from.y) * (from.y - position.y) + (to.z - from.z) * (from.z - position.z));
              var c = Math.pow(from.x - position.x, 2) + Math.pow(from.y - position.y, 2) + Math.pow(from.z - position.z, 2) - Math.pow(r, 2);
              var delta = Math.pow(b, 2) - 4 * a * c;
              var intersectionPoint = Ray_intersectSphere_intersectionPoint;
              var normal = Ray_intersectSphere_normal;
              if (delta < 0) return;
              if (0 === delta) {
                from.lerp(to, delta, intersectionPoint);
                intersectionPoint.vsub(position, normal);
                normal.normalize();
                this.reportIntersection(normal, intersectionPoint, reportedShape, body, -1);
              } else {
                var d1 = (-b - Math.sqrt(delta)) / (2 * a);
                var d2 = (-b + Math.sqrt(delta)) / (2 * a);
                if (d1 >= 0 && d1 <= 1) {
                  from.lerp(to, d1, intersectionPoint);
                  intersectionPoint.vsub(position, normal);
                  normal.normalize();
                  this.reportIntersection(normal, intersectionPoint, reportedShape, body, -1);
                }
                if (this.result._shouldStop) return;
                if (d2 >= 0 && d2 <= 1) {
                  from.lerp(to, d2, intersectionPoint);
                  intersectionPoint.vsub(position, normal);
                  normal.normalize();
                  this.reportIntersection(normal, intersectionPoint, reportedShape, body, -1);
                }
              }
            };
            Ray.prototype[Shape.types.SPHERE] = Ray.prototype.intersectSphere;
            var intersectConvex_normal = new Vec3();
            var intersectConvex_minDistNormal = new Vec3();
            var intersectConvex_minDistIntersect = new Vec3();
            var intersectConvex_vector = new Vec3();
            Ray.prototype.intersectConvex = function intersectConvex(shape, quat, position, body, reportedShape, options) {
              var minDistNormal = intersectConvex_minDistNormal;
              var normal = intersectConvex_normal;
              var vector = intersectConvex_vector;
              var minDistIntersect = intersectConvex_minDistIntersect;
              var faceList = options && options.faceList || null;
              var faces = shape.faces, vertices = shape.vertices, normals = shape.faceNormals;
              var direction = this._direction;
              var from = this.from;
              var to = this.to;
              var fromToDistance = from.distanceTo(to);
              var minDist = -1;
              var Nfaces = faceList ? faceList.length : faces.length;
              var result = this.result;
              for (var j = 0; !result._shouldStop && j < Nfaces; j++) {
                var fi = faceList ? faceList[j] : j;
                var face = faces[fi];
                var faceNormal = normals[fi];
                var q = quat;
                var x = position;
                vector.copy(vertices[face[0]]);
                q.vmult(vector, vector);
                vector.vadd(x, vector);
                vector.vsub(from, vector);
                q.vmult(faceNormal, normal);
                var dot = direction.dot(normal);
                if (Math.abs(dot) < this.precision) continue;
                var scalar = normal.dot(vector) / dot;
                if (scalar < 0) continue;
                direction.mult(scalar, intersectPoint);
                intersectPoint.vadd(from, intersectPoint);
                a.copy(vertices[face[0]]);
                q.vmult(a, a);
                x.vadd(a, a);
                for (var i = 1; !result._shouldStop && i < face.length - 1; i++) {
                  b.copy(vertices[face[i]]);
                  c.copy(vertices[face[i + 1]]);
                  q.vmult(b, b);
                  q.vmult(c, c);
                  x.vadd(b, b);
                  x.vadd(c, c);
                  var distance = intersectPoint.distanceTo(from);
                  if (!(pointInTriangle(intersectPoint, a, b, c) || pointInTriangle(intersectPoint, b, a, c)) || distance > fromToDistance) continue;
                  this.reportIntersection(normal, intersectPoint, reportedShape, body, fi);
                }
              }
            };
            Ray.prototype[Shape.types.CONVEXPOLYHEDRON] = Ray.prototype.intersectConvex;
            var intersectTrimesh_normal = new Vec3();
            var intersectTrimesh_localDirection = new Vec3();
            var intersectTrimesh_localFrom = new Vec3();
            var intersectTrimesh_localTo = new Vec3();
            var intersectTrimesh_worldNormal = new Vec3();
            var intersectTrimesh_worldIntersectPoint = new Vec3();
            var intersectTrimesh_localAABB = new AABB();
            var intersectTrimesh_triangles = [];
            var intersectTrimesh_treeTransform = new Transform();
            Ray.prototype.intersectTrimesh = function intersectTrimesh(mesh, quat, position, body, reportedShape, options) {
              var normal = intersectTrimesh_normal;
              var triangles = intersectTrimesh_triangles;
              var treeTransform = intersectTrimesh_treeTransform;
              var minDistNormal = intersectConvex_minDistNormal;
              var vector = intersectConvex_vector;
              var minDistIntersect = intersectConvex_minDistIntersect;
              var localAABB = intersectTrimesh_localAABB;
              var localDirection = intersectTrimesh_localDirection;
              var localFrom = intersectTrimesh_localFrom;
              var localTo = intersectTrimesh_localTo;
              var worldIntersectPoint = intersectTrimesh_worldIntersectPoint;
              var worldNormal = intersectTrimesh_worldNormal;
              var faceList = options && options.faceList || null;
              var indices = mesh.indices, vertices = mesh.vertices, normals = mesh.faceNormals;
              var from = this.from;
              var to = this.to;
              var direction = this._direction;
              var minDist = -1;
              treeTransform.position.copy(position);
              treeTransform.quaternion.copy(quat);
              Transform.vectorToLocalFrame(position, quat, direction, localDirection);
              Transform.pointToLocalFrame(position, quat, from, localFrom);
              Transform.pointToLocalFrame(position, quat, to, localTo);
              localTo.x *= mesh.scale.x;
              localTo.y *= mesh.scale.y;
              localTo.z *= mesh.scale.z;
              localFrom.x *= mesh.scale.x;
              localFrom.y *= mesh.scale.y;
              localFrom.z *= mesh.scale.z;
              localTo.vsub(localFrom, localDirection);
              localDirection.normalize();
              var fromToDistanceSquared = localFrom.distanceSquared(localTo);
              mesh.tree.rayQuery(this, treeTransform, triangles);
              for (var i = 0, N = triangles.length; !this.result._shouldStop && i !== N; i++) {
                var trianglesIndex = triangles[i];
                mesh.getNormal(trianglesIndex, normal);
                mesh.getVertex(indices[3 * trianglesIndex], a);
                a.vsub(localFrom, vector);
                var dot = localDirection.dot(normal);
                var scalar = normal.dot(vector) / dot;
                if (scalar < 0) continue;
                localDirection.scale(scalar, intersectPoint);
                intersectPoint.vadd(localFrom, intersectPoint);
                mesh.getVertex(indices[3 * trianglesIndex + 1], b);
                mesh.getVertex(indices[3 * trianglesIndex + 2], c);
                var squaredDistance = intersectPoint.distanceSquared(localFrom);
                if (!(pointInTriangle(intersectPoint, b, a, c) || pointInTriangle(intersectPoint, a, b, c)) || squaredDistance > fromToDistanceSquared) continue;
                Transform.vectorToWorldFrame(quat, normal, worldNormal);
                Transform.pointToWorldFrame(position, quat, intersectPoint, worldIntersectPoint);
                this.reportIntersection(worldNormal, worldIntersectPoint, reportedShape, body, trianglesIndex);
              }
              triangles.length = 0;
            };
            Ray.prototype[Shape.types.TRIMESH] = Ray.prototype.intersectTrimesh;
            Ray.prototype.reportIntersection = function(normal, hitPointWorld, shape, body, hitFaceIndex) {
              var from = this.from;
              var to = this.to;
              var distance = from.distanceTo(hitPointWorld);
              var result = this.result;
              if (this.skipBackfaces && normal.dot(this._direction) > 0) return;
              result.hitFaceIndex = "undefined" !== typeof hitFaceIndex ? hitFaceIndex : -1;
              switch (this.mode) {
               case Ray.ALL:
                this.hasHit = true;
                result.set(from, to, normal, hitPointWorld, shape, body, distance);
                result.hasHit = true;
                this.callback(result);
                break;

               case Ray.CLOSEST:
                if (distance < result.distance || !result.hasHit) {
                  this.hasHit = true;
                  result.hasHit = true;
                  result.set(from, to, normal, hitPointWorld, shape, body, distance);
                }
                break;

               case Ray.ANY:
                this.hasHit = true;
                result.hasHit = true;
                result.set(from, to, normal, hitPointWorld, shape, body, distance);
                result._shouldStop = true;
              }
            };
            var v0 = new Vec3(), intersect = new Vec3();
            function distanceFromIntersection(from, direction, position) {
              position.vsub(from, v0);
              var dot = v0.dot(direction);
              direction.mult(dot, intersect);
              intersect.vadd(from, intersect);
              var distance = position.distanceTo(intersect);
              return distance;
            }
          }, {
            "../collision/AABB": 3,
            "../collision/RaycastResult": 11,
            "../math/Quaternion": 30,
            "../math/Transform": 31,
            "../math/Vec3": 32,
            "../shapes/Box": 39,
            "../shapes/ConvexPolyhedron": 40,
            "../shapes/Shape": 45
          } ],
          11: [ function(_dereq_, module, exports) {
            var Vec3 = _dereq_("../math/Vec3");
            module.exports = RaycastResult;
            function RaycastResult() {
              this.rayFromWorld = new Vec3();
              this.rayToWorld = new Vec3();
              this.hitNormalWorld = new Vec3();
              this.hitPointWorld = new Vec3();
              this.hasHit = false;
              this.shape = null;
              this.body = null;
              this.hitFaceIndex = -1;
              this.distance = -1;
              this._shouldStop = false;
            }
            RaycastResult.prototype.reset = function() {
              this.rayFromWorld.setZero();
              this.rayToWorld.setZero();
              this.hitNormalWorld.setZero();
              this.hitPointWorld.setZero();
              this.hasHit = false;
              this.shape = null;
              this.body = null;
              this.hitFaceIndex = -1;
              this.distance = -1;
              this._shouldStop = false;
            };
            RaycastResult.prototype.abort = function() {
              this._shouldStop = true;
            };
            RaycastResult.prototype.set = function(rayFromWorld, rayToWorld, hitNormalWorld, hitPointWorld, shape, body, distance) {
              this.rayFromWorld.copy(rayFromWorld);
              this.rayToWorld.copy(rayToWorld);
              this.hitNormalWorld.copy(hitNormalWorld);
              this.hitPointWorld.copy(hitPointWorld);
              this.shape = shape;
              this.body = body;
              this.distance = distance;
            };
          }, {
            "../math/Vec3": 32
          } ],
          12: [ function(_dereq_, module, exports) {
            var Shape = _dereq_("../shapes/Shape");
            var Broadphase = _dereq_("../collision/Broadphase");
            module.exports = SAPBroadphase;
            function SAPBroadphase(world) {
              Broadphase.apply(this);
              this.axisList = [];
              this.world = null;
              this.axisIndex = 0;
              var axisList = this.axisList;
              this._addBodyHandler = function(e) {
                axisList.push(e.body);
              };
              this._removeBodyHandler = function(e) {
                var idx = axisList.indexOf(e.body);
                -1 !== idx && axisList.splice(idx, 1);
              };
              world && this.setWorld(world);
            }
            SAPBroadphase.prototype = new Broadphase();
            SAPBroadphase.prototype.setWorld = function(world) {
              this.axisList.length = 0;
              for (var i = 0; i < world.bodies.length; i++) this.axisList.push(world.bodies[i]);
              world.removeEventListener("addBody", this._addBodyHandler);
              world.removeEventListener("removeBody", this._removeBodyHandler);
              world.addEventListener("addBody", this._addBodyHandler);
              world.addEventListener("removeBody", this._removeBodyHandler);
              this.world = world;
              this.dirty = true;
            };
            SAPBroadphase.insertionSortX = function(a) {
              for (var i = 1, l = a.length; i < l; i++) {
                var v = a[i];
                for (var j = i - 1; j >= 0; j--) {
                  if (a[j].aabb.lowerBound.x <= v.aabb.lowerBound.x) break;
                  a[j + 1] = a[j];
                }
                a[j + 1] = v;
              }
              return a;
            };
            SAPBroadphase.insertionSortY = function(a) {
              for (var i = 1, l = a.length; i < l; i++) {
                var v = a[i];
                for (var j = i - 1; j >= 0; j--) {
                  if (a[j].aabb.lowerBound.y <= v.aabb.lowerBound.y) break;
                  a[j + 1] = a[j];
                }
                a[j + 1] = v;
              }
              return a;
            };
            SAPBroadphase.insertionSortZ = function(a) {
              for (var i = 1, l = a.length; i < l; i++) {
                var v = a[i];
                for (var j = i - 1; j >= 0; j--) {
                  if (a[j].aabb.lowerBound.z <= v.aabb.lowerBound.z) break;
                  a[j + 1] = a[j];
                }
                a[j + 1] = v;
              }
              return a;
            };
            SAPBroadphase.prototype.collisionPairs = function(world, p1, p2) {
              var bodies = this.axisList, N = bodies.length, axisIndex = this.axisIndex, i, j;
              if (this.dirty) {
                this.sortList();
                this.dirty = false;
              }
              for (i = 0; i !== N; i++) {
                var bi = bodies[i];
                for (j = i + 1; j < N; j++) {
                  var bj = bodies[j];
                  if (!this.needBroadphaseCollision(bi, bj)) continue;
                  if (!SAPBroadphase.checkBounds(bi, bj, axisIndex)) break;
                  this.intersectionTest(bi, bj, p1, p2);
                }
              }
            };
            SAPBroadphase.prototype.sortList = function() {
              var axisList = this.axisList;
              var axisIndex = this.axisIndex;
              var N = axisList.length;
              for (var i = 0; i !== N; i++) {
                var bi = axisList[i];
                bi.aabbNeedsUpdate && bi.computeAABB();
              }
              0 === axisIndex ? SAPBroadphase.insertionSortX(axisList) : 1 === axisIndex ? SAPBroadphase.insertionSortY(axisList) : 2 === axisIndex && SAPBroadphase.insertionSortZ(axisList);
            };
            SAPBroadphase.checkBounds = function(bi, bj, axisIndex) {
              var biPos;
              var bjPos;
              if (0 === axisIndex) {
                biPos = bi.position.x;
                bjPos = bj.position.x;
              } else if (1 === axisIndex) {
                biPos = bi.position.y;
                bjPos = bj.position.y;
              } else if (2 === axisIndex) {
                biPos = bi.position.z;
                bjPos = bj.position.z;
              }
              var ri = bi.boundingRadius, rj = bj.boundingRadius, boundA1 = biPos - ri, boundA2 = biPos + ri, boundB1 = bjPos - rj, boundB2 = bjPos + rj;
              return boundB1 < boundA2;
            };
            SAPBroadphase.prototype.autoDetectAxis = function() {
              var sumX = 0, sumX2 = 0, sumY = 0, sumY2 = 0, sumZ = 0, sumZ2 = 0, bodies = this.axisList, N = bodies.length, invN = 1 / N;
              for (var i = 0; i !== N; i++) {
                var b = bodies[i];
                var centerX = b.position.x;
                sumX += centerX;
                sumX2 += centerX * centerX;
                var centerY = b.position.y;
                sumY += centerY;
                sumY2 += centerY * centerY;
                var centerZ = b.position.z;
                sumZ += centerZ;
                sumZ2 += centerZ * centerZ;
              }
              var varianceX = sumX2 - sumX * sumX * invN, varianceY = sumY2 - sumY * sumY * invN, varianceZ = sumZ2 - sumZ * sumZ * invN;
              this.axisIndex = varianceX > varianceY ? varianceX > varianceZ ? 0 : 2 : varianceY > varianceZ ? 1 : 2;
            };
            SAPBroadphase.prototype.aabbQuery = function(world, aabb, result) {
              result = result || [];
              if (this.dirty) {
                this.sortList();
                this.dirty = false;
              }
              var axisIndex = this.axisIndex, axis = "x";
              1 === axisIndex && (axis = "y");
              2 === axisIndex && (axis = "z");
              var axisList = this.axisList;
              var lower = aabb.lowerBound[axis];
              var upper = aabb.upperBound[axis];
              for (var i = 0; i < axisList.length; i++) {
                var b = axisList[i];
                b.aabbNeedsUpdate && b.computeAABB();
                b.aabb.overlaps(aabb) && result.push(b);
              }
              return result;
            };
          }, {
            "../collision/Broadphase": 5,
            "../shapes/Shape": 45
          } ],
          13: [ function(_dereq_, module, exports) {
            module.exports = ConeTwistConstraint;
            var Constraint = _dereq_("./Constraint");
            var PointToPointConstraint = _dereq_("./PointToPointConstraint");
            var ConeEquation = _dereq_("../equations/ConeEquation");
            var RotationalEquation = _dereq_("../equations/RotationalEquation");
            var ContactEquation = _dereq_("../equations/ContactEquation");
            var Vec3 = _dereq_("../math/Vec3");
            function ConeTwistConstraint(bodyA, bodyB, options) {
              options = options || {};
              var maxForce = "undefined" !== typeof options.maxForce ? options.maxForce : 1e6;
              var pivotA = options.pivotA ? options.pivotA.clone() : new Vec3();
              var pivotB = options.pivotB ? options.pivotB.clone() : new Vec3();
              this.axisA = options.axisA ? options.axisA.clone() : new Vec3();
              this.axisB = options.axisB ? options.axisB.clone() : new Vec3();
              PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);
              this.collideConnected = !!options.collideConnected;
              this.angle = "undefined" !== typeof options.angle ? options.angle : 0;
              var c = this.coneEquation = new ConeEquation(bodyA, bodyB, options);
              var t = this.twistEquation = new RotationalEquation(bodyA, bodyB, options);
              this.twistAngle = "undefined" !== typeof options.twistAngle ? options.twistAngle : 0;
              c.maxForce = 0;
              c.minForce = -maxForce;
              t.maxForce = 0;
              t.minForce = -maxForce;
              this.equations.push(c, t);
            }
            ConeTwistConstraint.prototype = new PointToPointConstraint();
            ConeTwistConstraint.constructor = ConeTwistConstraint;
            var ConeTwistConstraint_update_tmpVec1 = new Vec3();
            var ConeTwistConstraint_update_tmpVec2 = new Vec3();
            ConeTwistConstraint.prototype.update = function() {
              var bodyA = this.bodyA, bodyB = this.bodyB, cone = this.coneEquation, twist = this.twistEquation;
              PointToPointConstraint.prototype.update.call(this);
              bodyA.vectorToWorldFrame(this.axisA, cone.axisA);
              bodyB.vectorToWorldFrame(this.axisB, cone.axisB);
              this.axisA.tangents(twist.axisA, twist.axisA);
              bodyA.vectorToWorldFrame(twist.axisA, twist.axisA);
              this.axisB.tangents(twist.axisB, twist.axisB);
              bodyB.vectorToWorldFrame(twist.axisB, twist.axisB);
              cone.angle = this.angle;
              twist.maxAngle = this.twistAngle;
            };
          }, {
            "../equations/ConeEquation": 19,
            "../equations/ContactEquation": 20,
            "../equations/RotationalEquation": 23,
            "../math/Vec3": 32,
            "./Constraint": 14,
            "./PointToPointConstraint": 18
          } ],
          14: [ function(_dereq_, module, exports) {
            module.exports = Constraint;
            var Utils = _dereq_("../utils/Utils");
            function Constraint(bodyA, bodyB, options) {
              options = Utils.defaults(options, {
                collideConnected: true,
                wakeUpBodies: true
              });
              this.equations = [];
              this.bodyA = bodyA;
              this.bodyB = bodyB;
              this.id = Constraint.idCounter++;
              this.collideConnected = options.collideConnected;
              if (options.wakeUpBodies) {
                bodyA && bodyA.wakeUp();
                bodyB && bodyB.wakeUp();
              }
            }
            Constraint.prototype.update = function() {
              throw new Error("method update() not implmemented in this Constraint subclass!");
            };
            Constraint.prototype.enable = function() {
              var eqs = this.equations;
              for (var i = 0; i < eqs.length; i++) eqs[i].enabled = true;
            };
            Constraint.prototype.disable = function() {
              var eqs = this.equations;
              for (var i = 0; i < eqs.length; i++) eqs[i].enabled = false;
            };
            Constraint.idCounter = 0;
          }, {
            "../utils/Utils": 55
          } ],
          15: [ function(_dereq_, module, exports) {
            module.exports = DistanceConstraint;
            var Constraint = _dereq_("./Constraint");
            var ContactEquation = _dereq_("../equations/ContactEquation");
            function DistanceConstraint(bodyA, bodyB, distance, maxForce) {
              Constraint.call(this, bodyA, bodyB);
              "undefined" === typeof distance && (distance = bodyA.position.distanceTo(bodyB.position));
              "undefined" === typeof maxForce && (maxForce = 1e6);
              this.distance = distance;
              var eq = this.distanceEquation = new ContactEquation(bodyA, bodyB);
              this.equations.push(eq);
              eq.minForce = -maxForce;
              eq.maxForce = maxForce;
            }
            DistanceConstraint.prototype = new Constraint();
            DistanceConstraint.prototype.update = function() {
              var bodyA = this.bodyA;
              var bodyB = this.bodyB;
              var eq = this.distanceEquation;
              var halfDist = .5 * this.distance;
              var normal = eq.ni;
              bodyB.position.vsub(bodyA.position, normal);
              normal.normalize();
              normal.mult(halfDist, eq.ri);
              normal.mult(-halfDist, eq.rj);
            };
          }, {
            "../equations/ContactEquation": 20,
            "./Constraint": 14
          } ],
          16: [ function(_dereq_, module, exports) {
            module.exports = HingeConstraint;
            var Constraint = _dereq_("./Constraint");
            var PointToPointConstraint = _dereq_("./PointToPointConstraint");
            var RotationalEquation = _dereq_("../equations/RotationalEquation");
            var RotationalMotorEquation = _dereq_("../equations/RotationalMotorEquation");
            var ContactEquation = _dereq_("../equations/ContactEquation");
            var Vec3 = _dereq_("../math/Vec3");
            function HingeConstraint(bodyA, bodyB, options) {
              options = options || {};
              var maxForce = "undefined" !== typeof options.maxForce ? options.maxForce : 1e6;
              var pivotA = options.pivotA ? options.pivotA.clone() : new Vec3();
              var pivotB = options.pivotB ? options.pivotB.clone() : new Vec3();
              PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);
              var axisA = this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1, 0, 0);
              axisA.normalize();
              var axisB = this.axisB = options.axisB ? options.axisB.clone() : new Vec3(1, 0, 0);
              axisB.normalize();
              var r1 = this.rotationalEquation1 = new RotationalEquation(bodyA, bodyB, options);
              var r2 = this.rotationalEquation2 = new RotationalEquation(bodyA, bodyB, options);
              var motor = this.motorEquation = new RotationalMotorEquation(bodyA, bodyB, maxForce);
              motor.enabled = false;
              this.equations.push(r1, r2, motor);
            }
            HingeConstraint.prototype = new PointToPointConstraint();
            HingeConstraint.constructor = HingeConstraint;
            HingeConstraint.prototype.enableMotor = function() {
              this.motorEquation.enabled = true;
            };
            HingeConstraint.prototype.disableMotor = function() {
              this.motorEquation.enabled = false;
            };
            HingeConstraint.prototype.setMotorSpeed = function(speed) {
              this.motorEquation.targetVelocity = speed;
            };
            HingeConstraint.prototype.setMotorMaxForce = function(maxForce) {
              this.motorEquation.maxForce = maxForce;
              this.motorEquation.minForce = -maxForce;
            };
            var HingeConstraint_update_tmpVec1 = new Vec3();
            var HingeConstraint_update_tmpVec2 = new Vec3();
            HingeConstraint.prototype.update = function() {
              var bodyA = this.bodyA, bodyB = this.bodyB, motor = this.motorEquation, r1 = this.rotationalEquation1, r2 = this.rotationalEquation2, worldAxisA = HingeConstraint_update_tmpVec1, worldAxisB = HingeConstraint_update_tmpVec2;
              var axisA = this.axisA;
              var axisB = this.axisB;
              PointToPointConstraint.prototype.update.call(this);
              bodyA.quaternion.vmult(axisA, worldAxisA);
              bodyB.quaternion.vmult(axisB, worldAxisB);
              worldAxisA.tangents(r1.axisA, r2.axisA);
              r1.axisB.copy(worldAxisB);
              r2.axisB.copy(worldAxisB);
              if (this.motorEquation.enabled) {
                bodyA.quaternion.vmult(this.axisA, motor.axisA);
                bodyB.quaternion.vmult(this.axisB, motor.axisB);
              }
            };
          }, {
            "../equations/ContactEquation": 20,
            "../equations/RotationalEquation": 23,
            "../equations/RotationalMotorEquation": 24,
            "../math/Vec3": 32,
            "./Constraint": 14,
            "./PointToPointConstraint": 18
          } ],
          17: [ function(_dereq_, module, exports) {
            module.exports = LockConstraint;
            var Constraint = _dereq_("./Constraint");
            var PointToPointConstraint = _dereq_("./PointToPointConstraint");
            var RotationalEquation = _dereq_("../equations/RotationalEquation");
            var RotationalMotorEquation = _dereq_("../equations/RotationalMotorEquation");
            var ContactEquation = _dereq_("../equations/ContactEquation");
            var Vec3 = _dereq_("../math/Vec3");
            function LockConstraint(bodyA, bodyB, options) {
              options = options || {};
              var maxForce = "undefined" !== typeof options.maxForce ? options.maxForce : 1e6;
              var pivotA = new Vec3();
              var pivotB = new Vec3();
              var halfWay = new Vec3();
              bodyA.position.vadd(bodyB.position, halfWay);
              halfWay.scale(.5, halfWay);
              bodyB.pointToLocalFrame(halfWay, pivotB);
              bodyA.pointToLocalFrame(halfWay, pivotA);
              PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);
              this.xA = bodyA.vectorToLocalFrame(Vec3.UNIT_X);
              this.xB = bodyB.vectorToLocalFrame(Vec3.UNIT_X);
              this.yA = bodyA.vectorToLocalFrame(Vec3.UNIT_Y);
              this.yB = bodyB.vectorToLocalFrame(Vec3.UNIT_Y);
              this.zA = bodyA.vectorToLocalFrame(Vec3.UNIT_Z);
              this.zB = bodyB.vectorToLocalFrame(Vec3.UNIT_Z);
              var r1 = this.rotationalEquation1 = new RotationalEquation(bodyA, bodyB, options);
              var r2 = this.rotationalEquation2 = new RotationalEquation(bodyA, bodyB, options);
              var r3 = this.rotationalEquation3 = new RotationalEquation(bodyA, bodyB, options);
              this.equations.push(r1, r2, r3);
            }
            LockConstraint.prototype = new PointToPointConstraint();
            LockConstraint.constructor = LockConstraint;
            var LockConstraint_update_tmpVec1 = new Vec3();
            var LockConstraint_update_tmpVec2 = new Vec3();
            LockConstraint.prototype.update = function() {
              var bodyA = this.bodyA, bodyB = this.bodyB, motor = this.motorEquation, r1 = this.rotationalEquation1, r2 = this.rotationalEquation2, r3 = this.rotationalEquation3, worldAxisA = LockConstraint_update_tmpVec1, worldAxisB = LockConstraint_update_tmpVec2;
              PointToPointConstraint.prototype.update.call(this);
              bodyA.vectorToWorldFrame(this.xA, r1.axisA);
              bodyB.vectorToWorldFrame(this.yB, r1.axisB);
              bodyA.vectorToWorldFrame(this.yA, r2.axisA);
              bodyB.vectorToWorldFrame(this.zB, r2.axisB);
              bodyA.vectorToWorldFrame(this.zA, r3.axisA);
              bodyB.vectorToWorldFrame(this.xB, r3.axisB);
            };
          }, {
            "../equations/ContactEquation": 20,
            "../equations/RotationalEquation": 23,
            "../equations/RotationalMotorEquation": 24,
            "../math/Vec3": 32,
            "./Constraint": 14,
            "./PointToPointConstraint": 18
          } ],
          18: [ function(_dereq_, module, exports) {
            module.exports = PointToPointConstraint;
            var Constraint = _dereq_("./Constraint");
            var ContactEquation = _dereq_("../equations/ContactEquation");
            var Vec3 = _dereq_("../math/Vec3");
            function PointToPointConstraint(bodyA, pivotA, bodyB, pivotB, maxForce) {
              Constraint.call(this, bodyA, bodyB);
              maxForce = "undefined" !== typeof maxForce ? maxForce : 1e6;
              this.pivotA = pivotA ? pivotA.clone() : new Vec3();
              this.pivotB = pivotB ? pivotB.clone() : new Vec3();
              var x = this.equationX = new ContactEquation(bodyA, bodyB);
              var y = this.equationY = new ContactEquation(bodyA, bodyB);
              var z = this.equationZ = new ContactEquation(bodyA, bodyB);
              this.equations.push(x, y, z);
              x.minForce = y.minForce = z.minForce = -maxForce;
              x.maxForce = y.maxForce = z.maxForce = maxForce;
              x.ni.set(1, 0, 0);
              y.ni.set(0, 1, 0);
              z.ni.set(0, 0, 1);
            }
            PointToPointConstraint.prototype = new Constraint();
            PointToPointConstraint.prototype.update = function() {
              var bodyA = this.bodyA;
              var bodyB = this.bodyB;
              var x = this.equationX;
              var y = this.equationY;
              var z = this.equationZ;
              bodyA.quaternion.vmult(this.pivotA, x.ri);
              bodyB.quaternion.vmult(this.pivotB, x.rj);
              y.ri.copy(x.ri);
              y.rj.copy(x.rj);
              z.ri.copy(x.ri);
              z.rj.copy(x.rj);
            };
          }, {
            "../equations/ContactEquation": 20,
            "../math/Vec3": 32,
            "./Constraint": 14
          } ],
          19: [ function(_dereq_, module, exports) {
            module.exports = ConeEquation;
            var Vec3 = _dereq_("../math/Vec3");
            var Mat3 = _dereq_("../math/Mat3");
            var Equation = _dereq_("./Equation");
            var CMath = _dereq_("../math/CMath");
            function ConeEquation(bodyA, bodyB, options) {
              options = options || {};
              var maxForce = "undefined" !== typeof options.maxForce ? options.maxForce : 1e6;
              Equation.call(this, bodyA, bodyB, -maxForce, maxForce);
              this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1, 0, 0);
              this.axisB = options.axisB ? options.axisB.clone() : new Vec3(0, 1, 0);
              this.angle = "undefined" !== typeof options.angle ? options.angle : 0;
            }
            ConeEquation.prototype = new Equation();
            ConeEquation.prototype.constructor = ConeEquation;
            var tmpVec1 = new Vec3();
            var tmpVec2 = new Vec3();
            ConeEquation.prototype.computeB = function(h) {
              var a = this.a, b = this.b, ni = this.axisA, nj = this.axisB, nixnj = tmpVec1, njxni = tmpVec2, GA = this.jacobianElementA, GB = this.jacobianElementB;
              ni.cross(nj, nixnj);
              nj.cross(ni, njxni);
              GA.rotational.copy(njxni);
              GB.rotational.copy(nixnj);
              var g = CMath.cos(this.angle) - ni.dot(nj), GW = this.computeGW(), GiMf = this.computeGiMf();
              var B = -g * a - GW * b - h * GiMf;
              return B;
            };
          }, {
            "../math/CMath": 27,
            "../math/Mat3": 29,
            "../math/Vec3": 32,
            "./Equation": 21
          } ],
          20: [ function(_dereq_, module, exports) {
            module.exports = ContactEquation;
            var Equation = _dereq_("./Equation");
            var Vec3 = _dereq_("../math/Vec3");
            var Mat3 = _dereq_("../math/Mat3");
            function ContactEquation(bodyA, bodyB, maxForce) {
              maxForce = "undefined" !== typeof maxForce ? maxForce : 1e6;
              Equation.call(this, bodyA, bodyB, 0, maxForce);
              this.si = null;
              this.sj = null;
              this.restitution = 0;
              this.ri = new Vec3();
              this.rj = new Vec3();
              this.ni = new Vec3();
            }
            ContactEquation.prototype = new Equation();
            ContactEquation.prototype.constructor = ContactEquation;
            var ContactEquation_computeB_temp1 = new Vec3();
            var ContactEquation_computeB_temp2 = new Vec3();
            var ContactEquation_computeB_temp3 = new Vec3();
            ContactEquation.prototype.computeB = function(h) {
              var a = this.a, b = this.b, bi = this.bi, bj = this.bj, ri = this.ri, rj = this.rj, rixn = ContactEquation_computeB_temp1, rjxn = ContactEquation_computeB_temp2, vi = bi.velocity, wi = bi.angularVelocity, fi = bi.force, taui = bi.torque, vj = bj.velocity, wj = bj.angularVelocity, fj = bj.force, tauj = bj.torque, penetrationVec = ContactEquation_computeB_temp3, GA = this.jacobianElementA, GB = this.jacobianElementB, n = this.ni;
              ri.cross(n, rixn);
              rj.cross(n, rjxn);
              n.negate(GA.spatial);
              rixn.negate(GA.rotational);
              GB.spatial.copy(n);
              GB.rotational.copy(rjxn);
              penetrationVec.copy(bj.position);
              penetrationVec.vadd(rj, penetrationVec);
              penetrationVec.vsub(bi.position, penetrationVec);
              penetrationVec.vsub(ri, penetrationVec);
              var g = n.dot(penetrationVec);
              var ePlusOne = this.restitution + 1;
              var GW = ePlusOne * vj.dot(n) - ePlusOne * vi.dot(n) + wj.dot(rjxn) - wi.dot(rixn);
              var GiMf = this.computeGiMf();
              var B = -g * a - GW * b - h * GiMf;
              return B;
            };
            var ContactEquation_getImpactVelocityAlongNormal_vi = new Vec3();
            var ContactEquation_getImpactVelocityAlongNormal_vj = new Vec3();
            var ContactEquation_getImpactVelocityAlongNormal_xi = new Vec3();
            var ContactEquation_getImpactVelocityAlongNormal_xj = new Vec3();
            var ContactEquation_getImpactVelocityAlongNormal_relVel = new Vec3();
            ContactEquation.prototype.getImpactVelocityAlongNormal = function() {
              var vi = ContactEquation_getImpactVelocityAlongNormal_vi;
              var vj = ContactEquation_getImpactVelocityAlongNormal_vj;
              var xi = ContactEquation_getImpactVelocityAlongNormal_xi;
              var xj = ContactEquation_getImpactVelocityAlongNormal_xj;
              var relVel = ContactEquation_getImpactVelocityAlongNormal_relVel;
              this.bi.position.vadd(this.ri, xi);
              this.bj.position.vadd(this.rj, xj);
              this.bi.getVelocityAtWorldPoint(xi, vi);
              this.bj.getVelocityAtWorldPoint(xj, vj);
              vi.vsub(vj, relVel);
              return this.ni.dot(relVel);
            };
          }, {
            "../math/Mat3": 29,
            "../math/Vec3": 32,
            "./Equation": 21
          } ],
          21: [ function(_dereq_, module, exports) {
            module.exports = Equation;
            var JacobianElement = _dereq_("../math/JacobianElement"), Vec3 = _dereq_("../math/Vec3");
            function Equation(bi, bj, minForce, maxForce) {
              this.id = Equation.id++;
              this.minForce = "undefined" === typeof minForce ? -1e6 : minForce;
              this.maxForce = "undefined" === typeof maxForce ? 1e6 : maxForce;
              this.bi = bi;
              this.bj = bj;
              this.a = 0;
              this.b = 0;
              this.eps = 0;
              this.jacobianElementA = new JacobianElement();
              this.jacobianElementB = new JacobianElement();
              this.enabled = true;
              this.multiplier = 0;
              this.setSpookParams(1e7, 4, 1 / 60);
            }
            Equation.prototype.constructor = Equation;
            Equation.id = 0;
            Equation.prototype.setSpookParams = function(stiffness, relaxation, timeStep) {
              var d = relaxation, k = stiffness, h = timeStep;
              this.a = 4 / (h * (1 + 4 * d));
              this.b = 4 * d / (1 + 4 * d);
              this.eps = 4 / (h * h * k * (1 + 4 * d));
            };
            Equation.prototype.computeB = function(a, b, h) {
              var GW = this.computeGW(), Gq = this.computeGq(), GiMf = this.computeGiMf();
              return -Gq * a - GW * b - GiMf * h;
            };
            Equation.prototype.computeGq = function() {
              var GA = this.jacobianElementA, GB = this.jacobianElementB, bi = this.bi, bj = this.bj, xi = bi.position, xj = bj.position;
              return GA.spatial.dot(xi) + GB.spatial.dot(xj);
            };
            var zero = new Vec3();
            Equation.prototype.computeGW = function() {
              var GA = this.jacobianElementA, GB = this.jacobianElementB, bi = this.bi, bj = this.bj, vi = bi.velocity, vj = bj.velocity, wi = bi.angularVelocity, wj = bj.angularVelocity;
              return GA.multiplyVectors(vi, wi) + GB.multiplyVectors(vj, wj);
            };
            Equation.prototype.computeGWlambda = function() {
              var GA = this.jacobianElementA, GB = this.jacobianElementB, bi = this.bi, bj = this.bj, vi = bi.vlambda, vj = bj.vlambda, wi = bi.wlambda, wj = bj.wlambda;
              return GA.multiplyVectors(vi, wi) + GB.multiplyVectors(vj, wj);
            };
            var iMfi = new Vec3(), iMfj = new Vec3(), invIi_vmult_taui = new Vec3(), invIj_vmult_tauj = new Vec3();
            Equation.prototype.computeGiMf = function() {
              var GA = this.jacobianElementA, GB = this.jacobianElementB, bi = this.bi, bj = this.bj, fi = bi.force, ti = bi.torque, fj = bj.force, tj = bj.torque, invMassi = bi.invMassSolve, invMassj = bj.invMassSolve;
              fi.scale(invMassi, iMfi);
              fj.scale(invMassj, iMfj);
              bi.invInertiaWorldSolve.vmult(ti, invIi_vmult_taui);
              bj.invInertiaWorldSolve.vmult(tj, invIj_vmult_tauj);
              return GA.multiplyVectors(iMfi, invIi_vmult_taui) + GB.multiplyVectors(iMfj, invIj_vmult_tauj);
            };
            var tmp = new Vec3();
            Equation.prototype.computeGiMGt = function() {
              var GA = this.jacobianElementA, GB = this.jacobianElementB, bi = this.bi, bj = this.bj, invMassi = bi.invMassSolve, invMassj = bj.invMassSolve, invIi = bi.invInertiaWorldSolve, invIj = bj.invInertiaWorldSolve, result = invMassi + invMassj;
              invIi.vmult(GA.rotational, tmp);
              result += tmp.dot(GA.rotational);
              invIj.vmult(GB.rotational, tmp);
              result += tmp.dot(GB.rotational);
              return result;
            };
            var addToWlambda_temp = new Vec3(), addToWlambda_Gi = new Vec3(), addToWlambda_Gj = new Vec3(), addToWlambda_ri = new Vec3(), addToWlambda_rj = new Vec3(), addToWlambda_Mdiag = new Vec3();
            Equation.prototype.addToWlambda = function(deltalambda) {
              var GA = this.jacobianElementA, GB = this.jacobianElementB, bi = this.bi, bj = this.bj, temp = addToWlambda_temp;
              bi.vlambda.addScaledVector(bi.invMassSolve * deltalambda, GA.spatial, bi.vlambda);
              bj.vlambda.addScaledVector(bj.invMassSolve * deltalambda, GB.spatial, bj.vlambda);
              bi.invInertiaWorldSolve.vmult(GA.rotational, temp);
              bi.wlambda.addScaledVector(deltalambda, temp, bi.wlambda);
              bj.invInertiaWorldSolve.vmult(GB.rotational, temp);
              bj.wlambda.addScaledVector(deltalambda, temp, bj.wlambda);
            };
            Equation.prototype.computeC = function() {
              return this.computeGiMGt() + this.eps;
            };
          }, {
            "../math/JacobianElement": 28,
            "../math/Vec3": 32
          } ],
          22: [ function(_dereq_, module, exports) {
            module.exports = FrictionEquation;
            var Equation = _dereq_("./Equation");
            var Vec3 = _dereq_("../math/Vec3");
            var Mat3 = _dereq_("../math/Mat3");
            function FrictionEquation(bodyA, bodyB, slipForce) {
              Equation.call(this, bodyA, bodyB, -slipForce, slipForce);
              this.ri = new Vec3();
              this.rj = new Vec3();
              this.t = new Vec3();
            }
            FrictionEquation.prototype = new Equation();
            FrictionEquation.prototype.constructor = FrictionEquation;
            var FrictionEquation_computeB_temp1 = new Vec3();
            var FrictionEquation_computeB_temp2 = new Vec3();
            FrictionEquation.prototype.computeB = function(h) {
              var a = this.a, b = this.b, bi = this.bi, bj = this.bj, ri = this.ri, rj = this.rj, rixt = FrictionEquation_computeB_temp1, rjxt = FrictionEquation_computeB_temp2, t = this.t;
              ri.cross(t, rixt);
              rj.cross(t, rjxt);
              var GA = this.jacobianElementA, GB = this.jacobianElementB;
              t.negate(GA.spatial);
              rixt.negate(GA.rotational);
              GB.spatial.copy(t);
              GB.rotational.copy(rjxt);
              var GW = this.computeGW();
              var GiMf = this.computeGiMf();
              var B = -GW * b - h * GiMf;
              return B;
            };
          }, {
            "../math/Mat3": 29,
            "../math/Vec3": 32,
            "./Equation": 21
          } ],
          23: [ function(_dereq_, module, exports) {
            module.exports = RotationalEquation;
            var Vec3 = _dereq_("../math/Vec3");
            var Mat3 = _dereq_("../math/Mat3");
            var Equation = _dereq_("./Equation");
            var CMath = _dereq_("../math/CMath");
            function RotationalEquation(bodyA, bodyB, options) {
              options = options || {};
              var maxForce = "undefined" !== typeof options.maxForce ? options.maxForce : 1e6;
              Equation.call(this, bodyA, bodyB, -maxForce, maxForce);
              this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1, 0, 0);
              this.axisB = options.axisB ? options.axisB.clone() : new Vec3(0, 1, 0);
              this.maxAngle = Math.PI / 2;
            }
            RotationalEquation.prototype = new Equation();
            RotationalEquation.prototype.constructor = RotationalEquation;
            var tmpVec1 = new Vec3();
            var tmpVec2 = new Vec3();
            RotationalEquation.prototype.computeB = function(h) {
              var a = this.a, b = this.b, ni = this.axisA, nj = this.axisB, nixnj = tmpVec1, njxni = tmpVec2, GA = this.jacobianElementA, GB = this.jacobianElementB;
              ni.cross(nj, nixnj);
              nj.cross(ni, njxni);
              GA.rotational.copy(njxni);
              GB.rotational.copy(nixnj);
              var g = CMath.cos(this.maxAngle) - ni.dot(nj), GW = this.computeGW(), GiMf = this.computeGiMf();
              var B = -g * a - GW * b - h * GiMf;
              return B;
            };
          }, {
            "../math/CMath": 27,
            "../math/Mat3": 29,
            "../math/Vec3": 32,
            "./Equation": 21
          } ],
          24: [ function(_dereq_, module, exports) {
            module.exports = RotationalMotorEquation;
            var Vec3 = _dereq_("../math/Vec3");
            var Mat3 = _dereq_("../math/Mat3");
            var Equation = _dereq_("./Equation");
            function RotationalMotorEquation(bodyA, bodyB, maxForce) {
              maxForce = "undefined" !== typeof maxForce ? maxForce : 1e6;
              Equation.call(this, bodyA, bodyB, -maxForce, maxForce);
              this.axisA = new Vec3();
              this.axisB = new Vec3();
              this.targetVelocity = 0;
            }
            RotationalMotorEquation.prototype = new Equation();
            RotationalMotorEquation.prototype.constructor = RotationalMotorEquation;
            RotationalMotorEquation.prototype.computeB = function(h) {
              var a = this.a, b = this.b, bi = this.bi, bj = this.bj, axisA = this.axisA, axisB = this.axisB, GA = this.jacobianElementA, GB = this.jacobianElementB;
              GA.rotational.copy(axisA);
              axisB.negate(GB.rotational);
              var GW = this.computeGW() - this.targetVelocity, GiMf = this.computeGiMf();
              var B = -GW * b - h * GiMf;
              return B;
            };
          }, {
            "../math/Mat3": 29,
            "../math/Vec3": 32,
            "./Equation": 21
          } ],
          25: [ function(_dereq_, module, exports) {
            var Utils = _dereq_("../utils/Utils");
            module.exports = ContactMaterial;
            function ContactMaterial(m1, m2, options) {
              options = Utils.defaults(options, {
                friction: .3,
                restitution: .3,
                contactEquationStiffness: 1e7,
                contactEquationRelaxation: 3,
                frictionEquationStiffness: 1e7,
                frictionEquationRelaxation: 3
              });
              this.id = ContactMaterial.idCounter++;
              this.materials = [ m1, m2 ];
              this.friction = options.friction;
              this.restitution = options.restitution;
              this.contactEquationStiffness = options.contactEquationStiffness;
              this.contactEquationRelaxation = options.contactEquationRelaxation;
              this.frictionEquationStiffness = options.frictionEquationStiffness;
              this.frictionEquationRelaxation = options.frictionEquationRelaxation;
            }
            ContactMaterial.idCounter = 0;
          }, {
            "../utils/Utils": 55
          } ],
          26: [ function(_dereq_, module, exports) {
            module.exports = Material;
            function Material(options) {
              var name = "";
              options = options || {};
              if ("string" === typeof options) {
                name = options;
                options = {};
              } else "object" === typeof options && (name = "");
              this.name = name;
              this.id = Material.idCounter++;
              this.friction = "undefined" !== typeof options.friction ? options.friction : -1;
              this.restitution = "undefined" !== typeof options.restitution ? options.restitution : -1;
            }
            Material.idCounter = 0;
          }, {} ],
          27: [ function(_dereq_, module, exports) {
            var rad2ang = 180 / Math.PI;
            function radian2angle(rad) {
              return rad * rad2ang;
            }
            var sinArr = {};
            function calculateSinByDigit(digit) {
              if (sinArr.digit == digit) return;
              var step = 1 / Math.pow(10, digit);
              for (var i = 0; i <= 90; i += step) sinArr[i.toFixed(digit)] = Math.sin(i / rad2ang);
              sinArr.digit = digit;
            }
            function sin360(angle, digit) {
              if (angle <= 90) return sinArr[angle.toFixed(digit)];
              if (angle <= 180) {
                angle = 180 - angle;
                return sinArr[angle.toFixed(digit)];
              }
              if (angle <= 270) {
                angle -= 180;
                return -sinArr[angle.toFixed(digit)];
              }
              angle = 360 - angle;
              return -sinArr[angle.toFixed(digit)];
            }
            function sin(rad) {
              var angle = radian2angle(rad) % 360;
              angle < 0 && (angle += 360);
              return sin360(angle, CMath._digit);
            }
            function cos(rad) {
              var angle = (radian2angle(rad) + 90) % 360;
              angle < 0 && (angle += 360);
              return sin360(angle, CMath._digit);
            }
            function sinNative(rad) {
              return Math.sin(rad).toFixed(CMath.digit);
            }
            function cosNative(rad) {
              return Math.cos(rad).toFixed(CMath.digit);
            }
            var CMath = {
              sin: Math.sin,
              cos: Math.cos,
              atan2: Math.atan2
            };
            CMath._sin = sin;
            CMath._cos = cos;
            CMath._sinArr = sinArr;
            CMath._sin360 = sin360;
            CMath._sinNative = sinNative;
            CMath._cosNative = cosNative;
            CMath._radian2angle = radian2angle;
            CMath._calculateSinByDigit = calculateSinByDigit;
            CMath._digit = 1;
            Object.defineProperty(CMath, "digit", {
              get: function get() {
                return this._digit;
              },
              set: function set(v) {
                this._digit = v;
                1 == this._mode && calculateSinByDigit(v);
              }
            });
            CMath._mode = 0;
            Object.defineProperty(CMath, "mode", {
              get: function get() {
                return this._mode;
              },
              set: function set(v) {
                if (this._mode != v) {
                  this._mode = v;
                  if (0 == v) {
                    CMath.sin = Math.sin;
                    CMath.cos = Math.cos;
                  } else if (1 == v) {
                    CMath.digit = CMath._digit;
                    CMath.sin = sin;
                    CMath.cos = cos;
                  } else if (2 == v) {
                    CMath.sin = sinNative;
                    CMath.cos = cosNative;
                  }
                }
              }
            });
            module.exports = CMath;
          }, {} ],
          28: [ function(_dereq_, module, exports) {
            module.exports = JacobianElement;
            var Vec3 = _dereq_("./Vec3");
            function JacobianElement() {
              this.spatial = new Vec3();
              this.rotational = new Vec3();
            }
            JacobianElement.prototype.multiplyElement = function(element) {
              return element.spatial.dot(this.spatial) + element.rotational.dot(this.rotational);
            };
            JacobianElement.prototype.multiplyVectors = function(spatial, rotational) {
              return spatial.dot(this.spatial) + rotational.dot(this.rotational);
            };
          }, {
            "./Vec3": 32
          } ],
          29: [ function(_dereq_, module, exports) {
            module.exports = Mat3;
            var Vec3 = _dereq_("./Vec3");
            function Mat3(elements) {
              this.elements = elements || [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
            }
            Mat3.prototype.identity = function() {
              var e = this.elements;
              e[0] = 1;
              e[1] = 0;
              e[2] = 0;
              e[3] = 0;
              e[4] = 1;
              e[5] = 0;
              e[6] = 0;
              e[7] = 0;
              e[8] = 1;
            };
            Mat3.prototype.setZero = function() {
              var e = this.elements;
              e[0] = 0;
              e[1] = 0;
              e[2] = 0;
              e[3] = 0;
              e[4] = 0;
              e[5] = 0;
              e[6] = 0;
              e[7] = 0;
              e[8] = 0;
            };
            Mat3.prototype.setTrace = function(vec3) {
              var e = this.elements;
              e[0] = vec3.x;
              e[4] = vec3.y;
              e[8] = vec3.z;
            };
            Mat3.prototype.getTrace = function(target) {
              var target = target || new Vec3();
              var e = this.elements;
              target.x = e[0];
              target.y = e[4];
              target.z = e[8];
            };
            Mat3.prototype.vmult = function(v, target) {
              target = target || new Vec3();
              var e = this.elements, x = v.x, y = v.y, z = v.z;
              target.x = e[0] * x + e[1] * y + e[2] * z;
              target.y = e[3] * x + e[4] * y + e[5] * z;
              target.z = e[6] * x + e[7] * y + e[8] * z;
              return target;
            };
            Mat3.prototype.smult = function(s) {
              for (var i = 0; i < this.elements.length; i++) this.elements[i] *= s;
            };
            Mat3.prototype.mmult = function(m, target) {
              var r = target || new Mat3();
              for (var i = 0; i < 3; i++) for (var j = 0; j < 3; j++) {
                var sum = 0;
                for (var k = 0; k < 3; k++) sum += m.elements[i + 3 * k] * this.elements[k + 3 * j];
                r.elements[i + 3 * j] = sum;
              }
              return r;
            };
            Mat3.prototype.scale = function(v, target) {
              target = target || new Mat3();
              var e = this.elements, t = target.elements;
              for (var i = 0; 3 !== i; i++) {
                t[3 * i + 0] = v.x * e[3 * i + 0];
                t[3 * i + 1] = v.y * e[3 * i + 1];
                t[3 * i + 2] = v.z * e[3 * i + 2];
              }
              return target;
            };
            Mat3.prototype.solve = function(b, target) {
              target = target || new Vec3();
              var nr = 3;
              var nc = 4;
              var eqns = [];
              for (var i = 0; i < nr * nc; i++) eqns.push(0);
              var i, j;
              for (i = 0; i < 3; i++) for (j = 0; j < 3; j++) eqns[i + nc * j] = this.elements[i + 3 * j];
              eqns[3] = b.x;
              eqns[7] = b.y;
              eqns[11] = b.z;
              var n = 3, k = n, np;
              var kp = 4;
              var p, els;
              do {
                i = k - n;
                if (0 === eqns[i + nc * i]) for (j = i + 1; j < k; j++) if (0 !== eqns[i + nc * j]) {
                  np = kp;
                  do {
                    p = kp - np;
                    eqns[p + nc * i] += eqns[p + nc * j];
                  } while (--np);
                  break;
                }
                if (0 !== eqns[i + nc * i]) for (j = i + 1; j < k; j++) {
                  var multiplier = eqns[i + nc * j] / eqns[i + nc * i];
                  np = kp;
                  do {
                    p = kp - np;
                    eqns[p + nc * j] = p <= i ? 0 : eqns[p + nc * j] - eqns[p + nc * i] * multiplier;
                  } while (--np);
                }
              } while (--n);
              target.z = eqns[2 * nc + 3] / eqns[2 * nc + 2];
              target.y = (eqns[1 * nc + 3] - eqns[1 * nc + 2] * target.z) / eqns[1 * nc + 1];
              target.x = (eqns[0 * nc + 3] - eqns[0 * nc + 2] * target.z - eqns[0 * nc + 1] * target.y) / eqns[0 * nc + 0];
              if (isNaN(target.x) || isNaN(target.y) || isNaN(target.z) || Infinity === target.x || Infinity === target.y || Infinity === target.z) throw "Could not solve equation! Got x=[" + target.toString() + "], b=[" + b.toString() + "], A=[" + this.toString() + "]";
              return target;
            };
            Mat3.prototype.e = function(row, column, value) {
              if (void 0 === value) return this.elements[column + 3 * row];
              this.elements[column + 3 * row] = value;
            };
            Mat3.prototype.copy = function(source) {
              for (var i = 0; i < source.elements.length; i++) this.elements[i] = source.elements[i];
              return this;
            };
            Mat3.prototype.toString = function() {
              var r = "";
              var sep = ",";
              for (var i = 0; i < 9; i++) r += this.elements[i] + sep;
              return r;
            };
            Mat3.prototype.reverse = function(target) {
              target = target || new Mat3();
              var nr = 3;
              var nc = 6;
              var eqns = [];
              for (var i = 0; i < nr * nc; i++) eqns.push(0);
              var i, j;
              for (i = 0; i < 3; i++) for (j = 0; j < 3; j++) eqns[i + nc * j] = this.elements[i + 3 * j];
              eqns[3] = 1;
              eqns[9] = 0;
              eqns[15] = 0;
              eqns[4] = 0;
              eqns[10] = 1;
              eqns[16] = 0;
              eqns[5] = 0;
              eqns[11] = 0;
              eqns[17] = 1;
              var n = 3, k = n, np;
              var kp = nc;
              var p;
              do {
                i = k - n;
                if (0 === eqns[i + nc * i]) for (j = i + 1; j < k; j++) if (0 !== eqns[i + nc * j]) {
                  np = kp;
                  do {
                    p = kp - np;
                    eqns[p + nc * i] += eqns[p + nc * j];
                  } while (--np);
                  break;
                }
                if (0 !== eqns[i + nc * i]) for (j = i + 1; j < k; j++) {
                  var multiplier = eqns[i + nc * j] / eqns[i + nc * i];
                  np = kp;
                  do {
                    p = kp - np;
                    eqns[p + nc * j] = p <= i ? 0 : eqns[p + nc * j] - eqns[p + nc * i] * multiplier;
                  } while (--np);
                }
              } while (--n);
              i = 2;
              do {
                j = i - 1;
                do {
                  var multiplier = eqns[i + nc * j] / eqns[i + nc * i];
                  np = nc;
                  do {
                    p = nc - np;
                    eqns[p + nc * j] = eqns[p + nc * j] - eqns[p + nc * i] * multiplier;
                  } while (--np);
                } while (j--);
              } while (--i);
              i = 2;
              do {
                var multiplier = 1 / eqns[i + nc * i];
                np = nc;
                do {
                  p = nc - np;
                  eqns[p + nc * i] = eqns[p + nc * i] * multiplier;
                } while (--np);
              } while (i--);
              i = 2;
              do {
                j = 2;
                do {
                  p = eqns[nr + j + nc * i];
                  if (isNaN(p) || Infinity === p) throw "Could not reverse! A=[" + this.toString() + "]";
                  target.e(i, j, p);
                } while (j--);
              } while (i--);
              return target;
            };
            Mat3.prototype.setRotationFromQuaternion = function(q) {
              var x = q.x, y = q.y, z = q.z, w = q.w, x2 = x + x, y2 = y + y, z2 = z + z, xx = x * x2, xy = x * y2, xz = x * z2, yy = y * y2, yz = y * z2, zz = z * z2, wx = w * x2, wy = w * y2, wz = w * z2, e = this.elements;
              e[0] = 1 - (yy + zz);
              e[1] = xy - wz;
              e[2] = xz + wy;
              e[3] = xy + wz;
              e[4] = 1 - (xx + zz);
              e[5] = yz - wx;
              e[6] = xz - wy;
              e[7] = yz + wx;
              e[8] = 1 - (xx + yy);
              return this;
            };
            Mat3.prototype.transpose = function(target) {
              target = target || new Mat3();
              var Mt = target.elements, M = this.elements;
              for (var i = 0; 3 !== i; i++) for (var j = 0; 3 !== j; j++) Mt[3 * i + j] = M[3 * j + i];
              return target;
            };
          }, {
            "./Vec3": 32
          } ],
          30: [ function(_dereq_, module, exports) {
            module.exports = Quaternion;
            var Vec3 = _dereq_("./Vec3");
            var CMath = _dereq_("./CMath");
            function Quaternion(x, y, z, w) {
              this.x = void 0 !== x ? x : 0;
              this.y = void 0 !== y ? y : 0;
              this.z = void 0 !== z ? z : 0;
              this.w = void 0 !== w ? w : 1;
            }
            Quaternion.prototype.set = function(x, y, z, w) {
              this.x = x;
              this.y = y;
              this.z = z;
              this.w = w;
              return this;
            };
            Quaternion.prototype.toString = function() {
              return this.x + "," + this.y + "," + this.z + "," + this.w;
            };
            Quaternion.prototype.toArray = function() {
              return [ this.x, this.y, this.z, this.w ];
            };
            Quaternion.prototype.setFromAxisAngle = function(axis, angle) {
              var s = CMath.sin(.5 * angle);
              this.x = axis.x * s;
              this.y = axis.y * s;
              this.z = axis.z * s;
              this.w = CMath.cos(.5 * angle);
              return this;
            };
            Quaternion.prototype.toAxisAngle = function(targetAxis) {
              targetAxis = targetAxis || new Vec3();
              this.normalize();
              var angle = 2 * Math.acos(this.w);
              var s = Math.sqrt(1 - this.w * this.w);
              if (s < .001) {
                targetAxis.x = this.x;
                targetAxis.y = this.y;
                targetAxis.z = this.z;
              } else {
                targetAxis.x = this.x / s;
                targetAxis.y = this.y / s;
                targetAxis.z = this.z / s;
              }
              return [ targetAxis, angle ];
            };
            var sfv_t1 = new Vec3(), sfv_t2 = new Vec3();
            Quaternion.prototype.setFromVectors = function(u, v) {
              if (u.isAntiparallelTo(v)) {
                var t1 = sfv_t1;
                var t2 = sfv_t2;
                u.tangents(t1, t2);
                this.setFromAxisAngle(t1, Math.PI);
              } else {
                var a = u.cross(v);
                this.x = a.x;
                this.y = a.y;
                this.z = a.z;
                this.w = Math.sqrt(Math.pow(u.norm(), 2) * Math.pow(v.norm(), 2)) + u.dot(v);
                this.normalize();
              }
              return this;
            };
            var Quaternion_mult_va = new Vec3();
            var Quaternion_mult_vb = new Vec3();
            var Quaternion_mult_vaxvb = new Vec3();
            Quaternion.prototype.mult = function(q, target) {
              target = target || new Quaternion();
              var ax = this.x, ay = this.y, az = this.z, aw = this.w, bx = q.x, by = q.y, bz = q.z, bw = q.w;
              target.x = ax * bw + aw * bx + ay * bz - az * by;
              target.y = ay * bw + aw * by + az * bx - ax * bz;
              target.z = az * bw + aw * bz + ax * by - ay * bx;
              target.w = aw * bw - ax * bx - ay * by - az * bz;
              return target;
            };
            Quaternion.prototype.inverse = function(target) {
              var x = this.x, y = this.y, z = this.z, w = this.w;
              target = target || new Quaternion();
              this.conjugate(target);
              var inorm2 = 1 / (x * x + y * y + z * z + w * w);
              target.x *= inorm2;
              target.y *= inorm2;
              target.z *= inorm2;
              target.w *= inorm2;
              return target;
            };
            Quaternion.prototype.conjugate = function(target) {
              target = target || new Quaternion();
              target.x = -this.x;
              target.y = -this.y;
              target.z = -this.z;
              target.w = this.w;
              return target;
            };
            Quaternion.prototype.normalize = function() {
              var l = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
              if (0 === l) {
                this.x = 0;
                this.y = 0;
                this.z = 0;
                this.w = 0;
              } else {
                l = 1 / l;
                this.x *= l;
                this.y *= l;
                this.z *= l;
                this.w *= l;
              }
              return this;
            };
            Quaternion.prototype.normalizeFast = function() {
              var f = (3 - (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)) / 2;
              if (0 === f) {
                this.x = 0;
                this.y = 0;
                this.z = 0;
                this.w = 0;
              } else {
                this.x *= f;
                this.y *= f;
                this.z *= f;
                this.w *= f;
              }
              return this;
            };
            Quaternion.prototype.vmult = function(v, target) {
              target = target || new Vec3();
              var x = v.x, y = v.y, z = v.z;
              var qx = this.x, qy = this.y, qz = this.z, qw = this.w;
              var ix = qw * x + qy * z - qz * y, iy = qw * y + qz * x - qx * z, iz = qw * z + qx * y - qy * x, iw = -qx * x - qy * y - qz * z;
              target.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
              target.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
              target.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
              return target;
            };
            Quaternion.prototype.copy = function(source) {
              this.x = source.x;
              this.y = source.y;
              this.z = source.z;
              this.w = source.w;
              return this;
            };
            Quaternion.prototype.toEuler = function(target, order) {
              order = order || "YZX";
              var heading, attitude, bank;
              var x = this.x, y = this.y, z = this.z, w = this.w;
              switch (order) {
               case "YZX":
                var test = x * y + z * w;
                if (test > .499) {
                  heading = 2 * CMath.atan2(x, w);
                  attitude = Math.PI / 2;
                  bank = 0;
                }
                if (test < -.499) {
                  heading = -2 * CMath.atan2(x, w);
                  attitude = -Math.PI / 2;
                  bank = 0;
                }
                if (isNaN(heading)) {
                  var sqx = x * x;
                  var sqy = y * y;
                  var sqz = z * z;
                  heading = CMath.atan2(2 * y * w - 2 * x * z, 1 - 2 * sqy - 2 * sqz);
                  attitude = Math.asin(2 * test);
                  bank = CMath.atan2(2 * x * w - 2 * y * z, 1 - 2 * sqx - 2 * sqz);
                }
                break;

               default:
                throw new Error("Euler order " + order + " not supported yet.");
              }
              target.y = heading;
              target.z = attitude;
              target.x = bank;
            };
            Quaternion.prototype.setFromEuler = function(x, y, z, order) {
              order = order || "XYZ";
              var c1 = CMath.cos(x / 2);
              var c2 = CMath.cos(y / 2);
              var c3 = CMath.cos(z / 2);
              var s1 = CMath.sin(x / 2);
              var s2 = CMath.sin(y / 2);
              var s3 = CMath.sin(z / 2);
              if ("XYZ" === order) {
                this.x = s1 * c2 * c3 + c1 * s2 * s3;
                this.y = c1 * s2 * c3 - s1 * c2 * s3;
                this.z = c1 * c2 * s3 + s1 * s2 * c3;
                this.w = c1 * c2 * c3 - s1 * s2 * s3;
              } else if ("YXZ" === order) {
                this.x = s1 * c2 * c3 + c1 * s2 * s3;
                this.y = c1 * s2 * c3 - s1 * c2 * s3;
                this.z = c1 * c2 * s3 - s1 * s2 * c3;
                this.w = c1 * c2 * c3 + s1 * s2 * s3;
              } else if ("ZXY" === order) {
                this.x = s1 * c2 * c3 - c1 * s2 * s3;
                this.y = c1 * s2 * c3 + s1 * c2 * s3;
                this.z = c1 * c2 * s3 + s1 * s2 * c3;
                this.w = c1 * c2 * c3 - s1 * s2 * s3;
              } else if ("ZYX" === order) {
                this.x = s1 * c2 * c3 - c1 * s2 * s3;
                this.y = c1 * s2 * c3 + s1 * c2 * s3;
                this.z = c1 * c2 * s3 - s1 * s2 * c3;
                this.w = c1 * c2 * c3 + s1 * s2 * s3;
              } else if ("YZX" === order) {
                this.x = s1 * c2 * c3 + c1 * s2 * s3;
                this.y = c1 * s2 * c3 + s1 * c2 * s3;
                this.z = c1 * c2 * s3 - s1 * s2 * c3;
                this.w = c1 * c2 * c3 - s1 * s2 * s3;
              } else if ("XZY" === order) {
                this.x = s1 * c2 * c3 - c1 * s2 * s3;
                this.y = c1 * s2 * c3 - s1 * c2 * s3;
                this.z = c1 * c2 * s3 + s1 * s2 * c3;
                this.w = c1 * c2 * c3 + s1 * s2 * s3;
              }
              return this;
            };
            Quaternion.prototype.clone = function() {
              return new Quaternion(this.x, this.y, this.z, this.w);
            };
            Quaternion.prototype.slerp = function(toQuat, t, target) {
              target = target || new Quaternion();
              var ax = this.x, ay = this.y, az = this.z, aw = this.w, bx = toQuat.x, by = toQuat.y, bz = toQuat.z, bw = toQuat.w;
              var omega, cosom, sinom, scale0, scale1;
              cosom = ax * bx + ay * by + az * bz + aw * bw;
              if (cosom < 0) {
                cosom = -cosom;
                bx = -bx;
                by = -by;
                bz = -bz;
                bw = -bw;
              }
              if (1 - cosom > 1e-6) {
                omega = Math.acos(cosom);
                sinom = CMath.sin(omega);
                scale0 = CMath.sin((1 - t) * omega) / sinom;
                scale1 = CMath.sin(t * omega) / sinom;
              } else {
                scale0 = 1 - t;
                scale1 = t;
              }
              target.x = scale0 * ax + scale1 * bx;
              target.y = scale0 * ay + scale1 * by;
              target.z = scale0 * az + scale1 * bz;
              target.w = scale0 * aw + scale1 * bw;
              return target;
            };
            Quaternion.prototype.integrate = function(angularVelocity, dt, angularFactor, target) {
              target = target || new Quaternion();
              var ax = angularVelocity.x * angularFactor.x, ay = angularVelocity.y * angularFactor.y, az = angularVelocity.z * angularFactor.z, bx = this.x, by = this.y, bz = this.z, bw = this.w;
              var half_dt = .5 * dt;
              target.x += half_dt * (ax * bw + ay * bz - az * by);
              target.y += half_dt * (ay * bw + az * bx - ax * bz);
              target.z += half_dt * (az * bw + ax * by - ay * bx);
              target.w += half_dt * (-ax * bx - ay * by - az * bz);
              return target;
            };
          }, {
            "./CMath": 27,
            "./Vec3": 32
          } ],
          31: [ function(_dereq_, module, exports) {
            var Vec3 = _dereq_("./Vec3");
            var Quaternion = _dereq_("./Quaternion");
            module.exports = Transform;
            function Transform(options) {
              options = options || {};
              this.position = new Vec3();
              options.position && this.position.copy(options.position);
              this.quaternion = new Quaternion();
              options.quaternion && this.quaternion.copy(options.quaternion);
            }
            var tmpQuat = new Quaternion();
            Transform.pointToLocalFrame = function(position, quaternion, worldPoint, result) {
              var result = result || new Vec3();
              worldPoint.vsub(position, result);
              quaternion.conjugate(tmpQuat);
              tmpQuat.vmult(result, result);
              return result;
            };
            Transform.prototype.pointToLocal = function(worldPoint, result) {
              return Transform.pointToLocalFrame(this.position, this.quaternion, worldPoint, result);
            };
            Transform.pointToWorldFrame = function(position, quaternion, localPoint, result) {
              var result = result || new Vec3();
              quaternion.vmult(localPoint, result);
              result.vadd(position, result);
              return result;
            };
            Transform.prototype.pointToWorld = function(localPoint, result) {
              return Transform.pointToWorldFrame(this.position, this.quaternion, localPoint, result);
            };
            Transform.prototype.vectorToWorldFrame = function(localVector, result) {
              var result = result || new Vec3();
              this.quaternion.vmult(localVector, result);
              return result;
            };
            Transform.vectorToWorldFrame = function(quaternion, localVector, result) {
              quaternion.vmult(localVector, result);
              return result;
            };
            Transform.vectorToLocalFrame = function(position, quaternion, worldVector, result) {
              var result = result || new Vec3();
              quaternion.w *= -1;
              quaternion.vmult(worldVector, result);
              quaternion.w *= -1;
              return result;
            };
          }, {
            "./Quaternion": 30,
            "./Vec3": 32
          } ],
          32: [ function(_dereq_, module, exports) {
            module.exports = Vec3;
            var Mat3 = _dereq_("./Mat3");
            function Vec3(x, y, z) {
              this.x = x || 0;
              this.y = y || 0;
              this.z = z || 0;
            }
            Vec3.ZERO = new Vec3(0, 0, 0);
            Vec3.UNIT_X = new Vec3(1, 0, 0);
            Vec3.UNIT_Y = new Vec3(0, 1, 0);
            Vec3.UNIT_Z = new Vec3(0, 0, 1);
            Vec3.prototype.cross = function(v, target) {
              var vx = v.x, vy = v.y, vz = v.z, x = this.x, y = this.y, z = this.z;
              target = target || new Vec3();
              target.x = y * vz - z * vy;
              target.y = z * vx - x * vz;
              target.z = x * vy - y * vx;
              return target;
            };
            Vec3.prototype.set = function(x, y, z) {
              this.x = x;
              this.y = y;
              this.z = z;
              return this;
            };
            Vec3.prototype.setZero = function() {
              this.x = this.y = this.z = 0;
            };
            Vec3.prototype.vadd = function(v, target) {
              if (!target) return new Vec3(this.x + v.x, this.y + v.y, this.z + v.z);
              target.x = v.x + this.x;
              target.y = v.y + this.y;
              target.z = v.z + this.z;
            };
            Vec3.prototype.vsub = function(v, target) {
              if (!target) return new Vec3(this.x - v.x, this.y - v.y, this.z - v.z);
              target.x = this.x - v.x;
              target.y = this.y - v.y;
              target.z = this.z - v.z;
            };
            Vec3.prototype.crossmat = function() {
              return new Mat3([ 0, -this.z, this.y, this.z, 0, -this.x, -this.y, this.x, 0 ]);
            };
            Vec3.prototype.normalize = function() {
              var x = this.x, y = this.y, z = this.z;
              var n = Math.sqrt(x * x + y * y + z * z);
              if (n > 0) {
                var invN = 1 / n;
                this.x *= invN;
                this.y *= invN;
                this.z *= invN;
              } else {
                this.x = 0;
                this.y = 0;
                this.z = 0;
              }
              return n;
            };
            Vec3.prototype.unit = function(target) {
              target = target || new Vec3();
              var x = this.x, y = this.y, z = this.z;
              var ninv = Math.sqrt(x * x + y * y + z * z);
              if (ninv > 0) {
                ninv = 1 / ninv;
                target.x = x * ninv;
                target.y = y * ninv;
                target.z = z * ninv;
              } else {
                target.x = 1;
                target.y = 0;
                target.z = 0;
              }
              return target;
            };
            Vec3.prototype.norm = function() {
              var x = this.x, y = this.y, z = this.z;
              return Math.sqrt(x * x + y * y + z * z);
            };
            Vec3.prototype.length = Vec3.prototype.norm;
            Vec3.prototype.norm2 = function() {
              return this.dot(this);
            };
            Vec3.prototype.lengthSquared = Vec3.prototype.norm2;
            Vec3.prototype.distanceTo = function(p) {
              var x = this.x, y = this.y, z = this.z;
              var px = p.x, py = p.y, pz = p.z;
              return Math.sqrt((px - x) * (px - x) + (py - y) * (py - y) + (pz - z) * (pz - z));
            };
            Vec3.prototype.distanceSquared = function(p) {
              var x = this.x, y = this.y, z = this.z;
              var px = p.x, py = p.y, pz = p.z;
              return (px - x) * (px - x) + (py - y) * (py - y) + (pz - z) * (pz - z);
            };
            Vec3.prototype.mult = function(scalar, target) {
              target = target || new Vec3();
              var x = this.x, y = this.y, z = this.z;
              target.x = scalar * x;
              target.y = scalar * y;
              target.z = scalar * z;
              return target;
            };
            Vec3.prototype.vmul = function(vector, target) {
              target = target || new Vec3();
              target.x = vector.x * this.x;
              target.y = vector.y * this.y;
              target.z = vector.z * this.z;
              return target;
            };
            Vec3.prototype.scale = Vec3.prototype.mult;
            Vec3.prototype.addScaledVector = function(scalar, vector, target) {
              target = target || new Vec3();
              target.x = this.x + scalar * vector.x;
              target.y = this.y + scalar * vector.y;
              target.z = this.z + scalar * vector.z;
              return target;
            };
            Vec3.prototype.dot = function(v) {
              return this.x * v.x + this.y * v.y + this.z * v.z;
            };
            Vec3.prototype.isZero = function() {
              return 0 === this.x && 0 === this.y && 0 === this.z;
            };
            Vec3.prototype.negate = function(target) {
              target = target || new Vec3();
              target.x = -this.x;
              target.y = -this.y;
              target.z = -this.z;
              return target;
            };
            var Vec3_tangents_n = new Vec3();
            var Vec3_tangents_randVec = new Vec3();
            Vec3.prototype.tangents = function(t1, t2) {
              var norm = this.norm();
              if (norm > 0) {
                var n = Vec3_tangents_n;
                var inorm = 1 / norm;
                n.set(this.x * inorm, this.y * inorm, this.z * inorm);
                var randVec = Vec3_tangents_randVec;
                if (Math.abs(n.x) < .9) {
                  randVec.set(1, 0, 0);
                  n.cross(randVec, t1);
                } else {
                  randVec.set(0, 1, 0);
                  n.cross(randVec, t1);
                }
                n.cross(t1, t2);
              } else {
                t1.set(1, 0, 0);
                t2.set(0, 1, 0);
              }
            };
            Vec3.prototype.toString = function() {
              return this.x + "," + this.y + "," + this.z;
            };
            Vec3.prototype.toArray = function() {
              return [ this.x, this.y, this.z ];
            };
            Vec3.prototype.copy = function(source) {
              this.x = source.x;
              this.y = source.y;
              this.z = source.z;
              return this;
            };
            Vec3.prototype.lerp = function(v, t, target) {
              var x = this.x, y = this.y, z = this.z;
              target.x = x + (v.x - x) * t;
              target.y = y + (v.y - y) * t;
              target.z = z + (v.z - z) * t;
            };
            Vec3.prototype.almostEquals = function(v, precision) {
              void 0 === precision && (precision = 1e-6);
              if (Math.abs(this.x - v.x) > precision || Math.abs(this.y - v.y) > precision || Math.abs(this.z - v.z) > precision) return false;
              return true;
            };
            Vec3.prototype.almostZero = function(precision) {
              void 0 === precision && (precision = 1e-6);
              if (Math.abs(this.x) > precision || Math.abs(this.y) > precision || Math.abs(this.z) > precision) return false;
              return true;
            };
            var antip_neg = new Vec3();
            Vec3.prototype.isAntiparallelTo = function(v, precision) {
              this.negate(antip_neg);
              return antip_neg.almostEquals(v, precision);
            };
            Vec3.prototype.clone = function() {
              return new Vec3(this.x, this.y, this.z);
            };
          }, {
            "./Mat3": 29
          } ],
          33: [ function(_dereq_, module, exports) {
            module.exports = Body;
            var EventTarget = _dereq_("../utils/EventTarget");
            var Shape = _dereq_("../shapes/Shape");
            var Vec3 = _dereq_("../math/Vec3");
            var Mat3 = _dereq_("../math/Mat3");
            var Quaternion = _dereq_("../math/Quaternion");
            var Material = _dereq_("../material/Material");
            var AABB = _dereq_("../collision/AABB");
            var Box = _dereq_("../shapes/Box");
            var World = _dereq_("../world/World");
            function Body(options) {
              options = options || {};
              EventTarget.apply(this);
              this.id = Body.idCounter++;
              this.world = null;
              this.preStep = null;
              this.postStep = null;
              this.vlambda = new Vec3();
              this.collisionFilterGroup = "number" === typeof options.collisionFilterGroup ? options.collisionFilterGroup : 1;
              this.collisionFilterMask = "number" === typeof options.collisionFilterMask ? options.collisionFilterMask : -1;
              this.collisionResponse = true;
              this.position = new Vec3();
              this.previousPosition = new Vec3();
              this.interpolatedPosition = new Vec3();
              this.initPosition = new Vec3();
              if (options.position) {
                this.position.copy(options.position);
                this.previousPosition.copy(options.position);
                this.interpolatedPosition.copy(options.position);
                this.initPosition.copy(options.position);
              }
              this.velocity = new Vec3();
              options.velocity && this.velocity.copy(options.velocity);
              this.initVelocity = new Vec3();
              this.force = new Vec3();
              var mass = "number" === typeof options.mass ? options.mass : 0;
              this.mass = mass;
              this.invMass = mass > 0 ? 1 / mass : 0;
              this.material = options.material || null;
              this.linearDamping = "number" === typeof options.linearDamping ? options.linearDamping : .01;
              this.type = mass <= 0 ? Body.STATIC : Body.DYNAMIC;
              typeof options.type === typeof Body.STATIC && (this.type = options.type);
              this.allowSleep = "undefined" === typeof options.allowSleep || options.allowSleep;
              this.sleepState = 0;
              this.sleepSpeedLimit = "undefined" !== typeof options.sleepSpeedLimit ? options.sleepSpeedLimit : .1;
              this.sleepTimeLimit = "undefined" !== typeof options.sleepTimeLimit ? options.sleepTimeLimit : 1;
              this.timeLastSleepy = 0;
              this._wakeUpAfterNarrowphase = false;
              this.torque = new Vec3();
              this.quaternion = new Quaternion();
              this.initQuaternion = new Quaternion();
              this.previousQuaternion = new Quaternion();
              this.interpolatedQuaternion = new Quaternion();
              if (options.quaternion) {
                this.quaternion.copy(options.quaternion);
                this.initQuaternion.copy(options.quaternion);
                this.previousQuaternion.copy(options.quaternion);
                this.interpolatedQuaternion.copy(options.quaternion);
              }
              this.angularVelocity = new Vec3();
              options.angularVelocity && this.angularVelocity.copy(options.angularVelocity);
              this.initAngularVelocity = new Vec3();
              this.shapes = [];
              this.shapeOffsets = [];
              this.shapeOrientations = [];
              this.inertia = new Vec3();
              this.invInertia = new Vec3();
              this.invInertiaWorld = new Mat3();
              this.invMassSolve = 0;
              this.invInertiaSolve = new Vec3();
              this.invInertiaWorldSolve = new Mat3();
              this.fixedRotation = "undefined" !== typeof options.fixedRotation && options.fixedRotation;
              this.useGravity = true;
              this.angularDamping = "undefined" !== typeof options.angularDamping ? options.angularDamping : .01;
              this.linearFactor = new Vec3(1, 1, 1);
              options.linearFactor && this.linearFactor.copy(options.linearFactor);
              this.angularFactor = new Vec3(1, 1, 1);
              options.angularFactor && this.angularFactor.copy(options.angularFactor);
              this.aabb = new AABB();
              this.aabbNeedsUpdate = true;
              this.boundingRadius = 0;
              this.wlambda = new Vec3();
              options.shape && this.addShape(options.shape);
              this.hasTrigger = true;
              this.updateMassProperties();
            }
            Body.prototype = new EventTarget();
            Body.prototype.constructor = Body;
            Body.COLLIDE_EVENT_NAME = "collide";
            Body.DYNAMIC = 1;
            Body.STATIC = 2;
            Body.KINEMATIC = 4;
            Body.AWAKE = 0;
            Body.SLEEPY = 1;
            Body.SLEEPING = 2;
            Body.idCounter = 0;
            Body.wakeupEvent = {
              type: "wakeup"
            };
            Body.prototype.wakeUp = function() {
              World.SLEEPING = false;
              var s = this.sleepState;
              this.sleepState = 0;
              this._wakeUpAfterNarrowphase = false;
              s === Body.SLEEPING && this.dispatchEvent(Body.wakeupEvent);
            };
            Body.prototype.sleep = function() {
              this.sleepState = Body.SLEEPING;
              this.velocity.set(0, 0, 0);
              this.angularVelocity.set(0, 0, 0);
              this._wakeUpAfterNarrowphase = false;
            };
            Body.sleepyEvent = {
              type: "sleepy"
            };
            Body.sleepEvent = {
              type: "sleep"
            };
            Body.prototype.sleepTick = function(time) {
              if (this.allowSleep) {
                var sleepState = this.sleepState;
                var speedSquared = this.velocity.norm2() + this.angularVelocity.norm2();
                var speedLimitSquared = Math.pow(this.sleepSpeedLimit, 2);
                if (sleepState === Body.AWAKE && speedSquared < speedLimitSquared) {
                  this.sleepState = Body.SLEEPY;
                  this.timeLastSleepy = time;
                  this.dispatchEvent(Body.sleepyEvent);
                } else if (sleepState === Body.SLEEPY && speedSquared > speedLimitSquared) this.wakeUp(); else if (sleepState === Body.SLEEPY && time - this.timeLastSleepy > this.sleepTimeLimit) {
                  this.sleep();
                  this.dispatchEvent(Body.sleepEvent);
                }
              }
            };
            Body.prototype.updateSolveMassProperties = function() {
              if (this.sleepState === Body.SLEEPING || this.type === Body.KINEMATIC) {
                this.invMassSolve = 0;
                this.invInertiaSolve.setZero();
                this.invInertiaWorldSolve.setZero();
              } else {
                this.invMassSolve = this.invMass;
                this.invInertiaSolve.copy(this.invInertia);
                this.invInertiaWorldSolve.copy(this.invInertiaWorld);
              }
            };
            Body.prototype.pointToLocalFrame = function(worldPoint, result) {
              var result = result || new Vec3();
              worldPoint.vsub(this.position, result);
              this.quaternion.conjugate().vmult(result, result);
              return result;
            };
            Body.prototype.vectorToLocalFrame = function(worldVector, result) {
              var result = result || new Vec3();
              this.quaternion.conjugate().vmult(worldVector, result);
              return result;
            };
            Body.prototype.pointToWorldFrame = function(localPoint, result) {
              var result = result || new Vec3();
              this.quaternion.vmult(localPoint, result);
              result.vadd(this.position, result);
              return result;
            };
            Body.prototype.vectorToWorldFrame = function(localVector, result) {
              var result = result || new Vec3();
              this.quaternion.vmult(localVector, result);
              return result;
            };
            var tmpVec = new Vec3();
            var tmpQuat = new Quaternion();
            Body.prototype.addShape = function(shape, _offset, _orientation) {
              var offset = new Vec3();
              var orientation = new Quaternion();
              _offset && offset.copy(_offset);
              _orientation && orientation.copy(_orientation);
              this.shapes.push(shape);
              this.shapeOffsets.push(offset);
              this.shapeOrientations.push(orientation);
              this.aabbNeedsUpdate = true;
              this.updateMassProperties();
              this.updateBoundingRadius();
              this.updateHasTrigger();
              World.idToShapeMap[shape.id] = shape;
              shape.body = this;
              return this;
            };
            Body.prototype.removeShape = function(shape) {
              var idx = this.shapes.indexOf(shape);
              if (-1 === idx) return;
              this.shapes.splice(idx, 1);
              this.shapeOffsets.splice(idx, 1);
              this.shapeOrientations.splice(idx, 1);
              this.aabbNeedsUpdate = true;
              this.updateMassProperties();
              this.updateBoundingRadius();
              this.updateHasTrigger();
            };
            Body.prototype.updateBoundingRadius = function() {
              var shapes = this.shapes, shapeOffsets = this.shapeOffsets, N = shapes.length, radius = 0;
              for (var i = 0; i !== N; i++) {
                var shape = shapes[i];
                shape.updateBoundingSphereRadius();
                var offset = shapeOffsets[i].norm(), r = shape.boundingSphereRadius;
                offset + r > radius && (radius = offset + r);
              }
              this.boundingRadius = radius;
            };
            var computeAABB_shapeAABB = new AABB();
            Body.prototype.computeAABB = function() {
              var shapes = this.shapes, shapeOffsets = this.shapeOffsets, shapeOrientations = this.shapeOrientations, N = shapes.length, offset = tmpVec, orientation = tmpQuat, bodyQuat = this.quaternion, aabb = this.aabb, shapeAABB = computeAABB_shapeAABB;
              for (var i = 0; i !== N; i++) {
                var shape = shapes[i];
                bodyQuat.vmult(shapeOffsets[i], offset);
                offset.vadd(this.position, offset);
                shapeOrientations[i].mult(bodyQuat, orientation);
                shape.calculateWorldAABB(offset, orientation, shapeAABB.lowerBound, shapeAABB.upperBound);
                0 === i ? aabb.copy(shapeAABB) : aabb.extend(shapeAABB);
              }
              this.aabbNeedsUpdate = false;
            };
            var uiw_m1 = new Mat3(), uiw_m2 = new Mat3(), uiw_m3 = new Mat3();
            Body.prototype.updateInertiaWorld = function(force) {
              var I = this.invInertia;
              if (I.x !== I.y || I.y !== I.z || force) {
                var m1 = uiw_m1, m2 = uiw_m2, m3 = uiw_m3;
                m1.setRotationFromQuaternion(this.quaternion);
                m1.transpose(m2);
                m1.scale(I, m1);
                m1.mmult(m2, this.invInertiaWorld);
              } else ;
            };
            var Body_applyForce_r = new Vec3();
            var Body_applyForce_rotForce = new Vec3();
            Body.prototype.applyForce = function(force, relativePoint) {
              if (this.type !== Body.DYNAMIC) return;
              var rotForce = Body_applyForce_rotForce;
              relativePoint.cross(force, rotForce);
              this.force.vadd(force, this.force);
              this.torque.vadd(rotForce, this.torque);
            };
            var Body_applyLocalForce_worldForce = new Vec3();
            var Body_applyLocalForce_relativePointWorld = new Vec3();
            Body.prototype.applyLocalForce = function(localForce, localPoint) {
              if (this.type !== Body.DYNAMIC) return;
              var worldForce = Body_applyLocalForce_worldForce;
              var relativePointWorld = Body_applyLocalForce_relativePointWorld;
              this.vectorToWorldFrame(localForce, worldForce);
              this.vectorToWorldFrame(localPoint, relativePointWorld);
              this.applyForce(worldForce, relativePointWorld);
            };
            var Body_applyImpulse_r = new Vec3();
            var Body_applyImpulse_velo = new Vec3();
            var Body_applyImpulse_rotVelo = new Vec3();
            Body.prototype.applyImpulse = function(impulse, relativePoint) {
              if (this.type !== Body.DYNAMIC) return;
              var r = relativePoint;
              var velo = Body_applyImpulse_velo;
              velo.copy(impulse);
              velo.mult(this.invMass, velo);
              this.velocity.vadd(velo, this.velocity);
              var rotVelo = Body_applyImpulse_rotVelo;
              r.cross(impulse, rotVelo);
              this.invInertiaWorld.vmult(rotVelo, rotVelo);
              this.angularVelocity.vadd(rotVelo, this.angularVelocity);
            };
            var Body_applyLocalImpulse_worldImpulse = new Vec3();
            var Body_applyLocalImpulse_relativePoint = new Vec3();
            Body.prototype.applyLocalImpulse = function(localImpulse, localPoint) {
              if (this.type !== Body.DYNAMIC) return;
              var worldImpulse = Body_applyLocalImpulse_worldImpulse;
              var relativePointWorld = Body_applyLocalImpulse_relativePoint;
              this.vectorToWorldFrame(localImpulse, worldImpulse);
              this.vectorToWorldFrame(localPoint, relativePointWorld);
              this.applyImpulse(worldImpulse, relativePointWorld);
            };
            var Body_updateMassProperties_halfExtents = new Vec3();
            Body.prototype.updateMassProperties = function() {
              var halfExtents = Body_updateMassProperties_halfExtents;
              this.invMass = this.mass > 0 ? 1 / this.mass : 0;
              var I = this.inertia;
              var fixed = this.fixedRotation;
              this.computeAABB();
              halfExtents.set((this.aabb.upperBound.x - this.aabb.lowerBound.x) / 2, (this.aabb.upperBound.y - this.aabb.lowerBound.y) / 2, (this.aabb.upperBound.z - this.aabb.lowerBound.z) / 2);
              Box.calculateInertia(halfExtents, this.mass, I);
              this.invInertia.set(I.x > 0 && !fixed ? 1 / I.x : 0, I.y > 0 && !fixed ? 1 / I.y : 0, I.z > 0 && !fixed ? 1 / I.z : 0);
              this.updateInertiaWorld(true);
            };
            Body.prototype.getVelocityAtWorldPoint = function(worldPoint, result) {
              var r = new Vec3();
              worldPoint.vsub(this.position, r);
              this.angularVelocity.cross(r, result);
              this.velocity.vadd(result, result);
              return result;
            };
            var torque = new Vec3();
            var invI_tau_dt = new Vec3();
            var w = new Quaternion();
            var wq = new Quaternion();
            Body.prototype.integrate = function(dt, quatNormalize, quatNormalizeFast) {
              this.previousPosition.copy(this.position);
              this.previousQuaternion.copy(this.quaternion);
              if (!(this.type === Body.DYNAMIC || this.type === Body.KINEMATIC) || this.sleepState === Body.SLEEPING) return;
              var velo = this.velocity, angularVelo = this.angularVelocity, pos = this.position, force = this.force, torque = this.torque, quat = this.quaternion, invMass = this.invMass, invInertia = this.invInertiaWorld, linearFactor = this.linearFactor;
              var iMdt = invMass * dt;
              velo.x += force.x * iMdt * linearFactor.x;
              velo.y += force.y * iMdt * linearFactor.y;
              velo.z += force.z * iMdt * linearFactor.z;
              var e = invInertia.elements;
              var angularFactor = this.angularFactor;
              var tx = torque.x * angularFactor.x;
              var ty = torque.y * angularFactor.y;
              var tz = torque.z * angularFactor.z;
              angularVelo.x += dt * (e[0] * tx + e[1] * ty + e[2] * tz);
              angularVelo.y += dt * (e[3] * tx + e[4] * ty + e[5] * tz);
              angularVelo.z += dt * (e[6] * tx + e[7] * ty + e[8] * tz);
              pos.x += velo.x * dt;
              pos.y += velo.y * dt;
              pos.z += velo.z * dt;
              quat.integrate(this.angularVelocity, dt, this.angularFactor, quat);
              quatNormalize && (quatNormalizeFast ? quat.normalizeFast() : quat.normalize());
              this.aabbNeedsUpdate = true;
              this.updateInertiaWorld();
            };
            Body.prototype.isSleeping = function() {
              return this.sleepState === Body.SLEEPING;
            };
            Body.prototype.isSleepy = function() {
              return this.sleepState === Body.SLEEPY;
            };
            Body.prototype.isAwake = function() {
              return this.sleepState === Body.AWAKE;
            };
            Body.prototype.updateHasTrigger = function() {
              for (var i = this.shapes.length; i--; ) {
                this.hasTrigger = !this.shapes[i].collisionResponse;
                if (this.hasTrigger) break;
              }
            };
          }, {
            "../collision/AABB": 3,
            "../material/Material": 26,
            "../math/Mat3": 29,
            "../math/Quaternion": 30,
            "../math/Vec3": 32,
            "../shapes/Box": 39,
            "../shapes/Shape": 45,
            "../utils/EventTarget": 51,
            "../world/World": 58
          } ],
          34: [ function(_dereq_, module, exports) {
            var Body = _dereq_("./Body");
            var Vec3 = _dereq_("../math/Vec3");
            var Quaternion = _dereq_("../math/Quaternion");
            var RaycastResult = _dereq_("../collision/RaycastResult");
            var Ray = _dereq_("../collision/Ray");
            var WheelInfo = _dereq_("../objects/WheelInfo");
            module.exports = RaycastVehicle;
            function RaycastVehicle(options) {
              this.chassisBody = options.chassisBody;
              this.wheelInfos = [];
              this.sliding = false;
              this.world = null;
              this.indexRightAxis = "undefined" !== typeof options.indexRightAxis ? options.indexRightAxis : 1;
              this.indexForwardAxis = "undefined" !== typeof options.indexForwardAxis ? options.indexForwardAxis : 0;
              this.indexUpAxis = "undefined" !== typeof options.indexUpAxis ? options.indexUpAxis : 2;
            }
            var tmpVec1 = new Vec3();
            var tmpVec2 = new Vec3();
            var tmpVec3 = new Vec3();
            var tmpVec4 = new Vec3();
            var tmpVec5 = new Vec3();
            var tmpVec6 = new Vec3();
            var tmpRay = new Ray();
            RaycastVehicle.prototype.addWheel = function(options) {
              options = options || {};
              var info = new WheelInfo(options);
              var index = this.wheelInfos.length;
              this.wheelInfos.push(info);
              return index;
            };
            RaycastVehicle.prototype.setSteeringValue = function(value, wheelIndex) {
              var wheel = this.wheelInfos[wheelIndex];
              wheel.steering = value;
            };
            var torque = new Vec3();
            RaycastVehicle.prototype.applyEngineForce = function(value, wheelIndex) {
              this.wheelInfos[wheelIndex].engineForce = value;
            };
            RaycastVehicle.prototype.setBrake = function(brake, wheelIndex) {
              this.wheelInfos[wheelIndex].brake = brake;
            };
            RaycastVehicle.prototype.addToWorld = function(world) {
              var constraints = this.constraints;
              world.addBody(this.chassisBody);
              var that = this;
              this.preStepCallback = function() {
                that.updateVehicle(world.dt);
              };
              world.addEventListener("preStep", this.preStepCallback);
              this.world = world;
            };
            RaycastVehicle.prototype.getVehicleAxisWorld = function(axisIndex, result) {
              result.set(0 === axisIndex ? 1 : 0, 1 === axisIndex ? 1 : 0, 2 === axisIndex ? 1 : 0);
              this.chassisBody.vectorToWorldFrame(result, result);
            };
            RaycastVehicle.prototype.updateVehicle = function(timeStep) {
              var wheelInfos = this.wheelInfos;
              var numWheels = wheelInfos.length;
              var chassisBody = this.chassisBody;
              for (var i = 0; i < numWheels; i++) this.updateWheelTransform(i);
              this.currentVehicleSpeedKmHour = 3.6 * chassisBody.velocity.norm();
              var forwardWorld = new Vec3();
              this.getVehicleAxisWorld(this.indexForwardAxis, forwardWorld);
              forwardWorld.dot(chassisBody.velocity) < 0 && (this.currentVehicleSpeedKmHour *= -1);
              for (var i = 0; i < numWheels; i++) this.castRay(wheelInfos[i]);
              this.updateSuspension(timeStep);
              var impulse = new Vec3();
              var relpos = new Vec3();
              for (var i = 0; i < numWheels; i++) {
                var wheel = wheelInfos[i];
                var suspensionForce = wheel.suspensionForce;
                suspensionForce > wheel.maxSuspensionForce && (suspensionForce = wheel.maxSuspensionForce);
                wheel.raycastResult.hitNormalWorld.scale(suspensionForce * timeStep, impulse);
                wheel.raycastResult.hitPointWorld.vsub(chassisBody.position, relpos);
                chassisBody.applyImpulse(impulse, relpos);
              }
              this.updateFriction(timeStep);
              var hitNormalWorldScaledWithProj = new Vec3();
              var fwd = new Vec3();
              var vel = new Vec3();
              for (i = 0; i < numWheels; i++) {
                var wheel = wheelInfos[i];
                chassisBody.getVelocityAtWorldPoint(wheel.chassisConnectionPointWorld, vel);
                var m = 1;
                switch (this.indexUpAxis) {
                 case 1:
                  m = -1;
                }
                if (wheel.isInContact) {
                  this.getVehicleAxisWorld(this.indexForwardAxis, fwd);
                  var proj = fwd.dot(wheel.raycastResult.hitNormalWorld);
                  wheel.raycastResult.hitNormalWorld.scale(proj, hitNormalWorldScaledWithProj);
                  fwd.vsub(hitNormalWorldScaledWithProj, fwd);
                  var proj2 = fwd.dot(vel);
                  wheel.deltaRotation = m * proj2 * timeStep / wheel.radius;
                }
                !wheel.sliding && wheel.isInContact || 0 === wheel.engineForce || !wheel.useCustomSlidingRotationalSpeed || (wheel.deltaRotation = (wheel.engineForce > 0 ? 1 : -1) * wheel.customSlidingRotationalSpeed * timeStep);
                Math.abs(wheel.brake) > Math.abs(wheel.engineForce) && (wheel.deltaRotation = 0);
                wheel.rotation += wheel.deltaRotation;
                wheel.deltaRotation *= .99;
              }
            };
            RaycastVehicle.prototype.updateSuspension = function(deltaTime) {
              var chassisBody = this.chassisBody;
              var chassisMass = chassisBody.mass;
              var wheelInfos = this.wheelInfos;
              var numWheels = wheelInfos.length;
              for (var w_it = 0; w_it < numWheels; w_it++) {
                var wheel = wheelInfos[w_it];
                if (wheel.isInContact) {
                  var force;
                  var susp_length = wheel.suspensionRestLength;
                  var current_length = wheel.suspensionLength;
                  var length_diff = susp_length - current_length;
                  force = wheel.suspensionStiffness * length_diff * wheel.clippedInvContactDotSuspension;
                  var projected_rel_vel = wheel.suspensionRelativeVelocity;
                  var susp_damping;
                  susp_damping = projected_rel_vel < 0 ? wheel.dampingCompression : wheel.dampingRelaxation;
                  force -= susp_damping * projected_rel_vel;
                  wheel.suspensionForce = force * chassisMass;
                  wheel.suspensionForce < 0 && (wheel.suspensionForce = 0);
                } else wheel.suspensionForce = 0;
              }
            };
            RaycastVehicle.prototype.removeFromWorld = function(world) {
              var constraints = this.constraints;
              world.remove(this.chassisBody);
              world.removeEventListener("preStep", this.preStepCallback);
              this.world = null;
            };
            var castRay_rayvector = new Vec3();
            var castRay_target = new Vec3();
            RaycastVehicle.prototype.castRay = function(wheel) {
              var rayvector = castRay_rayvector;
              var target = castRay_target;
              this.updateWheelTransformWorld(wheel);
              var chassisBody = this.chassisBody;
              var depth = -1;
              var raylen = wheel.suspensionRestLength + wheel.radius;
              wheel.directionWorld.scale(raylen, rayvector);
              var source = wheel.chassisConnectionPointWorld;
              source.vadd(rayvector, target);
              var raycastResult = wheel.raycastResult;
              var param = 0;
              raycastResult.reset();
              var oldState = chassisBody.collisionResponse;
              chassisBody.collisionResponse = false;
              this.world.rayTest(source, target, raycastResult);
              chassisBody.collisionResponse = oldState;
              var object = raycastResult.body;
              wheel.raycastResult.groundObject = 0;
              if (object) {
                depth = raycastResult.distance;
                wheel.raycastResult.hitNormalWorld = raycastResult.hitNormalWorld;
                wheel.isInContact = true;
                var hitDistance = raycastResult.distance;
                wheel.suspensionLength = hitDistance - wheel.radius;
                var minSuspensionLength = wheel.suspensionRestLength - wheel.maxSuspensionTravel;
                var maxSuspensionLength = wheel.suspensionRestLength + wheel.maxSuspensionTravel;
                wheel.suspensionLength < minSuspensionLength && (wheel.suspensionLength = minSuspensionLength);
                if (wheel.suspensionLength > maxSuspensionLength) {
                  wheel.suspensionLength = maxSuspensionLength;
                  wheel.raycastResult.reset();
                }
                var denominator = wheel.raycastResult.hitNormalWorld.dot(wheel.directionWorld);
                var chassis_velocity_at_contactPoint = new Vec3();
                chassisBody.getVelocityAtWorldPoint(wheel.raycastResult.hitPointWorld, chassis_velocity_at_contactPoint);
                var projVel = wheel.raycastResult.hitNormalWorld.dot(chassis_velocity_at_contactPoint);
                if (denominator >= -.1) {
                  wheel.suspensionRelativeVelocity = 0;
                  wheel.clippedInvContactDotSuspension = 10;
                } else {
                  var inv = -1 / denominator;
                  wheel.suspensionRelativeVelocity = projVel * inv;
                  wheel.clippedInvContactDotSuspension = inv;
                }
              } else {
                wheel.suspensionLength = wheel.suspensionRestLength + 0 * wheel.maxSuspensionTravel;
                wheel.suspensionRelativeVelocity = 0;
                wheel.directionWorld.scale(-1, wheel.raycastResult.hitNormalWorld);
                wheel.clippedInvContactDotSuspension = 1;
              }
              return depth;
            };
            RaycastVehicle.prototype.updateWheelTransformWorld = function(wheel) {
              wheel.isInContact = false;
              var chassisBody = this.chassisBody;
              chassisBody.pointToWorldFrame(wheel.chassisConnectionPointLocal, wheel.chassisConnectionPointWorld);
              chassisBody.vectorToWorldFrame(wheel.directionLocal, wheel.directionWorld);
              chassisBody.vectorToWorldFrame(wheel.axleLocal, wheel.axleWorld);
            };
            RaycastVehicle.prototype.updateWheelTransform = function(wheelIndex) {
              var up = tmpVec4;
              var right = tmpVec5;
              var fwd = tmpVec6;
              var wheel = this.wheelInfos[wheelIndex];
              this.updateWheelTransformWorld(wheel);
              wheel.directionLocal.scale(-1, up);
              right.copy(wheel.axleLocal);
              up.cross(right, fwd);
              fwd.normalize();
              right.normalize();
              var steering = wheel.steering;
              var steeringOrn = new Quaternion();
              steeringOrn.setFromAxisAngle(up, steering);
              var rotatingOrn = new Quaternion();
              rotatingOrn.setFromAxisAngle(right, wheel.rotation);
              var q = wheel.worldTransform.quaternion;
              this.chassisBody.quaternion.mult(steeringOrn, q);
              q.mult(rotatingOrn, q);
              q.normalize();
              var p = wheel.worldTransform.position;
              p.copy(wheel.directionWorld);
              p.scale(wheel.suspensionLength, p);
              p.vadd(wheel.chassisConnectionPointWorld, p);
            };
            var directions = [ new Vec3(1, 0, 0), new Vec3(0, 1, 0), new Vec3(0, 0, 1) ];
            RaycastVehicle.prototype.getWheelTransformWorld = function(wheelIndex) {
              return this.wheelInfos[wheelIndex].worldTransform;
            };
            var updateFriction_surfNormalWS_scaled_proj = new Vec3();
            var updateFriction_axle = [];
            var updateFriction_forwardWS = [];
            var sideFrictionStiffness2 = 1;
            RaycastVehicle.prototype.updateFriction = function(timeStep) {
              var surfNormalWS_scaled_proj = updateFriction_surfNormalWS_scaled_proj;
              var wheelInfos = this.wheelInfos;
              var numWheels = wheelInfos.length;
              var chassisBody = this.chassisBody;
              var forwardWS = updateFriction_forwardWS;
              var axle = updateFriction_axle;
              var numWheelsOnGround = 0;
              for (var i = 0; i < numWheels; i++) {
                var wheel = wheelInfos[i];
                var groundObject = wheel.raycastResult.body;
                groundObject && numWheelsOnGround++;
                wheel.sideImpulse = 0;
                wheel.forwardImpulse = 0;
                forwardWS[i] || (forwardWS[i] = new Vec3());
                axle[i] || (axle[i] = new Vec3());
              }
              for (var i = 0; i < numWheels; i++) {
                var wheel = wheelInfos[i];
                var groundObject = wheel.raycastResult.body;
                if (groundObject) {
                  var axlei = axle[i];
                  var wheelTrans = this.getWheelTransformWorld(i);
                  wheelTrans.vectorToWorldFrame(directions[this.indexRightAxis], axlei);
                  var surfNormalWS = wheel.raycastResult.hitNormalWorld;
                  var proj = axlei.dot(surfNormalWS);
                  surfNormalWS.scale(proj, surfNormalWS_scaled_proj);
                  axlei.vsub(surfNormalWS_scaled_proj, axlei);
                  axlei.normalize();
                  surfNormalWS.cross(axlei, forwardWS[i]);
                  forwardWS[i].normalize();
                  wheel.sideImpulse = resolveSingleBilateral(chassisBody, wheel.raycastResult.hitPointWorld, groundObject, wheel.raycastResult.hitPointWorld, axlei);
                  wheel.sideImpulse *= sideFrictionStiffness2;
                }
              }
              var sideFactor = 1;
              var fwdFactor = .5;
              this.sliding = false;
              for (var i = 0; i < numWheels; i++) {
                var wheel = wheelInfos[i];
                var groundObject = wheel.raycastResult.body;
                var rollingFriction = 0;
                wheel.slipInfo = 1;
                if (groundObject) {
                  var defaultRollingFrictionImpulse = 0;
                  var maxImpulse = wheel.brake ? wheel.brake : defaultRollingFrictionImpulse;
                  rollingFriction = calcRollingFriction(chassisBody, groundObject, wheel.raycastResult.hitPointWorld, forwardWS[i], maxImpulse);
                  rollingFriction += wheel.engineForce * timeStep;
                  var factor = maxImpulse / rollingFriction;
                  wheel.slipInfo *= factor;
                }
                wheel.forwardImpulse = 0;
                wheel.skidInfo = 1;
                if (groundObject) {
                  wheel.skidInfo = 1;
                  var maximp = wheel.suspensionForce * timeStep * wheel.frictionSlip;
                  var maximpSide = maximp;
                  var maximpSquared = maximp * maximpSide;
                  wheel.forwardImpulse = rollingFriction;
                  var x = wheel.forwardImpulse * fwdFactor;
                  var y = wheel.sideImpulse * sideFactor;
                  var impulseSquared = x * x + y * y;
                  wheel.sliding = false;
                  if (impulseSquared > maximpSquared) {
                    this.sliding = true;
                    wheel.sliding = true;
                    var factor = maximp / Math.sqrt(impulseSquared);
                    wheel.skidInfo *= factor;
                  }
                }
              }
              if (this.sliding) for (var i = 0; i < numWheels; i++) {
                var wheel = wheelInfos[i];
                if (0 !== wheel.sideImpulse && wheel.skidInfo < 1) {
                  wheel.forwardImpulse *= wheel.skidInfo;
                  wheel.sideImpulse *= wheel.skidInfo;
                }
              }
              for (var i = 0; i < numWheels; i++) {
                var wheel = wheelInfos[i];
                var rel_pos = new Vec3();
                wheel.raycastResult.hitPointWorld.vsub(chassisBody.position, rel_pos);
                if (0 !== wheel.forwardImpulse) {
                  var impulse = new Vec3();
                  forwardWS[i].scale(wheel.forwardImpulse, impulse);
                  chassisBody.applyImpulse(impulse, rel_pos);
                }
                if (0 !== wheel.sideImpulse) {
                  var groundObject = wheel.raycastResult.body;
                  var rel_pos2 = new Vec3();
                  wheel.raycastResult.hitPointWorld.vsub(groundObject.position, rel_pos2);
                  var sideImp = new Vec3();
                  axle[i].scale(wheel.sideImpulse, sideImp);
                  chassisBody.vectorToLocalFrame(rel_pos, rel_pos);
                  rel_pos["xyz"[this.indexUpAxis]] *= wheel.rollInfluence;
                  chassisBody.vectorToWorldFrame(rel_pos, rel_pos);
                  chassisBody.applyImpulse(sideImp, rel_pos);
                  sideImp.scale(-1, sideImp);
                  groundObject.applyImpulse(sideImp, rel_pos2);
                }
              }
            };
            var calcRollingFriction_vel1 = new Vec3();
            var calcRollingFriction_vel2 = new Vec3();
            var calcRollingFriction_vel = new Vec3();
            function calcRollingFriction(body0, body1, frictionPosWorld, frictionDirectionWorld, maxImpulse) {
              var j1 = 0;
              var contactPosWorld = frictionPosWorld;
              var vel1 = calcRollingFriction_vel1;
              var vel2 = calcRollingFriction_vel2;
              var vel = calcRollingFriction_vel;
              body0.getVelocityAtWorldPoint(contactPosWorld, vel1);
              body1.getVelocityAtWorldPoint(contactPosWorld, vel2);
              vel1.vsub(vel2, vel);
              var vrel = frictionDirectionWorld.dot(vel);
              var denom0 = computeImpulseDenominator(body0, frictionPosWorld, frictionDirectionWorld);
              var denom1 = computeImpulseDenominator(body1, frictionPosWorld, frictionDirectionWorld);
              var relaxation = 1;
              var jacDiagABInv = relaxation / (denom0 + denom1);
              j1 = -vrel * jacDiagABInv;
              maxImpulse < j1 && (j1 = maxImpulse);
              j1 < -maxImpulse && (j1 = -maxImpulse);
              return j1;
            }
            var computeImpulseDenominator_r0 = new Vec3();
            var computeImpulseDenominator_c0 = new Vec3();
            var computeImpulseDenominator_vec = new Vec3();
            var computeImpulseDenominator_m = new Vec3();
            function computeImpulseDenominator(body, pos, normal) {
              var r0 = computeImpulseDenominator_r0;
              var c0 = computeImpulseDenominator_c0;
              var vec = computeImpulseDenominator_vec;
              var m = computeImpulseDenominator_m;
              pos.vsub(body.position, r0);
              r0.cross(normal, c0);
              body.invInertiaWorld.vmult(c0, m);
              m.cross(r0, vec);
              return body.invMass + normal.dot(vec);
            }
            var resolveSingleBilateral_vel1 = new Vec3();
            var resolveSingleBilateral_vel2 = new Vec3();
            var resolveSingleBilateral_vel = new Vec3();
            function resolveSingleBilateral(body1, pos1, body2, pos2, normal, impulse) {
              var normalLenSqr = normal.norm2();
              if (normalLenSqr > 1.1) return 0;
              var vel1 = resolveSingleBilateral_vel1;
              var vel2 = resolveSingleBilateral_vel2;
              var vel = resolveSingleBilateral_vel;
              body1.getVelocityAtWorldPoint(pos1, vel1);
              body2.getVelocityAtWorldPoint(pos2, vel2);
              vel1.vsub(vel2, vel);
              var rel_vel = normal.dot(vel);
              var contactDamping = .2;
              var massTerm = 1 / (body1.invMass + body2.invMass);
              var impulse = -contactDamping * rel_vel * massTerm;
              return impulse;
            }
          }, {
            "../collision/Ray": 10,
            "../collision/RaycastResult": 11,
            "../math/Quaternion": 30,
            "../math/Vec3": 32,
            "../objects/WheelInfo": 38,
            "./Body": 33
          } ],
          35: [ function(_dereq_, module, exports) {
            var Body = _dereq_("./Body");
            var Sphere = _dereq_("../shapes/Sphere");
            var Box = _dereq_("../shapes/Box");
            var Vec3 = _dereq_("../math/Vec3");
            var HingeConstraint = _dereq_("../constraints/HingeConstraint");
            var CMath = _dereq_("../math/CMath");
            module.exports = RigidVehicle;
            function RigidVehicle(options) {
              this.wheelBodies = [];
              this.coordinateSystem = "undefined" === typeof options.coordinateSystem ? new Vec3(1, 2, 3) : options.coordinateSystem.clone();
              this.chassisBody = options.chassisBody;
              if (!this.chassisBody) {
                var chassisShape = new Box(new Vec3(5, 2, .5));
                this.chassisBody = new Body(1, chassisShape);
              }
              this.constraints = [];
              this.wheelAxes = [];
              this.wheelForces = [];
            }
            RigidVehicle.prototype.addWheel = function(options) {
              options = options || {};
              var wheelBody = options.body;
              wheelBody || (wheelBody = new Body(1, new Sphere(1.2)));
              this.wheelBodies.push(wheelBody);
              this.wheelForces.push(0);
              var zero = new Vec3();
              var position = "undefined" !== typeof options.position ? options.position.clone() : new Vec3();
              var worldPosition = new Vec3();
              this.chassisBody.pointToWorldFrame(position, worldPosition);
              wheelBody.position.set(worldPosition.x, worldPosition.y, worldPosition.z);
              var axis = "undefined" !== typeof options.axis ? options.axis.clone() : new Vec3(0, 1, 0);
              this.wheelAxes.push(axis);
              var hingeConstraint = new HingeConstraint(this.chassisBody, wheelBody, {
                pivotA: position,
                axisA: axis,
                pivotB: Vec3.ZERO,
                axisB: axis,
                collideConnected: false
              });
              this.constraints.push(hingeConstraint);
              return this.wheelBodies.length - 1;
            };
            RigidVehicle.prototype.setSteeringValue = function(value, wheelIndex) {
              var axis = this.wheelAxes[wheelIndex];
              var c = CMath.cos(value), s = CMath.sin(value), x = axis.x, y = axis.y;
              this.constraints[wheelIndex].axisA.set(c * x - s * y, s * x + c * y, 0);
            };
            RigidVehicle.prototype.setMotorSpeed = function(value, wheelIndex) {
              var hingeConstraint = this.constraints[wheelIndex];
              hingeConstraint.enableMotor();
              hingeConstraint.motorTargetVelocity = value;
            };
            RigidVehicle.prototype.disableMotor = function(wheelIndex) {
              var hingeConstraint = this.constraints[wheelIndex];
              hingeConstraint.disableMotor();
            };
            var torque = new Vec3();
            RigidVehicle.prototype.setWheelForce = function(value, wheelIndex) {
              this.wheelForces[wheelIndex] = value;
            };
            RigidVehicle.prototype.applyWheelForce = function(value, wheelIndex) {
              var axis = this.wheelAxes[wheelIndex];
              var wheelBody = this.wheelBodies[wheelIndex];
              var bodyTorque = wheelBody.torque;
              axis.scale(value, torque);
              wheelBody.vectorToWorldFrame(torque, torque);
              bodyTorque.vadd(torque, bodyTorque);
            };
            RigidVehicle.prototype.addToWorld = function(world) {
              var constraints = this.constraints;
              var bodies = this.wheelBodies.concat([ this.chassisBody ]);
              for (var i = 0; i < bodies.length; i++) world.addBody(bodies[i]);
              for (var i = 0; i < constraints.length; i++) world.addConstraint(constraints[i]);
              world.addEventListener("preStep", this._update.bind(this));
            };
            RigidVehicle.prototype._update = function() {
              var wheelForces = this.wheelForces;
              for (var i = 0; i < wheelForces.length; i++) this.applyWheelForce(wheelForces[i], i);
            };
            RigidVehicle.prototype.removeFromWorld = function(world) {
              var constraints = this.constraints;
              var bodies = this.wheelBodies.concat([ this.chassisBody ]);
              for (var i = 0; i < bodies.length; i++) world.remove(bodies[i]);
              for (var i = 0; i < constraints.length; i++) world.removeConstraint(constraints[i]);
            };
            var worldAxis = new Vec3();
            RigidVehicle.prototype.getWheelSpeed = function(wheelIndex) {
              var axis = this.wheelAxes[wheelIndex];
              var wheelBody = this.wheelBodies[wheelIndex];
              var w = wheelBody.angularVelocity;
              this.chassisBody.vectorToWorldFrame(axis, worldAxis);
              return w.dot(worldAxis);
            };
          }, {
            "../constraints/HingeConstraint": 16,
            "../math/CMath": 27,
            "../math/Vec3": 32,
            "../shapes/Box": 39,
            "../shapes/Sphere": 46,
            "./Body": 33
          } ],
          36: [ function(_dereq_, module, exports) {
            module.exports = SPHSystem;
            var Shape = _dereq_("../shapes/Shape");
            var Vec3 = _dereq_("../math/Vec3");
            var Quaternion = _dereq_("../math/Quaternion");
            var Particle = _dereq_("../shapes/Particle");
            var Body = _dereq_("../objects/Body");
            var Material = _dereq_("../material/Material");
            function SPHSystem() {
              this.particles = [];
              this.density = 1;
              this.smoothingRadius = 1;
              this.speedOfSound = 1;
              this.viscosity = .01;
              this.eps = 1e-6;
              this.pressures = [];
              this.densities = [];
              this.neighbors = [];
            }
            SPHSystem.prototype.add = function(particle) {
              this.particles.push(particle);
              this.neighbors.length < this.particles.length && this.neighbors.push([]);
            };
            SPHSystem.prototype.remove = function(particle) {
              var idx = this.particles.indexOf(particle);
              if (-1 !== idx) {
                this.particles.splice(idx, 1);
                this.neighbors.length > this.particles.length && this.neighbors.pop();
              }
            };
            var SPHSystem_getNeighbors_dist = new Vec3();
            SPHSystem.prototype.getNeighbors = function(particle, neighbors) {
              var N = this.particles.length, id = particle.id, R2 = this.smoothingRadius * this.smoothingRadius, dist = SPHSystem_getNeighbors_dist;
              for (var i = 0; i !== N; i++) {
                var p = this.particles[i];
                p.position.vsub(particle.position, dist);
                id !== p.id && dist.norm2() < R2 && neighbors.push(p);
              }
            };
            var SPHSystem_update_dist = new Vec3(), SPHSystem_update_a_pressure = new Vec3(), SPHSystem_update_a_visc = new Vec3(), SPHSystem_update_gradW = new Vec3(), SPHSystem_update_r_vec = new Vec3(), SPHSystem_update_u = new Vec3();
            SPHSystem.prototype.update = function() {
              var N = this.particles.length, dist = SPHSystem_update_dist, cs = this.speedOfSound, eps = this.eps;
              for (var i = 0; i !== N; i++) {
                var p = this.particles[i];
                var neighbors = this.neighbors[i];
                neighbors.length = 0;
                this.getNeighbors(p, neighbors);
                neighbors.push(this.particles[i]);
                var numNeighbors = neighbors.length;
                var sum = 0;
                for (var j = 0; j !== numNeighbors; j++) {
                  p.position.vsub(neighbors[j].position, dist);
                  var len = dist.norm();
                  var weight = this.w(len);
                  sum += neighbors[j].mass * weight;
                }
                this.densities[i] = sum;
                this.pressures[i] = cs * cs * (this.densities[i] - this.density);
              }
              var a_pressure = SPHSystem_update_a_pressure;
              var a_visc = SPHSystem_update_a_visc;
              var gradW = SPHSystem_update_gradW;
              var r_vec = SPHSystem_update_r_vec;
              var u = SPHSystem_update_u;
              for (var i = 0; i !== N; i++) {
                var particle = this.particles[i];
                a_pressure.set(0, 0, 0);
                a_visc.set(0, 0, 0);
                var Pij;
                var nabla;
                var Vij;
                var neighbors = this.neighbors[i];
                var numNeighbors = neighbors.length;
                for (var j = 0; j !== numNeighbors; j++) {
                  var neighbor = neighbors[j];
                  particle.position.vsub(neighbor.position, r_vec);
                  var r = r_vec.norm();
                  Pij = -neighbor.mass * (this.pressures[i] / (this.densities[i] * this.densities[i] + eps) + this.pressures[j] / (this.densities[j] * this.densities[j] + eps));
                  this.gradw(r_vec, gradW);
                  gradW.mult(Pij, gradW);
                  a_pressure.vadd(gradW, a_pressure);
                  neighbor.velocity.vsub(particle.velocity, u);
                  u.mult(1 / (1e-4 + this.densities[i] * this.densities[j]) * this.viscosity * neighbor.mass, u);
                  nabla = this.nablaw(r);
                  u.mult(nabla, u);
                  a_visc.vadd(u, a_visc);
                }
                a_visc.mult(particle.mass, a_visc);
                a_pressure.mult(particle.mass, a_pressure);
                particle.force.vadd(a_visc, particle.force);
                particle.force.vadd(a_pressure, particle.force);
              }
            };
            SPHSystem.prototype.w = function(r) {
              var h = this.smoothingRadius;
              return 315 / (64 * Math.PI * Math.pow(h, 9)) * Math.pow(h * h - r * r, 3);
            };
            SPHSystem.prototype.gradw = function(rVec, resultVec) {
              var r = rVec.norm(), h = this.smoothingRadius;
              rVec.mult(945 / (32 * Math.PI * Math.pow(h, 9)) * Math.pow(h * h - r * r, 2), resultVec);
            };
            SPHSystem.prototype.nablaw = function(r) {
              var h = this.smoothingRadius;
              var nabla = 945 / (32 * Math.PI * Math.pow(h, 9)) * (h * h - r * r) * (7 * r * r - 3 * h * h);
              return nabla;
            };
          }, {
            "../material/Material": 26,
            "../math/Quaternion": 30,
            "../math/Vec3": 32,
            "../objects/Body": 33,
            "../shapes/Particle": 43,
            "../shapes/Shape": 45
          } ],
          37: [ function(_dereq_, module, exports) {
            var Vec3 = _dereq_("../math/Vec3");
            module.exports = Spring;
            function Spring(bodyA, bodyB, options) {
              options = options || {};
              this.restLength = "number" === typeof options.restLength ? options.restLength : 1;
              this.stiffness = options.stiffness || 100;
              this.damping = options.damping || 1;
              this.bodyA = bodyA;
              this.bodyB = bodyB;
              this.localAnchorA = new Vec3();
              this.localAnchorB = new Vec3();
              options.localAnchorA && this.localAnchorA.copy(options.localAnchorA);
              options.localAnchorB && this.localAnchorB.copy(options.localAnchorB);
              options.worldAnchorA && this.setWorldAnchorA(options.worldAnchorA);
              options.worldAnchorB && this.setWorldAnchorB(options.worldAnchorB);
            }
            Spring.prototype.setWorldAnchorA = function(worldAnchorA) {
              this.bodyA.pointToLocalFrame(worldAnchorA, this.localAnchorA);
            };
            Spring.prototype.setWorldAnchorB = function(worldAnchorB) {
              this.bodyB.pointToLocalFrame(worldAnchorB, this.localAnchorB);
            };
            Spring.prototype.getWorldAnchorA = function(result) {
              this.bodyA.pointToWorldFrame(this.localAnchorA, result);
            };
            Spring.prototype.getWorldAnchorB = function(result) {
              this.bodyB.pointToWorldFrame(this.localAnchorB, result);
            };
            var applyForce_r = new Vec3(), applyForce_r_unit = new Vec3(), applyForce_u = new Vec3(), applyForce_f = new Vec3(), applyForce_worldAnchorA = new Vec3(), applyForce_worldAnchorB = new Vec3(), applyForce_ri = new Vec3(), applyForce_rj = new Vec3(), applyForce_ri_x_f = new Vec3(), applyForce_rj_x_f = new Vec3(), applyForce_tmp = new Vec3();
            Spring.prototype.applyForce = function() {
              var k = this.stiffness, d = this.damping, l = this.restLength, bodyA = this.bodyA, bodyB = this.bodyB, r = applyForce_r, r_unit = applyForce_r_unit, u = applyForce_u, f = applyForce_f, tmp = applyForce_tmp;
              var worldAnchorA = applyForce_worldAnchorA, worldAnchorB = applyForce_worldAnchorB, ri = applyForce_ri, rj = applyForce_rj, ri_x_f = applyForce_ri_x_f, rj_x_f = applyForce_rj_x_f;
              this.getWorldAnchorA(worldAnchorA);
              this.getWorldAnchorB(worldAnchorB);
              worldAnchorA.vsub(bodyA.position, ri);
              worldAnchorB.vsub(bodyB.position, rj);
              worldAnchorB.vsub(worldAnchorA, r);
              var rlen = r.norm();
              r_unit.copy(r);
              r_unit.normalize();
              bodyB.velocity.vsub(bodyA.velocity, u);
              bodyB.angularVelocity.cross(rj, tmp);
              u.vadd(tmp, u);
              bodyA.angularVelocity.cross(ri, tmp);
              u.vsub(tmp, u);
              r_unit.mult(-k * (rlen - l) - d * u.dot(r_unit), f);
              bodyA.force.vsub(f, bodyA.force);
              bodyB.force.vadd(f, bodyB.force);
              ri.cross(f, ri_x_f);
              rj.cross(f, rj_x_f);
              bodyA.torque.vsub(ri_x_f, bodyA.torque);
              bodyB.torque.vadd(rj_x_f, bodyB.torque);
            };
          }, {
            "../math/Vec3": 32
          } ],
          38: [ function(_dereq_, module, exports) {
            var Vec3 = _dereq_("../math/Vec3");
            var Transform = _dereq_("../math/Transform");
            var RaycastResult = _dereq_("../collision/RaycastResult");
            var Utils = _dereq_("../utils/Utils");
            module.exports = WheelInfo;
            function WheelInfo(options) {
              options = Utils.defaults(options, {
                chassisConnectionPointLocal: new Vec3(),
                chassisConnectionPointWorld: new Vec3(),
                directionLocal: new Vec3(),
                directionWorld: new Vec3(),
                axleLocal: new Vec3(),
                axleWorld: new Vec3(),
                suspensionRestLength: 1,
                suspensionMaxLength: 2,
                radius: 1,
                suspensionStiffness: 100,
                dampingCompression: 10,
                dampingRelaxation: 10,
                frictionSlip: 1e4,
                steering: 0,
                rotation: 0,
                deltaRotation: 0,
                rollInfluence: .01,
                maxSuspensionForce: Number.MAX_VALUE,
                isFrontWheel: true,
                clippedInvContactDotSuspension: 1,
                suspensionRelativeVelocity: 0,
                suspensionForce: 0,
                skidInfo: 0,
                suspensionLength: 0,
                maxSuspensionTravel: 1,
                useCustomSlidingRotationalSpeed: false,
                customSlidingRotationalSpeed: -.1
              });
              this.maxSuspensionTravel = options.maxSuspensionTravel;
              this.customSlidingRotationalSpeed = options.customSlidingRotationalSpeed;
              this.useCustomSlidingRotationalSpeed = options.useCustomSlidingRotationalSpeed;
              this.sliding = false;
              this.chassisConnectionPointLocal = options.chassisConnectionPointLocal.clone();
              this.chassisConnectionPointWorld = options.chassisConnectionPointWorld.clone();
              this.directionLocal = options.directionLocal.clone();
              this.directionWorld = options.directionWorld.clone();
              this.axleLocal = options.axleLocal.clone();
              this.axleWorld = options.axleWorld.clone();
              this.suspensionRestLength = options.suspensionRestLength;
              this.suspensionMaxLength = options.suspensionMaxLength;
              this.radius = options.radius;
              this.suspensionStiffness = options.suspensionStiffness;
              this.dampingCompression = options.dampingCompression;
              this.dampingRelaxation = options.dampingRelaxation;
              this.frictionSlip = options.frictionSlip;
              this.steering = 0;
              this.rotation = 0;
              this.deltaRotation = 0;
              this.rollInfluence = options.rollInfluence;
              this.maxSuspensionForce = options.maxSuspensionForce;
              this.engineForce = 0;
              this.brake = 0;
              this.isFrontWheel = options.isFrontWheel;
              this.clippedInvContactDotSuspension = 1;
              this.suspensionRelativeVelocity = 0;
              this.suspensionForce = 0;
              this.skidInfo = 0;
              this.suspensionLength = 0;
              this.sideImpulse = 0;
              this.forwardImpulse = 0;
              this.raycastResult = new RaycastResult();
              this.worldTransform = new Transform();
              this.isInContact = false;
            }
            var chassis_velocity_at_contactPoint = new Vec3();
            var relpos = new Vec3();
            var chassis_velocity_at_contactPoint = new Vec3();
            WheelInfo.prototype.updateWheel = function(chassis) {
              var raycastResult = this.raycastResult;
              if (this.isInContact) {
                var project = raycastResult.hitNormalWorld.dot(raycastResult.directionWorld);
                raycastResult.hitPointWorld.vsub(chassis.position, relpos);
                chassis.getVelocityAtWorldPoint(relpos, chassis_velocity_at_contactPoint);
                var projVel = raycastResult.hitNormalWorld.dot(chassis_velocity_at_contactPoint);
                if (project >= -.1) {
                  this.suspensionRelativeVelocity = 0;
                  this.clippedInvContactDotSuspension = 10;
                } else {
                  var inv = -1 / project;
                  this.suspensionRelativeVelocity = projVel * inv;
                  this.clippedInvContactDotSuspension = inv;
                }
              } else {
                raycastResult.suspensionLength = this.suspensionRestLength;
                this.suspensionRelativeVelocity = 0;
                raycastResult.directionWorld.scale(-1, raycastResult.hitNormalWorld);
                this.clippedInvContactDotSuspension = 1;
              }
            };
          }, {
            "../collision/RaycastResult": 11,
            "../math/Transform": 31,
            "../math/Vec3": 32,
            "../utils/Utils": 55
          } ],
          39: [ function(_dereq_, module, exports) {
            module.exports = Box;
            var Shape = _dereq_("./Shape");
            var Vec3 = _dereq_("../math/Vec3");
            var ConvexPolyhedron = _dereq_("./ConvexPolyhedron");
            function Box(halfExtents) {
              Shape.call(this, {
                type: Shape.types.BOX
              });
              this.halfExtents = halfExtents;
              this.convexPolyhedronRepresentation = null;
              this.updateConvexPolyhedronRepresentation();
              this.updateBoundingSphereRadius();
            }
            Box.prototype = new Shape();
            Box.prototype.constructor = Box;
            Box.prototype.updateConvexPolyhedronRepresentation = function() {
              var sx = this.halfExtents.x;
              var sy = this.halfExtents.y;
              var sz = this.halfExtents.z;
              var V = Vec3;
              var vertices = [ new V(-sx, -sy, -sz), new V(sx, -sy, -sz), new V(sx, sy, -sz), new V(-sx, sy, -sz), new V(-sx, -sy, sz), new V(sx, -sy, sz), new V(sx, sy, sz), new V(-sx, sy, sz) ];
              var indices = [ [ 3, 2, 1, 0 ], [ 4, 5, 6, 7 ], [ 5, 4, 0, 1 ], [ 2, 3, 7, 6 ], [ 0, 4, 7, 3 ], [ 1, 2, 6, 5 ] ];
              var axes = [ new V(0, 0, 1), new V(0, 1, 0), new V(1, 0, 0) ];
              var h = new ConvexPolyhedron(vertices, indices);
              this.convexPolyhedronRepresentation = h;
              h.material = this.material;
            };
            Box.prototype.calculateLocalInertia = function(mass, target) {
              target = target || new Vec3();
              Box.calculateInertia(this.halfExtents, mass, target);
              return target;
            };
            Box.calculateInertia = function(halfExtents, mass, target) {
              var e = halfExtents;
              if (e.isZero()) {
                target.x = 2 / 12 * mass;
                target.y = 2 / 12 * mass;
                target.z = 2 / 12 * mass;
              } else {
                target.x = 1 / 12 * mass * (2 * e.y * 2 * e.y + 2 * e.z * 2 * e.z);
                target.y = 1 / 12 * mass * (2 * e.x * 2 * e.x + 2 * e.z * 2 * e.z);
                target.z = 1 / 12 * mass * (2 * e.y * 2 * e.y + 2 * e.x * 2 * e.x);
              }
            };
            Box.prototype.getSideNormals = function(sixTargetVectors, quat) {
              var sides = sixTargetVectors;
              var ex = this.halfExtents;
              sides[0].set(ex.x, 0, 0);
              sides[1].set(0, ex.y, 0);
              sides[2].set(0, 0, ex.z);
              sides[3].set(-ex.x, 0, 0);
              sides[4].set(0, -ex.y, 0);
              sides[5].set(0, 0, -ex.z);
              if (void 0 !== quat) for (var i = 0; i !== sides.length; i++) quat.vmult(sides[i], sides[i]);
              return sides;
            };
            Box.prototype.volume = function() {
              return 8 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z;
            };
            Box.prototype.updateBoundingSphereRadius = function() {
              this.boundingSphereRadius = this.halfExtents.norm();
            };
            var worldCornerTempPos = new Vec3();
            var worldCornerTempNeg = new Vec3();
            Box.prototype.forEachWorldCorner = function(pos, quat, callback) {
              var e = this.halfExtents;
              var corners = [ [ e.x, e.y, e.z ], [ -e.x, e.y, e.z ], [ -e.x, -e.y, e.z ], [ -e.x, -e.y, -e.z ], [ e.x, -e.y, -e.z ], [ e.x, e.y, -e.z ], [ -e.x, e.y, -e.z ], [ e.x, -e.y, e.z ] ];
              for (var i = 0; i < corners.length; i++) {
                worldCornerTempPos.set(corners[i][0], corners[i][1], corners[i][2]);
                quat.vmult(worldCornerTempPos, worldCornerTempPos);
                pos.vadd(worldCornerTempPos, worldCornerTempPos);
                callback(worldCornerTempPos.x, worldCornerTempPos.y, worldCornerTempPos.z);
              }
            };
            var worldCornersTemp = [ new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3() ];
            Box.prototype.calculateWorldAABB = function(pos, quat, min, max) {
              var e = this.halfExtents;
              worldCornersTemp[0].set(e.x, e.y, e.z);
              worldCornersTemp[1].set(-e.x, e.y, e.z);
              worldCornersTemp[2].set(-e.x, -e.y, e.z);
              worldCornersTemp[3].set(-e.x, -e.y, -e.z);
              worldCornersTemp[4].set(e.x, -e.y, -e.z);
              worldCornersTemp[5].set(e.x, e.y, -e.z);
              worldCornersTemp[6].set(-e.x, e.y, -e.z);
              worldCornersTemp[7].set(e.x, -e.y, e.z);
              var wc = worldCornersTemp[0];
              quat.vmult(wc, wc);
              pos.vadd(wc, wc);
              max.copy(wc);
              min.copy(wc);
              for (var i = 1; i < 8; i++) {
                var wc = worldCornersTemp[i];
                quat.vmult(wc, wc);
                pos.vadd(wc, wc);
                var x = wc.x;
                var y = wc.y;
                var z = wc.z;
                x > max.x && (max.x = x);
                y > max.y && (max.y = y);
                z > max.z && (max.z = z);
                x < min.x && (min.x = x);
                y < min.y && (min.y = y);
                z < min.z && (min.z = z);
              }
            };
          }, {
            "../math/Vec3": 32,
            "./ConvexPolyhedron": 40,
            "./Shape": 45
          } ],
          40: [ function(_dereq_, module, exports) {
            module.exports = ConvexPolyhedron;
            var Shape = _dereq_("./Shape");
            var Vec3 = _dereq_("../math/Vec3");
            var Quaternion = _dereq_("../math/Quaternion");
            var Transform = _dereq_("../math/Transform");
            function ConvexPolyhedron(points, faces, uniqueAxes) {
              Shape.call(this, {
                type: Shape.types.CONVEXPOLYHEDRON
              });
              this.vertices = points || [];
              this.worldVertices = [];
              this.worldVerticesNeedsUpdate = true;
              this.faces = faces || [];
              this.faceNormals = [];
              this.computeNormals();
              this.worldFaceNormalsNeedsUpdate = true;
              this.worldFaceNormals = [];
              this.uniqueEdges = [];
              this.uniqueAxes = uniqueAxes ? uniqueAxes.slice() : null;
              this.computeEdges();
              this.updateBoundingSphereRadius();
            }
            ConvexPolyhedron.prototype = new Shape();
            ConvexPolyhedron.prototype.constructor = ConvexPolyhedron;
            var computeEdges_tmpEdge = new Vec3();
            ConvexPolyhedron.prototype.computeEdges = function() {
              var faces = this.faces;
              var vertices = this.vertices;
              var nv = vertices.length;
              var edges = this.uniqueEdges;
              edges.length = 0;
              var edge = computeEdges_tmpEdge;
              for (var i = 0; i !== faces.length; i++) {
                var face = faces[i];
                var numVertices = face.length;
                for (var j = 0; j !== numVertices; j++) {
                  var k = (j + 1) % numVertices;
                  vertices[face[j]].vsub(vertices[face[k]], edge);
                  edge.normalize();
                  var found = false;
                  for (var p = 0; p !== edges.length; p++) if (edges[p].almostEquals(edge) || edges[p].almostEquals(edge)) {
                    found = true;
                    break;
                  }
                  found || edges.push(edge.clone());
                }
              }
            };
            ConvexPolyhedron.prototype.computeNormals = function() {
              this.faceNormals.length = this.faces.length;
              for (var i = 0; i < this.faces.length; i++) {
                for (var j = 0; j < this.faces[i].length; j++) if (!this.vertices[this.faces[i][j]]) throw new Error("Vertex " + this.faces[i][j] + " not found!");
                var n = this.faceNormals[i] || new Vec3();
                this.getFaceNormal(i, n);
                n.negate(n);
                this.faceNormals[i] = n;
                var vertex = this.vertices[this.faces[i][0]];
                if (n.dot(vertex) < 0) {
                  console.error(".faceNormals[" + i + "] = Vec3(" + n.toString() + ") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");
                  for (var j = 0; j < this.faces[i].length; j++) console.warn(".vertices[" + this.faces[i][j] + "] = Vec3(" + this.vertices[this.faces[i][j]].toString() + ")");
                }
              }
            };
            var cb = new Vec3();
            var ab = new Vec3();
            ConvexPolyhedron.computeNormal = function(va, vb, vc, target) {
              vb.vsub(va, ab);
              vc.vsub(vb, cb);
              cb.cross(ab, target);
              target.isZero() || target.normalize();
            };
            ConvexPolyhedron.prototype.getFaceNormal = function(i, target) {
              var f = this.faces[i];
              var va = this.vertices[f[0]];
              var vb = this.vertices[f[1]];
              var vc = this.vertices[f[2]];
              return ConvexPolyhedron.computeNormal(va, vb, vc, target);
            };
            var cah_WorldNormal = new Vec3();
            ConvexPolyhedron.prototype.clipAgainstHull = function(posA, quatA, hullB, posB, quatB, separatingNormal, minDist, maxDist, result) {
              var WorldNormal = cah_WorldNormal;
              var hullA = this;
              var curMaxDist = maxDist;
              var closestFaceB = -1;
              var dmax = -Number.MAX_VALUE;
              for (var face = 0; face < hullB.faces.length; face++) {
                WorldNormal.copy(hullB.faceNormals[face]);
                quatB.vmult(WorldNormal, WorldNormal);
                var d = WorldNormal.dot(separatingNormal);
                if (d > dmax) {
                  dmax = d;
                  closestFaceB = face;
                }
              }
              var worldVertsB1 = [];
              var polyB = hullB.faces[closestFaceB];
              var numVertices = polyB.length;
              for (var e0 = 0; e0 < numVertices; e0++) {
                var b = hullB.vertices[polyB[e0]];
                var worldb = new Vec3();
                worldb.copy(b);
                quatB.vmult(worldb, worldb);
                posB.vadd(worldb, worldb);
                worldVertsB1.push(worldb);
              }
              closestFaceB >= 0 && this.clipFaceAgainstHull(separatingNormal, posA, quatA, worldVertsB1, minDist, maxDist, result);
            };
            var fsa_faceANormalWS3 = new Vec3(), fsa_Worldnormal1 = new Vec3(), fsa_deltaC = new Vec3(), fsa_worldEdge0 = new Vec3(), fsa_worldEdge1 = new Vec3(), fsa_Cross = new Vec3();
            ConvexPolyhedron.prototype.findSeparatingAxis = function(hullB, posA, quatA, posB, quatB, target, faceListA, faceListB) {
              var faceANormalWS3 = fsa_faceANormalWS3, Worldnormal1 = fsa_Worldnormal1, deltaC = fsa_deltaC, worldEdge0 = fsa_worldEdge0, worldEdge1 = fsa_worldEdge1, Cross = fsa_Cross;
              var dmin = Number.MAX_VALUE;
              var hullA = this;
              var curPlaneTests = 0;
              if (hullA.uniqueAxes) for (var i = 0; i !== hullA.uniqueAxes.length; i++) {
                quatA.vmult(hullA.uniqueAxes[i], faceANormalWS3);
                var d = hullA.testSepAxis(faceANormalWS3, hullB, posA, quatA, posB, quatB);
                if (false === d) return false;
                if (d < dmin) {
                  dmin = d;
                  target.copy(faceANormalWS3);
                }
              } else {
                var numFacesA = faceListA ? faceListA.length : hullA.faces.length;
                for (var i = 0; i < numFacesA; i++) {
                  var fi = faceListA ? faceListA[i] : i;
                  faceANormalWS3.copy(hullA.faceNormals[fi]);
                  quatA.vmult(faceANormalWS3, faceANormalWS3);
                  var d = hullA.testSepAxis(faceANormalWS3, hullB, posA, quatA, posB, quatB);
                  if (false === d) return false;
                  if (d < dmin) {
                    dmin = d;
                    target.copy(faceANormalWS3);
                  }
                }
              }
              if (hullB.uniqueAxes) for (var i = 0; i !== hullB.uniqueAxes.length; i++) {
                quatB.vmult(hullB.uniqueAxes[i], Worldnormal1);
                curPlaneTests++;
                var d = hullA.testSepAxis(Worldnormal1, hullB, posA, quatA, posB, quatB);
                if (false === d) return false;
                if (d < dmin) {
                  dmin = d;
                  target.copy(Worldnormal1);
                }
              } else {
                var numFacesB = faceListB ? faceListB.length : hullB.faces.length;
                for (var i = 0; i < numFacesB; i++) {
                  var fi = faceListB ? faceListB[i] : i;
                  Worldnormal1.copy(hullB.faceNormals[fi]);
                  quatB.vmult(Worldnormal1, Worldnormal1);
                  curPlaneTests++;
                  var d = hullA.testSepAxis(Worldnormal1, hullB, posA, quatA, posB, quatB);
                  if (false === d) return false;
                  if (d < dmin) {
                    dmin = d;
                    target.copy(Worldnormal1);
                  }
                }
              }
              for (var e0 = 0; e0 !== hullA.uniqueEdges.length; e0++) {
                quatA.vmult(hullA.uniqueEdges[e0], worldEdge0);
                for (var e1 = 0; e1 !== hullB.uniqueEdges.length; e1++) {
                  quatB.vmult(hullB.uniqueEdges[e1], worldEdge1);
                  worldEdge0.cross(worldEdge1, Cross);
                  if (!Cross.almostZero()) {
                    Cross.normalize();
                    var dist = hullA.testSepAxis(Cross, hullB, posA, quatA, posB, quatB);
                    if (false === dist) return false;
                    if (dist < dmin) {
                      dmin = dist;
                      target.copy(Cross);
                    }
                  }
                }
              }
              posB.vsub(posA, deltaC);
              deltaC.dot(target) > 0 && target.negate(target);
              return true;
            };
            var maxminA = [], maxminB = [];
            ConvexPolyhedron.prototype.testSepAxis = function(axis, hullB, posA, quatA, posB, quatB) {
              var hullA = this;
              ConvexPolyhedron.project(hullA, axis, posA, quatA, maxminA);
              ConvexPolyhedron.project(hullB, axis, posB, quatB, maxminB);
              var maxA = maxminA[0];
              var minA = maxminA[1];
              var maxB = maxminB[0];
              var minB = maxminB[1];
              if (maxA < minB || maxB < minA) return false;
              var d0 = maxA - minB;
              var d1 = maxB - minA;
              var depth = d0 < d1 ? d0 : d1;
              return depth;
            };
            var cli_aabbmin = new Vec3(), cli_aabbmax = new Vec3();
            ConvexPolyhedron.prototype.calculateLocalInertia = function(mass, target) {
              this.computeLocalAABB(cli_aabbmin, cli_aabbmax);
              var x = cli_aabbmax.x - cli_aabbmin.x, y = cli_aabbmax.y - cli_aabbmin.y, z = cli_aabbmax.z - cli_aabbmin.z;
              target.x = 1 / 12 * mass * (2 * y * 2 * y + 2 * z * 2 * z);
              target.y = 1 / 12 * mass * (2 * x * 2 * x + 2 * z * 2 * z);
              target.z = 1 / 12 * mass * (2 * y * 2 * y + 2 * x * 2 * x);
            };
            ConvexPolyhedron.prototype.getPlaneConstantOfFace = function(face_i) {
              var f = this.faces[face_i];
              var n = this.faceNormals[face_i];
              var v = this.vertices[f[0]];
              var c = -n.dot(v);
              return c;
            };
            var cfah_faceANormalWS = new Vec3(), cfah_edge0 = new Vec3(), cfah_WorldEdge0 = new Vec3(), cfah_worldPlaneAnormal1 = new Vec3(), cfah_planeNormalWS1 = new Vec3(), cfah_worldA1 = new Vec3(), cfah_localPlaneNormal = new Vec3(), cfah_planeNormalWS = new Vec3();
            ConvexPolyhedron.prototype.clipFaceAgainstHull = function(separatingNormal, posA, quatA, worldVertsB1, minDist, maxDist, result) {
              var faceANormalWS = cfah_faceANormalWS, edge0 = cfah_edge0, WorldEdge0 = cfah_WorldEdge0, worldPlaneAnormal1 = cfah_worldPlaneAnormal1, planeNormalWS1 = cfah_planeNormalWS1, worldA1 = cfah_worldA1, localPlaneNormal = cfah_localPlaneNormal, planeNormalWS = cfah_planeNormalWS;
              var hullA = this;
              var worldVertsB2 = [];
              var pVtxIn = worldVertsB1;
              var pVtxOut = worldVertsB2;
              var closestFaceA = -1;
              var dmin = Number.MAX_VALUE;
              for (var face = 0; face < hullA.faces.length; face++) {
                faceANormalWS.copy(hullA.faceNormals[face]);
                quatA.vmult(faceANormalWS, faceANormalWS);
                var d = faceANormalWS.dot(separatingNormal);
                if (d < dmin) {
                  dmin = d;
                  closestFaceA = face;
                }
              }
              if (closestFaceA < 0) return;
              var polyA = hullA.faces[closestFaceA];
              polyA.connectedFaces = [];
              for (var i = 0; i < hullA.faces.length; i++) for (var j = 0; j < hullA.faces[i].length; j++) -1 !== polyA.indexOf(hullA.faces[i][j]) && i !== closestFaceA && -1 === polyA.connectedFaces.indexOf(i) && polyA.connectedFaces.push(i);
              var numContacts = pVtxIn.length;
              var numVerticesA = polyA.length;
              var res = [];
              for (var e0 = 0; e0 < numVerticesA; e0++) {
                var a = hullA.vertices[polyA[e0]];
                var b = hullA.vertices[polyA[(e0 + 1) % numVerticesA]];
                a.vsub(b, edge0);
                WorldEdge0.copy(edge0);
                quatA.vmult(WorldEdge0, WorldEdge0);
                posA.vadd(WorldEdge0, WorldEdge0);
                worldPlaneAnormal1.copy(this.faceNormals[closestFaceA]);
                quatA.vmult(worldPlaneAnormal1, worldPlaneAnormal1);
                posA.vadd(worldPlaneAnormal1, worldPlaneAnormal1);
                WorldEdge0.cross(worldPlaneAnormal1, planeNormalWS1);
                planeNormalWS1.negate(planeNormalWS1);
                worldA1.copy(a);
                quatA.vmult(worldA1, worldA1);
                posA.vadd(worldA1, worldA1);
                var planeEqWS1 = -worldA1.dot(planeNormalWS1);
                var planeEqWS;
                true;
                var otherFace = polyA.connectedFaces[e0];
                localPlaneNormal.copy(this.faceNormals[otherFace]);
                var localPlaneEq = this.getPlaneConstantOfFace(otherFace);
                planeNormalWS.copy(localPlaneNormal);
                quatA.vmult(planeNormalWS, planeNormalWS);
                var planeEqWS = localPlaneEq - planeNormalWS.dot(posA);
                this.clipFaceAgainstPlane(pVtxIn, pVtxOut, planeNormalWS, planeEqWS);
                while (pVtxIn.length) pVtxIn.shift();
                while (pVtxOut.length) pVtxIn.push(pVtxOut.shift());
              }
              localPlaneNormal.copy(this.faceNormals[closestFaceA]);
              var localPlaneEq = this.getPlaneConstantOfFace(closestFaceA);
              planeNormalWS.copy(localPlaneNormal);
              quatA.vmult(planeNormalWS, planeNormalWS);
              var planeEqWS = localPlaneEq - planeNormalWS.dot(posA);
              for (var i = 0; i < pVtxIn.length; i++) {
                var depth = planeNormalWS.dot(pVtxIn[i]) + planeEqWS;
                depth <= minDist && (depth = minDist);
                if (depth <= maxDist) {
                  var point = pVtxIn[i];
                  if (depth <= 0) {
                    var p = {
                      point: point,
                      normal: planeNormalWS,
                      depth: depth
                    };
                    result.push(p);
                  }
                }
              }
            };
            ConvexPolyhedron.prototype.clipFaceAgainstPlane = function(inVertices, outVertices, planeNormal, planeConstant) {
              var n_dot_first, n_dot_last;
              var numVerts = inVertices.length;
              if (numVerts < 2) return outVertices;
              var firstVertex = inVertices[inVertices.length - 1], lastVertex = inVertices[0];
              n_dot_first = planeNormal.dot(firstVertex) + planeConstant;
              for (var vi = 0; vi < numVerts; vi++) {
                lastVertex = inVertices[vi];
                n_dot_last = planeNormal.dot(lastVertex) + planeConstant;
                if (n_dot_first < 0) if (n_dot_last < 0) {
                  var newv = new Vec3();
                  newv.copy(lastVertex);
                  outVertices.push(newv);
                } else {
                  var newv = new Vec3();
                  firstVertex.lerp(lastVertex, n_dot_first / (n_dot_first - n_dot_last), newv);
                  outVertices.push(newv);
                } else if (n_dot_last < 0) {
                  var newv = new Vec3();
                  firstVertex.lerp(lastVertex, n_dot_first / (n_dot_first - n_dot_last), newv);
                  outVertices.push(newv);
                  outVertices.push(lastVertex);
                }
                firstVertex = lastVertex;
                n_dot_first = n_dot_last;
              }
              return outVertices;
            };
            ConvexPolyhedron.prototype.computeWorldVertices = function(position, quat) {
              var N = this.vertices.length;
              while (this.worldVertices.length < N) this.worldVertices.push(new Vec3());
              var verts = this.vertices, worldVerts = this.worldVertices;
              for (var i = 0; i !== N; i++) {
                quat.vmult(verts[i], worldVerts[i]);
                position.vadd(worldVerts[i], worldVerts[i]);
              }
              this.worldVerticesNeedsUpdate = false;
            };
            var computeLocalAABB_worldVert = new Vec3();
            ConvexPolyhedron.prototype.computeLocalAABB = function(aabbmin, aabbmax) {
              var n = this.vertices.length, vertices = this.vertices, worldVert = computeLocalAABB_worldVert;
              aabbmin.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
              aabbmax.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
              for (var i = 0; i < n; i++) {
                var v = vertices[i];
                v.x < aabbmin.x ? aabbmin.x = v.x : v.x > aabbmax.x && (aabbmax.x = v.x);
                v.y < aabbmin.y ? aabbmin.y = v.y : v.y > aabbmax.y && (aabbmax.y = v.y);
                v.z < aabbmin.z ? aabbmin.z = v.z : v.z > aabbmax.z && (aabbmax.z = v.z);
              }
            };
            ConvexPolyhedron.prototype.computeWorldFaceNormals = function(quat) {
              var N = this.faceNormals.length;
              while (this.worldFaceNormals.length < N) this.worldFaceNormals.push(new Vec3());
              var normals = this.faceNormals, worldNormals = this.worldFaceNormals;
              for (var i = 0; i !== N; i++) quat.vmult(normals[i], worldNormals[i]);
              this.worldFaceNormalsNeedsUpdate = false;
            };
            ConvexPolyhedron.prototype.updateBoundingSphereRadius = function() {
              var max2 = 0;
              var verts = this.vertices;
              for (var i = 0, N = verts.length; i !== N; i++) {
                var norm2 = verts[i].norm2();
                norm2 > max2 && (max2 = norm2);
              }
              this.boundingSphereRadius = Math.sqrt(max2);
            };
            var tempWorldVertex = new Vec3();
            ConvexPolyhedron.prototype.calculateWorldAABB = function(pos, quat, min, max) {
              var n = this.vertices.length, verts = this.vertices;
              var minx, miny, minz, maxx, maxy, maxz;
              for (var i = 0; i < n; i++) {
                tempWorldVertex.copy(verts[i]);
                quat.vmult(tempWorldVertex, tempWorldVertex);
                pos.vadd(tempWorldVertex, tempWorldVertex);
                var v = tempWorldVertex;
                (v.x < minx || void 0 === minx) && (minx = v.x);
                (v.x > maxx || void 0 === maxx) && (maxx = v.x);
                (v.y < miny || void 0 === miny) && (miny = v.y);
                (v.y > maxy || void 0 === maxy) && (maxy = v.y);
                (v.z < minz || void 0 === minz) && (minz = v.z);
                (v.z > maxz || void 0 === maxz) && (maxz = v.z);
              }
              min.set(minx, miny, minz);
              max.set(maxx, maxy, maxz);
            };
            ConvexPolyhedron.prototype.volume = function() {
              return 4 * Math.PI * this.boundingSphereRadius / 3;
            };
            ConvexPolyhedron.prototype.getAveragePointLocal = function(target) {
              target = target || new Vec3();
              var n = this.vertices.length, verts = this.vertices;
              for (var i = 0; i < n; i++) target.vadd(verts[i], target);
              target.mult(1 / n, target);
              return target;
            };
            ConvexPolyhedron.prototype.transformAllPoints = function(offset, quat) {
              var n = this.vertices.length, verts = this.vertices;
              if (quat) {
                for (var i = 0; i < n; i++) {
                  var v = verts[i];
                  quat.vmult(v, v);
                }
                for (var i = 0; i < this.faceNormals.length; i++) {
                  var v = this.faceNormals[i];
                  quat.vmult(v, v);
                }
              }
              if (offset) for (var i = 0; i < n; i++) {
                var v = verts[i];
                v.vadd(offset, v);
              }
            };
            var ConvexPolyhedron_pointIsInside = new Vec3();
            var ConvexPolyhedron_vToP = new Vec3();
            var ConvexPolyhedron_vToPointInside = new Vec3();
            ConvexPolyhedron.prototype.pointIsInside = function(p) {
              var n = this.vertices.length, verts = this.vertices, faces = this.faces, normals = this.faceNormals;
              var positiveResult = null;
              var N = this.faces.length;
              var pointInside = ConvexPolyhedron_pointIsInside;
              this.getAveragePointLocal(pointInside);
              for (var i = 0; i < N; i++) {
                var numVertices = this.faces[i].length;
                var n = normals[i];
                var v = verts[faces[i][0]];
                var vToP = ConvexPolyhedron_vToP;
                p.vsub(v, vToP);
                var r1 = n.dot(vToP);
                var vToPointInside = ConvexPolyhedron_vToPointInside;
                pointInside.vsub(v, vToPointInside);
                var r2 = n.dot(vToPointInside);
                if (r1 < 0 && r2 > 0 || r1 > 0 && r2 < 0) return false;
              }
              return positiveResult ? 1 : -1;
            };
            var project_worldVertex = new Vec3();
            var project_localAxis = new Vec3();
            var project_localOrigin = new Vec3();
            ConvexPolyhedron.project = function(hull, axis, pos, quat, result) {
              var n = hull.vertices.length, worldVertex = project_worldVertex, localAxis = project_localAxis, max = 0, min = 0, localOrigin = project_localOrigin, vs = hull.vertices;
              localOrigin.setZero();
              Transform.vectorToLocalFrame(pos, quat, axis, localAxis);
              Transform.pointToLocalFrame(pos, quat, localOrigin, localOrigin);
              var add = localOrigin.dot(localAxis);
              min = max = vs[0].dot(localAxis);
              for (var i = 1; i < n; i++) {
                var val = vs[i].dot(localAxis);
                val > max && (max = val);
                val < min && (min = val);
              }
              min -= add;
              max -= add;
              if (min > max) {
                var temp = min;
                min = max;
                max = temp;
              }
              result[0] = max;
              result[1] = min;
            };
          }, {
            "../math/Quaternion": 30,
            "../math/Transform": 31,
            "../math/Vec3": 32,
            "./Shape": 45
          } ],
          41: [ function(_dereq_, module, exports) {
            module.exports = Cylinder;
            var Shape = _dereq_("./Shape");
            var Vec3 = _dereq_("../math/Vec3");
            var Quaternion = _dereq_("../math/Quaternion");
            var ConvexPolyhedron = _dereq_("./ConvexPolyhedron");
            var CMath = _dereq_("../math/CMath");
            function Cylinder(radiusTop, radiusBottom, height, numSegments, isDirY) {
              if (isDirY) {
                var N = numSegments, cos = CMath.cos, sin = CMath.sin;
                var halfH = height / 2;
                var vertices = [];
                var indices = [];
                var tf = [ 0 ];
                var bf = [ 1 ];
                var axes = [];
                var theta = 2 * Math.PI / N;
                for (var i = 0; i < N; i++) {
                  vertices.push(new Vec3(radiusTop * cos(theta * i), halfH, radiusTop * sin(theta * i)));
                  vertices.push(new Vec3(radiusTop * cos(theta * i), -halfH, radiusTop * sin(theta * i)));
                  if (i < N - 1) {
                    indices.push([ 2 * i + 2, 2 * i + 3, 2 * i + 1, 2 * i ]);
                    tf.push(2 * i + 2);
                    bf.push(2 * i + 3);
                  } else indices.push([ 0, 1, 2 * i + 1, 2 * i ]);
                  (N % 2 === 1 || i < N / 2) && axes.push(new Vec3(cos(theta * (i + .5)), 0, sin(theta * (i + .5))));
                }
                indices.push(bf);
                var temp = [];
                for (var i = 0; i < tf.length; i++) temp.push(tf[tf.length - i - 1]);
                indices.push(temp);
                axes.push(new Vec3(0, 1, 0));
                ConvexPolyhedron.call(this, vertices, indices, axes);
                return;
              }
              var N = numSegments, verts = [], axes = [], faces = [], bottomface = [], topface = [], cos = CMath.cos, sin = CMath.sin;
              verts.push(new Vec3(radiusBottom * cos(0), radiusBottom * sin(0), .5 * -height));
              bottomface.push(0);
              verts.push(new Vec3(radiusTop * cos(0), radiusTop * sin(0), .5 * height));
              topface.push(1);
              for (var i = 0; i < N; i++) {
                var theta = 2 * Math.PI / N * (i + 1);
                var thetaN = 2 * Math.PI / N * (i + .5);
                if (i < N - 1) {
                  verts.push(new Vec3(radiusBottom * cos(theta), radiusBottom * sin(theta), .5 * -height));
                  bottomface.push(2 * i + 2);
                  verts.push(new Vec3(radiusTop * cos(theta), radiusTop * sin(theta), .5 * height));
                  topface.push(2 * i + 3);
                  faces.push([ 2 * i + 2, 2 * i + 3, 2 * i + 1, 2 * i ]);
                } else faces.push([ 0, 1, 2 * i + 1, 2 * i ]);
                (N % 2 === 1 || i < N / 2) && axes.push(new Vec3(cos(thetaN), sin(thetaN), 0));
              }
              faces.push(topface);
              axes.push(new Vec3(0, 0, 1));
              var temp = [];
              for (var i = 0; i < bottomface.length; i++) temp.push(bottomface[bottomface.length - i - 1]);
              faces.push(temp);
              ConvexPolyhedron.call(this, verts, faces, axes);
            }
            Cylinder.prototype = new ConvexPolyhedron();
          }, {
            "../math/CMath": 27,
            "../math/Quaternion": 30,
            "../math/Vec3": 32,
            "./ConvexPolyhedron": 40,
            "./Shape": 45
          } ],
          42: [ function(_dereq_, module, exports) {
            var Shape = _dereq_("./Shape");
            var ConvexPolyhedron = _dereq_("./ConvexPolyhedron");
            var Vec3 = _dereq_("../math/Vec3");
            var Utils = _dereq_("../utils/Utils");
            module.exports = Heightfield;
            function Heightfield(data, options) {
              options = Utils.defaults(options, {
                maxValue: null,
                minValue: null,
                elementSize: 1
              });
              this.data = data;
              this.maxValue = options.maxValue;
              this.minValue = options.minValue;
              this.elementSize = options.elementSize;
              null === options.minValue && this.updateMinValue();
              null === options.maxValue && this.updateMaxValue();
              this.cacheEnabled = true;
              Shape.call(this, {
                type: Shape.types.HEIGHTFIELD
              });
              this.pillarConvex = new ConvexPolyhedron();
              this.pillarOffset = new Vec3();
              this.updateBoundingSphereRadius();
              this._cachedPillars = {};
            }
            Heightfield.prototype = new Shape();
            Heightfield.prototype.update = function() {
              this._cachedPillars = {};
            };
            Heightfield.prototype.updateMinValue = function() {
              var data = this.data;
              var minValue = data[0][0];
              for (var i = 0; i !== data.length; i++) for (var j = 0; j !== data[i].length; j++) {
                var v = data[i][j];
                v < minValue && (minValue = v);
              }
              this.minValue = minValue;
            };
            Heightfield.prototype.updateMaxValue = function() {
              var data = this.data;
              var maxValue = data[0][0];
              for (var i = 0; i !== data.length; i++) for (var j = 0; j !== data[i].length; j++) {
                var v = data[i][j];
                v > maxValue && (maxValue = v);
              }
              this.maxValue = maxValue;
            };
            Heightfield.prototype.setHeightValueAtIndex = function(xi, yi, value) {
              var data = this.data;
              data[xi][yi] = value;
              this.clearCachedConvexTrianglePillar(xi, yi, false);
              if (xi > 0) {
                this.clearCachedConvexTrianglePillar(xi - 1, yi, true);
                this.clearCachedConvexTrianglePillar(xi - 1, yi, false);
              }
              if (yi > 0) {
                this.clearCachedConvexTrianglePillar(xi, yi - 1, true);
                this.clearCachedConvexTrianglePillar(xi, yi - 1, false);
              }
              yi > 0 && xi > 0 && this.clearCachedConvexTrianglePillar(xi - 1, yi - 1, true);
            };
            Heightfield.prototype.getRectMinMax = function(iMinX, iMinY, iMaxX, iMaxY, result) {
              result = result || [];
              var data = this.data, max = this.minValue;
              for (var i = iMinX; i <= iMaxX; i++) for (var j = iMinY; j <= iMaxY; j++) {
                var height = data[i][j];
                height > max && (max = height);
              }
              result[0] = this.minValue;
              result[1] = max;
            };
            Heightfield.prototype.getIndexOfPosition = function(x, y, result, clamp) {
              var w = this.elementSize;
              var data = this.data;
              var xi = Math.floor(x / w);
              var yi = Math.floor(y / w);
              result[0] = xi;
              result[1] = yi;
              if (clamp) {
                xi < 0 && (xi = 0);
                yi < 0 && (yi = 0);
                xi >= data.length - 1 && (xi = data.length - 1);
                yi >= data[0].length - 1 && (yi = data[0].length - 1);
              }
              if (xi < 0 || yi < 0 || xi >= data.length - 1 || yi >= data[0].length - 1) return false;
              return true;
            };
            var getHeightAt_idx = [];
            var getHeightAt_weights = new Vec3();
            var getHeightAt_a = new Vec3();
            var getHeightAt_b = new Vec3();
            var getHeightAt_c = new Vec3();
            Heightfield.prototype.getTriangleAt = function(x, y, edgeClamp, a, b, c) {
              var idx = getHeightAt_idx;
              this.getIndexOfPosition(x, y, idx, edgeClamp);
              var xi = idx[0];
              var yi = idx[1];
              var data = this.data;
              if (edgeClamp) {
                xi = Math.min(data.length - 2, Math.max(0, xi));
                yi = Math.min(data[0].length - 2, Math.max(0, yi));
              }
              var elementSize = this.elementSize;
              var lowerDist2 = Math.pow(x / elementSize - xi, 2) + Math.pow(y / elementSize - yi, 2);
              var upperDist2 = Math.pow(x / elementSize - (xi + 1), 2) + Math.pow(y / elementSize - (yi + 1), 2);
              var upper = lowerDist2 > upperDist2;
              this.getTriangle(xi, yi, upper, a, b, c);
              return upper;
            };
            var getNormalAt_a = new Vec3();
            var getNormalAt_b = new Vec3();
            var getNormalAt_c = new Vec3();
            var getNormalAt_e0 = new Vec3();
            var getNormalAt_e1 = new Vec3();
            Heightfield.prototype.getNormalAt = function(x, y, edgeClamp, result) {
              var a = getNormalAt_a;
              var b = getNormalAt_b;
              var c = getNormalAt_c;
              var e0 = getNormalAt_e0;
              var e1 = getNormalAt_e1;
              this.getTriangleAt(x, y, edgeClamp, a, b, c);
              b.vsub(a, e0);
              c.vsub(a, e1);
              e0.cross(e1, result);
              result.normalize();
            };
            Heightfield.prototype.getAabbAtIndex = function(xi, yi, result) {
              var data = this.data;
              var elementSize = this.elementSize;
              result.lowerBound.set(xi * elementSize, yi * elementSize, data[xi][yi]);
              result.upperBound.set((xi + 1) * elementSize, (yi + 1) * elementSize, data[xi + 1][yi + 1]);
            };
            Heightfield.prototype.getHeightAt = function(x, y, edgeClamp) {
              var data = this.data;
              var a = getHeightAt_a;
              var b = getHeightAt_b;
              var c = getHeightAt_c;
              var idx = getHeightAt_idx;
              this.getIndexOfPosition(x, y, idx, edgeClamp);
              var xi = idx[0];
              var yi = idx[1];
              if (edgeClamp) {
                xi = Math.min(data.length - 2, Math.max(0, xi));
                yi = Math.min(data[0].length - 2, Math.max(0, yi));
              }
              var upper = this.getTriangleAt(x, y, edgeClamp, a, b, c);
              barycentricWeights(x, y, a.x, a.y, b.x, b.y, c.x, c.y, getHeightAt_weights);
              var w = getHeightAt_weights;
              return upper ? data[xi + 1][yi + 1] * w.x + data[xi][yi + 1] * w.y + data[xi + 1][yi] * w.z : data[xi][yi] * w.x + data[xi + 1][yi] * w.y + data[xi][yi + 1] * w.z;
            };
            function barycentricWeights(x, y, ax, ay, bx, by, cx, cy, result) {
              result.x = ((by - cy) * (x - cx) + (cx - bx) * (y - cy)) / ((by - cy) * (ax - cx) + (cx - bx) * (ay - cy));
              result.y = ((cy - ay) * (x - cx) + (ax - cx) * (y - cy)) / ((by - cy) * (ax - cx) + (cx - bx) * (ay - cy));
              result.z = 1 - result.x - result.y;
            }
            Heightfield.prototype.getCacheConvexTrianglePillarKey = function(xi, yi, getUpperTriangle) {
              return xi + "_" + yi + "_" + (getUpperTriangle ? 1 : 0);
            };
            Heightfield.prototype.getCachedConvexTrianglePillar = function(xi, yi, getUpperTriangle) {
              return this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)];
            };
            Heightfield.prototype.setCachedConvexTrianglePillar = function(xi, yi, getUpperTriangle, convex, offset) {
              this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)] = {
                convex: convex,
                offset: offset
              };
            };
            Heightfield.prototype.clearCachedConvexTrianglePillar = function(xi, yi, getUpperTriangle) {
              delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)];
            };
            Heightfield.prototype.getTriangle = function(xi, yi, upper, a, b, c) {
              var data = this.data;
              var elementSize = this.elementSize;
              if (upper) {
                a.set((xi + 1) * elementSize, (yi + 1) * elementSize, data[xi + 1][yi + 1]);
                b.set(xi * elementSize, (yi + 1) * elementSize, data[xi][yi + 1]);
                c.set((xi + 1) * elementSize, yi * elementSize, data[xi + 1][yi]);
              } else {
                a.set(xi * elementSize, yi * elementSize, data[xi][yi]);
                b.set((xi + 1) * elementSize, yi * elementSize, data[xi + 1][yi]);
                c.set(xi * elementSize, (yi + 1) * elementSize, data[xi][yi + 1]);
              }
            };
            Heightfield.prototype.getConvexTrianglePillar = function(xi, yi, getUpperTriangle) {
              var result = this.pillarConvex;
              var offsetResult = this.pillarOffset;
              if (this.cacheEnabled) {
                var data = this.getCachedConvexTrianglePillar(xi, yi, getUpperTriangle);
                if (data) {
                  this.pillarConvex = data.convex;
                  this.pillarOffset = data.offset;
                  return;
                }
                result = new ConvexPolyhedron();
                offsetResult = new Vec3();
                this.pillarConvex = result;
                this.pillarOffset = offsetResult;
              }
              var data = this.data;
              var elementSize = this.elementSize;
              var faces = result.faces;
              result.vertices.length = 6;
              for (var i = 0; i < 6; i++) result.vertices[i] || (result.vertices[i] = new Vec3());
              faces.length = 5;
              for (var i = 0; i < 5; i++) faces[i] || (faces[i] = []);
              var verts = result.vertices;
              var h = (Math.min(data[xi][yi], data[xi + 1][yi], data[xi][yi + 1], data[xi + 1][yi + 1]) - this.minValue) / 2 + this.minValue;
              if (getUpperTriangle) {
                offsetResult.set((xi + .75) * elementSize, (yi + .75) * elementSize, h);
                verts[0].set(.25 * elementSize, .25 * elementSize, data[xi + 1][yi + 1] - h);
                verts[1].set(-.75 * elementSize, .25 * elementSize, data[xi][yi + 1] - h);
                verts[2].set(.25 * elementSize, -.75 * elementSize, data[xi + 1][yi] - h);
                verts[3].set(.25 * elementSize, .25 * elementSize, -h - 1);
                verts[4].set(-.75 * elementSize, .25 * elementSize, -h - 1);
                verts[5].set(.25 * elementSize, -.75 * elementSize, -h - 1);
                faces[0][0] = 0;
                faces[0][1] = 1;
                faces[0][2] = 2;
                faces[1][0] = 5;
                faces[1][1] = 4;
                faces[1][2] = 3;
                faces[2][0] = 2;
                faces[2][1] = 5;
                faces[2][2] = 3;
                faces[2][3] = 0;
                faces[3][0] = 3;
                faces[3][1] = 4;
                faces[3][2] = 1;
                faces[3][3] = 0;
                faces[4][0] = 1;
                faces[4][1] = 4;
                faces[4][2] = 5;
                faces[4][3] = 2;
              } else {
                offsetResult.set((xi + .25) * elementSize, (yi + .25) * elementSize, h);
                verts[0].set(-.25 * elementSize, -.25 * elementSize, data[xi][yi] - h);
                verts[1].set(.75 * elementSize, -.25 * elementSize, data[xi + 1][yi] - h);
                verts[2].set(-.25 * elementSize, .75 * elementSize, data[xi][yi + 1] - h);
                verts[3].set(-.25 * elementSize, -.25 * elementSize, -h - 1);
                verts[4].set(.75 * elementSize, -.25 * elementSize, -h - 1);
                verts[5].set(-.25 * elementSize, .75 * elementSize, -h - 1);
                faces[0][0] = 0;
                faces[0][1] = 1;
                faces[0][2] = 2;
                faces[1][0] = 5;
                faces[1][1] = 4;
                faces[1][2] = 3;
                faces[2][0] = 0;
                faces[2][1] = 2;
                faces[2][2] = 5;
                faces[2][3] = 3;
                faces[3][0] = 1;
                faces[3][1] = 0;
                faces[3][2] = 3;
                faces[3][3] = 4;
                faces[4][0] = 4;
                faces[4][1] = 5;
                faces[4][2] = 2;
                faces[4][3] = 1;
              }
              result.computeNormals();
              result.computeEdges();
              result.updateBoundingSphereRadius();
              this.setCachedConvexTrianglePillar(xi, yi, getUpperTriangle, result, offsetResult);
            };
            Heightfield.prototype.calculateLocalInertia = function(mass, target) {
              target = target || new Vec3();
              target.set(0, 0, 0);
              return target;
            };
            Heightfield.prototype.volume = function() {
              return Number.MAX_VALUE;
            };
            Heightfield.prototype.calculateWorldAABB = function(pos, quat, min, max) {
              min.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
              max.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
            };
            Heightfield.prototype.updateBoundingSphereRadius = function() {
              var data = this.data, s = this.elementSize;
              this.boundingSphereRadius = new Vec3(data.length * s, data[0].length * s, Math.max(Math.abs(this.maxValue), Math.abs(this.minValue))).norm();
            };
            Heightfield.prototype.setHeightsFromImage = function(image, scale) {
              var canvas = document.createElement("canvas");
              canvas.width = image.width;
              canvas.height = image.height;
              var context = canvas.getContext("2d");
              context.drawImage(image, 0, 0);
              var imageData = context.getImageData(0, 0, image.width, image.height);
              var matrix = this.data;
              matrix.length = 0;
              this.elementSize = Math.abs(scale.x) / imageData.width;
              for (var i = 0; i < imageData.height; i++) {
                var row = [];
                for (var j = 0; j < imageData.width; j++) {
                  var a = imageData.data[4 * (i * imageData.height + j)];
                  var b = imageData.data[4 * (i * imageData.height + j) + 1];
                  var c = imageData.data[4 * (i * imageData.height + j) + 2];
                  var height = (a + b + c) / 4 / 255 * scale.z;
                  scale.x < 0 ? row.push(height) : row.unshift(height);
                }
                scale.y < 0 ? matrix.unshift(row) : matrix.push(row);
              }
              this.updateMaxValue();
              this.updateMinValue();
              this.update();
            };
          }, {
            "../math/Vec3": 32,
            "../utils/Utils": 55,
            "./ConvexPolyhedron": 40,
            "./Shape": 45
          } ],
          43: [ function(_dereq_, module, exports) {
            module.exports = Particle;
            var Shape = _dereq_("./Shape");
            var Vec3 = _dereq_("../math/Vec3");
            function Particle() {
              Shape.call(this, {
                type: Shape.types.PARTICLE
              });
            }
            Particle.prototype = new Shape();
            Particle.prototype.constructor = Particle;
            Particle.prototype.calculateLocalInertia = function(mass, target) {
              target = target || new Vec3();
              target.set(0, 0, 0);
              return target;
            };
            Particle.prototype.volume = function() {
              return 0;
            };
            Particle.prototype.updateBoundingSphereRadius = function() {
              this.boundingSphereRadius = 0;
            };
            Particle.prototype.calculateWorldAABB = function(pos, quat, min, max) {
              min.copy(pos);
              max.copy(pos);
            };
          }, {
            "../math/Vec3": 32,
            "./Shape": 45
          } ],
          44: [ function(_dereq_, module, exports) {
            module.exports = Plane;
            var Shape = _dereq_("./Shape");
            var Vec3 = _dereq_("../math/Vec3");
            function Plane() {
              Shape.call(this, {
                type: Shape.types.PLANE
              });
              this.worldNormal = new Vec3();
              this.worldNormalNeedsUpdate = true;
              this.boundingSphereRadius = Number.MAX_VALUE;
            }
            Plane.prototype = new Shape();
            Plane.prototype.constructor = Plane;
            Plane.prototype.computeWorldNormal = function(quat) {
              var n = this.worldNormal;
              n.set(0, 0, 1);
              quat.vmult(n, n);
              this.worldNormalNeedsUpdate = false;
            };
            Plane.prototype.calculateLocalInertia = function(mass, target) {
              target = target || new Vec3();
              return target;
            };
            Plane.prototype.volume = function() {
              return Number.MAX_VALUE;
            };
            var tempNormal = new Vec3();
            Plane.prototype.calculateWorldAABB = function(pos, quat, min, max) {
              tempNormal.set(0, 0, 1);
              quat.vmult(tempNormal, tempNormal);
              var maxVal = Number.MAX_VALUE;
              min.set(-maxVal, -maxVal, -maxVal);
              max.set(maxVal, maxVal, maxVal);
              1 === tempNormal.x && (max.x = pos.x);
              1 === tempNormal.y && (max.y = pos.y);
              1 === tempNormal.z && (max.z = pos.z);
              -1 === tempNormal.x && (min.x = pos.x);
              -1 === tempNormal.y && (min.y = pos.y);
              -1 === tempNormal.z && (min.z = pos.z);
            };
            Plane.prototype.updateBoundingSphereRadius = function() {
              this.boundingSphereRadius = Number.MAX_VALUE;
            };
          }, {
            "../math/Vec3": 32,
            "./Shape": 45
          } ],
          45: [ function(_dereq_, module, exports) {
            module.exports = Shape;
            var EventTarget = _dereq_("../utils/EventTarget");
            var Shape = _dereq_("./Shape");
            var Vec3 = _dereq_("../math/Vec3");
            var Quaternion = _dereq_("../math/Quaternion");
            var Material = _dereq_("../material/Material");
            function Shape(options) {
              options = options || {};
              EventTarget.apply(this);
              this.id = Shape.idCounter++;
              this.type = options.type || 0;
              this.boundingSphereRadius = 0;
              this.collisionResponse = !options.collisionResponse || options.collisionResponse;
              this.collisionFilterGroup = void 0 !== options.collisionFilterGroup ? options.collisionFilterGroup : 1;
              this.collisionFilterMask = void 0 !== options.collisionFilterMask ? options.collisionFilterMask : -1;
              this.material = options.material ? options.material : null;
              this.body = null;
            }
            Shape.prototype = new EventTarget();
            Shape.prototype.constructor = Shape;
            Shape.prototype.updateBoundingSphereRadius = function() {
              throw "computeBoundingSphereRadius() not implemented for shape type " + this.type;
            };
            Shape.prototype.volume = function() {
              throw "volume() not implemented for shape type " + this.type;
            };
            Shape.prototype.calculateLocalInertia = function(mass, target) {
              throw "calculateLocalInertia() not implemented for shape type " + this.type;
            };
            Shape.idCounter = 0;
            Shape.types = {
              SPHERE: 1,
              PLANE: 2,
              BOX: 4,
              COMPOUND: 8,
              CONVEXPOLYHEDRON: 16,
              HEIGHTFIELD: 32,
              PARTICLE: 64,
              CYLINDER: 128,
              TRIMESH: 256
            };
          }, {
            "../material/Material": 26,
            "../math/Quaternion": 30,
            "../math/Vec3": 32,
            "../utils/EventTarget": 51,
            "./Shape": 45
          } ],
          46: [ function(_dereq_, module, exports) {
            module.exports = Sphere;
            var Shape = _dereq_("./Shape");
            var Vec3 = _dereq_("../math/Vec3");
            function Sphere(radius) {
              Shape.call(this, {
                type: Shape.types.SPHERE
              });
              this.radius = void 0 !== radius ? radius : 1;
              if (this.radius < 0) throw new Error("The sphere radius cannot be negative.");
              this.updateBoundingSphereRadius();
            }
            Sphere.prototype = new Shape();
            Sphere.prototype.constructor = Sphere;
            Sphere.prototype.calculateLocalInertia = function(mass, target) {
              target = target || new Vec3();
              var I = 2 * mass * this.radius * this.radius / 5;
              target.x = I;
              target.y = I;
              target.z = I;
              return target;
            };
            Sphere.prototype.volume = function() {
              return 4 * Math.PI * this.radius / 3;
            };
            Sphere.prototype.updateBoundingSphereRadius = function() {
              this.boundingSphereRadius = this.radius;
            };
            Sphere.prototype.calculateWorldAABB = function(pos, quat, min, max) {
              var r = this.radius;
              var axes = [ "x", "y", "z" ];
              for (var i = 0; i < axes.length; i++) {
                var ax = axes[i];
                min[ax] = pos[ax] - r;
                max[ax] = pos[ax] + r;
              }
            };
          }, {
            "../math/Vec3": 32,
            "./Shape": 45
          } ],
          47: [ function(_dereq_, module, exports) {
            module.exports = Trimesh;
            var Shape = _dereq_("./Shape");
            var Vec3 = _dereq_("../math/Vec3");
            var Quaternion = _dereq_("../math/Quaternion");
            var Transform = _dereq_("../math/Transform");
            var AABB = _dereq_("../collision/AABB");
            var Octree = _dereq_("../utils/Octree");
            var CMath = _dereq_("../math/CMath");
            function Trimesh(vertices, indices) {
              Shape.call(this, {
                type: Shape.types.TRIMESH
              });
              this.vertices = new Float32Array(vertices);
              this.indices = new Int16Array(indices);
              this.normals = new Float32Array(indices.length);
              this.aabb = new AABB();
              this.edges = null;
              this.scale = new Vec3(1, 1, 1);
              this.tree = new Octree();
              this.updateEdges();
              this.updateNormals();
              this.updateAABB();
              this.updateBoundingSphereRadius();
              this.updateTree();
            }
            Trimesh.prototype = new Shape();
            Trimesh.prototype.constructor = Trimesh;
            var computeNormals_n = new Vec3();
            Trimesh.prototype.updateTree = function() {
              var tree = this.tree;
              tree.reset();
              tree.aabb.copy(this.aabb);
              var scale = this.scale;
              tree.aabb.lowerBound.x *= 1 / scale.x;
              tree.aabb.lowerBound.y *= 1 / scale.y;
              tree.aabb.lowerBound.z *= 1 / scale.z;
              tree.aabb.upperBound.x *= 1 / scale.x;
              tree.aabb.upperBound.y *= 1 / scale.y;
              tree.aabb.upperBound.z *= 1 / scale.z;
              var triangleAABB = new AABB();
              var a = new Vec3();
              var b = new Vec3();
              var c = new Vec3();
              var points = [ a, b, c ];
              for (var i = 0; i < this.indices.length / 3; i++) {
                var i3 = 3 * i;
                this._getUnscaledVertex(this.indices[i3], a);
                this._getUnscaledVertex(this.indices[i3 + 1], b);
                this._getUnscaledVertex(this.indices[i3 + 2], c);
                triangleAABB.setFromPoints(points);
                tree.insert(triangleAABB, i);
              }
              tree.removeEmptyNodes();
            };
            var unscaledAABB = new AABB();
            Trimesh.prototype.getTrianglesInAABB = function(aabb, result) {
              unscaledAABB.copy(aabb);
              var scale = this.scale;
              var isx = scale.x;
              var isy = scale.y;
              var isz = scale.z;
              var l = unscaledAABB.lowerBound;
              var u = unscaledAABB.upperBound;
              l.x /= isx;
              l.y /= isy;
              l.z /= isz;
              u.x /= isx;
              u.y /= isy;
              u.z /= isz;
              return this.tree.aabbQuery(unscaledAABB, result);
            };
            Trimesh.prototype.setScale = function(scale) {
              var wasUniform = this.scale.x === this.scale.y === this.scale.z;
              var isUniform = scale.x === scale.y === scale.z;
              wasUniform && isUniform || this.updateNormals();
              this.scale.copy(scale);
              this.updateAABB();
              this.updateBoundingSphereRadius();
            };
            Trimesh.prototype.updateNormals = function() {
              var n = computeNormals_n;
              var normals = this.normals;
              for (var i = 0; i < this.indices.length / 3; i++) {
                var i3 = 3 * i;
                var a = this.indices[i3], b = this.indices[i3 + 1], c = this.indices[i3 + 2];
                this.getVertex(a, va);
                this.getVertex(b, vb);
                this.getVertex(c, vc);
                Trimesh.computeNormal(vb, va, vc, n);
                normals[i3] = n.x;
                normals[i3 + 1] = n.y;
                normals[i3 + 2] = n.z;
              }
            };
            Trimesh.prototype.updateEdges = function() {
              var edges = {};
              var add = function add(indexA, indexB) {
                var key = a < b ? a + "_" + b : b + "_" + a;
                edges[key] = true;
              };
              for (var i = 0; i < this.indices.length / 3; i++) {
                var i3 = 3 * i;
                var a = this.indices[i3], b = this.indices[i3 + 1], c = this.indices[i3 + 2];
                add(a, b);
                add(b, c);
                add(c, a);
              }
              var keys = Object.keys(edges);
              this.edges = new Int16Array(2 * keys.length);
              for (var i = 0; i < keys.length; i++) {
                var indices = keys[i].split("_");
                this.edges[2 * i] = parseInt(indices[0], 10);
                this.edges[2 * i + 1] = parseInt(indices[1], 10);
              }
            };
            Trimesh.prototype.getEdgeVertex = function(edgeIndex, firstOrSecond, vertexStore) {
              var vertexIndex = this.edges[2 * edgeIndex + (firstOrSecond ? 1 : 0)];
              this.getVertex(vertexIndex, vertexStore);
            };
            var getEdgeVector_va = new Vec3();
            var getEdgeVector_vb = new Vec3();
            Trimesh.prototype.getEdgeVector = function(edgeIndex, vectorStore) {
              var va = getEdgeVector_va;
              var vb = getEdgeVector_vb;
              this.getEdgeVertex(edgeIndex, 0, va);
              this.getEdgeVertex(edgeIndex, 1, vb);
              vb.vsub(va, vectorStore);
            };
            var cb = new Vec3();
            var ab = new Vec3();
            Trimesh.computeNormal = function(va, vb, vc, target) {
              vb.vsub(va, ab);
              vc.vsub(vb, cb);
              cb.cross(ab, target);
              target.isZero() || target.normalize();
            };
            var va = new Vec3();
            var vb = new Vec3();
            var vc = new Vec3();
            Trimesh.prototype.getVertex = function(i, out) {
              var scale = this.scale;
              this._getUnscaledVertex(i, out);
              out.x *= scale.x;
              out.y *= scale.y;
              out.z *= scale.z;
              return out;
            };
            Trimesh.prototype._getUnscaledVertex = function(i, out) {
              var i3 = 3 * i;
              var vertices = this.vertices;
              return out.set(vertices[i3], vertices[i3 + 1], vertices[i3 + 2]);
            };
            Trimesh.prototype.getWorldVertex = function(i, pos, quat, out) {
              this.getVertex(i, out);
              Transform.pointToWorldFrame(pos, quat, out, out);
              return out;
            };
            Trimesh.prototype.getTriangleVertices = function(i, a, b, c) {
              var i3 = 3 * i;
              this.getVertex(this.indices[i3], a);
              this.getVertex(this.indices[i3 + 1], b);
              this.getVertex(this.indices[i3 + 2], c);
            };
            Trimesh.prototype.getNormal = function(i, target) {
              var i3 = 3 * i;
              return target.set(this.normals[i3], this.normals[i3 + 1], this.normals[i3 + 2]);
            };
            var cli_aabb = new AABB();
            Trimesh.prototype.calculateLocalInertia = function(mass, target) {
              this.computeLocalAABB(cli_aabb);
              var x = cli_aabb.upperBound.x - cli_aabb.lowerBound.x, y = cli_aabb.upperBound.y - cli_aabb.lowerBound.y, z = cli_aabb.upperBound.z - cli_aabb.lowerBound.z;
              return target.set(1 / 12 * mass * (2 * y * 2 * y + 2 * z * 2 * z), 1 / 12 * mass * (2 * x * 2 * x + 2 * z * 2 * z), 1 / 12 * mass * (2 * y * 2 * y + 2 * x * 2 * x));
            };
            var computeLocalAABB_worldVert = new Vec3();
            Trimesh.prototype.computeLocalAABB = function(aabb) {
              var l = aabb.lowerBound, u = aabb.upperBound, n = this.vertices.length, vertices = this.vertices, v = computeLocalAABB_worldVert;
              this.getVertex(0, v);
              l.copy(v);
              u.copy(v);
              for (var i = 0; i !== n; i++) {
                this.getVertex(i, v);
                v.x < l.x ? l.x = v.x : v.x > u.x && (u.x = v.x);
                v.y < l.y ? l.y = v.y : v.y > u.y && (u.y = v.y);
                v.z < l.z ? l.z = v.z : v.z > u.z && (u.z = v.z);
              }
            };
            Trimesh.prototype.updateAABB = function() {
              this.computeLocalAABB(this.aabb);
            };
            Trimesh.prototype.updateBoundingSphereRadius = function() {
              var max2 = 0;
              var vertices = this.vertices;
              var v = new Vec3();
              for (var i = 0, N = vertices.length / 3; i !== N; i++) {
                this.getVertex(i, v);
                var norm2 = v.norm2();
                norm2 > max2 && (max2 = norm2);
              }
              this.boundingSphereRadius = Math.sqrt(max2);
            };
            var tempWorldVertex = new Vec3();
            var calculateWorldAABB_frame = new Transform();
            var calculateWorldAABB_aabb = new AABB();
            Trimesh.prototype.calculateWorldAABB = function(pos, quat, min, max) {
              var frame = calculateWorldAABB_frame;
              var result = calculateWorldAABB_aabb;
              frame.position = pos;
              frame.quaternion = quat;
              this.aabb.toWorldFrame(frame, result);
              min.copy(result.lowerBound);
              max.copy(result.upperBound);
            };
            Trimesh.prototype.volume = function() {
              return 4 * Math.PI * this.boundingSphereRadius / 3;
            };
            Trimesh.createTorus = function(radius, tube, radialSegments, tubularSegments, arc) {
              radius = radius || 1;
              tube = tube || .5;
              radialSegments = radialSegments || 8;
              tubularSegments = tubularSegments || 6;
              arc = arc || 2 * Math.PI;
              var vertices = [];
              var indices = [];
              for (var j = 0; j <= radialSegments; j++) for (var i = 0; i <= tubularSegments; i++) {
                var u = i / tubularSegments * arc;
                var v = j / radialSegments * Math.PI * 2;
                var x = (radius + tube * CMath.cos(v)) * CMath.cos(u);
                var y = (radius + tube * CMath.cos(v)) * CMath.sin(u);
                var z = tube * CMath.sin(v);
                vertices.push(x, y, z);
              }
              for (var j = 1; j <= radialSegments; j++) for (var i = 1; i <= tubularSegments; i++) {
                var a = (tubularSegments + 1) * j + i - 1;
                var b = (tubularSegments + 1) * (j - 1) + i - 1;
                var c = (tubularSegments + 1) * (j - 1) + i;
                var d = (tubularSegments + 1) * j + i;
                indices.push(a, b, d);
                indices.push(b, c, d);
              }
              return new Trimesh(vertices, indices);
            };
          }, {
            "../collision/AABB": 3,
            "../math/CMath": 27,
            "../math/Quaternion": 30,
            "../math/Transform": 31,
            "../math/Vec3": 32,
            "../utils/Octree": 52,
            "./Shape": 45
          } ],
          48: [ function(_dereq_, module, exports) {
            module.exports = GSSolver;
            var Vec3 = _dereq_("../math/Vec3");
            var Quaternion = _dereq_("../math/Quaternion");
            var Solver = _dereq_("./Solver");
            function GSSolver() {
              Solver.call(this);
              this.iterations = 10;
              this.tolerance = 1e-7;
            }
            GSSolver.prototype = new Solver();
            var GSSolver_solve_lambda = [];
            var GSSolver_solve_invCs = [];
            var GSSolver_solve_Bs = [];
            GSSolver.prototype.solve = function(dt, world) {
              var iter = 0, maxIter = this.iterations, tolSquared = this.tolerance * this.tolerance, equations = this.equations, Neq = equations.length, bodies = world.bodies, Nbodies = bodies.length, h = dt, q, B, invC, deltalambda, deltalambdaTot, GWlambda, lambdaj;
              if (0 !== Neq) for (var i = 0; i !== Nbodies; i++) bodies[i].updateSolveMassProperties();
              var invCs = GSSolver_solve_invCs, Bs = GSSolver_solve_Bs, lambda = GSSolver_solve_lambda;
              invCs.length = Neq;
              Bs.length = Neq;
              lambda.length = Neq;
              for (var i = 0; i !== Neq; i++) {
                var c = equations[i];
                lambda[i] = 0;
                Bs[i] = c.computeB(h);
                invCs[i] = 1 / c.computeC();
              }
              if (0 !== Neq) {
                for (var i = 0; i !== Nbodies; i++) {
                  var b = bodies[i], vlambda = b.vlambda, wlambda = b.wlambda;
                  vlambda.set(0, 0, 0);
                  wlambda.set(0, 0, 0);
                }
                for (iter = 0; iter !== maxIter; iter++) {
                  deltalambdaTot = 0;
                  for (var j = 0; j !== Neq; j++) {
                    var c = equations[j];
                    B = Bs[j];
                    invC = invCs[j];
                    lambdaj = lambda[j];
                    GWlambda = c.computeGWlambda();
                    deltalambda = invC * (B - GWlambda - c.eps * lambdaj);
                    lambdaj + deltalambda < c.minForce ? deltalambda = c.minForce - lambdaj : lambdaj + deltalambda > c.maxForce && (deltalambda = c.maxForce - lambdaj);
                    lambda[j] += deltalambda;
                    deltalambdaTot += deltalambda > 0 ? deltalambda : -deltalambda;
                    c.addToWlambda(deltalambda);
                  }
                  if (deltalambdaTot * deltalambdaTot < tolSquared) break;
                }
                for (var i = 0; i !== Nbodies; i++) {
                  var b = bodies[i], v = b.velocity, w = b.angularVelocity;
                  b.vlambda.vmul(b.linearFactor, b.vlambda);
                  v.vadd(b.vlambda, v);
                  b.wlambda.vmul(b.angularFactor, b.wlambda);
                  w.vadd(b.wlambda, w);
                }
                var l = equations.length;
                var invDt = 1 / h;
                while (l--) equations[l].multiplier = lambda[l] * invDt;
              }
              return iter;
            };
          }, {
            "../math/Quaternion": 30,
            "../math/Vec3": 32,
            "./Solver": 49
          } ],
          49: [ function(_dereq_, module, exports) {
            module.exports = Solver;
            function Solver() {
              this.equations = [];
            }
            Solver.prototype.solve = function(dt, world) {
              return 0;
            };
            Solver.prototype.addEquation = function(eq) {
              eq.enabled && this.equations.push(eq);
            };
            Solver.prototype.removeEquation = function(eq) {
              var eqs = this.equations;
              var i = eqs.indexOf(eq);
              -1 !== i && eqs.splice(i, 1);
            };
            Solver.prototype.removeAllEquations = function() {
              this.equations.length = 0;
            };
          }, {} ],
          50: [ function(_dereq_, module, exports) {
            module.exports = SplitSolver;
            var Vec3 = _dereq_("../math/Vec3");
            var Quaternion = _dereq_("../math/Quaternion");
            var Solver = _dereq_("./Solver");
            var Body = _dereq_("../objects/Body");
            function SplitSolver(subsolver) {
              Solver.call(this);
              this.iterations = 10;
              this.tolerance = 1e-7;
              this.subsolver = subsolver;
              this.nodes = [];
              this.nodePool = [];
              while (this.nodePool.length < 128) this.nodePool.push(this.createNode());
            }
            SplitSolver.prototype = new Solver();
            var SplitSolver_solve_nodes = [];
            var SplitSolver_solve_nodePool = [];
            var SplitSolver_solve_eqs = [];
            var SplitSolver_solve_bds = [];
            var SplitSolver_solve_dummyWorld = {
              bodies: []
            };
            var STATIC = Body.STATIC;
            function getUnvisitedNode(nodes) {
              var Nnodes = nodes.length;
              for (var i = 0; i !== Nnodes; i++) {
                var node = nodes[i];
                if (!node.visited && !(node.body.type & STATIC)) return node;
              }
              return false;
            }
            var queue = [];
            function bfs(root, visitFunc, bds, eqs) {
              queue.push(root);
              root.visited = true;
              visitFunc(root, bds, eqs);
              while (queue.length) {
                var node = queue.pop();
                var child;
                while (child = getUnvisitedNode(node.children)) {
                  child.visited = true;
                  visitFunc(child, bds, eqs);
                  queue.push(child);
                }
              }
            }
            function visitFunc(node, bds, eqs) {
              bds.push(node.body);
              var Neqs = node.eqs.length;
              for (var i = 0; i !== Neqs; i++) {
                var eq = node.eqs[i];
                -1 === eqs.indexOf(eq) && eqs.push(eq);
              }
            }
            SplitSolver.prototype.createNode = function() {
              return {
                body: null,
                children: [],
                eqs: [],
                visited: false
              };
            };
            SplitSolver.prototype.solve = function(dt, world) {
              var nodes = SplitSolver_solve_nodes, nodePool = this.nodePool, bodies = world.bodies, equations = this.equations, Neq = equations.length, Nbodies = bodies.length, subsolver = this.subsolver;
              while (nodePool.length < Nbodies) nodePool.push(this.createNode());
              nodes.length = Nbodies;
              for (var i = 0; i < Nbodies; i++) nodes[i] = nodePool[i];
              for (var i = 0; i !== Nbodies; i++) {
                var node = nodes[i];
                node.body = bodies[i];
                node.children.length = 0;
                node.eqs.length = 0;
                node.visited = false;
              }
              for (var k = 0; k !== Neq; k++) {
                var eq = equations[k], i = bodies.indexOf(eq.bi), j = bodies.indexOf(eq.bj), ni = nodes[i], nj = nodes[j];
                ni.children.push(nj);
                ni.eqs.push(eq);
                nj.children.push(ni);
                nj.eqs.push(eq);
              }
              var child, n = 0, eqs = SplitSolver_solve_eqs;
              subsolver.tolerance = this.tolerance;
              subsolver.iterations = this.iterations;
              var dummyWorld = SplitSolver_solve_dummyWorld;
              while (child = getUnvisitedNode(nodes)) {
                eqs.length = 0;
                dummyWorld.bodies.length = 0;
                bfs(child, visitFunc, dummyWorld.bodies, eqs);
                var Neqs = eqs.length;
                eqs = eqs.sort(sortById);
                for (var i = 0; i !== Neqs; i++) subsolver.addEquation(eqs[i]);
                var iter = subsolver.solve(dt, dummyWorld);
                subsolver.removeAllEquations();
                n++;
              }
              return n;
            };
            function sortById(a, b) {
              return b.id - a.id;
            }
          }, {
            "../math/Quaternion": 30,
            "../math/Vec3": 32,
            "../objects/Body": 33,
            "./Solver": 49
          } ],
          51: [ function(_dereq_, module, exports) {
            var EventTarget = function EventTarget() {};
            module.exports = EventTarget;
            EventTarget.prototype = {
              constructor: EventTarget,
              addEventListener: function addEventListener(type, listener) {
                void 0 === this._listeners && (this._listeners = {});
                var listeners = this._listeners;
                void 0 === listeners[type] && (listeners[type] = []);
                -1 === listeners[type].indexOf(listener) && listeners[type].push(listener);
                return this;
              },
              hasEventListener: function hasEventListener(type, listener) {
                if (void 0 === this._listeners) return false;
                var listeners = this._listeners;
                if (void 0 !== listeners[type] && -1 !== listeners[type].indexOf(listener)) return true;
                return false;
              },
              hasAnyEventListener: function hasAnyEventListener(type) {
                if (void 0 === this._listeners) return false;
                var listeners = this._listeners;
                return void 0 !== listeners[type];
              },
              removeEventListener: function removeEventListener(type, listener) {
                if (void 0 === this._listeners) return this;
                var listeners = this._listeners;
                if (void 0 === listeners[type]) return this;
                var index = listeners[type].indexOf(listener);
                -1 !== index && listeners[type].splice(index, 1);
                return this;
              },
              dispatchEvent: function dispatchEvent(event) {
                if (void 0 === this._listeners) return this;
                var listeners = this._listeners;
                var listenerArray = listeners[event.type];
                if (void 0 !== listenerArray) {
                  event.target = this;
                  for (var i = 0, l = listenerArray.length; i < l; i++) listenerArray[i].call(this, event);
                }
                return this;
              }
            };
          }, {} ],
          52: [ function(_dereq_, module, exports) {
            var AABB = _dereq_("../collision/AABB");
            var Vec3 = _dereq_("../math/Vec3");
            module.exports = Octree;
            function OctreeNode(options) {
              options = options || {};
              this.root = options.root || null;
              this.aabb = options.aabb ? options.aabb.clone() : new AABB();
              this.data = [];
              this.children = [];
            }
            function Octree(aabb, options) {
              options = options || {};
              options.root = null;
              options.aabb = aabb;
              OctreeNode.call(this, options);
              this.maxDepth = "undefined" !== typeof options.maxDepth ? options.maxDepth : 8;
            }
            Octree.prototype = new OctreeNode();
            OctreeNode.prototype.reset = function(aabb, options) {
              this.children.length = this.data.length = 0;
            };
            OctreeNode.prototype.insert = function(aabb, elementData, level) {
              var nodeData = this.data;
              level = level || 0;
              if (!this.aabb.contains(aabb)) return false;
              var children = this.children;
              if (level < (this.maxDepth || this.root.maxDepth)) {
                var subdivided = false;
                if (!children.length) {
                  this.subdivide();
                  subdivided = true;
                }
                for (var i = 0; 8 !== i; i++) if (children[i].insert(aabb, elementData, level + 1)) return true;
                subdivided && (children.length = 0);
              }
              nodeData.push(elementData);
              return true;
            };
            var halfDiagonal = new Vec3();
            OctreeNode.prototype.subdivide = function() {
              var aabb = this.aabb;
              var l = aabb.lowerBound;
              var u = aabb.upperBound;
              var children = this.children;
              children.push(new OctreeNode({
                aabb: new AABB({
                  lowerBound: new Vec3(0, 0, 0)
                })
              }), new OctreeNode({
                aabb: new AABB({
                  lowerBound: new Vec3(1, 0, 0)
                })
              }), new OctreeNode({
                aabb: new AABB({
                  lowerBound: new Vec3(1, 1, 0)
                })
              }), new OctreeNode({
                aabb: new AABB({
                  lowerBound: new Vec3(1, 1, 1)
                })
              }), new OctreeNode({
                aabb: new AABB({
                  lowerBound: new Vec3(0, 1, 1)
                })
              }), new OctreeNode({
                aabb: new AABB({
                  lowerBound: new Vec3(0, 0, 1)
                })
              }), new OctreeNode({
                aabb: new AABB({
                  lowerBound: new Vec3(1, 0, 1)
                })
              }), new OctreeNode({
                aabb: new AABB({
                  lowerBound: new Vec3(0, 1, 0)
                })
              }));
              u.vsub(l, halfDiagonal);
              halfDiagonal.scale(.5, halfDiagonal);
              var root = this.root || this;
              for (var i = 0; 8 !== i; i++) {
                var child = children[i];
                child.root = root;
                var lowerBound = child.aabb.lowerBound;
                lowerBound.x *= halfDiagonal.x;
                lowerBound.y *= halfDiagonal.y;
                lowerBound.z *= halfDiagonal.z;
                lowerBound.vadd(l, lowerBound);
                lowerBound.vadd(halfDiagonal, child.aabb.upperBound);
              }
            };
            OctreeNode.prototype.aabbQuery = function(aabb, result) {
              var nodeData = this.data;
              var children = this.children;
              var queue = [ this ];
              while (queue.length) {
                var node = queue.pop();
                node.aabb.overlaps(aabb) && Array.prototype.push.apply(result, node.data);
                Array.prototype.push.apply(queue, node.children);
              }
              return result;
            };
            var tmpAABB = new AABB();
            OctreeNode.prototype.rayQuery = function(ray, treeTransform, result) {
              ray.getAABB(tmpAABB);
              tmpAABB.toLocalFrame(treeTransform, tmpAABB);
              this.aabbQuery(tmpAABB, result);
              return result;
            };
            OctreeNode.prototype.removeEmptyNodes = function() {
              for (var i = this.children.length - 1; i >= 0; i--) {
                this.children[i].removeEmptyNodes();
                this.children[i].children.length || this.children[i].data.length || this.children.splice(i, 1);
              }
            };
          }, {
            "../collision/AABB": 3,
            "../math/Vec3": 32
          } ],
          53: [ function(_dereq_, module, exports) {
            module.exports = Pool;
            function Pool() {
              this.objects = [];
              this.type = Object;
            }
            Pool.prototype.release = function() {
              var Nargs = arguments.length;
              for (var i = 0; i !== Nargs; i++) this.objects.push(arguments[i]);
              return this;
            };
            Pool.prototype.get = function() {
              return 0 === this.objects.length ? this.constructObject() : this.objects.pop();
            };
            Pool.prototype.constructObject = function() {
              throw new Error("constructObject() not implemented in this Pool subclass yet!");
            };
            Pool.prototype.resize = function(size) {
              var objects = this.objects;
              while (objects.length > size) objects.pop();
              while (objects.length < size) objects.push(this.constructObject());
              return this;
            };
          }, {} ],
          54: [ function(_dereq_, module, exports) {
            module.exports = TupleDictionary;
            function TupleDictionary() {
              this.data = {
                keys: []
              };
            }
            TupleDictionary.prototype.get = function(i, j) {
              if (i > j) {
                var temp = j;
                j = i;
                i = temp;
              }
              return this.data[i + "-" + j];
            };
            TupleDictionary.prototype.set = function(i, j, value) {
              if (i > j) {
                var temp = j;
                j = i;
                i = temp;
              }
              var key = i + "-" + j;
              this.get(i, j) || this.data.keys.push(key);
              this.data[key] = value;
              return this.data[key];
            };
            TupleDictionary.prototype.del = function(i, j) {
              if (i > j) {
                var temp = j;
                j = i;
                i = temp;
              }
              var key = i + "-" + j;
              var index = this.data.keys.indexOf(key);
              if (index >= 0) {
                this.data.keys.splice(index, 1);
                delete this.data[key];
                return true;
              }
              return false;
            };
            TupleDictionary.prototype.reset = function() {
              this.data = {
                keys: []
              };
            };
            TupleDictionary.prototype.getLength = function() {
              return this.data.keys.length;
            };
            TupleDictionary.prototype.getKeyByIndex = function(index) {
              return this.data.keys[index];
            };
            TupleDictionary.prototype.getDataByKey = function(Key) {
              return this.data[Key];
            };
          }, {} ],
          55: [ function(_dereq_, module, exports) {
            function Utils() {}
            module.exports = Utils;
            Utils.defaults = function(options, defaults) {
              options = options || {};
              for (var key in defaults) key in options || (options[key] = defaults[key]);
              return options;
            };
          }, {} ],
          56: [ function(_dereq_, module, exports) {
            module.exports = Vec3Pool;
            var Vec3 = _dereq_("../math/Vec3");
            var Pool = _dereq_("./Pool");
            function Vec3Pool() {
              Pool.call(this);
              this.type = Vec3;
            }
            Vec3Pool.prototype = new Pool();
            Vec3Pool.prototype.constructObject = function() {
              return new Vec3();
            };
          }, {
            "../math/Vec3": 32,
            "./Pool": 53
          } ],
          57: [ function(_dereq_, module, exports) {
            module.exports = Narrowphase;
            var AABB = _dereq_("../collision/AABB");
            var Body = _dereq_("../objects/Body");
            var Shape = _dereq_("../shapes/Shape");
            var Ray = _dereq_("../collision/Ray");
            var Vec3 = _dereq_("../math/Vec3");
            var Transform = _dereq_("../math/Transform");
            var ConvexPolyhedron = _dereq_("../shapes/ConvexPolyhedron");
            var Quaternion = _dereq_("../math/Quaternion");
            var Solver = _dereq_("../solver/Solver");
            var Vec3Pool = _dereq_("../utils/Vec3Pool");
            var ContactEquation = _dereq_("../equations/ContactEquation");
            var FrictionEquation = _dereq_("../equations/FrictionEquation");
            function Narrowphase(world) {
              this.contactPointPool = [];
              this.frictionEquationPool = [];
              this.result = [];
              this.frictionResult = [];
              this.v3pool = new Vec3Pool();
              this.world = world;
              this.currentContactMaterial = null;
              this.enableFrictionReduction = false;
            }
            Narrowphase.prototype.createContactEquation = function(bi, bj, si, sj, overrideShapeA, overrideShapeB) {
              var c;
              if (this.contactPointPool.length) {
                c = this.contactPointPool.pop();
                c.bi = bi;
                c.bj = bj;
              } else c = new ContactEquation(bi, bj);
              c.enabled = bi.collisionResponse && bj.collisionResponse && si.collisionResponse && sj.collisionResponse;
              var cm = this.currentContactMaterial;
              c.restitution = cm.restitution;
              c.setSpookParams(cm.contactEquationStiffness, cm.contactEquationRelaxation, this.world.dt);
              var matA = si.material || bi.material;
              var matB = sj.material || bj.material;
              matA && matB && matA.restitution >= 0 && matB.restitution >= 0 && (c.restitution = matA.restitution * matB.restitution);
              c.si = overrideShapeA || si;
              c.sj = overrideShapeB || sj;
              return c;
            };
            Narrowphase.prototype.createFrictionEquationsFromContact = function(contactEquation, outArray) {
              var bodyA = contactEquation.bi;
              var bodyB = contactEquation.bj;
              var shapeA = contactEquation.si;
              var shapeB = contactEquation.sj;
              var world = this.world;
              var cm = this.currentContactMaterial;
              var friction = cm.friction;
              var matA = shapeA.material || bodyA.material;
              var matB = shapeB.material || bodyB.material;
              matA && matB && matA.friction >= 0 && matB.friction >= 0 && (friction = matA.friction * matB.friction);
              if (friction > 0) {
                var mug = friction * world.gravity.length();
                var reducedMass = bodyA.invMass + bodyB.invMass;
                reducedMass > 0 && (reducedMass = 1 / reducedMass);
                var pool = this.frictionEquationPool;
                var c1 = pool.length ? pool.pop() : new FrictionEquation(bodyA, bodyB, mug * reducedMass);
                var c2 = pool.length ? pool.pop() : new FrictionEquation(bodyA, bodyB, mug * reducedMass);
                c1.bi = c2.bi = bodyA;
                c1.bj = c2.bj = bodyB;
                c1.minForce = c2.minForce = -mug * reducedMass;
                c1.maxForce = c2.maxForce = mug * reducedMass;
                c1.ri.copy(contactEquation.ri);
                c1.rj.copy(contactEquation.rj);
                c2.ri.copy(contactEquation.ri);
                c2.rj.copy(contactEquation.rj);
                contactEquation.ni.tangents(c1.t, c2.t);
                c1.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, world.dt);
                c2.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, world.dt);
                c1.enabled = c2.enabled = contactEquation.enabled;
                outArray.push(c1, c2);
                return true;
              }
              return false;
            };
            var averageNormal = new Vec3();
            var averageContactPointA = new Vec3();
            var averageContactPointB = new Vec3();
            Narrowphase.prototype.createFrictionFromAverage = function(numContacts) {
              var c = this.result[this.result.length - 1];
              if (!this.createFrictionEquationsFromContact(c, this.frictionResult) || 1 === numContacts) return;
              var f1 = this.frictionResult[this.frictionResult.length - 2];
              var f2 = this.frictionResult[this.frictionResult.length - 1];
              averageNormal.setZero();
              averageContactPointA.setZero();
              averageContactPointB.setZero();
              var bodyA = c.bi;
              var bodyB = c.bj;
              for (var i = 0; i !== numContacts; i++) {
                c = this.result[this.result.length - 1 - i];
                if (c.bodyA !== bodyA) {
                  averageNormal.vadd(c.ni, averageNormal);
                  averageContactPointA.vadd(c.ri, averageContactPointA);
                  averageContactPointB.vadd(c.rj, averageContactPointB);
                } else {
                  averageNormal.vsub(c.ni, averageNormal);
                  averageContactPointA.vadd(c.rj, averageContactPointA);
                  averageContactPointB.vadd(c.ri, averageContactPointB);
                }
              }
              var invNumContacts = 1 / numContacts;
              averageContactPointA.scale(invNumContacts, f1.ri);
              averageContactPointB.scale(invNumContacts, f1.rj);
              f2.ri.copy(f1.ri);
              f2.rj.copy(f1.rj);
              averageNormal.normalize();
              averageNormal.tangents(f1.t, f2.t);
            };
            var tmpVec1 = new Vec3();
            var tmpVec2 = new Vec3();
            var tmpQuat1 = new Quaternion();
            var tmpQuat2 = new Quaternion();
            Narrowphase.prototype.getContacts = function(p1, p2, world, result, oldcontacts, frictionResult, frictionPool) {
              this.contactPointPool = oldcontacts;
              this.frictionEquationPool = frictionPool;
              this.result = result;
              this.frictionResult = frictionResult;
              var qi = tmpQuat1;
              var qj = tmpQuat2;
              var xi = tmpVec1;
              var xj = tmpVec2;
              for (var k = 0, N = p1.length; k !== N; k++) {
                var bi = p1[k], bj = p2[k];
                var bodyContactMaterial = null;
                bi.material && bj.material && (bodyContactMaterial = world.getContactMaterial(bi.material, bj.material) || null);
                var justTest = false == bi.collisionResponse || false == bj.collisionResponse || bi.type & Body.KINEMATIC && bj.type & Body.STATIC || bi.type & Body.STATIC && bj.type & Body.KINEMATIC || bi.type & Body.KINEMATIC && bj.type & Body.KINEMATIC;
                for (var i = 0; i < bi.shapes.length; i++) {
                  bi.quaternion.mult(bi.shapeOrientations[i], qi);
                  bi.quaternion.vmult(bi.shapeOffsets[i], xi);
                  xi.vadd(bi.position, xi);
                  var si = bi.shapes[i];
                  for (var j = 0; j < bj.shapes.length; j++) {
                    bj.quaternion.mult(bj.shapeOrientations[j], qj);
                    bj.quaternion.vmult(bj.shapeOffsets[j], xj);
                    xj.vadd(bj.position, xj);
                    var sj = bj.shapes[j];
                    if (!(si.collisionFilterMask & sj.collisionFilterGroup && sj.collisionFilterMask & si.collisionFilterGroup)) continue;
                    if (xi.distanceTo(xj) > si.boundingSphereRadius + sj.boundingSphereRadius) continue;
                    justTest |= false == si.collisionResponse || false == sj.collisionResponse;
                    var shapeContactMaterial = null;
                    si.material && sj.material && (shapeContactMaterial = world.getContactMaterial(si.material, sj.material) || null);
                    this.currentContactMaterial = shapeContactMaterial || bodyContactMaterial || world.defaultContactMaterial;
                    var resolver = this[si.type | sj.type];
                    if (resolver) {
                      var retval = false;
                      retval = si.type < sj.type ? resolver.call(this, si, sj, xi, xj, qi, qj, bi, bj, si, sj, justTest) : resolver.call(this, sj, si, xj, xi, qj, qi, bj, bi, si, sj, justTest);
                      if (retval && justTest) {
                        world.shapeOverlapKeeper.set(si.id, sj.id);
                        world.bodyOverlapKeeper.set(bi.id, bj.id);
                        var data = {
                          si: si,
                          sj: sj
                        };
                        world.triggerDic.set(si.id, sj.id, data);
                        world.oldTriggerDic.set(si.id, sj.id, data);
                      }
                    }
                  }
                }
              }
            };
            var numWarnings = 0;
            var maxWarnings = 10;
            function warn(msg) {
              if (numWarnings > maxWarnings) return;
              numWarnings++;
              console.warn(msg);
            }
            Narrowphase.prototype[Shape.types.BOX | Shape.types.BOX] = Narrowphase.prototype.boxBox = function(si, sj, xi, xj, qi, qj, bi, bj, rsi, rsj, justTest) {
              si.convexPolyhedronRepresentation.material = si.material;
              sj.convexPolyhedronRepresentation.material = sj.material;
              si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
              sj.convexPolyhedronRepresentation.collisionResponse = sj.collisionResponse;
              return this.convexConvex(si.convexPolyhedronRepresentation, sj.convexPolyhedronRepresentation, xi, xj, qi, qj, bi, bj, si, sj, justTest);
            };
            Narrowphase.prototype[Shape.types.BOX | Shape.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.boxConvex = function(si, sj, xi, xj, qi, qj, bi, bj, rsi, rsj, justTest) {
              si.convexPolyhedronRepresentation.material = si.material;
              si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
              return this.convexConvex(si.convexPolyhedronRepresentation, sj, xi, xj, qi, qj, bi, bj, si, sj, justTest);
            };
            Narrowphase.prototype[Shape.types.BOX | Shape.types.PARTICLE] = Narrowphase.prototype.boxParticle = function(si, sj, xi, xj, qi, qj, bi, bj, rsi, rsj, justTest) {
              si.convexPolyhedronRepresentation.material = si.material;
              si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
              return this.convexParticle(si.convexPolyhedronRepresentation, sj, xi, xj, qi, qj, bi, bj, si, sj, justTest);
            };
            Narrowphase.prototype[Shape.types.SPHERE] = Narrowphase.prototype.sphereSphere = function(si, sj, xi, xj, qi, qj, bi, bj, rsi, rsj, justTest) {
              if (justTest) return xi.distanceSquared(xj) < Math.pow(si.radius + sj.radius, 2);
              var r = this.createContactEquation(bi, bj, si, sj, rsi, rsj);
              xj.vsub(xi, r.ni);
              r.ni.normalize();
              r.ri.copy(r.ni);
              r.rj.copy(r.ni);
              r.ri.mult(si.radius, r.ri);
              r.rj.mult(-sj.radius, r.rj);
              r.ri.vadd(xi, r.ri);
              r.ri.vsub(bi.position, r.ri);
              r.rj.vadd(xj, r.rj);
              r.rj.vsub(bj.position, r.rj);
              this.result.push(r);
              this.createFrictionEquationsFromContact(r, this.frictionResult);
            };
            var planeTrimesh_normal = new Vec3();
            var planeTrimesh_relpos = new Vec3();
            var planeTrimesh_projected = new Vec3();
            Narrowphase.prototype[Shape.types.PLANE | Shape.types.TRIMESH] = Narrowphase.prototype.planeTrimesh = function(planeShape, trimeshShape, planePos, trimeshPos, planeQuat, trimeshQuat, planeBody, trimeshBody, rsi, rsj, justTest) {
              var v = new Vec3();
              var normal = planeTrimesh_normal;
              normal.set(0, 0, 1);
              planeQuat.vmult(normal, normal);
              for (var i = 0; i < trimeshShape.vertices.length / 3; i++) {
                trimeshShape.getVertex(i, v);
                var v2 = new Vec3();
                v2.copy(v);
                Transform.pointToWorldFrame(trimeshPos, trimeshQuat, v2, v);
                var relpos = planeTrimesh_relpos;
                v.vsub(planePos, relpos);
                var dot = normal.dot(relpos);
                if (dot <= 0) {
                  if (justTest) return true;
                  var r = this.createContactEquation(planeBody, trimeshBody, planeShape, trimeshShape, rsi, rsj);
                  r.ni.copy(normal);
                  var projected = planeTrimesh_projected;
                  normal.scale(relpos.dot(normal), projected);
                  v.vsub(projected, projected);
                  r.ri.copy(projected);
                  r.ri.vsub(planeBody.position, r.ri);
                  r.rj.copy(v);
                  r.rj.vsub(trimeshBody.position, r.rj);
                  this.result.push(r);
                  this.createFrictionEquationsFromContact(r, this.frictionResult);
                }
              }
            };
            var sphereTrimesh_normal = new Vec3();
            var sphereTrimesh_relpos = new Vec3();
            var sphereTrimesh_projected = new Vec3();
            var sphereTrimesh_v = new Vec3();
            var sphereTrimesh_v2 = new Vec3();
            var sphereTrimesh_edgeVertexA = new Vec3();
            var sphereTrimesh_edgeVertexB = new Vec3();
            var sphereTrimesh_edgeVector = new Vec3();
            var sphereTrimesh_edgeVectorUnit = new Vec3();
            var sphereTrimesh_localSpherePos = new Vec3();
            var sphereTrimesh_tmp = new Vec3();
            var sphereTrimesh_va = new Vec3();
            var sphereTrimesh_vb = new Vec3();
            var sphereTrimesh_vc = new Vec3();
            var sphereTrimesh_localSphereAABB = new AABB();
            var sphereTrimesh_triangles = [];
            Narrowphase.prototype[Shape.types.SPHERE | Shape.types.TRIMESH] = Narrowphase.prototype.sphereTrimesh = function(sphereShape, trimeshShape, spherePos, trimeshPos, sphereQuat, trimeshQuat, sphereBody, trimeshBody, rsi, rsj, justTest) {
              var edgeVertexA = sphereTrimesh_edgeVertexA;
              var edgeVertexB = sphereTrimesh_edgeVertexB;
              var edgeVector = sphereTrimesh_edgeVector;
              var edgeVectorUnit = sphereTrimesh_edgeVectorUnit;
              var localSpherePos = sphereTrimesh_localSpherePos;
              var tmp = sphereTrimesh_tmp;
              var localSphereAABB = sphereTrimesh_localSphereAABB;
              var v2 = sphereTrimesh_v2;
              var relpos = sphereTrimesh_relpos;
              var triangles = sphereTrimesh_triangles;
              Transform.pointToLocalFrame(trimeshPos, trimeshQuat, spherePos, localSpherePos);
              var sphereRadius = sphereShape.radius;
              localSphereAABB.lowerBound.set(localSpherePos.x - sphereRadius, localSpherePos.y - sphereRadius, localSpherePos.z - sphereRadius);
              localSphereAABB.upperBound.set(localSpherePos.x + sphereRadius, localSpherePos.y + sphereRadius, localSpherePos.z + sphereRadius);
              trimeshShape.getTrianglesInAABB(localSphereAABB, triangles);
              var v = sphereTrimesh_v;
              var radiusSquared = sphereShape.radius * sphereShape.radius;
              for (var i = 0; i < triangles.length; i++) for (var j = 0; j < 3; j++) {
                trimeshShape.getVertex(trimeshShape.indices[3 * triangles[i] + j], v);
                v.vsub(localSpherePos, relpos);
                if (relpos.norm2() <= radiusSquared) {
                  v2.copy(v);
                  Transform.pointToWorldFrame(trimeshPos, trimeshQuat, v2, v);
                  v.vsub(spherePos, relpos);
                  if (justTest) return true;
                  var r = this.createContactEquation(sphereBody, trimeshBody, sphereShape, trimeshShape, rsi, rsj);
                  r.ni.copy(relpos);
                  r.ni.normalize();
                  r.ri.copy(r.ni);
                  r.ri.scale(sphereShape.radius, r.ri);
                  r.ri.vadd(spherePos, r.ri);
                  r.ri.vsub(sphereBody.position, r.ri);
                  r.rj.copy(v);
                  r.rj.vsub(trimeshBody.position, r.rj);
                  this.result.push(r);
                  this.createFrictionEquationsFromContact(r, this.frictionResult);
                }
              }
              for (var i = 0; i < triangles.length; i++) for (var j = 0; j < 3; j++) {
                trimeshShape.getVertex(trimeshShape.indices[3 * triangles[i] + j], edgeVertexA);
                trimeshShape.getVertex(trimeshShape.indices[3 * triangles[i] + (j + 1) % 3], edgeVertexB);
                edgeVertexB.vsub(edgeVertexA, edgeVector);
                localSpherePos.vsub(edgeVertexB, tmp);
                var positionAlongEdgeB = tmp.dot(edgeVector);
                localSpherePos.vsub(edgeVertexA, tmp);
                var positionAlongEdgeA = tmp.dot(edgeVector);
                if (positionAlongEdgeA > 0 && positionAlongEdgeB < 0) {
                  localSpherePos.vsub(edgeVertexA, tmp);
                  edgeVectorUnit.copy(edgeVector);
                  edgeVectorUnit.normalize();
                  positionAlongEdgeA = tmp.dot(edgeVectorUnit);
                  edgeVectorUnit.scale(positionAlongEdgeA, tmp);
                  tmp.vadd(edgeVertexA, tmp);
                  var dist = tmp.distanceTo(localSpherePos);
                  if (dist < sphereShape.radius) {
                    if (justTest) return true;
                    var r = this.createContactEquation(sphereBody, trimeshBody, sphereShape, trimeshShape, rsi, rsj);
                    tmp.vsub(localSpherePos, r.ni);
                    r.ni.normalize();
                    r.ni.scale(sphereShape.radius, r.ri);
                    Transform.pointToWorldFrame(trimeshPos, trimeshQuat, tmp, tmp);
                    tmp.vsub(trimeshBody.position, r.rj);
                    Transform.vectorToWorldFrame(trimeshQuat, r.ni, r.ni);
                    Transform.vectorToWorldFrame(trimeshQuat, r.ri, r.ri);
                    this.result.push(r);
                    this.createFrictionEquationsFromContact(r, this.frictionResult);
                  }
                }
              }
              var va = sphereTrimesh_va;
              var vb = sphereTrimesh_vb;
              var vc = sphereTrimesh_vc;
              var normal = sphereTrimesh_normal;
              for (var i = 0, N = triangles.length; i !== N; i++) {
                trimeshShape.getTriangleVertices(triangles[i], va, vb, vc);
                trimeshShape.getNormal(triangles[i], normal);
                localSpherePos.vsub(va, tmp);
                var dist = tmp.dot(normal);
                normal.scale(dist, tmp);
                localSpherePos.vsub(tmp, tmp);
                dist = tmp.distanceTo(localSpherePos);
                if (Ray.pointInTriangle(tmp, va, vb, vc) && dist < sphereShape.radius) {
                  if (justTest) return true;
                  var r = this.createContactEquation(sphereBody, trimeshBody, sphereShape, trimeshShape, rsi, rsj);
                  tmp.vsub(localSpherePos, r.ni);
                  r.ni.normalize();
                  r.ni.scale(sphereShape.radius, r.ri);
                  Transform.pointToWorldFrame(trimeshPos, trimeshQuat, tmp, tmp);
                  tmp.vsub(trimeshBody.position, r.rj);
                  Transform.vectorToWorldFrame(trimeshQuat, r.ni, r.ni);
                  Transform.vectorToWorldFrame(trimeshQuat, r.ri, r.ri);
                  this.result.push(r);
                  this.createFrictionEquationsFromContact(r, this.frictionResult);
                }
              }
              triangles.length = 0;
            };
            var point_on_plane_to_sphere = new Vec3();
            var plane_to_sphere_ortho = new Vec3();
            var p_s_ni = new Vec3();
            var p_s_ri = new Vec3();
            var p_s_rj = new Vec3();
            Narrowphase.prototype[Shape.types.SPHERE | Shape.types.PLANE] = Narrowphase.prototype.spherePlane = function(si, sj, xi, xj, qi, qj, bi, bj, rsi, rsj, justTest) {
              p_s_ni.set(0, 0, 1);
              qj.vmult(p_s_ni, p_s_ni);
              p_s_ni.negate(p_s_ni);
              p_s_ni.normalize();
              p_s_ni.mult(si.radius, p_s_ri);
              xi.vsub(xj, point_on_plane_to_sphere);
              p_s_ni.mult(p_s_ni.dot(point_on_plane_to_sphere), plane_to_sphere_ortho);
              point_on_plane_to_sphere.vsub(plane_to_sphere_ortho, p_s_rj);
              if (-point_on_plane_to_sphere.dot(p_s_ni) <= si.radius) {
                if (justTest) return true;
                var r = this.createContactEquation(bi, bj, si, sj, rsi, rsj);
                r.ni.copy(p_s_ni);
                r.ri.copy(p_s_ri);
                r.rj.copy(p_s_rj);
                var ri = r.ri;
                var rj = r.rj;
                ri.vadd(xi, ri);
                ri.vsub(bi.position, ri);
                rj.vadd(xj, rj);
                rj.vsub(bj.position, rj);
                this.result.push(r);
                this.createFrictionEquationsFromContact(r, this.frictionResult);
              }
              return false;
            };
            var pointInPolygon_edge = new Vec3();
            var pointInPolygon_edge_x_normal = new Vec3();
            var pointInPolygon_vtp = new Vec3();
            function pointInPolygon(verts, normal, p) {
              var positiveResult = null;
              var N = verts.length;
              for (var i = 0; i !== N; i++) {
                var v = verts[i];
                var edge = pointInPolygon_edge;
                verts[(i + 1) % N].vsub(v, edge);
                var edge_x_normal = pointInPolygon_edge_x_normal;
                edge.cross(normal, edge_x_normal);
                var vertex_to_p = pointInPolygon_vtp;
                p.vsub(v, vertex_to_p);
                var r = edge_x_normal.dot(vertex_to_p);
                if (null === positiveResult || r > 0 && true === positiveResult || r <= 0 && false === positiveResult) {
                  null === positiveResult && (positiveResult = r > 0);
                  continue;
                }
                return false;
              }
              return true;
            }
            var box_to_sphere = new Vec3();
            var sphereBox_ns = new Vec3();
            var sphereBox_ns1 = new Vec3();
            var sphereBox_ns2 = new Vec3();
            var sphereBox_sides = [ new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3() ];
            var sphereBox_sphere_to_corner = new Vec3();
            var sphereBox_side_ns = new Vec3();
            var sphereBox_side_ns1 = new Vec3();
            var sphereBox_side_ns2 = new Vec3();
            Narrowphase.prototype[Shape.types.SPHERE | Shape.types.BOX] = Narrowphase.prototype.sphereBox = function(si, sj, xi, xj, qi, qj, bi, bj, rsi, rsj, justTest) {
              var v3pool = this.v3pool;
              var sides = sphereBox_sides;
              xi.vsub(xj, box_to_sphere);
              sj.getSideNormals(sides, qj);
              var R = si.radius;
              var penetrating_sides = [];
              var found = false;
              var side_ns = sphereBox_side_ns;
              var side_ns1 = sphereBox_side_ns1;
              var side_ns2 = sphereBox_side_ns2;
              var side_h = null;
              var side_penetrations = 0;
              var side_dot1 = 0;
              var side_dot2 = 0;
              var side_distance = null;
              for (var idx = 0, nsides = sides.length; idx !== nsides && false === found; idx++) {
                var ns = sphereBox_ns;
                ns.copy(sides[idx]);
                var h = ns.norm();
                ns.normalize();
                var dot = box_to_sphere.dot(ns);
                if (dot < h + R && dot > 0) {
                  var ns1 = sphereBox_ns1;
                  var ns2 = sphereBox_ns2;
                  ns1.copy(sides[(idx + 1) % 3]);
                  ns2.copy(sides[(idx + 2) % 3]);
                  var h1 = ns1.norm();
                  var h2 = ns2.norm();
                  ns1.normalize();
                  ns2.normalize();
                  var dot1 = box_to_sphere.dot(ns1);
                  var dot2 = box_to_sphere.dot(ns2);
                  if (dot1 < h1 && dot1 > -h1 && dot2 < h2 && dot2 > -h2) {
                    var dist = Math.abs(dot - h - R);
                    if (null === side_distance || dist < side_distance) {
                      side_distance = dist;
                      side_dot1 = dot1;
                      side_dot2 = dot2;
                      side_h = h;
                      side_ns.copy(ns);
                      side_ns1.copy(ns1);
                      side_ns2.copy(ns2);
                      side_penetrations++;
                      if (justTest) return true;
                    }
                  }
                }
              }
              if (side_penetrations) {
                found = true;
                var r = this.createContactEquation(bi, bj, si, sj, rsi, rsj);
                side_ns.mult(-R, r.ri);
                r.ni.copy(side_ns);
                r.ni.negate(r.ni);
                side_ns.mult(side_h, side_ns);
                side_ns1.mult(side_dot1, side_ns1);
                side_ns.vadd(side_ns1, side_ns);
                side_ns2.mult(side_dot2, side_ns2);
                side_ns.vadd(side_ns2, r.rj);
                r.ri.vadd(xi, r.ri);
                r.ri.vsub(bi.position, r.ri);
                r.rj.vadd(xj, r.rj);
                r.rj.vsub(bj.position, r.rj);
                this.result.push(r);
                this.createFrictionEquationsFromContact(r, this.frictionResult);
              }
              var rj = v3pool.get();
              var sphere_to_corner = sphereBox_sphere_to_corner;
              for (var j = 0; 2 !== j && !found; j++) for (var k = 0; 2 !== k && !found; k++) for (var l = 0; 2 !== l && !found; l++) {
                rj.set(0, 0, 0);
                j ? rj.vadd(sides[0], rj) : rj.vsub(sides[0], rj);
                k ? rj.vadd(sides[1], rj) : rj.vsub(sides[1], rj);
                l ? rj.vadd(sides[2], rj) : rj.vsub(sides[2], rj);
                xj.vadd(rj, sphere_to_corner);
                sphere_to_corner.vsub(xi, sphere_to_corner);
                if (sphere_to_corner.norm2() < R * R) {
                  if (justTest) return true;
                  found = true;
                  var r = this.createContactEquation(bi, bj, si, sj, rsi, rsj);
                  r.ri.copy(sphere_to_corner);
                  r.ri.normalize();
                  r.ni.copy(r.ri);
                  r.ri.mult(R, r.ri);
                  r.rj.copy(rj);
                  r.ri.vadd(xi, r.ri);
                  r.ri.vsub(bi.position, r.ri);
                  r.rj.vadd(xj, r.rj);
                  r.rj.vsub(bj.position, r.rj);
                  this.result.push(r);
                  this.createFrictionEquationsFromContact(r, this.frictionResult);
                }
              }
              v3pool.release(rj);
              rj = null;
              var edgeTangent = v3pool.get();
              var edgeCenter = v3pool.get();
              var r = v3pool.get();
              var orthogonal = v3pool.get();
              var dist = v3pool.get();
              var Nsides = sides.length;
              for (var j = 0; j !== Nsides && !found; j++) for (var k = 0; k !== Nsides && !found; k++) if (j % 3 !== k % 3) {
                sides[k].cross(sides[j], edgeTangent);
                edgeTangent.normalize();
                sides[j].vadd(sides[k], edgeCenter);
                r.copy(xi);
                r.vsub(edgeCenter, r);
                r.vsub(xj, r);
                var orthonorm = r.dot(edgeTangent);
                edgeTangent.mult(orthonorm, orthogonal);
                var l = 0;
                while (l === j % 3 || l === k % 3) l++;
                dist.copy(xi);
                dist.vsub(orthogonal, dist);
                dist.vsub(edgeCenter, dist);
                dist.vsub(xj, dist);
                var tdist = Math.abs(orthonorm);
                var ndist = dist.norm();
                if (tdist < sides[l].norm() && ndist < R) {
                  if (justTest) return true;
                  found = true;
                  var res = this.createContactEquation(bi, bj, si, sj, rsi, rsj);
                  edgeCenter.vadd(orthogonal, res.rj);
                  res.rj.copy(res.rj);
                  dist.negate(res.ni);
                  res.ni.normalize();
                  res.ri.copy(res.rj);
                  res.ri.vadd(xj, res.ri);
                  res.ri.vsub(xi, res.ri);
                  res.ri.normalize();
                  res.ri.mult(R, res.ri);
                  res.ri.vadd(xi, res.ri);
                  res.ri.vsub(bi.position, res.ri);
                  res.rj.vadd(xj, res.rj);
                  res.rj.vsub(bj.position, res.rj);
                  this.result.push(res);
                  this.createFrictionEquationsFromContact(res, this.frictionResult);
                }
              }
              v3pool.release(edgeTangent, edgeCenter, r, orthogonal, dist);
            };
            var convex_to_sphere = new Vec3();
            var sphereConvex_edge = new Vec3();
            var sphereConvex_edgeUnit = new Vec3();
            var sphereConvex_sphereToCorner = new Vec3();
            var sphereConvex_worldCorner = new Vec3();
            var sphereConvex_worldNormal = new Vec3();
            var sphereConvex_worldPoint = new Vec3();
            var sphereConvex_worldSpherePointClosestToPlane = new Vec3();
            var sphereConvex_penetrationVec = new Vec3();
            var sphereConvex_sphereToWorldPoint = new Vec3();
            Narrowphase.prototype[Shape.types.SPHERE | Shape.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.sphereConvex = function(si, sj, xi, xj, qi, qj, bi, bj, rsi, rsj, justTest) {
              var v3pool = this.v3pool;
              xi.vsub(xj, convex_to_sphere);
              var normals = sj.faceNormals;
              var faces = sj.faces;
              var verts = sj.vertices;
              var R = si.radius;
              var penetrating_sides = [];
              for (var i = 0; i !== verts.length; i++) {
                var v = verts[i];
                var worldCorner = sphereConvex_worldCorner;
                qj.vmult(v, worldCorner);
                xj.vadd(worldCorner, worldCorner);
                var sphere_to_corner = sphereConvex_sphereToCorner;
                worldCorner.vsub(xi, sphere_to_corner);
                if (sphere_to_corner.norm2() < R * R) {
                  if (justTest) return true;
                  found = true;
                  var r = this.createContactEquation(bi, bj, si, sj, rsi, rsj);
                  r.ri.copy(sphere_to_corner);
                  r.ri.normalize();
                  r.ni.copy(r.ri);
                  r.ri.mult(R, r.ri);
                  worldCorner.vsub(xj, r.rj);
                  r.ri.vadd(xi, r.ri);
                  r.ri.vsub(bi.position, r.ri);
                  r.rj.vadd(xj, r.rj);
                  r.rj.vsub(bj.position, r.rj);
                  this.result.push(r);
                  this.createFrictionEquationsFromContact(r, this.frictionResult);
                  return;
                }
              }
              var found = false;
              for (var i = 0, nfaces = faces.length; i !== nfaces && false === found; i++) {
                var normal = normals[i];
                var face = faces[i];
                var worldNormal = sphereConvex_worldNormal;
                qj.vmult(normal, worldNormal);
                var worldPoint = sphereConvex_worldPoint;
                qj.vmult(verts[face[0]], worldPoint);
                worldPoint.vadd(xj, worldPoint);
                var worldSpherePointClosestToPlane = sphereConvex_worldSpherePointClosestToPlane;
                worldNormal.mult(-R, worldSpherePointClosestToPlane);
                xi.vadd(worldSpherePointClosestToPlane, worldSpherePointClosestToPlane);
                var penetrationVec = sphereConvex_penetrationVec;
                worldSpherePointClosestToPlane.vsub(worldPoint, penetrationVec);
                var penetration = penetrationVec.dot(worldNormal);
                var worldPointToSphere = sphereConvex_sphereToWorldPoint;
                xi.vsub(worldPoint, worldPointToSphere);
                if (penetration < 0 && worldPointToSphere.dot(worldNormal) > 0) {
                  var faceVerts = [];
                  for (var j = 0, Nverts = face.length; j !== Nverts; j++) {
                    var worldVertex = v3pool.get();
                    qj.vmult(verts[face[j]], worldVertex);
                    xj.vadd(worldVertex, worldVertex);
                    faceVerts.push(worldVertex);
                  }
                  if (pointInPolygon(faceVerts, worldNormal, xi)) {
                    if (justTest) return true;
                    found = true;
                    var r = this.createContactEquation(bi, bj, si, sj, rsi, rsj);
                    worldNormal.mult(-R, r.ri);
                    worldNormal.negate(r.ni);
                    var penetrationVec2 = v3pool.get();
                    worldNormal.mult(-penetration, penetrationVec2);
                    var penetrationSpherePoint = v3pool.get();
                    worldNormal.mult(-R, penetrationSpherePoint);
                    xi.vsub(xj, r.rj);
                    r.rj.vadd(penetrationSpherePoint, r.rj);
                    r.rj.vadd(penetrationVec2, r.rj);
                    r.rj.vadd(xj, r.rj);
                    r.rj.vsub(bj.position, r.rj);
                    r.ri.vadd(xi, r.ri);
                    r.ri.vsub(bi.position, r.ri);
                    v3pool.release(penetrationVec2);
                    v3pool.release(penetrationSpherePoint);
                    this.result.push(r);
                    this.createFrictionEquationsFromContact(r, this.frictionResult);
                    for (var j = 0, Nfaceverts = faceVerts.length; j !== Nfaceverts; j++) v3pool.release(faceVerts[j]);
                    return;
                  }
                  for (var j = 0; j !== face.length; j++) {
                    var v1 = v3pool.get();
                    var v2 = v3pool.get();
                    qj.vmult(verts[face[(j + 1) % face.length]], v1);
                    qj.vmult(verts[face[(j + 2) % face.length]], v2);
                    xj.vadd(v1, v1);
                    xj.vadd(v2, v2);
                    var edge = sphereConvex_edge;
                    v2.vsub(v1, edge);
                    var edgeUnit = sphereConvex_edgeUnit;
                    edge.unit(edgeUnit);
                    var p = v3pool.get();
                    var v1_to_xi = v3pool.get();
                    xi.vsub(v1, v1_to_xi);
                    var dot = v1_to_xi.dot(edgeUnit);
                    edgeUnit.mult(dot, p);
                    p.vadd(v1, p);
                    var xi_to_p = v3pool.get();
                    p.vsub(xi, xi_to_p);
                    if (dot > 0 && dot * dot < edge.norm2() && xi_to_p.norm2() < R * R) {
                      if (justTest) return true;
                      var r = this.createContactEquation(bi, bj, si, sj, rsi, rsj);
                      p.vsub(xj, r.rj);
                      p.vsub(xi, r.ni);
                      r.ni.normalize();
                      r.ni.mult(R, r.ri);
                      r.rj.vadd(xj, r.rj);
                      r.rj.vsub(bj.position, r.rj);
                      r.ri.vadd(xi, r.ri);
                      r.ri.vsub(bi.position, r.ri);
                      this.result.push(r);
                      this.createFrictionEquationsFromContact(r, this.frictionResult);
                      for (var j = 0, Nfaceverts = faceVerts.length; j !== Nfaceverts; j++) v3pool.release(faceVerts[j]);
                      v3pool.release(v1);
                      v3pool.release(v2);
                      v3pool.release(p);
                      v3pool.release(xi_to_p);
                      v3pool.release(v1_to_xi);
                      return;
                    }
                    v3pool.release(v1);
                    v3pool.release(v2);
                    v3pool.release(p);
                    v3pool.release(xi_to_p);
                    v3pool.release(v1_to_xi);
                  }
                  for (var j = 0, Nfaceverts = faceVerts.length; j !== Nfaceverts; j++) v3pool.release(faceVerts[j]);
                }
              }
            };
            var planeBox_normal = new Vec3();
            var plane_to_corner = new Vec3();
            Narrowphase.prototype[Shape.types.PLANE | Shape.types.BOX] = Narrowphase.prototype.planeBox = function(si, sj, xi, xj, qi, qj, bi, bj, rsi, rsj, justTest) {
              sj.convexPolyhedronRepresentation.material = sj.material;
              sj.convexPolyhedronRepresentation.collisionResponse = sj.collisionResponse;
              sj.convexPolyhedronRepresentation.id = sj.id;
              return this.planeConvex(si, sj.convexPolyhedronRepresentation, xi, xj, qi, qj, bi, bj, si, sj, justTest);
            };
            var planeConvex_v = new Vec3();
            var planeConvex_normal = new Vec3();
            var planeConvex_relpos = new Vec3();
            var planeConvex_projected = new Vec3();
            Narrowphase.prototype[Shape.types.PLANE | Shape.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.planeConvex = function(planeShape, convexShape, planePosition, convexPosition, planeQuat, convexQuat, planeBody, convexBody, si, sj, justTest) {
              var worldVertex = planeConvex_v, worldNormal = planeConvex_normal;
              worldNormal.set(0, 0, 1);
              planeQuat.vmult(worldNormal, worldNormal);
              var numContacts = 0;
              var relpos = planeConvex_relpos;
              for (var i = 0; i !== convexShape.vertices.length; i++) {
                worldVertex.copy(convexShape.vertices[i]);
                convexQuat.vmult(worldVertex, worldVertex);
                convexPosition.vadd(worldVertex, worldVertex);
                worldVertex.vsub(planePosition, relpos);
                var dot = worldNormal.dot(relpos);
                if (dot <= 0) {
                  if (justTest) return true;
                  var r = this.createContactEquation(planeBody, convexBody, planeShape, convexShape, si, sj);
                  var projected = planeConvex_projected;
                  worldNormal.mult(worldNormal.dot(relpos), projected);
                  worldVertex.vsub(projected, projected);
                  projected.vsub(planePosition, r.ri);
                  r.ni.copy(worldNormal);
                  worldVertex.vsub(convexPosition, r.rj);
                  r.ri.vadd(planePosition, r.ri);
                  r.ri.vsub(planeBody.position, r.ri);
                  r.rj.vadd(convexPosition, r.rj);
                  r.rj.vsub(convexBody.position, r.rj);
                  this.result.push(r);
                  numContacts++;
                  this.enableFrictionReduction || this.createFrictionEquationsFromContact(r, this.frictionResult);
                }
              }
              this.enableFrictionReduction && numContacts && this.createFrictionFromAverage(numContacts);
            };
            var convexConvex_sepAxis = new Vec3();
            var convexConvex_q = new Vec3();
            Narrowphase.prototype[Shape.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.convexConvex = function(si, sj, xi, xj, qi, qj, bi, bj, rsi, rsj, justTest, faceListA, faceListB) {
              var sepAxis = convexConvex_sepAxis;
              if (xi.distanceTo(xj) > si.boundingSphereRadius + sj.boundingSphereRadius) return;
              if (si.findSeparatingAxis(sj, xi, qi, xj, qj, sepAxis, faceListA, faceListB)) {
                var res = [];
                var q = convexConvex_q;
                si.clipAgainstHull(xi, qi, sj, xj, qj, sepAxis, -100, 100, res);
                var numContacts = 0;
                for (var j = 0; j !== res.length; j++) {
                  if (justTest) return true;
                  var r = this.createContactEquation(bi, bj, si, sj, rsi, rsj), ri = r.ri, rj = r.rj;
                  sepAxis.negate(r.ni);
                  res[j].normal.negate(q);
                  q.mult(res[j].depth, q);
                  res[j].point.vadd(q, ri);
                  rj.copy(res[j].point);
                  ri.vsub(xi, ri);
                  rj.vsub(xj, rj);
                  ri.vadd(xi, ri);
                  ri.vsub(bi.position, ri);
                  rj.vadd(xj, rj);
                  rj.vsub(bj.position, rj);
                  this.result.push(r);
                  numContacts++;
                  this.enableFrictionReduction || this.createFrictionEquationsFromContact(r, this.frictionResult);
                }
                this.enableFrictionReduction && numContacts && this.createFrictionFromAverage(numContacts);
              }
            };
            var particlePlane_normal = new Vec3();
            var particlePlane_relpos = new Vec3();
            var particlePlane_projected = new Vec3();
            Narrowphase.prototype[Shape.types.PLANE | Shape.types.PARTICLE] = Narrowphase.prototype.planeParticle = function(sj, si, xj, xi, qj, qi, bj, bi, rsi, rsj, justTest) {
              var normal = particlePlane_normal;
              normal.set(0, 0, 1);
              bj.quaternion.vmult(normal, normal);
              var relpos = particlePlane_relpos;
              xi.vsub(bj.position, relpos);
              var dot = normal.dot(relpos);
              if (dot <= 0) {
                if (justTest) return true;
                var r = this.createContactEquation(bi, bj, si, sj, rsi, rsj);
                r.ni.copy(normal);
                r.ni.negate(r.ni);
                r.ri.set(0, 0, 0);
                var projected = particlePlane_projected;
                normal.mult(normal.dot(xi), projected);
                xi.vsub(projected, projected);
                r.rj.copy(projected);
                this.result.push(r);
                this.createFrictionEquationsFromContact(r, this.frictionResult);
              }
            };
            var particleSphere_normal = new Vec3();
            Narrowphase.prototype[Shape.types.PARTICLE | Shape.types.SPHERE] = Narrowphase.prototype.sphereParticle = function(sj, si, xj, xi, qj, qi, bj, bi, rsi, rsj, justTest) {
              var normal = particleSphere_normal;
              normal.set(0, 0, 1);
              xi.vsub(xj, normal);
              var lengthSquared = normal.norm2();
              if (lengthSquared <= sj.radius * sj.radius) {
                if (justTest) return true;
                var r = this.createContactEquation(bi, bj, si, sj, rsi, rsj);
                normal.normalize();
                r.rj.copy(normal);
                r.rj.mult(sj.radius, r.rj);
                r.ni.copy(normal);
                r.ni.negate(r.ni);
                r.ri.set(0, 0, 0);
                this.result.push(r);
                this.createFrictionEquationsFromContact(r, this.frictionResult);
              }
            };
            var cqj = new Quaternion();
            var convexParticle_local = new Vec3();
            var convexParticle_normal = new Vec3();
            var convexParticle_penetratedFaceNormal = new Vec3();
            var convexParticle_vertexToParticle = new Vec3();
            var convexParticle_worldPenetrationVec = new Vec3();
            Narrowphase.prototype[Shape.types.PARTICLE | Shape.types.CONVEXPOLYHEDRON] = Narrowphase.prototype.convexParticle = function(sj, si, xj, xi, qj, qi, bj, bi, rsi, rsj, justTest) {
              var penetratedFaceIndex = -1;
              var penetratedFaceNormal = convexParticle_penetratedFaceNormal;
              var worldPenetrationVec = convexParticle_worldPenetrationVec;
              var minPenetration = null;
              var numDetectedFaces = 0;
              var local = convexParticle_local;
              local.copy(xi);
              local.vsub(xj, local);
              qj.conjugate(cqj);
              cqj.vmult(local, local);
              if (sj.pointIsInside(local)) {
                sj.worldVerticesNeedsUpdate && sj.computeWorldVertices(xj, qj);
                sj.worldFaceNormalsNeedsUpdate && sj.computeWorldFaceNormals(qj);
                for (var i = 0, nfaces = sj.faces.length; i !== nfaces; i++) {
                  var verts = [ sj.worldVertices[sj.faces[i][0]] ];
                  var normal = sj.worldFaceNormals[i];
                  xi.vsub(verts[0], convexParticle_vertexToParticle);
                  var penetration = -normal.dot(convexParticle_vertexToParticle);
                  if (null === minPenetration || Math.abs(penetration) < Math.abs(minPenetration)) {
                    if (justTest) return true;
                    minPenetration = penetration;
                    penetratedFaceIndex = i;
                    penetratedFaceNormal.copy(normal);
                    numDetectedFaces++;
                  }
                }
                if (-1 !== penetratedFaceIndex) {
                  var r = this.createContactEquation(bi, bj, si, sj, rsi, rsj);
                  penetratedFaceNormal.mult(minPenetration, worldPenetrationVec);
                  worldPenetrationVec.vadd(xi, worldPenetrationVec);
                  worldPenetrationVec.vsub(xj, worldPenetrationVec);
                  r.rj.copy(worldPenetrationVec);
                  penetratedFaceNormal.negate(r.ni);
                  r.ri.set(0, 0, 0);
                  var ri = r.ri, rj = r.rj;
                  ri.vadd(xi, ri);
                  ri.vsub(bi.position, ri);
                  rj.vadd(xj, rj);
                  rj.vsub(bj.position, rj);
                  this.result.push(r);
                  this.createFrictionEquationsFromContact(r, this.frictionResult);
                } else console.warn("Point found inside convex, but did not find penetrating face!");
              }
            };
            Narrowphase.prototype[Shape.types.BOX | Shape.types.HEIGHTFIELD] = Narrowphase.prototype.boxHeightfield = function(si, sj, xi, xj, qi, qj, bi, bj, rsi, rsj, justTest) {
              si.convexPolyhedronRepresentation.material = si.material;
              si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
              return this.convexHeightfield(si.convexPolyhedronRepresentation, sj, xi, xj, qi, qj, bi, bj, si, sj, justTest);
            };
            var convexHeightfield_tmp1 = new Vec3();
            var convexHeightfield_tmp2 = new Vec3();
            var convexHeightfield_faceList = [ 0 ];
            Narrowphase.prototype[Shape.types.CONVEXPOLYHEDRON | Shape.types.HEIGHTFIELD] = Narrowphase.prototype.convexHeightfield = function(convexShape, hfShape, convexPos, hfPos, convexQuat, hfQuat, convexBody, hfBody, rsi, rsj, justTest) {
              var data = hfShape.data, w = hfShape.elementSize, radius = convexShape.boundingSphereRadius, worldPillarOffset = convexHeightfield_tmp2, faceList = convexHeightfield_faceList;
              var localConvexPos = convexHeightfield_tmp1;
              Transform.pointToLocalFrame(hfPos, hfQuat, convexPos, localConvexPos);
              var iMinX = Math.floor((localConvexPos.x - radius) / w) - 1, iMaxX = Math.ceil((localConvexPos.x + radius) / w) + 1, iMinY = Math.floor((localConvexPos.y - radius) / w) - 1, iMaxY = Math.ceil((localConvexPos.y + radius) / w) + 1;
              if (iMaxX < 0 || iMaxY < 0 || iMinX > data.length || iMinY > data[0].length) return;
              iMinX < 0 && (iMinX = 0);
              iMaxX < 0 && (iMaxX = 0);
              iMinY < 0 && (iMinY = 0);
              iMaxY < 0 && (iMaxY = 0);
              iMinX >= data.length && (iMinX = data.length - 1);
              iMaxX >= data.length && (iMaxX = data.length - 1);
              iMaxY >= data[0].length && (iMaxY = data[0].length - 1);
              iMinY >= data[0].length && (iMinY = data[0].length - 1);
              var minMax = [];
              hfShape.getRectMinMax(iMinX, iMinY, iMaxX, iMaxY, minMax);
              var min = minMax[0];
              var max = minMax[1];
              if (localConvexPos.z - radius > max || localConvexPos.z + radius < min) return;
              for (var i = iMinX; i < iMaxX; i++) for (var j = iMinY; j < iMaxY; j++) {
                var intersecting = false;
                hfShape.getConvexTrianglePillar(i, j, false);
                Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
                convexPos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + convexShape.boundingSphereRadius && (intersecting = this.convexConvex(convexShape, hfShape.pillarConvex, convexPos, worldPillarOffset, convexQuat, hfQuat, convexBody, hfBody, rsi, rsj, justTest, faceList, null));
                if (justTest && intersecting) return true;
                hfShape.getConvexTrianglePillar(i, j, true);
                Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
                convexPos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + convexShape.boundingSphereRadius && (intersecting = this.convexConvex(convexShape, hfShape.pillarConvex, convexPos, worldPillarOffset, convexQuat, hfQuat, convexBody, hfBody, rsi, rsj, justTest, faceList, null));
                if (justTest && intersecting) return true;
              }
            };
            var sphereHeightfield_tmp1 = new Vec3();
            var sphereHeightfield_tmp2 = new Vec3();
            Narrowphase.prototype[Shape.types.SPHERE | Shape.types.HEIGHTFIELD] = Narrowphase.prototype.sphereHeightfield = function(sphereShape, hfShape, spherePos, hfPos, sphereQuat, hfQuat, sphereBody, hfBody, rsi, rsj, justTest) {
              var data = hfShape.data, radius = sphereShape.radius, w = hfShape.elementSize, worldPillarOffset = sphereHeightfield_tmp2;
              var localSpherePos = sphereHeightfield_tmp1;
              Transform.pointToLocalFrame(hfPos, hfQuat, spherePos, localSpherePos);
              var iMinX = Math.floor((localSpherePos.x - radius) / w) - 1, iMaxX = Math.ceil((localSpherePos.x + radius) / w) + 1, iMinY = Math.floor((localSpherePos.y - radius) / w) - 1, iMaxY = Math.ceil((localSpherePos.y + radius) / w) + 1;
              if (iMaxX < 0 || iMaxY < 0 || iMinX > data.length || iMinY > data[0].length) return;
              iMinX < 0 && (iMinX = 0);
              iMaxX < 0 && (iMaxX = 0);
              iMinY < 0 && (iMinY = 0);
              iMaxY < 0 && (iMaxY = 0);
              iMinX >= data.length && (iMinX = data.length - 1);
              iMaxX >= data.length && (iMaxX = data.length - 1);
              iMaxY >= data[0].length && (iMaxY = data[0].length - 1);
              iMinY >= data[0].length && (iMinY = data[0].length - 1);
              var minMax = [];
              hfShape.getRectMinMax(iMinX, iMinY, iMaxX, iMaxY, minMax);
              var min = minMax[0];
              var max = minMax[1];
              if (localSpherePos.z - radius > max || localSpherePos.z + radius < min) return;
              var result = this.result;
              for (var i = iMinX; i < iMaxX; i++) for (var j = iMinY; j < iMaxY; j++) {
                var numContactsBefore = result.length;
                var intersecting = false;
                hfShape.getConvexTrianglePillar(i, j, false);
                Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
                spherePos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + sphereShape.boundingSphereRadius && (intersecting = this.sphereConvex(sphereShape, hfShape.pillarConvex, spherePos, worldPillarOffset, sphereQuat, hfQuat, sphereBody, hfBody, sphereShape, hfShape, justTest));
                if (justTest && intersecting) return true;
                hfShape.getConvexTrianglePillar(i, j, true);
                Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
                spherePos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + sphereShape.boundingSphereRadius && (intersecting = this.sphereConvex(sphereShape, hfShape.pillarConvex, spherePos, worldPillarOffset, sphereQuat, hfQuat, sphereBody, hfBody, sphereShape, hfShape, justTest));
                if (justTest && intersecting) return true;
                var numContacts = result.length - numContactsBefore;
                if (numContacts > 2) return;
              }
            };
          }, {
            "../collision/AABB": 3,
            "../collision/Ray": 10,
            "../equations/ContactEquation": 20,
            "../equations/FrictionEquation": 22,
            "../math/Quaternion": 30,
            "../math/Transform": 31,
            "../math/Vec3": 32,
            "../objects/Body": 33,
            "../shapes/ConvexPolyhedron": 40,
            "../shapes/Shape": 45,
            "../solver/Solver": 49,
            "../utils/Vec3Pool": 56
          } ],
          58: [ function(_dereq_, module, exports) {
            module.exports = World;
            var Shape = _dereq_("../shapes/Shape");
            var Vec3 = _dereq_("../math/Vec3");
            var Quaternion = _dereq_("../math/Quaternion");
            var GSSolver = _dereq_("../solver/GSSolver");
            var ContactEquation = _dereq_("../equations/ContactEquation");
            var FrictionEquation = _dereq_("../equations/FrictionEquation");
            var Narrowphase = _dereq_("./Narrowphase");
            var EventTarget = _dereq_("../utils/EventTarget");
            var ArrayCollisionMatrix = _dereq_("../collision/ArrayCollisionMatrix");
            var ObjectCollisionMatrix = _dereq_("../collision/ObjectCollisionMatrix");
            var OverlapKeeper = _dereq_("../collision/OverlapKeeper");
            var Material = _dereq_("../material/Material");
            var ContactMaterial = _dereq_("../material/ContactMaterial");
            var Body = _dereq_("../objects/Body");
            var TupleDictionary = _dereq_("../utils/TupleDictionary");
            var RaycastResult = _dereq_("../collision/RaycastResult");
            var AABB = _dereq_("../collision/AABB");
            var Ray = _dereq_("../collision/Ray");
            var NaiveBroadphase = _dereq_("../collision/NaiveBroadphase");
            function World(options) {
              options = options || {};
              EventTarget.apply(this);
              this.dt = -1;
              this.allowSleep = !!options.allowSleep;
              this.contacts = [];
              this.frictionEquations = [];
              this.quatNormalizeSkip = void 0 !== options.quatNormalizeSkip ? options.quatNormalizeSkip : 0;
              this.quatNormalizeFast = void 0 !== options.quatNormalizeFast && options.quatNormalizeFast;
              this.time = 0;
              this.timeFixed = 0;
              this.stepnumber = 0;
              this.default_dt = 1 / 60;
              this.nextId = 0;
              this.gravity = new Vec3();
              options.gravity && this.gravity.copy(options.gravity);
              this.broadphase = void 0 !== options.broadphase ? options.broadphase : new NaiveBroadphase();
              this.bodies = [];
              this.solver = void 0 !== options.solver ? options.solver : new GSSolver();
              this.constraints = [];
              this.narrowphase = new Narrowphase(this);
              this.collisionMatrix = new ArrayCollisionMatrix();
              this.collisionMatrixPrevious = new ArrayCollisionMatrix();
              this.bodyOverlapKeeper = new OverlapKeeper();
              this.shapeOverlapKeeper = new OverlapKeeper();
              this.materials = [];
              this.contactmaterials = [];
              this.contactMaterialTable = new TupleDictionary();
              this.defaultMaterial = new Material("default");
              this.defaultContactMaterial = new ContactMaterial(this.defaultMaterial, this.defaultMaterial, {
                friction: .3,
                restitution: 0
              });
              this.doProfiling = false;
              this.profile = {
                solve: 0,
                makeContactConstraints: 0,
                broadphase: 0,
                integrate: 0,
                narrowphase: 0
              };
              this.accumulator = 0;
              this.subsystems = [];
              this.addBodyEvent = {
                type: "addBody",
                body: null
              };
              this.removeBodyEvent = {
                type: "removeBody",
                body: null
              };
              this.idToBodyMap = {};
              this.broadphase.setWorld(this);
              this.substeps = 0;
              this.cm = new ObjectCollisionMatrix();
              this.tm = new ObjectCollisionMatrix();
              this.triggerDic = new TupleDictionary();
              this.oldTriggerDic = new TupleDictionary();
              this.contactsDic = new TupleDictionary();
              this.oldContactsDic = new TupleDictionary();
            }
            World.idToBodyMap = {};
            World.idToShapeMap = {};
            World.prototype = new EventTarget();
            var tmpAABB1 = new AABB();
            var tmpArray1 = [];
            var tmpRay = new Ray();
            World.prototype.getContactMaterial = function(m1, m2) {
              return this.contactMaterialTable.get(m1.id, m2.id);
            };
            World.prototype.numObjects = function() {
              return this.bodies.length;
            };
            World.prototype.collisionMatrixTick = function() {
              var temp = this.collisionMatrixPrevious;
              this.collisionMatrixPrevious = this.collisionMatrix;
              this.collisionMatrix = temp;
              this.collisionMatrix.reset();
              this.bodyOverlapKeeper.tick();
              this.shapeOverlapKeeper.tick();
            };
            World.prototype.add = World.prototype.addBody = function(body) {
              World.SLEEPING = false;
              if (-1 !== this.bodies.indexOf(body)) return;
              body.index = this.bodies.length;
              this.bodies.push(body);
              body.world = this;
              body.initPosition.copy(body.position);
              body.initVelocity.copy(body.velocity);
              body.timeLastSleepy = this.time;
              if (body instanceof Body) {
                body.initAngularVelocity.copy(body.angularVelocity);
                body.initQuaternion.copy(body.quaternion);
              }
              this.collisionMatrix.setNumObjects(this.bodies.length);
              this.addBodyEvent.body = body;
              this.cm.setNumObjects(this.bodies.length);
              World.idToBodyMap[body.id] = body;
              this.dispatchEvent(this.addBodyEvent);
            };
            World.prototype.addConstraint = function(c) {
              World.SLEEPING = false;
              this.constraints.push(c);
            };
            World.prototype.removeConstraint = function(c) {
              World.SLEEPING = false;
              var idx = this.constraints.indexOf(c);
              -1 !== idx && this.constraints.splice(idx, 1);
            };
            World.prototype.rayTest = function(from, to, result) {
              result instanceof RaycastResult ? this.raycastClosest(from, to, {
                skipBackfaces: true
              }, result) : this.raycastAll(from, to, {
                skipBackfaces: true
              }, result);
            };
            World.prototype.raycastAll = function(from, to, options, callback) {
              options.mode = Ray.ALL;
              options.from = from;
              options.to = to;
              options.callback = callback;
              return tmpRay.intersectWorld(this, options);
            };
            World.prototype.raycastAny = function(from, to, options, result) {
              options.mode = Ray.ANY;
              options.from = from;
              options.to = to;
              options.result = result;
              return tmpRay.intersectWorld(this, options);
            };
            World.prototype.raycastClosest = function(from, to, options, result) {
              options.mode = Ray.CLOSEST;
              options.from = from;
              options.to = to;
              options.result = result;
              return tmpRay.intersectWorld(this, options);
            };
            World.prototype.remove = function(body) {
              World.SLEEPING = false;
              body.world = null;
              var n = this.bodies.length - 1, bodies = this.bodies, idx = bodies.indexOf(body);
              if (-1 !== idx) {
                bodies.splice(idx, 1);
                for (var i = 0; i !== bodies.length; i++) bodies[i].index = i;
                this.collisionMatrix.setNumObjects(n);
                this.removeBodyEvent.body = body;
                delete World.idToBodyMap[body.id];
                this.cm.setNumObjects(n);
                this.dispatchEvent(this.removeBodyEvent);
              }
            };
            World.prototype.removeBody = World.prototype.remove;
            World.prototype.getBodyById = function(id) {
              return World.idToBodyMap[id];
            };
            World.prototype.getShapeById = function(id) {
              return World.idToShapeMap[id];
            };
            World.prototype.addMaterial = function(m) {
              this.materials.push(m);
            };
            World.prototype.addContactMaterial = function(cmat) {
              this.contactmaterials.push(cmat);
              this.contactMaterialTable.set(cmat.materials[0].id, cmat.materials[1].id, cmat);
            };
            "undefined" === typeof performance && (performance = {});
            if (!performance.now) {
              var nowOffset = Date.now();
              performance.timing && performance.timing.navigationStart && (nowOffset = performance.timing.navigationStart);
              performance.now = function() {
                return Date.now() - nowOffset;
              };
            }
            var step_tmp1 = new Vec3();
            World.prototype.step = function(dt, timeSinceLastCalled, maxSubSteps) {
              maxSubSteps = maxSubSteps || 10;
              timeSinceLastCalled = timeSinceLastCalled || 0;
              if (0 === timeSinceLastCalled) {
                this.internalStep(dt);
                this.time += dt;
                this.substeps = 1;
              } else {
                this.accumulator += timeSinceLastCalled;
                this.substeps = 0;
                while (this.accumulator >= dt && this.substeps < maxSubSteps) {
                  this.internalStep(dt);
                  this.accumulator -= dt;
                  this.substeps++;
                }
                var t = this.accumulator % dt / dt;
                for (var j = 0; j !== this.bodies.length; j++) {
                  var b = this.bodies[j];
                  b.previousPosition.lerp(b.position, t, b.interpolatedPosition);
                  b.previousQuaternion.slerp(b.quaternion, t, b.interpolatedQuaternion);
                  b.previousQuaternion.normalize();
                }
                this.time += timeSinceLastCalled;
              }
            };
            var World_step_postStepEvent = {
              type: "postStep"
            }, World_step_preStepEvent = {
              type: "preStep"
            }, World_step_collideEvent = {
              type: "collide",
              body: null,
              contact: null
            }, World_step_oldContacts = [], World_step_frictionEquationPool = [], World_step_p1 = [], World_step_p2 = [], World_step_gvec = new Vec3(), World_step_vi = new Vec3(), World_step_vj = new Vec3(), World_step_wi = new Vec3(), World_step_wj = new Vec3(), World_step_t1 = new Vec3(), World_step_t2 = new Vec3(), World_step_rixn = new Vec3(), World_step_rjxn = new Vec3(), World_step_step_q = new Quaternion(), World_step_step_w = new Quaternion(), World_step_step_wq = new Quaternion(), invI_tau_dt = new Vec3();
            World.prototype.internalStep = function(dt) {
              this.dt = dt;
              var world = this, that = this, contacts = this.contacts, p1 = World_step_p1, p2 = World_step_p2, N = this.numObjects(), bodies = this.bodies, solver = this.solver, gravity = this.gravity, doProfiling = this.doProfiling, profile = this.profile, DYNAMIC = Body.DYNAMIC, profilingStart, constraints = this.constraints, frictionEquationPool = World_step_frictionEquationPool, gnorm = gravity.norm(), gx = gravity.x, gy = gravity.y, gz = gravity.z, i = 0;
              doProfiling && (profilingStart = performance.now());
              for (i = 0; i !== N; i++) {
                var bi = bodies[i];
                if (bi.useGravity && bi.type === DYNAMIC) {
                  var f = bi.force, m = bi.mass;
                  f.x += m * gx;
                  f.y += m * gy;
                  f.z += m * gz;
                }
              }
              for (var i = 0, Nsubsystems = this.subsystems.length; i !== Nsubsystems; i++) this.subsystems[i].update();
              doProfiling && (profilingStart = performance.now());
              p1.length = 0;
              p2.length = 0;
              this.broadphase.collisionPairs(this, p1, p2);
              doProfiling && (profile.broadphase = performance.now() - profilingStart);
              var Nconstraints = constraints.length;
              for (i = 0; i !== Nconstraints; i++) {
                var c = constraints[i];
                if (!c.collideConnected) for (var j = p1.length - 1; j >= 0; j -= 1) if (c.bodyA === p1[j] && c.bodyB === p2[j] || c.bodyB === p1[j] && c.bodyA === p2[j]) {
                  p1.splice(j, 1);
                  p2.splice(j, 1);
                }
              }
              this.collisionMatrixTick();
              doProfiling && (profilingStart = performance.now());
              var oldcontacts = World_step_oldContacts;
              var NoldContacts = contacts.length;
              for (i = 0; i !== NoldContacts; i++) oldcontacts.push(contacts[i]);
              contacts.length = 0;
              var NoldFrictionEquations = this.frictionEquations.length;
              for (i = 0; i !== NoldFrictionEquations; i++) frictionEquationPool.push(this.frictionEquations[i]);
              this.frictionEquations.length = 0;
              this.narrowphase.getContacts(p1, p2, this, contacts, oldcontacts, this.frictionEquations, frictionEquationPool);
              if (0 == contacts.length && World.SLEEPING) return;
              doProfiling && (profile.narrowphase = performance.now() - profilingStart);
              doProfiling && (profilingStart = performance.now());
              for (var i = 0; i < this.frictionEquations.length; i++) solver.addEquation(this.frictionEquations[i]);
              var ncontacts = contacts.length;
              for (var k = 0; k !== ncontacts; k++) {
                var c = contacts[k];
                var bi = c.bi, bj = c.bj, si = c.si, sj = c.sj;
                si.material && sj.material ? si.material.restitution >= 0 && sj.material.restitution >= 0 && (c.restitution = si.material.restitution * sj.material.restitution) : bi.material && bj.material && bi.material.restitution >= 0 && bj.material.restitution >= 0 && (c.restitution = bi.material.restitution * bj.material.restitution);
                solver.addEquation(c);
                if (bi.allowSleep && bi.type === Body.DYNAMIC && bi.sleepState === Body.SLEEPING && bj.sleepState === Body.AWAKE && bj.type !== Body.STATIC) {
                  var speedSquaredB = bj.velocity.norm2() + bj.angularVelocity.norm2();
                  var speedLimitSquaredB = Math.pow(bj.sleepSpeedLimit, 2);
                  speedSquaredB >= 2 * speedLimitSquaredB && (bi._wakeUpAfterNarrowphase = true);
                }
                if (bj.allowSleep && bj.type === Body.DYNAMIC && bj.sleepState === Body.SLEEPING && bi.sleepState === Body.AWAKE && bi.type !== Body.STATIC) {
                  var speedSquaredA = bi.velocity.norm2() + bi.angularVelocity.norm2();
                  var speedLimitSquaredA = Math.pow(bi.sleepSpeedLimit, 2);
                  speedSquaredA >= 2 * speedLimitSquaredA && (bj._wakeUpAfterNarrowphase = true);
                }
                this.collisionMatrix.set(bi, bj, true);
                if (!this.collisionMatrixPrevious.get(bi, bj)) {
                  World_step_collideEvent.body = bj;
                  World_step_collideEvent.contact = c;
                  bi.dispatchEvent(World_step_collideEvent);
                  World_step_collideEvent.body = bi;
                  bj.dispatchEvent(World_step_collideEvent);
                }
                this.bodyOverlapKeeper.set(bi.id, bj.id);
                this.shapeOverlapKeeper.set(si.id, sj.id);
              }
              this.emitContactEvents();
              if (doProfiling) {
                profile.makeContactConstraints = performance.now() - profilingStart;
                profilingStart = performance.now();
              }
              for (i = 0; i !== N; i++) {
                var bi = bodies[i];
                if (bi._wakeUpAfterNarrowphase) {
                  bi.wakeUp();
                  bi._wakeUpAfterNarrowphase = false;
                }
              }
              var Nconstraints = constraints.length;
              for (i = 0; i !== Nconstraints; i++) {
                var c = constraints[i];
                c.update();
                for (var j = 0, Neq = c.equations.length; j !== Neq; j++) {
                  var eq = c.equations[j];
                  solver.addEquation(eq);
                }
              }
              solver.solve(dt, this);
              doProfiling && (profile.solve = performance.now() - profilingStart);
              solver.removeAllEquations();
              var pow = Math.pow;
              for (i = 0; i !== N; i++) {
                var bi = bodies[i];
                if (bi.type & DYNAMIC) {
                  var ld = pow(1 - bi.linearDamping, dt);
                  var v = bi.velocity;
                  v.mult(ld, v);
                  var av = bi.angularVelocity;
                  if (av) {
                    var ad = pow(1 - bi.angularDamping, dt);
                    av.mult(ad, av);
                  }
                }
              }
              this.dispatchEvent(World_step_preStepEvent);
              for (i = 0; i !== N; i++) {
                var bi = bodies[i];
                bi.preStep && bi.preStep.call(bi);
              }
              doProfiling && (profilingStart = performance.now());
              var stepnumber = this.stepnumber;
              var quatNormalize = stepnumber % (this.quatNormalizeSkip + 1) === 0;
              var quatNormalizeFast = this.quatNormalizeFast;
              for (i = 0; i !== N; i++) bodies[i].integrate(dt, quatNormalize, quatNormalizeFast);
              this.clearForces();
              this.broadphase.dirty = true;
              doProfiling && (profile.integrate = performance.now() - profilingStart);
              this.time += dt;
              this.timeFixed += dt;
              this.stepnumber += 1;
              this.dispatchEvent(World_step_postStepEvent);
              for (i = 0; i !== N; i++) {
                var bi = bodies[i];
                var postStep = bi.postStep;
                postStep && postStep.call(bi);
              }
              if (this.allowSleep) {
                for (i = 0; i !== N; i++) bodies[i].sleepTick(this.time);
                World.SLEEPING = true;
                for (i = 0; i !== N; i++) {
                  var bi = bodies[i];
                  if (bi.type != Body.STATIC && !bi.isSleeping()) {
                    World.SLEEPING = false;
                    break;
                  }
                }
              } else World.SLEEPING = false;
            };
            World.prototype.emitContactEvents = function() {
              var additions = [];
              var removals = [];
              var beginContactEvent = {
                type: "beginContact",
                bodyA: null,
                bodyB: null
              };
              var endContactEvent = {
                type: "endContact",
                bodyA: null,
                bodyB: null
              };
              var beginShapeContactEvent = {
                type: "beginShapeContact",
                bodyA: null,
                bodyB: null,
                shapeA: null,
                shapeB: null
              };
              var endShapeContactEvent = {
                type: "endShapeContact",
                bodyA: null,
                bodyB: null,
                shapeA: null,
                shapeB: null
              };
              return function() {
                var hasBeginContact = this.hasAnyEventListener("beginContact");
                var hasEndContact = this.hasAnyEventListener("endContact");
                (hasBeginContact || hasEndContact) && this.bodyOverlapKeeper.getDiff(additions, removals);
                if (hasBeginContact) {
                  for (var i = 0, l = additions.length; i < l; i += 2) {
                    beginContactEvent.bodyA = this.getBodyById(additions[i]);
                    beginContactEvent.bodyB = this.getBodyById(additions[i + 1]);
                    this.dispatchEvent(beginContactEvent);
                  }
                  beginContactEvent.bodyA = beginContactEvent.bodyB = null;
                }
                if (hasEndContact) {
                  for (var i = 0, l = removals.length; i < l; i += 2) {
                    endContactEvent.bodyA = this.getBodyById(removals[i]);
                    endContactEvent.bodyB = this.getBodyById(removals[i + 1]);
                    this.dispatchEvent(endContactEvent);
                  }
                  endContactEvent.bodyA = endContactEvent.bodyB = null;
                }
                additions.length = removals.length = 0;
                var hasBeginShapeContact = this.hasAnyEventListener("beginShapeContact");
                var hasEndShapeContact = this.hasAnyEventListener("endShapeContact");
                (hasBeginShapeContact || hasEndShapeContact) && this.shapeOverlapKeeper.getDiff(additions, removals);
                if (hasBeginShapeContact) {
                  for (var i = 0, l = additions.length; i < l; i += 2) {
                    var shapeA = this.getShapeById(additions[i]);
                    var shapeB = this.getShapeById(additions[i + 1]);
                    beginShapeContactEvent.shapeA = shapeA;
                    beginShapeContactEvent.shapeB = shapeB;
                    beginShapeContactEvent.bodyA = shapeA.body;
                    beginShapeContactEvent.bodyB = shapeB.body;
                    this.dispatchEvent(beginShapeContactEvent);
                  }
                  beginShapeContactEvent.bodyA = beginShapeContactEvent.bodyB = beginShapeContactEvent.shapeA = beginShapeContactEvent.shapeB = null;
                }
                if (hasEndShapeContact) {
                  for (var i = 0, l = removals.length; i < l; i += 2) {
                    var shapeA = this.getShapeById(removals[i]);
                    var shapeB = this.getShapeById(removals[i + 1]);
                    endShapeContactEvent.shapeA = shapeA;
                    endShapeContactEvent.shapeB = shapeB;
                    endShapeContactEvent.bodyA = shapeA.body;
                    endShapeContactEvent.bodyB = shapeB.body;
                    this.dispatchEvent(endShapeContactEvent);
                  }
                  endShapeContactEvent.bodyA = endShapeContactEvent.bodyB = endShapeContactEvent.shapeA = endShapeContactEvent.shapeB = null;
                }
              };
            }();
            World.prototype.clearForces = function() {
              var bodies = this.bodies;
              var N = bodies.length;
              for (var i = 0; i !== N; i++) {
                var b = bodies[i], force = b.force, tau = b.torque;
                b.force.set(0, 0, 0);
                b.torque.set(0, 0, 0);
              }
            };
            var cc_trigger = {
              type: "cc-trigger",
              event: "",
              selfBody: null,
              otherBody: null,
              selfShape: null,
              otherShape: null
            };
            var cc_collide = {
              type: "cc-collide",
              event: "",
              body: null,
              selfShape: null,
              otherShape: null,
              contacts: null
            };
            var cc_oldContacts = [];
            World.prototype.emitTriggeredEvents = function() {
              if (0 == this.substeps) return;
              var key;
              var data;
              var i = this.triggerDic.getLength();
              while (i--) {
                key = this.triggerDic.getKeyByIndex(i);
                data = this.triggerDic.getDataByKey(key);
                if (null == data) continue;
                var shapeA = data.si;
                var shapeB = data.sj;
                if (this.tm.get(shapeA, shapeB)) cc_trigger.event = "onTriggerStay"; else {
                  this.tm.set(shapeA, shapeB, true);
                  cc_trigger.event = "onTriggerEnter";
                }
                cc_trigger.selfShape = shapeA;
                cc_trigger.otherShape = shapeB;
                cc_trigger.selfBody = shapeA.body;
                cc_trigger.otherBody = shapeB.body;
                shapeA.dispatchEvent(cc_trigger);
                cc_trigger.selfShape = shapeB;
                cc_trigger.otherShape = shapeA;
                cc_trigger.selfBody = shapeB.body;
                cc_trigger.otherBody = shapeA.body;
                shapeB.dispatchEvent(cc_trigger);
              }
              i = this.oldTriggerDic.getLength();
              while (i > 0) {
                i--;
                key = this.oldTriggerDic.getKeyByIndex(i);
                if (null != this.triggerDic.getDataByKey(key)) continue;
                data = this.oldTriggerDic.getDataByKey(key);
                if (null == data) continue;
                var shapeA = data.si;
                var shapeB = data.sj;
                this.tm.set(shapeA, shapeB, false);
                this.oldTriggerDic.del(shapeA.id, shapeB.id) && i--;
                cc_trigger.event = "onTriggerExit";
                cc_trigger.selfShape = shapeA;
                cc_trigger.otherShape = shapeB;
                cc_trigger.selfBody = shapeA.body;
                cc_trigger.otherBody = shapeB.body;
                shapeA.dispatchEvent(cc_trigger);
                cc_trigger.selfShape = shapeB;
                cc_trigger.otherShape = shapeA;
                cc_trigger.selfBody = shapeB.body;
                cc_trigger.otherBody = shapeA.body;
                shapeB.dispatchEvent(cc_trigger);
              }
              this.triggerDic.reset();
            };
            World.prototype.emitCollisionEvents = function() {
              if (0 == this.substeps) return;
              var contacts = this.contacts;
              var i = this.contacts.length;
              while (i--) {
                var c = contacts[i];
                var si = c.si;
                var sj = c.sj;
                var item = this.contactsDic.get(si.id, sj.id);
                null == item && (item = this.contactsDic.set(si.id, sj.id, []));
                item.push(c);
              }
              var key;
              var data;
              var i = this.contactsDic.getLength();
              while (i--) {
                key = this.contactsDic.getKeyByIndex(i);
                data = this.contactsDic.getDataByKey(key);
                if (null == data) continue;
                var si = data[0].si;
                var sj = data[0].sj;
                var bi = si.body;
                var bj = sj.body;
                if (this.cm.get(bi, bj)) cc_collide.event = "onCollisionStay"; else {
                  this.cm.set(bi, bj, true);
                  cc_collide.event = "onCollisionEnter";
                }
                cc_collide.bi = bi;
                cc_collide.contact = data[0];
                cc_collide.contacts = data;
                cc_collide.body = bj;
                cc_collide.selfShape = si;
                cc_collide.otherShape = sj;
                bi.dispatchEvent(cc_collide);
                cc_collide.body = bi;
                cc_collide.selfShape = sj;
                cc_collide.otherShape = si;
                bj.dispatchEvent(cc_collide);
              }
              var oldcontacts = cc_oldContacts;
              for (i = oldcontacts.length; i--; ) {
                var c = oldcontacts[i];
                var si = c.si;
                var sj = c.sj;
                null == this.oldContactsDic.get(si.id, sj.id) && this.oldContactsDic.set(si.id, sj.id, c);
              }
              i = this.oldContactsDic.getLength();
              while (i--) {
                key = this.oldContactsDic.getKeyByIndex(i);
                if (null == this.contactsDic.getDataByKey(key)) {
                  data = this.oldContactsDic.getDataByKey(key);
                  var si = data.si;
                  var sj = data.sj;
                  var bi = si.body;
                  var bj = sj.body;
                  if (this.cm.get(bi, bj) && (!bi.isSleeping() || !bj.isSleeping())) {
                    this.cm.set(bi, bj, false);
                    cc_collide.bi = bi;
                    cc_collide.contact = data;
                    cc_collide.event = "onCollisionExit";
                    cc_collide.body = bj;
                    cc_collide.selfShape = si;
                    cc_collide.otherShape = sj;
                    cc_collide.contacts.length = 0;
                    cc_collide.contacts.push(data);
                    bi.dispatchEvent(cc_collide);
                    cc_collide.body = bi;
                    cc_collide.selfShape = sj;
                    cc_collide.otherShape = si;
                    bj.dispatchEvent(cc_collide);
                  }
                }
              }
              this.contactsDic.reset();
              this.oldContactsDic.reset();
              World_step_oldContacts = cc_oldContacts;
              cc_oldContacts = this.contacts.slice();
              this.contacts.length = 0;
            };
          }, {
            "../collision/AABB": 3,
            "../collision/ArrayCollisionMatrix": 4,
            "../collision/NaiveBroadphase": 7,
            "../collision/ObjectCollisionMatrix": 8,
            "../collision/OverlapKeeper": 9,
            "../collision/Ray": 10,
            "../collision/RaycastResult": 11,
            "../equations/ContactEquation": 20,
            "../equations/FrictionEquation": 22,
            "../material/ContactMaterial": 25,
            "../material/Material": 26,
            "../math/Quaternion": 30,
            "../math/Vec3": 32,
            "../objects/Body": 33,
            "../shapes/Shape": 45,
            "../solver/GSSolver": 48,
            "../utils/EventTarget": 51,
            "../utils/TupleDictionary": 54,
            "./Narrowphase": 57
          } ]
        }, {}, [ 2 ])(2);
      });
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {} ]
}, {}, [ 10, 9 ]);