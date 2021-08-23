const users = require('../db/users.json');

module.exports = {
    getRegistration: (req, res) => {
        res.json('registration ok');
    },
    getLogin: (req, res) => {
        res.json('login ok');
    },

    logIn: (req, res) => {
        const { email, password } = req.body;
        const indexOfUser = users.findIndex((user) => user.email === email && user.password === password);

        if (indexOfUser === -1) {
            res.redirect('/registration');
            return;
        }

        res.redirect(`/users/${indexOfUser}`);
    }
};
