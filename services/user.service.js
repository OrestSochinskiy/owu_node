const fs = require('fs');
const path = require('path');

const users = require('../db/users');

const usersPath = path.join(__dirname, 'db', 'users');

module.exports = {
    findAllUsers: () => users,

    findSingleUser: (userId) => users[userId],

    createUser: (usersArr) => {
        fs.writeFile(usersPath, `module.exports = ${JSON.stringify(usersArr)}`, (err) => {
            if (err) {
                console.log(err);
            }
        });
    }
};
