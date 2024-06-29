import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB
});

con.connect((err) => {
    if (err) {
      console.log('Error connecting to the database');
      return;
    }
    console.log('Connected to the MySQL database.');
});
    
