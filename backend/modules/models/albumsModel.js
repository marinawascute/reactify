const spotifyApi = require("../middlewares/spotify-api");
const db = require('../../db');
const firebase = db.firestore();
const albums = firebase.collection("albums");
const uuidv4 = require('uuid/v4');


module.exports.listAlbums = async function () {
    return new Promise((resolve, reject) => {
        albums.get().then(snapshot => {
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

// module.exports.addAlbum = async function (data) {
//     return new Promise((resolve, reject) => {
//         spotifyApi.searchAlbums(data.name).then((result) => {
//             data.link = result.body.albums.items[0].external_urls.spotify;
//             data.artist = result.body.albums.items[0].artists[0].name;
//             albums.doc(uuidv4()).set(data).then(() => {
//                 resolve(200)
//             });
//         });
//     });
// }
module.exports.addAlbum = async function (data) {
    return new Promise((resolve, reject) => {
        albums.doc(uuidv4()).set(data).then(() => {
            resolve(200)
        });
    });
}

module.exports.searchAlbum = async function (data) {
    return new Promise((resolve, reject) => {
        spotifyApi.searchAlbums(data.name).then((result) => {
            let searchResults = result.body.albums.items.slice(0, 4);
            resolve(searchResults);
        });
    });
}

module.exports.deleteAlbum = async function (data) {
    albums.doc(data.id).delete();
    return 200;
}

module.exports.updateAlbum = async function (data) {
    return new Promise((resolve, reject) => {
        spotifyApi.searchAlbums(data.name).then((result) => {
            let link = result.body.albums.items[0].external_urls.spotify;
            let artist = result.body.albums.items[0].artists[0].name;
            albums.doc(data.id).update({ name: data.name, artist: artist, link: link }).then(() => {
                resolve(200)
            });
        });
    });
}