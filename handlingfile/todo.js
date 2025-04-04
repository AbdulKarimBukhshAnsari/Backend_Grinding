const fs = require('fs');
const filePath = './todo.json';

fs.writeFileSync(filePath, JSON.stringify('helo') );