const peopleController = require('express').Router();
const People = require('../models/people.js')

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
peopleController.get("/", (req, res) => {
    res.send("hello world");
  });

// INDEX
peopleController.get('/people', async (req, res) => {
    try {
        res.json(await People.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});

//DELETE
peopleController.delete('/people/:id', async (req, res) => {
    try {
        res.json(await People.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

//UPDATE
peopleController.put('/people/:id', async(req, res) => {
    try {
        res.json(await People.findByIdAndUpdate(req.params.id, req.body, {new: true}));
    } catch (error) {
        res.status(400).json(error);
    }
});

//CREATE
peopleController.post('/people', async (req, res) => {
    console.log(req.body);
    try {
        res.json(await People.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

  module.exports = peopleController; 