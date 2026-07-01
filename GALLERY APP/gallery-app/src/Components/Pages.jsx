import React from 'react'

const Pages = ({page , setPage}) => {
  const prevHandler = () => {
    if(page<=1){
      alert("you are on page 1, please use next button")
    } else {
      setPage((page) => page-1)
    }
  }

  const nextHandler = () => {
    setPage((page) => page+1)
    
  }

  const homeHandler = () => {
    setPage(1)
  }
  return (
    <div className='h-[20vh] pt-10 flex justify-center'>
       <div className='flex border-2 border-gray-400 rounded-4xl p-5 justify-between w-64 h-16 items-center'>
        <p className='p-3 rounded-4xl hover:bg-gray-500 hover:text-white duration-200 cursor-pointer' onClick={prevHandler}>Prev</p>
        <p className='p-3 rounded-4xl hover:bg-gray-500 hover:text-white duration-200 cursor-pointer' onClick={nextHandler}>Next</p>
        <p className='p-3 rounded-4xl hover:bg-gray-500 hover:text-white duration-200 cursor-pointer' onClick={homeHandler}>Home</p>
      </div>
    </div>
  )
}

export default Pages
