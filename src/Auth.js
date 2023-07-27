import React, { useState } from 'react'
import {Box,Button, TextField, Typography } from '@mui/material';



const Auth = () => {
   const[isSignup,setIssignup]=useState(false);
   const[input,setInput]=useState({
    name :"",
    email:"",
    password:"",
   });

   const handleChange= (e)=>{
    setInput((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
    }))
   }
   const handleSubmit=(e)=>{
    console.log(input)
   };
   


  return (
    <>

    <div>

      <form className="container" style={{   width: "400px",
      margin:"auto",
      height:" 300%",
      borderRadius: "15px",
      backgroundImage:  "linear-gradient(45deg,rgba(255, 0, 0, 0.226),rgba(0, 0, 255, 0.438))",
      transition: ".7s",
      backgroundSize: "300%",
     
  }}
       onSubmit={handleSubmit}>
      <Box display="flex" flexDirection={"column"}
  
            maxWidth={400}
            alignItems={"center"} 
            color={"blue"}
            justifyContent={"center"}
            margin={"auto"}
            marginTop={10}
            padding={3}
            borderRadius={5}
            boxShadow={'5px 5px 10px #ccc'}
            sx={{":hover":{
                boxShadow:'10px 20px 30px #ccc',
                
            }}}
            >
        <Typography variant="h2" padding={3} textAlign={"center"}>{isSignup ?"Signup" : "Login"}</Typography>
            
            {isSignup &&( <TextField

                onChange={handleChange}
                name='name'value={input.name} margin='normal' type={'text' }variant="outlined" placeholder='Name'/>)}
            <TextField
                 onChange={handleChange}
                 name='email' value={input.email} margin='normal' type={'email'} variant="outlined" placeholder='Email'/>
            <TextField
                onChange={handleChange} 
                name='password' value={input.password} margin='normal' type={"password"} variant="outlined" placeholder='Password'/>
            
            <Button type='submit' sx={{marginTop:3 ,borderRadius:3}} variant='contained' color='warning'>{isSignup ? "Signup" :"Login"}</Button>

            <Button
            
             onClick={()=>setIssignup(!isSignup)} sx={{marginTop:3 ,borderRadius:3}} >
            Change to {isSignup ? "Login":"Signup"}
            </Button>
      </Box>

      </form>
    </div>
    </>
  )
}

export default Auth

