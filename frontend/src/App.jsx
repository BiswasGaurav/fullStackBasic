import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes , setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
    .then((res) => {
      setJokes(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  })

  return (
    <>
      <h1>Jokes of the day</h1>
      <h2>{jokes.length}</h2>
      {
        jokes.map((joke , idx) => (
          <div id = {joke.id}>
            <h3>{joke.content}</h3>
            <p>{joke.question}</p>
            <p>{joke.answer}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
