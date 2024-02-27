const express = require('express')
const router = express.Router()
require('dotenv').config();
const connection = require('../connection')
const app = express();
app.use(express.json())



router.post('/addnewcenter', (req, res) => {
    const { adminname,centername, centerlocation, vaccinecount, phonenumber, workinghours } = req.body;

    console.log(req.body);
    if (!adminname || !centername || !centerlocation || !vaccinecount || !phonenumber || !workinghours) {
        return res.status(400).json({ message: "Center name, Location, Mobile number, Working hours and Vaccine Slots available are required." })
    }

    connection.query('SELECT * from newcenter where adminname =? AND centername=? AND centerlocation=?', [adminname, centername, centerlocation], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            return res.status(409).json({ message: "Center already exists" });
        }

        connection.query('INSERT INTO newcenter (adminname, centername,centerlocation,vaccinecount,phonenumber,workinghours) VALUES(?,?,?,?,?,?)', [adminname,centername, centerlocation, vaccinecount, phonenumber, workinghours], (err, results) => {
            if (err) {
                console.error('error inserting center', err);
                throw err;
            }
            res.status(201).json({ message: "New Vaccination Center added Successfully" });
        });
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    // Perform a DELETE operation in your MySQL database
    const query = 'DELETE FROM newcenter WHERE id = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting center:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        // Check if any rows were affected by the DELETE operation
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Center not found' });
        }

        // If deletion was successful, send a success response
        res.json({ message: 'Center deleted successfully' });
    });
});

router.get('/mycenters', (req, res) => {
    connection.query('SELECT * FROM newcenter', (err, results) => {
        if (err) {
            console.error('Error fetching vaccine centers:', err);
            return res.status(500).json({ message: "Internal Server Error" });
        }
        res.status(200).json(results);
    });
});


router.get('/centers', (req, res) => {
    const query = 'SELECT centername FROM newcenter';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching backend center names:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
});


module.exports = router;


