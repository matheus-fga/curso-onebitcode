const express = require('express');
const Checklist = require('../models/checklist');
const Task = require('../models/task');

const checklistDependentRoute = express.Router();

checklistDependentRoute.delete('/:id/tasks/:id_tasks', async (req, res) => {
  try {
    let task = await Task.findByIdAndDelete(req.params.id_tasks);
    let checklist = await Checklist.findById(req.params.id);
    let taskToRemove = checklist.tasks.indexOf(task._id)
    checklist.tasks.splice(taskToRemove, 1);
    await checklist.save()
    res.redirect(`/checklists/${req.params.id}`);
  } catch (error) {
    res.status(500).render('pages/error', { error: error});
  }
})

checklistDependentRoute.get('/:id/tasks/new', async (req, res) => {
  try {
    let task = new Task();
    res.status(200).render('tasks/new', { checklistId: req.params.id, task: task});
  } catch (error) {
    res.status(422).render('pages/error', { error: error});
  }
})

checklistDependentRoute.post('/:id/tasks', async (req, res) => {
  let { name } = req.body.task;
  let task = new Task({name: name, checklist: req.params.id});

  try {
    await task.save();
    let checklist = await Checklist.findById(req.params.id);
    checklist.tasks.push(task);
    await checklist.save();
    res.redirect(`/checklists/${req.params.id}`);
  } catch (error) {
    res.status(422).render(`tasks/new`, {task: {...task, error}, checklistId: req.params.id});
  }
})

module.exports = { checklistDependent: checklistDependentRoute };