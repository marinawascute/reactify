const spotifyApi = require("../middlewares/spotify-api");
const db = require('../../db');
const firebase = db.firestore();
const albums = firebase.collection("albums");
const uuidv4 = require('uuid/v4');


module.exports.listAlbums = async function (){
    albums.get().then(snapshot => {
        if (snapshot.empty) {
            console.log('No matching documents.');
            return;
        }
        return (snapshot.map(x => {return {'id':x.id , 'data':x.data()}}));
    })
        .catch(err => {
            console.log('Error getting documents', err);
        });
} 

module.exports.addAlbum = async function (data){
    spotifyApi.searchAlbums(data.name).then((result) => {
        data.link = result.body.albums.items[0].external_urls.spotify;
    });
    albums.doc(uuidv4()).set(data);
    return 200;
}

module.exports.deleteAlbum = async function (data){
    albums.doc(data).delete();
    return 200;
}

module.exports.updateAlbum = async function (data) {
    spotifyApi.searchAlbums(data.name).then((result) => {
        data.link = result.body.albums.items[0].external_urls.spotify;
    });
    albums.doc(data.id).update(data.data);
    return 200;
}