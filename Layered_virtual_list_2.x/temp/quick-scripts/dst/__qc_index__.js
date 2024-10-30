
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scene/Item');
require('./assets/Scene/TestLoop');
require('./assets/Scene/TestMatrix');
require('./assets/Scene/TestRenderAlternative');
require('./assets/Scene/TestShowNode');
require('./assets/Script/LoopList');
require('./assets/Script/RenderAlternative');
require('./assets/Script/RenderAlternative1');
require('./assets/Script/RenderAlternativeItem');
require('./assets/Script/RenderAlternative_old');
require('./assets/Script/RenderReactiveHandler');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();