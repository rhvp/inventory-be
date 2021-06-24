require('dotenv').config();
const express = require('express');
const errorHandler = require('./config/errorController');
const app = express();
const AppError = require('./config/appError');
const morgan = require('morgan');
const cors = require('cors');

const productRouter = require('./routes/product');
const categoryRouter = require('./routes/category');

app.use(cors());
app.use(morgan('short'));
// use bodyParser to process data in request body
app.use(express.json());


// initialize routes
app.use('/api/v1/products', productRouter);
app.use('/api/v1/categories', categoryRouter);

app.use((req, res, next)=>{
    let err = new AppError(`${req.ip} tried to reach a resource at ${req.originalUrl} that is not on this server.`, 404);
    next(err);
})
// error-handling middleware
app.use(errorHandler);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("now listening on port: " + port);
});