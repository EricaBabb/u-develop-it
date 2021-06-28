//importing express
const express = require('express');
//adding port designation
const PORT = process.env.PORT || 3001;
//app expression
const app = express();

//import the mysql2 npm package
const mysql = require('mysql2');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//In the preceding statement, the db object is using the query() method. This method runs the SQL query and executes the callback with all the resulting rows that match the query.
//Once this method executes the SQL command, the callback function captures the responses from the query in two variables: the err, which is the error response, and rows, which is the database query response. If there are no errors in the SQL query, the err value is null. This method is the key component that allows SQL commands to be written in a Node.js application.
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
  });

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });


// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );  

//start the server on the port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });