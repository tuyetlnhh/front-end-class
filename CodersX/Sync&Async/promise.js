const fs = require('fs');

function readFilePromise(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

readFilePromise('song1.txt')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });
// const fs = require ('promise-fs');

// fs.readFile('song1.txt') 
//     .then(function(song1) {
//         console.log(song1);
//     })
//     .catch(function(error){
//         console.log(error);
//     });