const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const AppError = require('../config/appError');

exports.signup = async(req, res, next) => {
    try {
        let {email, password} = req.body;
        if(!email || !password) return next(new AppError('email and password required', 400));
        const user = await User.create({email, password});
        res.status(200)
    } catch (error) {
        return next(error);
    }
}