const mysql = require('mysql')
const path = require('path') 

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "Dental_Care",
    port: "3306"
})

connection.connect((err)=>{
    if(err){
        throw err
    } else{
        console.log("connected");
    }
})

exports.view = (req, res) => {
    // User the connection
    connection.query('SELECT * FROM PATIENT', (err, rows) => {
      // When done with the connection, release it
      if (!err) {
        res.sendFile(path.join(__dirname+"../../../public/clinical home page.html"))
      } else {
        console.log(err);
      }
      console.log('The data from user table: \n', rows);
    });
  }

exports.add = (req, res) => {
    // User the connection
    connection.query('Insert into PATIENT (PATIENT_NAME, PATIENT_NUMBER, PATIENT_AGE, PATIENT_Mail, PATIENT_JOB ) Values ("' + req.body.name + '", "' + req.body.phone + '", "' + req.body.Age + '", "' + req.body.email + '" ,"' + req.body.Job + '") ;', (err, rows) => {
      // When done with the connection, release it
      if (!err) {
        res.sendFile(path.join(__dirname+"../../../public/clinical home page.html"))
      } else {
        console.log(err);
      }
      console.log('The data from user table: \n', rows);
    });
}
