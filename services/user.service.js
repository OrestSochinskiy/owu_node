const fs = require('fs/promises');
const path = require('path');

const usersPath = path.join(process.cwd(), 'db', 'users.json');

module.exports = {
    findAllUsers: async () => {
        const users = await fs.readFile(usersPath);
        return JSON.parse(users.toString());
    },

    createUser: async (usersArr) => {
        await fs.writeFile(usersPath, JSON.stringify(usersArr), (err) => {
            if (err) {
                console.log(err);
            }
        });
    }
};
