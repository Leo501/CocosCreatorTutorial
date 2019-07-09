declare function getLaunchOptionsSync(): any;
declare function together(key:string,query:Object):void;
declare function getWxUserInfo(callback:any):any;
//查询字符串，从这条转发消息进入后，可通过 wx.getLaunchInfoSync() 或 wx.onShow() 获取启动参数中的 query。必须是 key1=val1&key2=val2 的格式。
declare function getWxShareInfo(shareTicket:any,callback:any):any;
/**
 * 获取 OpenID
 * @param obj {any} {success:function(res),fail:function(res)}
 */
declare function getUserOpenID(obj:any):any;

declare class TestTS{
	 getLaunchOptionsSync(): any;
	 together(key:string,query:Object):void;
	 getWxUserInfo():any;
}