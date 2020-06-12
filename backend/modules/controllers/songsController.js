const songsModel = require('../models/songsModel');

module.exports.listSongs = async function (req, res) {
    let response = await songsModel.listSongs(req.body.email)
    res.send(response);
}

module.exports.addSong = async function(req,res){
    let response = await songsModel.addSong(req.body);
    res.sendStatus(response);
}

module.exports.searchSong = async function(req,res){
    let response = await songsModel.searchSong(req.body);
    res.send(response);
}

module.exports.updateSong = async function(req,res){
    let response = await songsModel.updateSong(req.body);
    res.sendStatus(response);
}

module.exports.deleteSong = async function(req,res){
    let response = await songsModel.deleteSong(req.body);
    res.sendStatus(response);
}