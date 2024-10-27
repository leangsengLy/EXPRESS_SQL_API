const express = require('express');
const sql  = require('mssql');
const app = express();
app.use(express.json());
var config = {
    user: "ly_zee", // Database username
    password: "Work@123", // Database password
    server: "127.0.0.1", // Server IP address
    database: "SYS_LYZEE", // Database name
    port: 1433,
    options: {
        encrypt: false ,// Disable encryption
        trustServerCertificate: true 
    }
}
// Connect to SQL Server
sql.connect(config, err => {
    if (!err) {
        app.listen(3000,()=>{
            console.log("✅ Connection Successful! 💕💕");
        })
    }
});

app.get('/get/:id',(req,res)=>{
    sql.query(`SELECT * FROM USERS WHERE ID IN(${req.params.id})`,(error,result)=>{
        if(!error){
            return res.send(...result.recordsets)
        }
    })
})
app.post('/create',(req,res)=>{
    const {Name,Email,PASSWORD} = req.body;
    console.log(req.body)
    sql.query(`INSERT INTO USERS VALUES ('${Name}','${Email}','${PASSWORD}',null)`,(err,result)=>{
        console.log(err)
        if(!err){
            return res.send("Create User Successfuly!")
        }
    })
})
app.get('/delete/:id',(req,res)=>{
    sql.query(`DELETE FROM USERS WHERE ID IN(${req.params.id})`,(err,result)=>{
        if(!err){
            return res.send('Delete successfuly!')
        }
    })
})
app.get('/getlist',(req,res)=>{
    sql.query('SELECT * FROM USERS',(err,result)=>{
        if(!err){
            return res.send(...result.recordsets)
        }
    })
})


