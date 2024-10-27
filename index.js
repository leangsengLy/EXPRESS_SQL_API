const sql  = require('mssql');
// const pool = createPool({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:"SYS_LYZEE",
//     connectionLimit:10
// })

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
    if (err) {
        console.log(err)
    }else {
        console.log("Connection Successful!");
    }
});

