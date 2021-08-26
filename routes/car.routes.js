const router = require('express').Router();

const { carController } = require('../controllers');
const { isCarExist, isCarValid } = require('../middlewares/car.middleware');

router.get('/', carController.getAllCars);
router.post('/', isCarValid, carController.createCar);
router.get('/:car_id', isCarExist, carController.getCarById);
router.put('/:car_id', isCarExist, isCarValid, carController.updateCar);
router.delete('/:car_id', isCarExist, carController.deleteCar);

module.exports = router;
