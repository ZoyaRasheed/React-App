import React from 'react'
const buttonStyle = {
  margin: '5px',
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '5px',
};

function Button({setcount}) {
    const countIncrement= ()=>{
        setcount((count)=> count+1 )
    }
    const countDecrement=()=>{
      setcount((count)=>count-1)
    }
    const reset =()=>{
      setcount(0)
    }
  return (
    <div>
      <button style={buttonStyle} onClick={countIncrement}>Increment</button>
      <button  style={buttonStyle} onClick={countDecrement}>Decrement</button>
      <button style={buttonStyle} onClick={reset}>Reset</button>
    </div>
  )
}

export default Button
