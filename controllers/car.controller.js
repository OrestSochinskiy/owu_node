const carService = require('../services/car.service');

const { findAllCars } = carService;

module.exports = {
    getAllCars: async (req, res, next) => {
        try {
            const allCars = await findAllCars();

            res.json(allCars);
        } catch (e) {
            next(e);
        }
    }
};
