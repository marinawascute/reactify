const artistsModel = require('../models/artistsModel');

module.exports.listArtists = async function (req, res) {
    let response = await artistsModel.listArtists();
    res.send(response);
}

module.exports.addArtist = async function(req,res){
    let response = await artistsModel.addArtist(req.body);
    res.sendStatus(response);
}

module.exports.searchArtist = async function(req,res){
    let response = await artistsModel.searchArtist(req.body);
    res.send(response);
}

module.exports.updateArtist = async function(req,res){
    let response = await artistsModel.updateArtist(req.body);
    res.sendStatus(response);
}

module.exports.deleteArtist = async function(req,res){
    let response = await artistsModel.deleteArtist(req.body);
    res.sendStatus(response);
}