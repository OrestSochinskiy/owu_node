const Car = require('../dataBase/Car');
const ErrorHandler = require('../errors/ErrorHandler');

module.exports = {
    isCarExist: async (req, res, next) => {
        try {
            const { car_id } = req.params;
            const car = await Car.findById(car_id);

            if (!car) {
                throw new ErrorHandler(404, 'Car not found');
            }

            req.car = car;
            next();
        } catch (e) {
            next(e);
        }
    }
};
