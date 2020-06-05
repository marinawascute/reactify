const db = require("../../authDb");
const firebase = require("../../db");
const firestore = firebase.firestore();
const albums = firestore.collection("albums");
const artists = firestore.collection("artists");
const playlists = firestore.collection("playlists");
const songs = firestore.collection("songs");
const jwt = require("jsonwebtoken");

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
            const payload = { email:data.email };
            const token = jwt.sign(payload, secret, {
                expiresIn: '1h'
            });
            resolve({token:token})
        }).catch(err => {
            resolve(403);
        })
    });
}

module.exports.dashboardCounts = async function (data) {
    return new Promise((resolve, reject) => {
        let response = {};
        albums.where('email', '==', data.email).get().then(album => {
            response.albums = album.size;
            playlists.where('email', '==', data.email).get().then(playlist => {
                response.playlists = playlist.size;
                songs.where('email', '==', data.email).get().then(song => {
                    response.songs = song.size;
                    artists.where('email', '==', data.email).get().then(artist => {
                        response.artists = artist.size;
                        resolve(response);
                    })
                })
            })
        })
    });
}