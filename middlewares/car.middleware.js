const Car = require('../dataBase/Car');
const ErrorHandler = require('../errors/ErrorHandler');
const { NOT_FOUND, BAD_REQUEST } = require('../configs/statusCodes.enum');
const {
    CAR_NOT_FOUND,
    EMPTY_FIELDS,
    INCORRECT_PRICE
} = require('../messages/messages');

module.exports = {
    isCarExist: async (req, res, next) => {
        try {
            const { car_id } = req.params;

            const car = await Car.findById(car_id);

            if (!car) {
                throw new ErrorHandler(NOT_FOUND, CAR_NOT_FOUND);
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
                throw new ErrorHandler(BAD_REQUEST, EMPTY_FIELDS);
            }

            if (price < 0) {
                throw new ErrorHandler(BAD_REQUEST, INCORRECT_PRICE);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
