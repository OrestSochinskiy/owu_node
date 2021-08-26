const { carService } = require('../services');

const {
    findAllCars,
    createCar,
    updateCar,
    deleteCar
} = carService;

const { UPDATED, DELETED } = require('../messages/messages');

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

    updateCar: async (req, res, next) => {
        try {
            const { carId } = req.params;

            await updateCar(carId, req.body);

            res.json(UPDATED);
        } catch (e) {
            next(e);
        }
    },

    deleteCar: async (req, res, next) => {
        try {
            const { car } = req;

            await deleteCar(car._id);

            res.json(DELETED);
        } catch (e) {
            next(e);
        }
    }
};
