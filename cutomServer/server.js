const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000 ; // at the which the server will be serving the file 

const server = http.createServer((req , res) =>{
    // will join the path of the current directory with the req url 
    const filePath = path.join(__dirname , req.url === '/' ? './index.html' : req.url )
    // will find the extension name of the file for which you are requesting 
    const extensionName = String(path.extname(filePath)).toLowerCase();

    const mimeType = {
        '.html' : 'text/html',
        '.css'  : 'text/css' ,
        '.jpg' : 'image/jpg',
        '.png'  :  'image/javascript'
    }

    const contentType = mimeType[extensionName] || 'application/octet-stream' ;

    fs.readFile(filePath, (error , content) =>{
        if(error) {
            if(error.code === 'ENOENT'){
            res.writeHead( 404 , {'content-type' : 'text/html'})
            res.end('404 Error no page found');
            }
        }
        else{
            res.writeHead( 200 , {'content-type' : contentType})
            res.end(content);
        }

    })

});


server.listen(port , () => {
    console.log(`Server is listening on ${port}`)
} )






