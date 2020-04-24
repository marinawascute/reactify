const db = require("../../authDb");

module.exports.addUser = async function (data) {
    return new Promise((resolve, reject) => {
        db.auth().createUserWithEmailAndPassword(data.email, data.password).then(() => {
            resolve(201)
        }).catch(err => {
            resolve(err.message);
        })
    });
}

module.exports.authenticateUser = async function (data) {
    return new Promise((resolve, reject) => {
        db.auth().signInWithEmailAndPassword(data.email, data.password).then(() => {
            resolve(200)
        }).catch(err => {
            resolve(403);
        })
    });
}

