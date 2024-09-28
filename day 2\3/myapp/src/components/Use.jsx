import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

function Task1() {
    var [fname, satement] = useState('')
    const j = () => {
        satement("Java")
    }
    const p = () => {
        satement("Python")
    }
    const c = () => {
        satement("C")

    }

    useEffect(() => {
        p()
    }, [])

    return (
        <div>
            <br /><br />
            <Typography variant='h6'>Welcome to {fname}</Typography><br />
            <Button variant="outlined" onClick={j}>Java</Button>
            <Button variant="outlined" onClick={p}>Python</Button>
            <Button variant="outlined" onClick={c}>C  </Button>
        </div>
    )
}

export default Task1