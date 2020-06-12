const spotifyApi = require("../middlewares/spotify-api");
const db = require('../../db');
const firebase = db.firestore();
const playlists = firebase.collection("playlists");
const uuidv4 = require('uuid/v4');


module.exports.listPlaylists = async function () {
    return new Promise((resolve, reject) => {

        playlists.get().then(snapshot => {
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

// module.exports.addPlaylist = async function (data) {
//     return new Promise((resolve, reject) => {
//         spotifyApi.searchPlaylists(data.name).then((result) => {
//             data.link = result.body.playlists.items[0].external_urls.spotify;
//             playlists.doc(uuidv4()).set(data).then(() => {
//                 resolve(200)
//             });
//         });
//     });
// }

module.exports.searchPlaylist = async function (data) {
    return new Promise((resolve, reject) => {
        spotifyApi.searchPlaylists(data.name).then((result) => {
            let searchResults = result.body.playlists.items.slice(0, 4);
            let response = [];
            searchResults.forEach((x,i) => {
                response.push({image:x.images[2].url,name:x.name,link:x.external_urls.spotify})
            }) 
            resolve(response)
        });
    });
}

module.exports.addPlaylist = async function (data) {
    return new Promise((resolve, reject) => {
        playlists.doc(uuidv4()).set(data).then(() => {
            resolve(200)
        });
    });
}

module.exports.deletePlaylist = async function (data) {
    playlists.doc(data.id).delete();
    return 200;
}

module.exports.updatePlaylist = async function (data) {
    return new Promise((resolve, reject) => {
        spotifyApi.searchPlaylists(data.name).then((result) => {
            let link = result.body.playlists.items[0].external_urls.spotify;
            playlists.doc(data.id).update({ name: data.name, link: link }).then(() => {
                resolve(200)
            });
        });
    });
}