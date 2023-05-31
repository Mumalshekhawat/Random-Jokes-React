import React, { useState } from 'react'
import axios from 'axios'

function RandomJokes() {
  const [jokes, setJokes] = useState({})

  const getJokes = () => {
    let url = 'https://api.chucknorris.io/jokes/random'
    axios.get(url)
      .then(res => {
        console.log(res.data)
        setJokes(res.data)
      })

  }

  return (
    <div>
      <div>
        <button className='btn' onClick={() => getJokes()}>Get Random Jokes</button>
      </div>
      <div>
        <h1 style={{ color: 'white' }}>{jokes.value}</h1>
      </div>
    </div>
  )
}

export default RandomJokes