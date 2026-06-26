import React, { useState } from 'react'

const App = () => {
  const [count,setCount] = useState(0)

  const incrementHandler = () =>{
    setCount(count+1)
  }
  const decrementHandler = () =>{
    setCount(count-1)
  }

  return (
    <div className='flex flex-col gap-10'>
      <h1 className='text-6xl font-bold'>Count: {count}</h1>

      <div className='flex flex-wrap gap-24 pt-20'>
        <button onClick={incrementHandler} className='text-white w-10 h-10 rounded-[100vw] border-2 border-white cursor-pointer hover:bg-white hover:text-black active:scale-[0.95]'>+</button>
        <button onClick={decrementHandler} className='text-white w-10 h-10 rounded-[100vw] border-2 border-white cursor-pointer hover:bg-white hover:text-black active:scale-[0.95]'>-</button>
      </div>
    </div>
    
  )
}

export default App
