const express = require('express');
const connection = require('../connection');
const { and } = require('sequelize');
const router = express.Router();
require('dotenv').config();

// const jwt = require('jsonwebtoken')
// const auth = require('../services/authentication');

router.post('/adsignup', (req, res) => {
  const {name, email, password,adminid } = req.body;
  console.log('Received data:', { name, email, password, adminid });

  // Check if username or password is missing
  if (!name || !email || !password || !adminid) {
    return res.status(400).json({ message: 'Name, Email, password and Admin ID are required' });
  }

  // Check if the username already exists
  connection.query('SELECT * FROM appadmin WHERE email = ?', [email], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    // Insert the new user into the database
    connection.query('INSERT INTO appadmin (name,email, password, adminid) VALUES (?,?, ?,?)', [name,email, password,adminid], (err, results) => {
        if (err) {
          console.error('Error inserting user:', err);
          throw err;
        }
        // console.log('User inserted:', results);
        res.status(201).json({ message: 'User created successfully' });
      });
  });
});


  router.post('/adlogin', (req, res) => {
    const { email, password, adminid } = req.body;
  
    // Check if username or password is missing
    if (!email || !password  || !adminid) {
      return res.status(400).json({ message: 'Email, password and Admin ID are required' });
    }
  
    // Check if the provided username and password match a user in the database
    connection.query('SELECT * FROM appadmin WHERE email = ? AND password = ? and adminid=?', [email, password, adminid], (err, results) => {
      if (err) {
        console.error('Error querying user:', err);
        throw err;
      }
      // console.log('User queried:', results);
      if (results.length > 0) {
        res.json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid username or password' });
      }
    });
  });

  module.exports = router;


//get all app user


router.get('/getAllAppuser',(req,res)=>{
    const tokenPayload=res.locals;
    var query;
    if(tokenPayload.isDeletable==='false')
    {
        query="select id,name,email,status from appuser where isDeletable='true'";
    }
    else{
        query="select id,name,email,status from appuser where isDeletable='true' and email!=?"
    }
    connection.query(query,[tokenPayload.email],(err,results)=>{
        if(!err)
        {
            return res.status(200).json(results);
        }
        else{
        return res.status(500).json(err);
        }
    })
})



//updating user status


// router.post('/updateUserStatus',(req,res)=>{
//     let user = req.body;
//     var query = "update appuser set status=? where id=? and isDeletable='true'";
//     connection.query(query,[user.status,user.id],(err,results)=>{
//         if(!err){
//             if(results.affectedRows==0)
//             {
//                 return res.status(404).json({message:"User ID does not exist"});
//             }
//             return res.status(200).json({message:"User updated successfully"});
//         }
//         else{
//             return res.status(500).json(err);
//         }
//     })
// })



//updating user details


router.post('/updateUser',(req,res)=>{
    let user = req.body;
    var query = "update appuser set name=?,email=?,password=? where id=? ";
    connection.query(query,[user.name,user.email,user.password,user.id],(err,results)=>{
        if(!err){
            if(results.affectedRows==0)
            {
                return res.status(404).json({message:"User ID does not exist"});
            }
            return res.status(200).json({message:"User updated successfully"
        
        });
        }
        else{
            return res.status(500).json(err);
        }
    })
})

//checking token


// router.get('/checkToken',(req,res)=>{
//     return res.status(200).json({message:"true"}); 
// })

