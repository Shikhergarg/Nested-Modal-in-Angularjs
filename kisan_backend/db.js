const Sequelize = require('sequelize')

const db = new Sequelize('nodejs', 'shikher', 'password', {
    dialect: 'sqlite',
    host: 'localhost',
    
    storage: './assignment.db'
})

const assign = db.define('batch', {
    pId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    Time: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    OTP: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    Contact: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
	
})


db.sync().then(()=>console.log("data created")).catch((err)=>console.log("Database error"))



module.exports={
    assign
}