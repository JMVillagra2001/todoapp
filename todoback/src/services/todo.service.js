const Todo = require('../models/Todo');

const getAllById = async function (userId) {
    let todos = await Todo.findAll({ where: { userId } }); 
    return todos;
}

const create = async function (todo) {
    let newTodo = await Todo.create(todo); 
    return newTodo;
}

const changeStatus = async function (id) {
    let todo = await Todo.findOne({ where: { id } }); 
    let updatedTodo = await todo.update({
        completed: !todo.completed
    }); 
    return updatedTodo;
}

const deleteById = async function (id) {
    let status = await Todo.destroy({ where: { id } }); 
    return status;
}

module.exports = {
    getAllById,
    create,
    changeStatus,
    deleteById
};