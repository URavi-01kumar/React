import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const newObj={
    name:"ravi",
    rollno:345
  };
  let newArray=[1,2,3,4,5];

  return (
    <>
    <h2 className="bg-green-500 p-4 text-black rounded-xl mb-4">Tailwind Test</h2>
    <Card userName="chaiOurcode" btntext="click me"  ></Card>

    <Card userName="ravi" btntext="visit me!"></Card>
    <Card userName="ram" btntext="see me!!"></Card>
   
</>
  )
}

export default App
