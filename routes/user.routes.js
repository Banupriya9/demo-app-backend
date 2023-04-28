const express = require('express');
const Users = require('../model/user.model')
const route = express.Router();

route.get('/users', (req, res) => {
    try {
        Users.find().then(data => {
            res.status(200).send({
                message : 'Retrieved successfully',
                data : data
            })
        }).catch(error => {
            res.status(400).send('Error while retieving');
        })
    } catch(error) {
        res.status(500).send('Internal server error');
    }
});

route.get('/users/:userId', (req, res) => {
    try {
        Users.findById({_id : req.params.userId}).then(data => {
            res.status(200).send({
                message : 'Retrieved successfully',
                data : data
            })
        }).catch(error => {
            res.status(400).send('No user found');
        })
    } catch(error) {
        res.status(500).send('Internal server error');
    }
})

route.post('/users', (req, res) => {
    try {
       const newUser = new Users(req.body)
       newUser.save().then(data => {
            res.status(201).send({
                message : 'Successfully created',
                data : data
            })
       }).catch(error => {
          res.status(400).send('Error while retieving');
       })
    } catch(error) {
        res.status(500).send('Internal server error');
    }
});


route.put('/users/:userId', (req, res) => {
    try {
       /* const newUser = new Users(req.body); */
       Users.findByIdAndUpdate({_id: req.params.userId},{ $set: req.body }, {new : true}).then(data => {
            res.status(200).send({
                message : 'Successfully updated',
                data : data
            })
       }).catch(error => {
          res.status(400).send('Error while retieving');
       })
    } catch(error) {
        res.status(500).send('Internal server error');
    }
});

route.delete('/users/:userId', (req, res) => {
    try {
       Users.deleteOne({_id: req.params.userId}).then(data => {
            res.status(200).send({
                message : 'Successfully deleted',
                data : data
            })
       }).catch(error => {
          res.status(400).send('Error while deleting');
       })
    } catch(error) {
        res.status(500).send('Internal server error');
    }
});



module.exports =  route;