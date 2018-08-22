class ChatUserModel {
    constructor() {
        this.users = [];
    }

    setUsers(arr) {
        delete this.users;
        this.users = arr;
    }

    getUser() {
        return this.users;
    }

    addUser(user) {
        this.users.push(user);
    }
}

module.exports = new ChatUserModel();