const Car = require('../dataBase/Car');

module.exports = {
    findAllCars: (filter) => Car.find(filter)
};
