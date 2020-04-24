const usersModel = require('../models/usersModel');

module.exports.addUser = async function(req,res){
    let response = await usersModel.addUser(req.body);
    res.sendStatus(response);
}

module.exports.authenticateUser = async function(req,res){
    let response = await usersModel.authenticateUser(req.body);
    res.sendStatus(response);
}

