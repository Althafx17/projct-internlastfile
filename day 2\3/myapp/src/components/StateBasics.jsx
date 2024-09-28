import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    
    var [fname,setframe]=useState("althaf")
    var[e,seta]=useState()
     const handleinput = (e) => {
       console.log(e.target.value)
            setframe(e.target.value)
        }
    const submitHandler = () => {
        seta(fname)
    }
        return (
            <div>
                <br /><br />
                <Typography variant='h4'>welcome{e}</Typography>
                <br /><br />
                <TextField variant='outlined' onChange={handleinput} />
                <br /><br />
                <Button variant="contained" onClick={submitHandler}>submit</Button>
          
            </div>
        )
    }


export default StateBasics