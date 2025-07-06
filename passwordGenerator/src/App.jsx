import { useState, useCallback,useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(true);
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "~`!@#$%^&*()_-+={}[]|<>?,."

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPassword=useCallback(()=>{
    passwordRef.current?.select()
    // to select upon particular length passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  },[password])
  
  useEffect(()=>{passwordGenerator()},[length, numberAllowed, charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md h-full py-3 mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center '>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden my-3'>                  
          <input type="text" value={password} className='outline-none rounded w-full py-1 px-3 mx-2' placeholder='password' readOnly ref={passwordRef} />
          <button onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2 '>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label >LENGTH: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{
              setnumberAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor="numberInput">NUMBERS</label>
          </div>
          <div className='flex items-center gap-x-1'>
             <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            id='charInput'
            onChange={()=>{
              setcharAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor="charInput">characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
