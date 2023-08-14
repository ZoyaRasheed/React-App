import React from 'react'

function Button({setcount}) {
    const countIncrement= ()=>{
        setcount((count)=> count+1 )
    }
  return (
    <div>
      <button onClick={countIncrement}>Click Me</button>
    </div>
  )
}

export default Button
