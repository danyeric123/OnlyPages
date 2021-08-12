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
router.patch("/friend/:id", checkAuth, profilesCtrl.friendAndUnfriend)
router.patch("/book/:bookId", checkAuth, profilesCtrl.addBook)
// router.patch("/unfriend/:id", checkAuth, profilesCtrl.unfriend)