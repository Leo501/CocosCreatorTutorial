# 相机跟随

## 计算目标节点的前向量(世界坐标下)
~~~
节点当前四元数=获取世界坐标系下的旋转()
向向量=向量四元数乘法(节点默认前方向，节点当前四元数)
向向量=向向量.将当前向量归一化()
~~~

## 计算摄像机的向前四元数
~~~
摄像机前向量=摄像机位置-目标节点位置
摄像机节点前向量=摄像机前向量*-1
角度四元数=根据视口的前方向和上方向计算四元数()
摄像机节点角度四元数=角度四元数
~~~

## 计算跟随距离
~~~
CameraPos=TargetPos-TargetForward*hDist+targetUp*vDist;
摄像机位置=目标节点位置-目标节点单位前向量*水平距离+目标节点单位上向量*垂直距离
~~~

## 计算弹簧
~~~
理想位置=计算理想位置函数()
相对差值=实际位置-理想位置
加速度=-1*弹性系数*相对差值-阻尼系数*当前速度
速度=速度+加速度*间隔时间
实际位置=实际位置+速度*间隔时间
~~~

## 参考
* https://mp.weixin.qq.com/s?__biz=MzI1Nzk1MzExNw==&mid=2247485617&idx=1&sn=839880f5200bbf0376f1885c997a791d&chksm=ea0ed483dd795d950cbfe2150fb02a5deece940731ce1e240936c2b69cfc44ecdd53d546bb09&cur_album_id=1342270984425996289&scene=190#rd
* github https://gitee.com/lamyoung/cocos-creator-3d-examples/blob/master/springCamera/assets/src/SpringCamera.ts
