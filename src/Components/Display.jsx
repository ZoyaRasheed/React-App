import React, { useState } from 'react'
import Button from './Button'

function Display() {
    const [count, setcount] = useState(0)
  return (
    <div>
     <p>Count is {count}</p>
     <Button setcount={setcount}/> 
    </div>
  )
}

export default Display
