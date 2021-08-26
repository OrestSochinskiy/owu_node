const Car = require('../dataBase/Car');
const ErrorHandler = require('../errors/ErrorHandler');
const { NOT_FOUND, BAD_REQUEST } = require('../configs/statusCodes.enum');

module.exports = {
    isCarExist: async (req, res, next) => {
        try {
            const { car_id } = req.params;
            const car = await Car.findById(car_id);

            if (!car) {
                throw new ErrorHandler(NOT_FOUND, 'Car not found');
            }

            req.car = car;
            next();
        } catch (e) {
            next(e);
        }
    },

    isCarValid: (req, res, next) => {
        try {
            const { model, year, price } = req.body;

            if (!model || !year || !price) {
                throw new ErrorHandler(BAD_REQUEST, 'Fields are empty');
            }

            if (price < 0) {
                throw new ErrorHandler(BAD_REQUEST, 'Incorrect price');
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
