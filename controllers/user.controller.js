const userService = require('../services/user.service');
// const ErrorHandler = require('../errors/ErrorHandler');
// const User = require('../dataBase/User');

const {
    findAllUsers,
    createUser,
    findById,
    deleteUser
} = userService;

module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            const allUsers = await findAllUsers();

            res.json(allUsers);
        } catch (e) {
            next(e);
        }
    },

    getUserById: async (req, res, next) => {
        try {
            const currentUser = await findById(req.query);
            res.json(currentUser);
        } catch (e) {
            next(e);
        }
    },

    // getUserByName: (req, res, next) => {
    //     try {
    //         const { user_name } = req.params;
    //         // const currenUser = await findByName(userName);
    //         // res.json(currenUser);
    //     } catch (e) {
    //         next(e);
    //     }
    // },

    createUser: async (req, res, next) => {
        try {
            const createdUser = await createUser(req.body);

            res.json(createdUser);
        } catch (e) {
            next(e);
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const { user_id } = req.params;

            await deleteUser(user_id);

            res.json('deleted');
        } catch (e) {
            next(e);
        }
    }
};
