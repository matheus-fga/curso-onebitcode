const express = require('express');
const Checklist = require('../models/checklist');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('Olá');
  res.send();
})

router.post('/', async (req, res) => {
  let { name } = req.body;

  try {
    let checklist = await Checklist.create({ name });
    res.status(200).json(checklist);
  } catch (error) {
    res.status(422).json(error);
  }
})

router.get('/:id', (req, res) => {
  console.log(req.params.id);
  res.send(`GET ID: ${req.params.id}`);
})

router.put('/:id', (req, res) => {
  console.log(req.params.id);
  res.send(`PUT ID: ${req.params.id}`);
})

router.delete('/:id', (req, res) => {
  console.log(req.params.id);
  res.send(`DELETE ID: ${req.params.id}`);
})

module.exports = router;