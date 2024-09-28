import { Card, CardMedia } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Pokemon = () => {
    var [user, setuser] = useState([])
    
    axios.get("https://dummyapi.online/api/pokemon")
        .then((Response) => {
            console.log(response.data)
            setuser(response.data)
        })
    return (
        <div>
            {user.map((val) => {
                return (
                    <Grid container spacing={2}>
                        <Grid item x5={5} >
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={val.image_url}
                                    title={val.Pokemon}/>
                            </Card>
                        </Grid>
                    </Grid>
                )
            })}
          
    </div>
  )
}

export default Pokemon