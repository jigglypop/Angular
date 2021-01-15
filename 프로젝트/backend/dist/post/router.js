"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const checkLoggedIn_1 = __importDefault(require("../lib/checkLoggedIn"));
const checkOwnPost_1 = __importDefault(require("../lib/checkOwnPost"));
const getPostById_1 = __importDefault(require("../lib/getPostById"));
const controller_1 = require("./controller");
const router = express_1.default.Router();
router.get("/", controller_1.list);
router.post("/", checkLoggedIn_1.default, controller_1.write);
router.get("/:id", getPostById_1.default, controller_1.read);
router.delete("/:id", getPostById_1.default, checkLoggedIn_1.default, checkOwnPost_1.default, controller_1.remove);
router.patch("/:id", getPostById_1.default, checkLoggedIn_1.default, checkOwnPost_1.default, controller_1.update);
module.exports = router;
