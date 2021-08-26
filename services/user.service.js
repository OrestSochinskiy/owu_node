const User = require('../dataBase/User');

module.exports = {
    findAllUsers: (filter) => User.find(filter),

    createUser: (user) => User.create(user),

    updateUser: (userId, dataToUpdate) => User.findByIdAndUpdate(userId, dataToUpdate),

    deleteUser: (userId) => User.findByIdAndDelete(userId)
};
