const express = require('express');
const router = express.Router();
require('dotenv').config();
const moment = require('moment');
const connection = require('../connection');


router.post('/myslotbook', (req, res) => {
  const {name, centername, centerlocation,bookdate} = req.body;
  console.log('Received data on server:', { name, centername, centerlocation,bookdate });

  console.log('Name:', name);
  console.log('Center Name:', centername);
  console.log('Center Location:', centerlocation);
  console.log('date booking',bookdate);

  if (!name || !centername || !centerlocation || !bookdate) {
    return res.status(400).json({ message: "Username,Center name, Booking date and Center Location are required." });
  }

  const currentDate = moment();
  const bookingDate = moment(bookdate, 'YYYY-MM-DD'); // Adjust the date format based on your input

  if (bookingDate.isBefore(currentDate, 'day')) {
    return res.status(400).json({ message: "Cannot book a slot for a past date." });
  }


  connection.beginTransaction((err) => {
    if (err) {
      console.error('Error starting transaction:', err);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    // Check if the center exists
    connection.query('SELECT * FROM newcenter WHERE centername=? and centerlocation=?', [centername,centerlocation], (err, centerResult) => {
      if (err) {
        connection.rollback(() => {
          console.error('Error checking center existence:', err);
          return res.status(500).json({ message: "Internal Server Error" });
        });
      }

      if (centerResult.length === 0) {
        connection.rollback(() => {
          return res.status(404).json({ message: "Center not found" });
        });
      } else {
        const availableVaccineCount = centerResult[0].vaccinecount;

        if (availableVaccineCount <= 0) {
          connection.rollback(() => {
            return res.status(400).json({ message: "No available vaccine slots at this center" });
          });
        } else {
          // Update the vaccine count and book the slot
          connection.query('UPDATE newcenter SET vaccinecount = ? WHERE centername = ?', [availableVaccineCount - 1, centername], (err) => {
            if (err) {
              connection.rollback(() => {
                console.error('Error updating vaccine count:', err);
                return res.status(500).json({ message: "Internal Server Error" });
              });
            }

            // Insert booking information
            connection.query('INSERT INTO bookings (name, centername,centerlocation,bookdate) VALUES (?, ?,?,?)', [name, centername,centerlocation,bookdate], (err) => {
              if (err) {
                connection.rollback(() => {
                  console.error('Error inserting booking:', err);
                  return res.status(500).json({ message: "Internal Server Error" });
                });
              }

              connection.commit((err) => {
                if (err) {
                  connection.rollback(() => {
                    console.error('Error committing transaction:', err);
                    return res.status(500).json({ message: "Internal Server Error" });
                  });
                }

                res.status(201).json({ message: "Slot booked successfully" });
              });
            });
          });
        }
      }
    });
  });
});


router.get('/myslots', (req, res) => {
  connection.query('SELECT * FROM bookings', (err, results) => {
    if (err) {
      console.error('Error fetching booked slots:', err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.status(200).json(results);
  });
});



module.exports = router;
