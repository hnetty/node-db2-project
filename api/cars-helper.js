// function to define all cars
// function to find a specific car
// function to update the specific car
// function to create a car
// function to delete a car

const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);


module.exports = {
    find,
    findById,
    add,
    remove,
    update,
};

function find() {
    return db('cars');
}

function findById(id) {
    return db('cars').where({ id }).first();
}

function add(newCar){
    return db('cars').insert(newCar).then( () => {
        return find();
    })
}