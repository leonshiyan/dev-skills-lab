import { Router } from 'express'

import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

router.get('/', skillsCtrl.index)


// GET /todos/new
router.get('/new', skillsCtrl.new)

// // GET /todos/:id
// router.get('/:id', skillsCtrl.show)

// // POST /todos
// router.post('/', skillsCtrl.create)

export {
  router
}
