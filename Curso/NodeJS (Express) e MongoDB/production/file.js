const fs = require('fs');


// fs.writeFile('node.txt', 'Olá, NodeJS!\n', error => {
//   console.log(error)
// });

// fs.appendFile('node.txt', 'Olá, NodeJS!\n', error => {
//   console.log(error)
// });

// fs.rename('node.txt', 'renode.txt', error => console.log(error));

fs.unlink("renode.txt", error => console.log(error));
