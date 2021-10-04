const md5 = require('md5');
const authService = require('../services/auth.service');
const { make, makeWithError } = require('../utils/jsonUtils');

const login = async function (req, res) {
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(400).send(makeWithError('missing params'));
    }

    const response = await authService.login(username, password)

    if (!response) {
        return res.status(400).send(makeWithError('invalid arguments'));
    }

    return res.send(make(response));
}

const create = async function (req, res) {
    const { username, password } = req.body
    if (!username || !password) {
        res.status(400).send(makeWithError('missing params'));
    }
    const hashedPassword = md5(password)
    const data = {
        username,
        password: hashedPassword
    }
    const response = await authService.create(data)
    return res.send(make(response));
}


module.exports = {
    login,
    create
};