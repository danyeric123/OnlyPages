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
router.get("/userProfile", checkAuth, profilesCtrl.userProfile)
router.get("/:id", checkAuth, profilesCtrl.show)
router.put('/:id', checkAuth, profilesCtrl.update)
router.get('/:id/edit', checkAuth, profilesCtrl.edit)
router.patch("/friend/:id", checkAuth, profilesCtrl.friendAndUnfriend)
router.patch("/books/:collection", checkAuth, profilesCtrl.addBook)
router.delete("/books/:bookId", checkAuth, profilesCtrl.removeBook)