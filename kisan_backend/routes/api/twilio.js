const assign = require('../../db').assign
const db = require('../../db')

const route = require('express').Router();


route.post('/', (req, res) => {
    
    assign.create({
        Time:req.body.Time,
        OTP:req.body.OTP,
        Name:req.body.Name,
        Contact:req.body.Contact
    })
    .then((batch) => {
        res.json(batch)
        })
    .catch((err)  => {
        res.status(err)
    })
})

route.get('/', (req, res) => {
    
    assign.findAll()
    .then((result) => {
        
            res.json(result)
        })
    .catch((err)  => {
        res.status(err)
    } )
})

module.exports = route