// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');  
const index = require('../db/index');

const drones = [
    {
        name: 'Kash Drone MN-1 Dollar ',
        propellers: 4,
        maxSpeed: 200
    },
    {
        name: 'K2000',
        propellers: 3,
        maxSpeed: 300
    },
    {
        name: 'Iron Copter SW-80 Super',
        propellers: 4,
        maxSpeed: 100
    }
]


const seedDB = async () => {
  await Drone.deleteMany();
  try{ 
    await Drone.create(drones);
        console.log(`There are ${drones.length} drones in the database !`)
  } catch(error) {
    console.error(error);
  }
};

seedDB().then(() => {
    mongoose.connection.close();
});