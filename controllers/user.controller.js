const { userService } = require('../services');

const {
    findAllUsers,
    createUser,
    updateUser,
    deleteUser
} = userService;

const { UPDATED, DELETED } = require('../messages/messages');

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

    updateUser: async (req, res, next) => {
        try {
            const { userId } = req.params;

            await updateUser(userId, req.body);

            res.json(UPDATED);
        } catch (e) {
            next(e);
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const { user } = req;

            await deleteUser(user._id);

            res.json(DELETED);
        } catch (e) {
            next(e);
        }
    }
};
