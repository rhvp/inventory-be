const AppError = require('../config/appError');
const Product = require('../models/product');


exports.create = async(req, res, next) => {
    try {
        let {category, name, availableStock, price} = req.body;
        // console.log(req.body);
        const data = await Product.create({category, name, availableStock, price});
        res.status(201).json({
            status: 'success',
            data
        })
    } catch (error) {
        return next(error);
    }
}

exports.get = async(req, res, next) => {
    try {
        const data = await Product.find().populate('category');
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
        const data = await Product.findById(id).populate('category');
        if(!data) return next(new AppError('resource not found', 400));
        res.status(200).json({
            status: 'success',
            data
        })
    } catch (error) {
        return next(error);
    }
}