const router = require('express').Router();

const { carController } = require('../controllers');
const { isCarExist } = require('../middlewares/car.middleware');

router.get('/', carController.getAllCars);
router.post('/', carController.createCar);
router.get('/:car_id', isCarExist, carController.getCarById);
router.delete('/:car_id', isCarExist, carController.deleteCar);

module.exports = router;
