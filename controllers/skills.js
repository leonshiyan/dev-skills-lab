import { Skill } from '../models/skill.js'


function index(req, res) {
  Skill.find({})
  .then( skills => {
    res.render('skills/index', {
      skills: skills
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}
function newSkill(req,res){
  res.render('skills/new')
}
function create(req,res){
  console.log(req.body)
  req.body.current = false
  Skill.create(req.body)
  .then(() =>{
    res.redirect('/skills')
  })
  .catch(error => { 
    console.log(error)
    res.redirect('/')
  })
}
function show(req, res) {
  Skill.findById(req.params.id)
  .then(skill => {
    res.render('skills/show', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}
function deleteSkill(req,res){
  Skill.findByIdAndDelete(req.params.id)
  .then(todo => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function edit(req,res){
  //find skill by id
  Skill.findById(req.params.id)
  .then(skill => {
    res.render('skills/edit', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}
function update(req, res) {
  // handle checkbox logic
  req.body.current = !!req.body.current
  // find the todo by id and update
  Skill.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(skill => {
    // redirect back to show view
    res.redirect(`/skills/${skill._id}`)
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}
export {
	index,
  newSkill as new,
  create,
  show,
  deleteSkill as delete,
  edit,
  update
}