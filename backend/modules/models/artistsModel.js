const spotifyApi = require("../middlewares/spotify-api");
const db = require('../../db');
const firebase = db.firestore();
const artists = firebase.collection("artists");
const uuidv4 = require('uuid/v4');


module.exports.listArtists = async function () {
    return new Promise((resolve, reject) => {
        artists.get().then(snapshot => {
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

module.exports.addArtist = async function (data) {
    return new Promise((resolve, reject) => {
        artists.doc(uuidv4()).set(data).then(() => {
            resolve(200)
        });
    });

}
// module.exports.addArtist = async function (data) {
//     return new Promise((resolve, reject) => {
//         spotifyApi.searchArtists(data.name).then((result) => {
//             data.link = result.body.artists.items[0].external_urls.spotify;
//             artists.doc(uuidv4()).set(data).then(() => {
//                 resolve(200)
//             });
//         });
//     });

// }

module.exports.deleteArtist = async function (data) {
    artists.doc(data.id).delete();
    return 200;
}

module.exports.updateArtist = async function (data) {
    return new Promise((resolve, reject) => {
        spotifyApi.searchArtists(data.name).then((result) => {
            let link = result.body.artists.items[0].external_urls.spotify;
            artists.doc(data.id).update({ name: data.name, link: link }).then(() => {
                resolve(200)
            });
        });
    });

}

module.exports.searchArtist = async function (data) {
    return new Promise((resolve, reject) => {
        console.log(data)
        spotifyApi.searchArtists(data.name).then((result) => {
            let searchResults = result.body.artists.items.slice(0,4);
            let response = [];
            searchResults.forEach((x,i) => {
                response.push({image:x.images[2].url,name:x.name,link:x.external_urls.spotify})
            }) 
            resolve(response);
        }).catch(err => {
            reject(err) 
        });
    });

}