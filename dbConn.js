var mysql=require('mysql');
var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "mobiodr"
});

con.connect((err)=>{
    if(err){
    throw err;
    }
    console.log(" db connected");
})

module.exports ={
    connection : con 
} 