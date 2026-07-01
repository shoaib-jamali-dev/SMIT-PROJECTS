import React from 'react'

const NavBar = () => {
  return (
    <>
      <div className='flex justify-between items-center h-[14vh] mx-6'>
        <h1 className='text-5xl'>Gallery</h1>

        <ul className='flex gap-14 text-2xl'>
            <li className='p-3 rounded-4xl hover:bg-gray-500 hover:text-white duration-200 cursor-pointer'>Home</li>
            <li className='p-3 rounded-4xl hover:bg-gray-500 hover:text-white duration-200 cursor-pointer'>Images</li>
            <li className='p-3 rounded-4xl hover:bg-gray-500 hover:text-white duration-200 cursor-pointer'>About</li>
        </ul>

        <button className='bg-black text-white w-34 h-12 active:scale-[0.95] border-none rounded-xl text-xl cursor-pointer'>Upload</button>
      </div>
    </>
  )
}

export default NavBar
