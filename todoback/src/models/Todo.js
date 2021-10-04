let Sequelize = require('sequelize');
const sequelize = require('../helpers/sequelize');

const Todo = sequelize.define('todos', {
    name: {
        type: Sequelize.STRING
    },
    completed: {
        type: Sequelize.BOOLEAN
    },
    userId: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false,
    defaultScope: {
        attributes: { exclude: ['userId'] },
    }
});

module.exports = Todo