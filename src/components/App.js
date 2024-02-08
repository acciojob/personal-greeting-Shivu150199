import React from 'react'
import './../styles/App.css'
import {useState} from 'react'

const App = () => {
const [text,setText]=useState('')
const handleText=(e)=>{
setText(e.target.value)
}

  return <div>
    <label >Enter your name</label>
    <input type="text" onChange={handleText} />
    <p>{text}</p>
  </div>
}

export default App
