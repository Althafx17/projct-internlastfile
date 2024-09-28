import React from 'react'
import { Button, TextField } from '@mui/material'



const Login = () => {
  return (
      <div>
          <h1>login page </h1>
          
             
              <label htmlFor="text">username </label>
              <input type="text" name='username' id='u' />
              <br /><br /><br />
              <label htmlFor="password">password   </label>
              <input type="password" name='password' id='p' />
              
              <label htmlFor="button" name='submit'></label>
              <br /><br />
              
              <Button variant='outlined' >submit</Button>
              
         

      </div>
  )
}

export default Login