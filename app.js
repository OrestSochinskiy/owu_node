const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');
const fs = require('fs');

const users = require('./db/users');

const app = express();


const staticPath = path.join(__dirname, 'static');
const usersPath = path.join(__dirname, 'db', 'users.js');


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(staticPath));
app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({defaultLayout: false}));
app.set('views', staticPath);


app.get('/', (req, res) => {
    res.status(200).end('welcome');
});


/*-----------------------------------------LOG--------------------------------------------------------------------*/
app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    fs.readFile(usersPath, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        const {email, password} = req.body;

        for (const user of users) {
            if (user.email === email && user.password === password) {
                res.redirect('/users');
                return;
            }
        }


        res.redirect('/registration');

    });
});
/*----------------------------------------------------------------------------------------------------------------*/

/*-----------------------------------------REG--------------------------------------------------------------------*/
app.get('/registration', (req, res) => {
    res.render('registration');
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


    res.json(currentUser);
});


app.listen(5000, () => {
    console.log('App listen 5000');
});
/*----------------------------------------------------------------------------------------------------------------*/


