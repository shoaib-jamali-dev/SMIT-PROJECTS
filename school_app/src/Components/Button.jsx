import React from 'react'

const Button = ({name,handler}) => {
  return (
    <div>
        <button className=' w-20 h-10 rounded-xl bg-[#655f5c] text-white cursor-pointer active:scale-[0.95]'onClick={handler}>{name}</button>
    </div>
  )
}

export default Button
