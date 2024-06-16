
  
import './App.css'
import { useState } from 'react'

function App() {
  let[counter, setcounter]=useState(10) 
  const addvalue=()=>{

    // console.log(counter, Math.random())
    // counter=counter+1;
    // // if(counter<=20){
    // setcounter(counter)
    // // }
    // // else{
    // //   setcounter("20")
     
    
    // // }
    if(counter<20){
      setcounter(counter+1)
    }
    if(counter==20){
      alert("maximum")
    }
  }
  const removevalue=()=>{

      //  counter=counter-1
      // //  if(counter>=0){
      //   setcounter(counter)
        
      // //  }
      // //  else{
      // //   setcounter("0")
      // //  }
      if(counter>0){
        setcounter(counter-1)
      }
      if(counter==0){
        alert("minimum value")
      }

  }

  
 

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addvalue}>Add value  {counter}</button>
      <br />
      <button onClick={removevalue}>remove value {counter}</button>
        
    </>
  )
}

export default App
 