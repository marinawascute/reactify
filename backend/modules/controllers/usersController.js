const usersModel = require('../models/usersModel');

module.exports.addUser = async function(req,res){
    let response = await usersModel.addUser(req.body);
    res.send(response);
}

module.exports.authenticateUser = async function(req,res){
    let response = await usersModel.authenticateUser(req.body);
    if(response.token){
        res.cookie('token', response.token, { httpOnly: true })
        .sendStatus(200);
    }else{
        res.sendStatus(response);
    }
}

module.exports.dashboardCounts = async function(req,res) {
    let response = await usersModel.dashboardCounts(req.body);
    res.send(response);
}