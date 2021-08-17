const fs = require('fs');
const path = require('path');


const taskPath = path.join(__dirname, 'taskDir');

fs.readdir(taskPath, (err, files) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(files);
});
