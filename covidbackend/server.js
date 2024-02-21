const express = require('express');
const mysql = require('mysql2');
const connection = require('./connection')
const bodyParser = require('body-parser');
const http = require('http')
const app = express();
const index = require('./index')
const server = http.createServer(index)
const moment = require('moment');

const multer = require('multer');
// Configure multer for handling file uploads
const upload = multer({ dest: 'uploads/' });
var cors = require('cors')
const cron = require('node-cron');
app.use(cors());
// Middleware to parse JSON requests
// server.use(bodyParser.json());



// app.get('/centers', (req, res) => {
  
//   console.log("centers retrieval");
//   connection.query('SELECT * FROM newcenter', (err, results) => {
//       if (err) {
//           console.error('Error fetching centers:', err);
//           return res.status(500).json({ message: 'Internal server error' });
//       }
//       res.status(200).json(results);
//   });
// });



const resetVaccineCount = () => {
  // Your logic to reset vaccine count goes here
  // This could be a database update query or an API call
  console.log('Updating vaccine count...');
  try {
    // Your logic to update the count to 10 goes here
    // This could be a database update query or an API call
    connection.query('UPDATE newcenter SET vaccinecount = 10', (error, results) => {
      if (error) {
        console.error('Error updating vaccine count:', error);
      } else {
        console.log('Vaccine count updated successfully.');
      }
    });
  } catch (error) {
    console.error('Error updating count:', error);
  }
};

// Schedule the task to run every day at 12 a.m.
cron.schedule('0 0 * * *', () => {
  resetVaccineCount();
}, {
  timezone: 'Asia/Kolkata', // Adjust the timezone as needed
});



// Start the server
server.listen(8080, () => {
  console.log(`Server is running on port ${process.env.port}`);
});

















