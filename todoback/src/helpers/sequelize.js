var Sequelize = require('sequelize');

const databaseName = 'database.sqlite3';

// Setup database
console.log(`Using database ${databaseName}`);

const sequelize = new Sequelize('database', '', '', {
    dialect: 'sqlite',
    storage: databaseName,
    logging: false,
    operatorsAliases: false,
    define: {
        underscored: true
    }
});

sequelize.authenticate().then(() => {
    console.log('Database connection successfully established.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;