var dbconfig = require('./dbConn.js');
var con=dbconfig.connection;

var express =require('express');
var app= express(); 
//var mysql=require('mysql');
var cors = require('cors');  //its for multiple domains
var bodyParser =require('body-parser'); // its for post method


// var con = mysql.createConnection({
//     host : "localhost",
//     user : "root",
//     password : "",
//     database : "mobiodr"
// });

// con.connect((err)=>{
//     if(err){
//     throw err;
//     }
//     console.log(" db connected");
// })

app.use(cors()); 

//json
var jsonParser = bodyParser.json()

//urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false })




app.post("/user",jsonParser,(req,res)=>{
    let userName  = req.body.name;
    let userEmail = req.body.email;
    let userPassword= req.body.password;
    let isadmin= 0;

    if (userName!=undefined)
{
    let qr=`insert into users (user_name,user_email,user_password,is_admin) values ('${userName}','${userEmail}','${userPassword}',${isadmin})`;
    con.query(qr,(err,result)=>{
        if (err) {
            throw err;
        }
        console.log(result);
    })
    
    res.send('<h1>welcoome</h1>');
}
else{
    res.send('<h1>error</h1>')
}
})



app.post("/users",jsonParser,(req,res)=>{
     let userName = req.body.name;
    // let id =req.params.id;
     let qr=`select * from users where user_name='${userName}'`;
     con.query(qr,(err,result,fields)=>{
        if (err) {
            throw err;
        }
        if(result){
            res.send({error:"already"});  
        }
       // res.send(result);
        console.log(result);
    })
})


app.get("/test",(req,res)=>{
    res.send('<h1>welcome</h1>');
})


app.listen(9000,function(){
    console.log("test");
})