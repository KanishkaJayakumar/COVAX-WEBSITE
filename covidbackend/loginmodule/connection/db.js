const Sequelize = require('sequelize')



const sequelize = new Sequelize('covidapp','root','password',{
    host:'127.0.0.1',
    dilect:'mysql'
})

module.exports=sequelize