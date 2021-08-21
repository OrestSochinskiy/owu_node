const express = require('express');
const path = require('path');
const fs = require('fs');

const users = require('./db/users');
const { PORT } = require('./configs/variables');

const staticPath = path.join(__dirname, 'static');
const usersPath = path.join(__dirname, 'db', 'users.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(staticPath));

/* -----------------------------------------LOG--------------------------------------------------------------------*/
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const indexOfUser = users.findIndex((user) => user.email === email && user.password === password);

    if (indexOfUser === -1) {
        res.redirect('/registration');
        return;
    }

    res.redirect(`/users/${indexOfUser}`);
});
/*----------------------------------------------------------------------------------------------------------------*/

/* -----------------------------------------REG--------------------------------------------------------------------*/
app.post('/users', (req, res) => {
    const { email } = req.body;
    const isFind = users.find((user) => user.email === email);

    if (!isFind) {
        users.push(req.body);

        fs.writeFile(usersPath, `module.exports = ${JSON.stringify(users)}`, (err1) => {
            if (err1) {
                console.log(err1);
            }
        });

        res.redirect('/users');
        return;
    }

    res.redirect('/error');
});
/*----------------------------------------------------------------------------------------------------------------*/

/* -----------------------------------------USERS------------------------------------------------------------------*/
app.get('/users/:user_id', (req, res) => {
    const { user_id } = req.params;
    const currentUser = users[user_id];

    if (!currentUser) {
        res.status(404).end(`User with id "${user_id}" Not Found`);
    }
});
/*----------------------------------------------------------------------------------------------------------------*/
app.listen(PORT, () => {
    console.log('App listen 5000');
});
