let Sequelize = require('sequelize');
let sequelize = require('../helpers/sequelize');

const User = sequelize.define('users', {
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
    defaultScope: {
        attributes: { exclude: ['password'] },
    }
});

module.exports = User;