import express from "express";
import checkLoggedIn from "../lib/checkLoggedIn";
import checkOwnPost from "../lib/checkOwnPost";
import getPostById from "../lib/getPostById";
import { list, write, read, remove, update } from './controller'
const router = express.Router();

router.get("/", list);
router.post("/", checkLoggedIn,  write);
router.get("/:id", getPostById, read);
router.delete("/:id", getPostById, checkLoggedIn, checkOwnPost, remove);
router.patch("/:id", getPostById, checkLoggedIn, checkOwnPost, update);

export = router;