import express from "express";
import { check, login, logout, register } from './controller'

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/check", check);
router.post("/logout", logout);


export = router;