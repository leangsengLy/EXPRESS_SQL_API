import express from 'express'
const userInfo = express.Router();
import ConnectDb from '../connectDB.js'
userInfo.get('/list/:id',(req,res)=>{
    ConnectDb.query(`SELECT * FROM USERS WHERE ID IN(${req.params.id})`,(error,result)=>{
        if(!error){
            return res.send(...result.recordsets)
        }
    })
})
userInfo.post('/create',(req,res)=>{
    const {Name,Email,PASSWORD} = req.body;
    ConnectDb.query(`INSERT INTO USERS VALUES ('${Name}','${Email}','${PASSWORD}',null)`,(err,result)=>{
        console.log(err)
        if(!err){
            return res.send("Create User Successfuly!")
        }
    })
})

userInfo.get('/delete/:id',(req,res)=>{
    console.log("Run")
    ConnectDb.query(`DELETE FROM USERS WHERE ID IN(${req.params.id})`,(err,result)=>{
        if(!err){
            return res.send('Delete successfuly!')
        }
    })
})

userInfo.get('/list',(req,res)=>{
    ConnectDb.query('SELECT * FROM USERS',(err,result)=>{
        if(!err){
            return res.send(...result.recordsets)
        }
    })
})
export default userInfo;