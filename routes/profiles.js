import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

export {
  router
}

const router = Router();

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get("/", checkAuth, profilesCtrl.index)
router.get("/:id", checkAuth, profilesCtrl.show)
router.put('/:id', checkAuth, profilesCtrl.update)
router.get('/:id/edit', checkAuth, profilesCtrl.edit)
router.patch("/friend/:id", checkAuth, profilesCtrl.friendAndUnfriend)
router.patch("/book/:bookId/:collection", checkAuth, profilesCtrl.addBook)
router.delete("/book/:bookId/:collection", checkAuth, profilesCtrl.removeBook)