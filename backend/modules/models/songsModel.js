const spotifyApi = require("../middlewares/spotify-api");
const db = require('../../db');
const firebase = db.firestore();
const songs = firebase.collection("songs");
const uuidv4 = require('uuid/v4');


module.exports.listSongs = async function (){
    songs.get().then(snapshot => {
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

module.exports.addSong = async function (data){
    spotifyApi.searchTracks(data.name).then((result) => {
        data.link = result.body.songs.items[0].external_urls.spotify;
    });
    songs.doc(uuidv4()).set(data);
    return 200;
}

module.exports.deleteSong = async function (data){
    songs.doc(data).delete();
    return 200;
}

module.exports.updateSong = async function (data) {
    spotifyApi.searchTracks(data.name).then((result) => {
        data.link = result.body.tracks.items[0].external_urls.spotify;
    });
    songs.doc(data.id).update(data.data);
    return 200;
}