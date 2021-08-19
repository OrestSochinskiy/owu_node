const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');
const fs = require('fs');

const users = require('./db/users');

const staticPath = path.join(__dirname, 'static');
const usersPath = path.join(__dirname, 'db', 'users.js');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(staticPath));
app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({defaultLayout: false}));
app.set('views', staticPath);


app.get('/', (req, res) => {
    res.status(200).render('welcome');
});


/*-----------------------------------------LOG--------------------------------------------------------------------*/
app.get('/login', (req, res) => {
    res.render('login', {users});
});

app.post('/login', (req, res) => {


    const {email, password} = req.body;

    const indexOfUser = users.findIndex(user => user.email === email && user.password === password);
    if (indexOfUser === -1) {
        res.redirect('/registration');
        return;
    }

    res.redirect(`/users/${indexOfUser}`);


});
/*----------------------------------------------------------------------------------------------------------------*/

/*-----------------------------------------REG--------------------------------------------------------------------*/
app.get('/registration', (req, res) => {
    res.render('registration');
});

app.post('/registration', (req, res) => {

    const {email} = req.body;

    const isFind = users.find(user => user.email === email);
    if (!isFind) {
        users.push(req.body);

        fs.writeFile(usersPath, `module.exports = ${JSON.stringify(users)}`, err1 => {
            if (err1) {
                console.log(err1);
            }
        });

        res.redirect('/users');
        return;
    }

    res.redirect('/error');

});


app.get('/error', (req, res) => {
    res.render('error');
})
/*----------------------------------------------------------------------------------------------------------------*/

/*-----------------------------------------USERS------------------------------------------------------------------*/
app.get('/users', (req, res) => {
    res.render('users', {users});
});

app.get('/users/:user_id', (req, res) => {
    const {user_id} = req.params;
    const currentUser = users[user_id];

    if (!currentUser) {
        res.status(404).end(`User with id "${user_id}" Not Found`);
        return;
    }


    res.render('singleUser', {currentUser});
});


/*----------------------------------------------------------------------------------------------------------------*/
app.listen(5000, () => {
    console.log('App listen 5000');
});


