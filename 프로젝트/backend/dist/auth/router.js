"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const router = express_1.default.Router();
router.post("/register", controller_1.register);
router.post("/login", controller_1.login);
router.get("/check", controller_1.check);
router.post("/logout", controller_1.logout);
module.exports = router;
