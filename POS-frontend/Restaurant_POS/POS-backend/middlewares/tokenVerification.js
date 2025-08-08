const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const User = require("../models/userModel");

const isVerifiedUser = async (req, res, next) => {
    try{
        const {accessToken} = req.cookies;
        if(!accessToken){
            const err = createHttpError(401, 'Access token is required');
            return next(err);
        }

        const decodeToken = jwt.verify(accessToken, config.accessTokenSecret);

        const user = await User.findById(decodeToken._id);
        if(!user){
            const err = createHttpError(404, 'User not found');
            return next(err);
        }

        req.user = user;
        next();

    } catch (err) {

        const error = createHttpError(401, 'Invalid access token');
        next(error);  

    }
}

module.exports = {isVerifiedUser};