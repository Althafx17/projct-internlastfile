import { Button, ButtonGroup, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Counter = () => {
  var [count,setCount] = useState(0)
  const add = () => {
    console.log("Add btn clicked")
    setCount(count+1)
  }
  const sub = () => {
    console.log("sub btn clicked")
    setCount(count-1)
 
  }
  const plus = () => {
    console.log("Add btn clicked")
    setCount(count + 10)
  }
  useEffect(() => { 
    
  },[])
  
  return (
    <div>
      <br /><br />
      <Typography variant="h4">COUNTER{count}</Typography>
      <br /><br />
      
      <Button variant="contained" color='success' onClick={add}>+</Button>
      <Button variant="contained" color='error' onClick={sub}>-</Button>
      <Button variant="contained" color='success' onClick={plus}>+10</Button>

    </div>
  )
}


export default Counter