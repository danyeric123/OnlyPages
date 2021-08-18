import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

export {
  router
}

const router = Router();

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/:bookId', checkAuth, reviewsCtrl.index)
router.post('/', checkAuth, reviewsCtrl.create)
router.delete('/:id', checkAuth, reviewsCtrl.delete)
router.get('/:id/edit', checkAuth, reviewsCtrl.edit)
router.patch('/:id/like', checkAuth, reviewsCtrl.likeAndUnlike)
router.patch('/:id', checkAuth, reviewsCtrl.update)
router.post('/:id', checkAuth, reviewsCtrl.reply)