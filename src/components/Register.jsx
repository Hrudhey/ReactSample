import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

// eslint-disable-next-line react/prop-types
const Register = ({user1}) => {            // user1 is the  props, very similar to functional parameter passing

    const[form,setForm]=useState({
        // eslint-disable-next-line react/prop-types
        Myname: user1.Myname,
        email:user1.email,
        password: user1.password,
        conPass: user1.conPass,
        address: user1.address,
        number: user1.number
    })
    const capValue=()=>{
        console.log(form);
    }
     const [count,setCount]=useState(0);  
    
     const incrementCount=()=>{
        setCount(count+1)
     }

     const decrementCount=()=>{
       setCount(count-1)
     }
     const resetCount=()=>{
        setCount(0)
     } 

  return (
   <div class='main'>
    <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidate autoComplete="off" >
        <h2>REGISTRATION FORM</h2>
        <div className='field'>
      <div>
        <TextField required id="outlined-required" label="Name" value={form.Myname} onChange={(e)=>{
            setForm({...form,Myname:e.target.value})
        }}/>
        <TextField id="outlined-input" label="E-mail" value={form.email} onChange={(e)=>{
            setForm({...form,email:e.target.value})
        }}/>
    </div>

    <div>
    <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"
     value={form.password} onChange={(e)=>{
        setForm({...form,password:e.target.value})
     }}/>
    <TextField id="outlined-password-input" label="Confirm Password" type="password" autoComplete="current-password"
    value={form.conPass} onChange={(e)=>{
        setForm({...form,conPass:e.target.value})
    }}/>
     </div>

    <div>
        <TextField id="outlined-read-only-input" label="Address" value={form.address} onChange={(e)=>{
            setForm({...form,address:e.target.value})
        }}/>
        <TextField id="outlined-number" label="Number" type="number" value={form.number} onChange={(e)=>{
            setForm({...form,number:e.target.value})
        }}/>
    </div>
        
        
      </div>
      <Button variant="contained" onClick={capValue}>Register</Button>
      
    </Box><br />
    <Button variant="contained" onClick={incrementCount} style={{"backgroundColor":"green"}}>Increment</Button>&nbsp;
    <Button variant="contained" onClick={decrementCount} style={{"backgroundColor":"blue"}}>Decrement</Button>&nbsp;
    <Button variant="contained" onClick={resetCount} style={{"backgroundColor":"red"}}>Reset</Button>&nbsp;

        <small>Button pressed {count}times</small>

    </div>
   
  )
}

export default Register