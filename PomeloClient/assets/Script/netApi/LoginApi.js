const LOGIN_ERROR = "There is no server to log in, please wait.";
const DUPLICATE_ERROR = "Please change your name to login.";

class LoginApi {
    constructor() {
        this.host = '192.168.0.124'
        this.port = 3014;
    }

    // query connector
    queryEntry(uid) {
        let route = 'gate.gateHandler.queryEntry';
        return new Promise((resolve, reject) => {
            pomelo.init({
                host: this.host,
                port: this.port,
                log: true
            }, function () {
                pomelo.request(route, {
                    uid: uid
                }, function (data) {
                    pomelo.disconnect(function () {
                        console.log(this, data);
                        if (data.code === 500) {
                            reject(LOGIN_ERROR);
                            return;
                        }
                        resolve(data);
                    });
                });
            });
        });
    };

    // connect entry
    loginEntry(data, user) {
        var route = "connector.entryHandler.enter";
        return new Promise((resolve, reject) => {
            pomelo.init({
                host: data.host,
                port: data.port,
                log: true
            }, function () {
                pomelo.request(route, {
                    username: user.username,
                    rid: user.rid
                }, function (data) {
                    if (data.error) {
                        reject(DUPLICATE_ERROR);
                        return;
                    }
                    resolve(data);
                });
            });
        });
    };

}

module.exports = new LoginApi();