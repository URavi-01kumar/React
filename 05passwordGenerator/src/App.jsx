import { useState ,useCallback ,useEffect, useRef} from 'react'



function App() {
  const [length, setlength]=useState(8)
  const [numberAllowed, setNumberAllowed]= useState(false)
  const [charAllowed, setCharAllowed]=useState(false)
  const [password, setpasswored]=useState("")

  //useRef Hook
  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str=
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    // now made conditon
    if(numberAllowed){
      str +="0123456789"
    }
    if(charAllowed) str +="!@#%^&*-_=+[]{}~`"
    

    for(let i=1; i<=length; i++){
      let char=Math.floor(Math.random() * str.length+1)

      pass += str.charAt(char)
      // jaise hi loop khatam hoga then value will come in pass(password)

      //now set the password
      setpasswored(pass)
    }


    
  },[length, numberAllowed, charAllowed,])
  // setpassword is also a dependecy it is rum many times 

  const copyPasswordToClipboard= useCallback(()=>{
    //here write window because we are working under core react , kyuki react compile hogi javascript ke under or jaha bhi ye run hoga jaha par windows object hoga 
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password())
  }, [password])

 
  useEffect(()=>{passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator])  //here dependency me kuch bhi change hua to rerender kar dunga


    
  return (
    
    <div className='w-full max-w-md mx-auto shadow-md  rounded-lg px-4 py-3 my-8  bg-gray-700 text-orange-500 '> 
   
    
    <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow  
         rounded-lg overflow-hidden mb-4 '>
          <input
           type="text" 
           value={password}
           className='outline-none w-full  py-1 px-3'
           placeholder='password'
           readOnly
           ref={passwordRef}
            />
            <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>



    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
         type="range" 

         min={6}
         max={100}
         value={length}
         className='cursor-pointer'

         onChange={(e)=>{setlength(e.target.value)}}

         />
         <label>length{length}</label>


      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={()=>{
          setNumberAllowed((prev)=>!prev);
        }}
        
      />
     <label htmlFor="numberInput">Number</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={charAllowed}
        id='charInput'
        onChange={()=>{
          setCharAllowed((prev)=>!prev);
        }}
        />
        <label htmlFor="chcharInputarInput">Characters</label>
      </div>


    </div>
    </div>

    
  
    
  )
}

export default App
