// config.js
const { config } = require('dotenv');
config()
module.exports = {
    APP_PORT: process.env.APP_PORT || 3000,
    JWT_KEY: process.env.JWT_KEY || '0cf24384ad7d99d33d53a64dde5978438fca21e3',
    NODE_ENV: process.env.NODE_ENV || 'local',
};