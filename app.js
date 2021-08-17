const fs = require('fs');
const path = require('path');

/*<--------------------------------------------------First task----------------------------------------------------------->*/
// const taskPath = path.join(__dirname, 'taskDir');
// const femaleGroup = path.join(taskPath, '1800');
// const maleGroup = path.join(taskPath, '2000');
//
// // console.log(femaleGroup, 'female group');
// // console.log(maleGroup, 'male group');
//
//
// fs.readdir(femaleGroup, (err, files) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//
//
//     files.forEach(file => {
//         const filePath = path.join(femaleGroup, file);
//         fs.readFile(filePath, (err1, data) => {
//             if (err1) {
//                 console.log(err1);
//                 return;
//             }
//
//             const user = JSON.parse(data.toString());
//             // console.log(user.gender);
//
//             if (user.gender === 'male') {
//                 const oldPath = path.join(femaleGroup, file);
//                 const newPath = path.join(maleGroup, file);
//
//                 console.log(oldPath, file, '-- old path');
//                 console.log(newPath, file, '-- new path');
//
//                 fs.rename(oldPath, newPath, err2 => {
//                     if (err2) {
//                         console.log(err2);
//                     }
//                 });
//             }
//         })
//     });
//
// });
//
//
// fs.readdir(maleGroup,(err, files) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//
//     files.forEach(file => {
//         const filePath = path.join(maleGroup, file);
//         fs.readFile(filePath, (err1, data) => {
//             if (err1) {
//                 console.log(err1);
//                 return;
//             }
//
//             const user = JSON.parse(data.toString());
//
//             if (user.gender === 'female') {
//                 const oldPath = path.join(maleGroup, file);
//                 const newPath = path.join(femaleGroup, file);
//
//                 fs.rename(oldPath, newPath, err2 => {
//                     if (err2) {
//                         console.log(err2);
//                     }
//                 })
//             }
//         })
//     })
// })

/*<------------------------------------------------------------------------------------------------------------------------>*/

/*<--------------------------------------------------Second task----------------------------------------------------------->*/

const movedFiles = path.join(__dirname, 'SecondTask', 'movedFiles');
const secondTask = path.join(__dirname, 'SecondTask');
fs.mkdir(movedFiles, {recursive: true}, err => {
    if (err) console.log(err);
});

const forEdit = path.join(secondTask, 'forEdit');
fs.readdir(forEdit,(err, files) => {
    if (err) {
        console.log(err);
        return;
    }

    files.forEach(file => {
        const pathForFile = path.join(forEdit, file);
        // console.log(pathForFile);

        fs.stat(pathForFile, (err1, stats) => {
            if (err1) {
                console.log(err1);
                return;
            }

            console.log(stats.isDirectory(), '--', file);
        })
    })
})






