const userService = require('../services/user.service');
const users = require('../db/users');

const {
    findAllUsers,
    findSingleUser,
    createUser
} = userService;

module.exports = {
    getAllUsers: (req, res) => {
        const allUsers = findAllUsers();

        res.json(allUsers);
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
        const { email } = req.body;
        const isFind = users.find((user) => user.email === email);

        if (!isFind) {
            users.push(req.body);

            createUser(users);
            return;
        }

        res.status(401).send('This email is already registered');
    }
};
