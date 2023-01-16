const jwt = require('jsonwebtoken');

const generateSign = (id, email) => {
    return jwt.sign({id,email}, process.env.JWT_KEY, {expiresIn: '15m'});
}

const verifySign = (token) => {
    return jwt.verify(token, process.env.JWT_KEY);
}

module.exports ={generateSign, verifySign};

//https://www.lastpass.com/es/features/password-generator