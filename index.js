import express from 'express'
const app = express();
import UserLogin from './Route/UserLogin.js';
import userInfo from './Route/Users.js';
app.use(express.json());
app.use('/user_login',UserLogin);
app.use('/user',userInfo);
app.get('/',(req,res)=>{
    return res.send("Run API ")
})
app.listen(4000,()=>{
    console.log("✅ Connection Successful! 💕💕");
});

//this code below using for connect Microsoft SQL server to express.js
// var config = {
//     user: "ly_zee", // Database username
//     password: "Work@123", // Database password
//     server: "127.0.0.1", // Server IP address
//     database: "SYS_LYZEE", // Database name
//     port: 1433,
//     options: {
//         encrypt: false ,// Disable encryption
//         trustServerCertificate: true 
//     }
// }
// Connect to SQL Server
// sql.connect(config, err => {
//     
// });

