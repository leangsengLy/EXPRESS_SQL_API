import sql from 'mssql'
const ConnectDb = sql.connect({
    user:"ly_zee",
    password:"Work@123",
    server:"127.0.0.1",
    database:"SYS_LYZEE",
    port:1433,
    options:{
        encrypt:false,
        trustServerCertificate:true
    }

},(error)=>{
    if(!error)console.log("Connect database successfulty!");
    else {
        console.log(error)
    }
}) 

export default ConnectDb;