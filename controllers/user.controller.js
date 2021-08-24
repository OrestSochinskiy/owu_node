const userService = require('../services/user.service');

const {
    findAllUsers,
    createUser
} = userService;

module.exports = {
    getAllUsers: (req, res) => {
        const allUsers = findAllUsers();

        res.json(allUsers);
    },

    getSingleUser: (req, res) => {
        const { user_id } = req.params;
        const users = findAllUsers();
        const currentUser = users[user_id];

        if (!currentUser) {
            res.status(404).json('User not found');
            return;
        }

        res.json(currentUser);
    },

    createUser: (req, res) => {
        const { email } = req.body;
        const users = findAllUsers();
        const isFind = users.find((user) => user.email === email);

        if (!isFind) {
            users.push(req.body);

            createUser(users);
            res.status(200).redirect('/users');
            return;
        }

        res.status(401).send('This email is already registered');
    }
};
