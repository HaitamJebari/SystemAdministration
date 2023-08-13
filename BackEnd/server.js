const express = require('express');
const mysql = require('mysql')
const app = express();

const port=5000
app.listen(port,()=>{
    console.log(`Serveur Running on ${port}`)
})
//Connection To Mysql
const cnc = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database',
  });
