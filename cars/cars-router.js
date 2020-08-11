const express = require('express');
const knex = require('knex');
const config = require('../knexfile');

const db = knex(config.development);

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
    .then(car => {
        res.status(200).json(car);
    })
    .catch( error => {
        res.status(500).json({ message: 'No cars here'})
    });
});

router.get('/:id', (req, res) => {
    const  id = req.params.id;
    
    db('cars').where({ id }).first()
    .then(car => {
        res.status(200).json(car);
    })
    .catch( err => {
        res.status(500).json({ message: 'No cars w/ id here'})
    });
});

router.post('/', (req, res) => {
    const carData = req.body;
    db('cars').insert(carData)
    .then(ids => {
        db('cars').where({ id: ids[0] })
        .then(newCarEntry => {
            res.status(201).json(newCarEntry);
        })
    })
    .catch( err => {
        console.log('POST ERROR', err);
        res.status(500).json({ message: 'No car posted'})
    });
});


module.exports = router;