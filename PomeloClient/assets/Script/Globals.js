require('PomeloClient');
window.Promise = require('promise');
let myModel = {};
window.myModel = myModel;
myModel.chatUserModel = require('ChatUserModel');
myModel.chatInfoModel = require('ChatInfoModel');

// console.log('promise=', window.Promise);