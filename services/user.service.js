const User = require('../dataBase/User');

module.exports = {
    findAllUsers: () => User.find(),

    // findByName: (userName) => {
    //     const foundUser = User.find({ name: userName }, (err, result) => {
    //         if (err) {
    //             console.log(err, 'aboba');
    //         }
    //         console.log(result);
    //     });
    //
    //     return foundUser;
    // },

    findById: (userId) => User.findById(userId),

    createUser: (user) => User.create(user),

    deleteUser: (userId) => User.findByIdAndDelete(userId)

    // deleteUser: (userId)
};
