import React, { useState } from 'react'
import Button from './Components/Button'
import Teacher from './Components/Teacher'
import Student from './Components/Student'

const App = () => {
  const [isTeacher,setIsTeacher] = useState(false)
  const [isStudent,setIsStudent] = useState(false)

  if(isTeacher){
   return <Teacher />
  } else if (isStudent){
   return <Student />
  }

  return (
    <>
      <div className='w-80 h-64 bg-white rounded-2xl shadow-md flex justify-evenly items-center flex-col'>
        <h1 className='text-center font-bold mt-2 text-xl'>Welcome To The Portal</h1>
        <div className='flex gap-5'>
         
          <Button name={"Teacher"} handler={()=> setIsTeacher(true)}/>
          <Button name={"Student"} handler={()=> setIsStudent(true)}/>
        </div>
      </div>
    </>
  )
}

export default App
