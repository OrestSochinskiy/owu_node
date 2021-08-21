const userService = require('../services/user.service');

const {
    findAllUsers,
    findSingleUser
} = userService;

module.exports = {
    getAllUsers: (req, res) => {
        const users = findAllUsers();

        res.json(users);
    },

    getSingleUser: (req, res) => {
        const { user_id } = req.params;
        const user = findSingleUser(user_id);

        if (!user) {
            res.status(404).json('User not found');
            return;
        }

        res.json(user);
    },

    createUser: (req, res) => {
        res.json('create user working');
    }
};
