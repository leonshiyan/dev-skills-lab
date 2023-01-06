app.get('/', function(req, res) {
  res.render('skills/index', {
    skills: skills
  })
})