const express = require('express')
const sequelize = require('./helpers/sequelize')
const indexRouter = require('./routes/index.route')
const cors = require('cors');

const config = require('../config')
 
var app = express();
app.use(cors());

app.sequelize = sequelize;

app.use(express.json({
    limit: '50mb'
}));

app.set('key', config.JWT_KEY)

app.use('/api', indexRouter)

// error handler
app.use(function (err, req, res, next) {
    console.log(`Error: ${JSON.stringify(err)}`);
    console.log(`Message: ${err.message}`);
    console.log(`Stack: ${err.stack}`);
    res.status(err.status || 500);
    next();
});

app.listen(config.APP_PORT, () => {
    console.log('Corriendo en entorno: ' + config.NODE_ENV);
    console.log('Corriendo | Puerto: ' + config.APP_PORT);
});

module.exports = app;