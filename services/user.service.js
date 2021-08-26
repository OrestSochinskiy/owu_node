const User = require('../dataBase/User');

module.exports = {
    findAllUsers: (filter) => User.find(filter),

    createUser: (user) => User.create(user),

    deleteUser: (userId) => User.findByIdAndDelete(userId)
};
