import { Skill } from '../models/skills.js'


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
  .then(skill =>{
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
    res.render('todos/show', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/todos')
  })
}

export {
	index,
  newSkill as new,
  create,
  show
}