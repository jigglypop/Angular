import express from "express";
import checkLoggedIn from "../lib/checkLoggedIn";
import checkOwnComment from "../lib/checkOwnComment";
import checkOwnRecomment from "../lib/checkOwnRecomment";
import getCommentById from "../lib/getCommentById";
import getReCommentById from "../lib/getReCommentById";
import { writeRecomment, removeRecomment } from './controller'

const router = express.Router();

router.post("/:postId/:commentId", getCommentById, checkLoggedIn, checkOwnComment, writeRecomment);
router.delete("/:postId/:commentId/:recommentId", getReCommentById, checkLoggedIn, checkOwnRecomment, removeRecomment);

export = router;