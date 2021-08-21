const db = require('../db/users');
const userService = require('../services/user.service');

const { findAllUsers } = userService;

module.exports = {
    getAllUsers: (req, res) => {
        const users = findAllUsers();

        res.json(users);
    },

    getSingleUser: (req, res) => {
        const { user_id } = req.params;
        const user = db[user_id];

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
