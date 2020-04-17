const spotifyApi = require("../middlewares/spotify-api");
const db = require('../../db');
const firebase = db.firestore();
const playlists = firebase.collection("playlists");
const uuidv4 = require('uuid/v4');


module.exports.listPlaylists = async function (){
    playlists.get().then(snapshot => {
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

module.exports.addPlaylist = async function (data){
    spotifyApi.searchPlaylists(data.name).then((result) => {
        data.link = result.body.playlists.items[0].external_urls.spotify;
    });
    playlists.doc(uuidv4()).set(data);
    return 200;
}

module.exports.deletePlaylist = async function (data){
    playlists.doc(data).delete();
    return 200;
}

module.exports.updatePlaylist = async function (data) {
    spotifyApi.searchPlaylists(data.name).then((result) => {
        data.link = result.body.playlists.items[0].external_urls.spotify;
    });
    playlists.doc(data.id).update(data.data);
    return 200;
}