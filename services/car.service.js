const Car = require('../dataBase/Car');

module.exports = {
    findAllCars: (filter) => Car.find(filter),

    createCar: (car) => Car.create(car),

    deleteCar: (carId) => Car.findByIdAndDelete(carId)
};
