const Category = require('../models/category');
const AppError = require('../config/appError');

exports.create = async(req, res, next) => {
    try {
        let {name} = req.body;
        if(!name) return next(new AppError('name is required', 400));
        const data = await Category.create({name});
        res.status(201).json({
            status: 'success',
            data
        })
    } catch (error) {
        return next(error);
    }
}

exports.getAll = async(req, res, next) => {
    try {
        const data = await Category.find({});
        res.status(200).json({
            status: 'success',
            data
        })
    } catch (error) {
        return next(error);
    }
}

exports.fetch = async(req, res, next) => {
    try {
        let id = req.params.id;
        if(!id) return next(new AppError('id is required', 400));
        const data = await Category.findById(id);
        if(!data) return next(new AppError('resource not found', 404));
        res.status(200).json({
            status: 'success',
            data
        })
    } catch (error) {
        return next(error);
    }
}