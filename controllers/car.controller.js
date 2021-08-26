// const carService = require('../services/car.service');
const { carService } = require('../services');

const {
    findAllCars,
    createCar,
    deleteCar
} = carService;

module.exports = {
    getAllCars: async (req, res, next) => {
        try {
            const allCars = await findAllCars();

            res.json(allCars);
        } catch (e) {
            next(e);
        }
    },

    getCarById: (req, res, next) => {
        try {
            res.json(req.car);
        } catch (e) {
            next(e);
        }
    },

    createCar: async (req, res, next) => {
        try {
            const createdCar = await createCar(req.body);

            res.json(createdCar);
        } catch (e) {
            next(e);
        }
    },

    deleteCar: async (req, res, next) => {
        try {
            const { car } = req;

            await deleteCar(car._id);

            res.json('deleted');
        } catch (e) {
            next(e);
        }
    }
};
