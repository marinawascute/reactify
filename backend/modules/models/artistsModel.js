const spotifyApi = require("../middlewares/spotify-api");
const db = require('../../db');
const firebase = db.firestore();
const artists = firebase.collection("artists");
const uuidv4 = require('uuid/v4');


module.exports.listArtists = async function (){
    artists.get().then(snapshot => {
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

module.exports.addArtist = async function (data){
    spotifyApi.searchArtists(data.name).then((result) => {
        data.link = result.body.artists.items[0].external_urls.spotify;
    });
    artists.doc(uuidv4()).set(data);
    return 200;
}

module.exports.deleteArtist = async function (data){
    artists.doc(data).delete();
    return 200;
}

module.exports.updateArtist = async function (data) {
    spotifyApi.searchArtists(data.name).then((result) => {
        data.link = result.body.artists.items[0].external_urls.spotify;
    });
    artists.doc(data.id).update(data.data);
    return 200;
}