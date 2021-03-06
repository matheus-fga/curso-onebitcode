const express = require('express');
const Checklist = require('../models/checklist');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let checklists = await Checklist.find({});
    res.render('checklists/index', {checklists: checklists});
  } catch (error) {
    res.status(500).render('pages/error', {error: error});
  }
})

router.get('/new', async (req, res) => {
  try {
    let checklist = new Checklist();
    res.render('checklists/new', { checklist: checklist});
  } catch (error) {
    res.status(500).render('pages/error', {error: error});
  }
})

router.get('/:id/edit', async (req, res) => {
  try {
    let checklist = await Checklist.findById(req.params.id);
    res.render('checklists/edit', { checklist: checklist});
  } catch (error) {
    res.status(500).render('pages/error', {error: error});
  }
})

router.post('/', async (req, res) => {
  let { name } = req.body.checklist;
  let checklist = new Checklist({name});

  try {
    await checklist.save();
    res.redirect('/checklists');
  } catch (error) {
    console.log(error);
    res.status(422).render('checklists/new', {checklist: {...checklist, error}});
  }
})

router.get('/:id', async (req, res) => {
  try {
    let checklist = await Checklist.findById(req.params.id).populate('tasks');
    res.render('checklists/show', {checklist: checklist});
  } catch (error) {
    res.status(500).render('pages/error', {error: error});
  }
})

router.put('/:id', async (req, res) => {
  let { name } = req.body.checklist;
  let checklist = await Checklist.findById(req.params.id);
  
  try {
    await checklist.updateOne({name});
    res.redirect('/checklists');
  } catch (error) {
    res.status(422).render('checklists/edit', {checklist: {...checklist, error}})
  }
})

router.delete('/:id', async (req, res) => {
  let checklist = await Checklist.findById(req.params.id);
 
  try {
    let name = checklist.name;
    await checklist.deleteOne({name});
    res.redirect('/checklists');
  } catch (error) {
    res.status(422).render('checklists/edit', {checklist: {...checklist, error}})
  }
})

module.exports = router;