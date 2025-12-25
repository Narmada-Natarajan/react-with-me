import { useState } from 'react'
import React from 'react'

function App(){
  const [counter,setCounter]=useState(0)
  
  const addVal=()=>{
    if(counter<20){
      setCounter(counter+1) 
    }
    else{
      setCounter(0)
    }
     
  }

  const remVal=()=>{
    if(counter>0){
      setCounter(counter-1) 
    }
    
  }

  return (
    <div>
      <h2>Count Value: {counter}</h2>
      <button onClick={addVal}>Add Value:{counter}</button>
      <button onClick={remVal}>Remove Value:{counter}</button>

    </div>
  )
}

export default App
