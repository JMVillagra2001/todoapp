const User = require('../models/User');
const { generateJWT } = require('../utils/auth');
const md5 = require('md5')

const login = async function (username, pass) {
    let hashedPassword = md5(pass);
    let user = await getUser(username, hashedPassword)

    if (!user) {
        return null
    } else {

        const payload = {
            id: user.id,
            username: user.username
        };

        const token = generateJWT(payload);
        return token;
    }

}

const getUser = async function (username, password){
    return User.findOne({
        where: {
            username,
            password
        }
    });
}

const create = async function (user) {
    const userExists = await getUser(user.username, user.password)
    if(userExists){
        return false;
    }
    let newUser = await User.create(user);
    return (typeof newUser == 'object');
}
module.exports = {
    login,
    create
};