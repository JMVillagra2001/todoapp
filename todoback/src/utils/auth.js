const { makeWithError } = require('../utils/jsonUtils');

const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../../config');

const tokenSecret = config.JWT_KEY;

const generateJWT = (payload) => {
    return jwt.sign(JSON.stringify(payload), tokenSecret);
}

const verifyToken = async (req = null, res = null, next) => {
    const bearerHeader = req.get('Authorization');
    
    if (bearerHeader) {
        const token = bearerHeader.replace("Bearer ", "");
        
        jwt.verify(token, tokenSecret, async (err, decoded) => {
            if (err) {
                return res.status(403).json(makeWithError('Invalid token'));
            }

            const foundUser = await User.findOne({
                where: {
                    id: decoded.id,
                    username: decoded.username
                }
            });

            if (!foundUser) {
                return res.status(403).json(makeWithError('User not found'));
            }

            req.user = foundUser;
            next();
        });
    } else {
        return res.status(403).json(makeWithError('Invalid token'));
    }
}


module.exports = {
    generateJWT,
    verifyToken
}

