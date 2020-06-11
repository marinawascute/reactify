const spotifyApi = require("../middlewares/spotify-api");
const db = require('../../db');
const firebase = db.firestore();
const songs = firebase.collection("songs");
const uuidv4 = require('uuid/v4');


module.exports.listSongs = async function () {
    return new Promise((resolve, reject) => {
        songs.get().then(snapshot => {
            if (snapshot.empty) {
                console.log('No matching documents.');
                reject();
            }
            let items = [];
            snapshot.forEach(doc => {
                items.push(Object.assign({}, { 'id': doc.id }, doc.data()));
            });
            resolve(items);
        })
            .catch(err => {
                console.log('Error getting documents', err);
            });
    });
}

// module.exports.addSong = async function (data) {
//     return new Promise((resolve, reject) => {
//         spotifyApi.searchTracks(data.name).then((result) => {
//             data.link = result.body.tracks.items[0].external_urls.spotify;
//             data.artist = result.body.tracks.items[0].artists[0].name;
//             songs.doc(uuidv4()).set(data).then(() => {
//                 resolve(200)
//             });
//         });
//     });
// }

module.exports.addSong = async function (data) {
    return new Promise((resolve, reject) => {
        songs.doc(uuidv4()).set(data).then(() => {
            resolve(200)
        });
    });
}

module.exports.addSong = async function (data) {
    return new Promise((resolve, reject) => {
        spotifyApi.searchTracks(data.name).then((result) => {
            let searchResults = result.body.tracks.items.slice(0, 4);
            resolve(searchResults)
        });
    });
}

module.exports.deleteSong = async function (data) {
    songs.doc(data.id).delete();
    return 200;
}

module.exports.updateSong = async function (data) {
    return new Promise((resolve, reject) => {
        spotifyApi.searchTracks(data.name).then((result) => {
            let link = result.body.tracks.items[0].external_urls.spotify;
            let artist = result.body.tracks.items[0].artists[0].name;
            songs.doc(data.id).update({ name: data.name, artist: artist, link: link }).then(() => {
                resolve(200)
            });
        });
    });
}