import React from 'react'

const Student = () => {
    let result = [
        { 
            id: 1,
            subject: "Maths",
            score: 83
            
        },
    { 
        id: 2, 
        subject: "Chemistry", 
        score: 92 
    },
    { 
        id: 3, 
        subject: "Physics", 
        score: 100
     }
    ]
  return (
    <>
      <div className='w-80 h-64 bg-white rounded-2xl shadow-md flex justify-center items-center flex-col'>
        <h1 className='text-center font-bold mt-2 text-xl'>Your Result</h1>
        <div>
            {result.map((sub)=>{
                return <ul key={sub.id}>
                    <li className='text-center'>{sub.subject}: {sub.score}</li>
                </ul>
            })}
        </div>
      </div>
    </>
  )
}

export default Student
