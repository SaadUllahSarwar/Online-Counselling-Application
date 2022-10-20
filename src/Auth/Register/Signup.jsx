import React from 'react'
import Box from '@mui/material/Box';
import {TextField,Button} from '@mui/material';
import './signup.scss'

const signup = () => {
  return (
    <div>
        <h1 class="cls-1">Register</h1>
        <Box>
        <div>
        <TextField
          
          id="first-name"
          label="First Name"
        />
        <TextField
          id="last-name"
          label="Last Name"
        />
         <TextField
          id="email"
          label="Email"
          type="email"
        />
      </div>
      <div>
      <TextField
          
          id="password"
          label="Password"
          type="password"
          autoComplete = 'new-password'
        />
        <TextField
          
          id="password"
          label="Confirm Password"
          type="password"
          autoComplete = 'new-password'
          
        />
      </div>
      <Button variant="outlined">Register</Button>
        </Box>
    </div>
  )
}

export default signup