import express from 'express'

const app = express();
const port = 4000 ;

app.get('/' , (req , res) => {
    res.send('Hello World') 
})

app.get('/home' , (req, res) => {
    res.send('Home Page')
})

app.get('/end' , (req, res) => {
    res.send('End of the Website')
}) 

app.listen(port , ()=> {
    console.log(`Server is listening on the port http://localhost:${port}`);
})

