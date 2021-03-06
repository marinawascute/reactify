const albumsModel = require('../models/albumsModel');

module.exports.listAlbums = async function (req, res) {
    let response = await albumsModel.listAlbums(req.body.email)
    res.send(response);
}

module.exports.addAlbum = async function(req,res){
    let response = await albumsModel.addAlbum(req.body);
    res.sendStatus(response);
}

module.exports.searchAlbum = async function(req,res){
    let response = await albumsModel.searchAlbum(req.body);
    res.send(response);
}

module.exports.updateAlbum = async function(req,res){
    let response = await albumsModel.updateAlbum(req.body);
    res.sendStatus(response);
}

module.exports.deleteAlbum = async function(req,res){
    let response = await albumsModel.deleteAlbum(req.body);
    res.sendStatus(response);
}