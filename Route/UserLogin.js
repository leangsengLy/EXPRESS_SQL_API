import express from 'express';
const UserLogin = express.Router();
UserLogin.get('/create',(req,res)=>{
    return res.send("Ok Bro it is working now!") 
})

export default UserLogin;