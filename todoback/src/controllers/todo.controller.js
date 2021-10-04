const todoService = require('../services/todo.service');
const { make, makeWithError } = require('../utils/jsonUtils');

const getAllById = async function (req, res) {
    const response = await todoService.getAllById(req.user.id)
    return res.send(make(response));
}

const create = async function (req, res) {
    if(!req.body){
        return res.status(400).send(makeWithError('body missing'));
    }
    const data = {
        name: req.body.name,
        completed: false,
        userId: req.user.id,
    }
    const response = await todoService.create(data)
    return res.send(make(response));
}

const changeStatus = async function (req, res) {
    if(!req.body){
        return res.status(400).send(makeWithError('body missing'));
    }
    const response = await todoService.changeStatus(req.params.id)
    return res.send(make(response));
}

const deleteById = async function (req, res) {
    const response = await todoService.deleteById(req.params.id)
    return res.send(make(response));
}


module.exports = {
    getAllById,
    create,
    changeStatus,
    deleteById
};