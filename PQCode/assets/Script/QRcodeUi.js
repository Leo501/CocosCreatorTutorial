cc.Class({
	extends: cc.Component,
	properties: {

	},
	// use this for initialization
	onLoad() {
		this.init('http://forum.cocos.com/t/topic/44304/9');
	},

	init(url){
		//注意 最好把qrImage与qrcode的节点长宽设置为2的倍数。不然可能会出现无法识别二维码
		var ctx = this.node.addComponent(cc.Graphics);
		if (typeof (url) !== 'string') {
			console.log('url is not string',url);
			return;
		}
		this.QRCreate(ctx, url);
	},

	QRCreate(ctx, url) {
		var qrcode = new QRCode(-1, QRErrorCorrectLevel.H);
		qrcode.addData(url);
		qrcode.make();

		ctx.fillColor = cc.Color.BLACK;
		//块宽高
		var tileW = this.node.width / qrcode.getModuleCount();
		var tileH = this.node.height / qrcode.getModuleCount();

		// draw in the Graphics
		for (var row = 0; row < qrcode.getModuleCount(); row++) {
			for (var col = 0; col < qrcode.getModuleCount(); col++) {
				if (qrcode.isDark(row, col)) {
					// ctx.fillColor = cc.Color.BLACK;
					var w = (Math.ceil((col + 1) * tileW) - Math.floor(col * tileW));
					var h = (Math.ceil((row + 1) * tileW) - Math.floor(row * tileW));
					ctx.rect(Math.round(col * tileW), Math.round(row * tileH), w, h);
					ctx.fill();
				}
			}
		}
	},

});