const express = require('express')
const router = express.Router()

// require the Drone model here
const Drone = require('../models/Drone.model')

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const drones = await Drone.find();
    res.json(drones);
  } catch(error){
    return next(error);
  }
})


router.post('/drones', async (req, res) => {
  // Iteration #3: Add a new drone
  try {
    const { name, propellers, maxSpeed } = req.body;
   
    await Drone.create({ name, propellers, maxSpeed });
    res.status(201).json(`New drone has been created`);

  } catch {
    res.status(400).json(`Couldn't create new drone`);

  }
});

router.post('/drones/:id', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })
    .then(updatedDrone => res.status(202).json(updatedDrone))
    .catch(error => next(error));
});

router.delete('/drones/:id', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;
 
  Drone.findByIdAndDelete(id)
    .then((deleteInfos) => res.status(202).json(deleteInfos))
    .catch(error => next(error));
})

module.exports = router
