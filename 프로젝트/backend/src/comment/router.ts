import express from "express";
import checkLoggedIn from "../lib/checkLoggedIn";
import checkOwnComment from "../lib/checkOwnComment";
import getCommentById from "../lib/getCommentById";
import getPostById from "../lib/getPostById";
import { writeComment, readComment, removeComment } from './controller'
const router = express.Router();

router.get("/:id", getPostById, checkLoggedIn,  readComment);
router.post("/:id", getPostById, checkLoggedIn,  writeComment);
router.delete("/:postId/:commentId", getCommentById, checkLoggedIn, checkOwnComment, removeComment);

export = router;