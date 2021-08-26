const Car = require('../dataBase/Car');

module.exports = {
    findAllCars: (filter) => Car.find(filter),

    createCar: (car) => Car.create(car),

    updateCar: (carId, dataToUpdate) => Car.findByIdAndUpdate(carId, dataToUpdate),

    deleteCar: (carId) => Car.findByIdAndDelete(carId)
};
