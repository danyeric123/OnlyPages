import { Router } from 'express'
import * as boardsCtrl from '../controllers/boards.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

export {
  router
}

const router = Router();

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, boardsCtrl.index)
router.post('/', checkAuth, boardsCtrl.create)
router.get('/category/:category', checkAuth, boardsCtrl.categoryShow)
router.get('/:id', checkAuth, boardsCtrl.show)
router.patch('/:id', checkAuth, boardsCtrl.update)
router.get('/:id/edit', checkAuth, boardsCtrl.edit)
router.delete('/:boardId', checkAuth, boardsCtrl.delete)