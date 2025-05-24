import { useState , useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  // getting the data from the API
  useEffect(() => {
    axios.get('./api/jokes')
    .then((res)=>{
      setJokes(res.data);
    })
    .catch((error)=>{
      setJokes(error)
    })  
  }, [])
  


   return (
    <>
    {
      jokes.map((funny)=>(
        <div key={funny.id}>
          {funny.joke}
        </div>
      ))
    }
    </>
  )
}

export default App
