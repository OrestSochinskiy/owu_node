const userService = require('../services/user.service');

const {
    findAllUsers,
    createUser,
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

    getUserById: (req, res, next) => {
        try {
            res.json(req.user);
        } catch (e) {
            next(e);
        }
    },

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
            const { user } = req;

            await deleteUser(user._id);

            res.json('deleted');
        } catch (e) {
            next(e);
        }
    }
};
