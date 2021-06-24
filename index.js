require('dotenv').config();
require('./config/mongoose');
const app = require('./app');

process.on('uncaughtException', err => {
    console.log('Uncaught Exception!! Shutting down process..', err.name, err.message, err.stack);
    process.exit(1);
});

process.on('unhandledRejection', err=>{
    console.log('Unhandled Rejection!!',err.code, err.name, err.message, err.stack);
    process.exit(1);
});