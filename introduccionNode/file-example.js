// import fs from 'fs'; Se debe renombrar con la extension mjs o se debe setear "type": "module" en package.json
const fs = require('fs');

const writeFileCallback = (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}

const readFileCallback = (err, data) => {
  if (err) throw err;
  console.log(data.toString());
}

fs.writeFile( 'logs.txt', 'Hello Node.js', writeFileCallback );
fs.readFile( 'logs.txt', readFileCallback );