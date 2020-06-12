const usersModel = require('../models/usersModel');

module.exports.addUser = async function (req, res) {
    let response = await usersModel.addUser(req.body);
    if (response.token) {
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
        res.cookie('token', response.token, { httpOnly: false })
            .sendStatus(201);
    } else {
        res.send(response);
    }
}

module.exports.authenticateUser = async function (req, res) {
    let response = await usersModel.authenticateUser(req.body);
    if (response.token) {
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
        res.cookie('token', response.token, { httpOnly: false })
            .sendStatus(200);
    } else {
        res.sendStatus(response);
    }
}

module.exports.dashboardCounts = async function (req, res) {
    let response = await usersModel.dashboardCounts(req.body);
    res.send(response);
}