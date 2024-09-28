import { Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Api = () => {
    var [user, setUser] = useState([])

    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response.data)
            setUser(response.data)
        })
    return (
        <div>
            <br /><br />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Username </TableCell>
                            <TableCell>city</TableCell>
                        </TableRow>
                    </TableHead>




                 
                        {user.map((val)=>{
                     return(
                         <TableRow>
                            <TableCell>{val.name}</TableCell>
                            <TableCell>{val.username}</TableCell>
                            <TableCell>{val.address.city}</TableCell>
                        </TableRow>
                            )
                        })}
                    


                </Table>
            </TableContainer>
        </div>
    )
}

export default Api
