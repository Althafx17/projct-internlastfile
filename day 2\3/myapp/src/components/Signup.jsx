import { TextField ,Button} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
      <div>
          <br /><br />
          <h2>SIGNUP PAGE</h2>
          <br /><br />
          <TextField id="outlinerd-basic" label="Name" variant="outlined" />
          <br /><br />
          <TextField id="outlinerd-basic" label="age" variant="outlined" />
          <br /><br />
          <TextField id="outlinerd-basic" label="phone" variant="outlined" />
          <br /><br />
          <Link to='/l'>
          <Button variant="containerd">submit</Button>
        </Link>


      </div>
      
  )
}

export default Signup