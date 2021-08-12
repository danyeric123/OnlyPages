import { Router } from 'express'
// import * as boardsCtrl from '../controllers/boards.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

export {
  router
}

const router = Router();

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

// "/boards/:id" --> show board
// "/boards/:boardId/posts/:postId" --> show given post