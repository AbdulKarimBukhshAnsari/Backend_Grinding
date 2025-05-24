import express from 'express'
import 'dotenv/config';

const port = process.env.PORT ; 

const app = express();

app.get('/api/jokes' , (req , res) => {
    res.json([
        {
            id : 1 ,
            joke : 'I am very lucky I pass my exams without even study'
        },
        {
            id : 2 ,
            joke : 'We are just friends nothing else'
        },
        {
            id : 3 ,
            joke : 'I am managing so many things at the same time , you can manage as well'
        },
        {
            id : 4 ,
            joke : 'I am doing my best'
        },
        {
            id : 5 , 
            joke : 'Hey I was thinking that you are the best person whomever I have met'
        }
    ])
})

app.listen( port , () => {
    console.log(`Server is listening on http://localhost:${port}`)
} )
