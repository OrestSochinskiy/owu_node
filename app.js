const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');

const users = require('./db/users');

const app = express();

const staticPath = path.join(__dirname, 'static');


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(staticPath));
app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({defaultLayout: false}));
app.set('views', staticPath);


app.get('/', (req, res) => {
    res.status(404).end('Not Found');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/users', (req, res) => {
    res.render('users', {users});
});

app.get('/users/:user_id', (req, res) => {
    const {user_id} = req.params;
    const currentUser = users[user_id];

    if (!currentUser) {
        res.status(404).end('User Not Found');
        return;
    }


    res.json(currentUser);
})


app.post('/auth', (req, res) => {
    console.log(req.body);
    res.json('OK');
})


app.listen(5000, () => {
    console.log('App listen 5000');
});


