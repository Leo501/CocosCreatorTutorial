var WebSocketServer = require('ws').Server,
wss = new WebSocketServer({ port: 8181 });
wss.on('connection', function (ws) {
    console.log('client connected');
    ws.on('message', function (message) {
        console.log(message);
        ws.send(message);
    });
});

console.log('consol1');
console.log("websocket连接完毕")
console.log('a');