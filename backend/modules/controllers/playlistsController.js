const playlistsModel = require('../models/playlistsModel');

module.exports.listPlaylists = async function (req, res) {
    let response = await playlistsModel.listPlaylists(req.body.email)
    res.send(response);
}

module.exports.addPlaylist = async function(req,res){
    let response = await playlistsModel.addPlaylist(req.body);
    res.sendStatus(response);
}
module.exports.searchPlaylist = async function(req,res){
    let response = await playlistsModel.searchPlaylist(req.body);
    res.send(response);
}

module.exports.updatePlaylist = async function(req,res){
    let response = await playlistsModel.updatePlaylist(req.body);
    res.sendStatus(response);
}

module.exports.deletePlaylist = async function(req,res){
    let response = await playlistsModel.deletePlaylist(req.body);
    res.sendStatus(response);
}