import { Router } from "express";
import * as booksCtrl from "../controllers/books";
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js";

export { router };

const router = Router();

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken);
