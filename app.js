const express = require('express');
const mongoose = require('mongoose');

const { PORT } = require('./configs/variables');

const app = express();

mongoose.connect('mongodb://localhost:27017/node-hw');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { userRouter, authRouter } = require('./routes');

app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('*', _notFoundError);
app.use(_errorHandler);

app.listen(PORT, () => {
    console.log(`App listen ${PORT}`);
});

function _notFoundError(err, req, res, next) {
    next({
        status: err.status || 404,
        message: err.message || 'Not found'
    });
}

// eslint-disable-next-line no-unused-vars
function _errorHandler(err, req, res, next) {
    res
        .status(err.status || 500)
        .json({
            message: err.message
        });
}
