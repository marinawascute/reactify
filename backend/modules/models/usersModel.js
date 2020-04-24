const spotifyApi = require("../middlewares/spotify-api");
const db = require('../../db');
const firebase = db.firestore();
const users = firebase.collection("user");
const uuidv4 = require('uuid/v4');

module.exports.addUser = async function (data) {
    users.where('name', '==', data.email).get().then(
        snapshot => {
            if (snapshot.empty) {
                users.doc(uuidv4()).set(data);
                return 201;
            }else {
                return 409,"Already exists.";
            }
        })
        .catch(err => {
            console.log('Error getting documents', err);
            return 403
    });
}

module.exports.authenticateUser = async function (data) {
    users.where('name', '==', data.email).get().then(
        snapshot => {
            if (snapshot.empty) {
                return 403;
            }
            if (snapshot[0].data().password == data.password) {
                return 200;
            } else {
                return 403;
            }
        })
        .catch(err => {
            console.log('Error getting documents', err);
            return 403
        });
}

