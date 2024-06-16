import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     we learn about redux tookit it is used for State management  in react. it not 
     based on react only is based on javascript 
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
