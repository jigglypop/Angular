"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const checkLoggedIn_1 = __importDefault(require("../lib/checkLoggedIn"));
const checkOwnComment_1 = __importDefault(require("../lib/checkOwnComment"));
const getCommentById_1 = __importDefault(require("../lib/getCommentById"));
const getPostById_1 = __importDefault(require("../lib/getPostById"));
const controller_1 = require("./controller");
const router = express_1.default.Router();
router.get("/:id", getPostById_1.default, checkLoggedIn_1.default, controller_1.readComment);
router.post("/:id", getPostById_1.default, checkLoggedIn_1.default, controller_1.writeComment);
router.delete("/:postId/:commentId", getCommentById_1.default, checkLoggedIn_1.default, checkOwnComment_1.default, controller_1.removeComment);
module.exports = router;
