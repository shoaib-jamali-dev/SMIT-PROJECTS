import React from 'react'
import Student from './Student'

const Teacher = () => {

    let students = [
        {
            student: "Shoaib Jamali",
            passSubjects: 7 ,
            failSubjects: 0,
            grade: "A+"
        },
        {
            student: "Faizan",
            passSubjects: 7,
            failSubjects: 0,
            grade: "B+"
        },
        {
            student: "Ali",
            passSubjects: 5,
            failSubjects: 2,
            grade: "F"
        },
    ]
  return (
    <>
      <h1 className='text-white text-6xl font-bold text-center -translate-y-7.5'>Your Student Details</h1>
      <div className='flex flex-wrap gap-10'>
        {students.map(stu =>{
            return <div className='w-80 h-64 bg-white rounded-2xl shadow-md flex justify-center items-center flex-col'>
                <h1 className='text-center font-bold mt-2 text-xl'>{stu.student}</h1>
                <ul>
                    <li>passSubjects: {stu.passSubjects}</li>
                    <li>failSubjects: {stu.failSubjects}</li>
                    <li>grade: {stu.grade}</li>
                </ul>
            </div>
        })}
      </div>
    </>
  )
}

export default Teacher
