const express = require('express');
var cors = require('cors');

const connection = require('./connection');
const appuserRoute = require('./routes/appuser')
const newcenterRoute = require('./routes/newcenter')
const bookslotRoute = require('./routes/bookslot')
const appadminRoute = require('./routes/appadmin')

const app = express();
app.use(cors());

app.use(express.json());




app.use('/appadmin',appadminRoute)
app.use('/appuser',appuserRoute)
app.use('/newcenter',newcenterRoute)
app.use('/bookslot',bookslotRoute)

// app.use('/category',categoryRoute)
module.exports=app;