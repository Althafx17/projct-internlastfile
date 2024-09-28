import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import { AppBar, Typography ,Button} from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar= () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <Typography variant='h6'>AVLOX</Typography>
                
                  <Link to='/l'>
                      <Button variant='contained'>login</Button>
                  </Link>
                  <br /><br />
                  <Link to='/s'>
                      <Button variant='contained'>signup</Button>
                  </Link>
                  <Link to='/sb'>
                      <Button variant='contained'>Statebasics</Button>
                  </Link>
                  <Link to='/co'>
                      <Button variant='contained'>Counter</Button>
                  </Link>
                  <Link to='/us'>
                      <Button variant='contained'>use</Button>
                  </Link>
                   <Link to='/api'>
                      <Button variant='contained'>Api</Button>
                  </Link>
                  <Link to='/poki'>
                      <Button variant='contained'>pokemon</Button>
                  </Link>
              </Toolbar>
          </AppBar>
        
    </div>
  )
}

export default Navbar
