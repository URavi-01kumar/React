import { useState } from 'react'

import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [data, setdata]= useState("ram")


  useEffect(()=>{
    console.log("Hii this is click")
  }, [count])
 
  function ClickHandler(){
    setCount(count+1)
  }

 function dataHandler(){
  setdata("sita")
 }


  return (
   <>
   <button onClick={ClickHandler}>click me  {count}</button>
   <br />

   <button onClick={dataHandler}>use me  {data}</button>
   </>
  )
}

export default App
