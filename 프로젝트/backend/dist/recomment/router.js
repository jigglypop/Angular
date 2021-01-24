"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const checkLoggedIn_1 = __importDefault(require("../lib/checkLoggedIn"));
const checkOwnComment_1 = __importDefault(require("../lib/checkOwnComment"));
const checkOwnRecomment_1 = __importDefault(require("../lib/checkOwnRecomment"));
const getCommentById_1 = __importDefault(require("../lib/getCommentById"));
const getReCommentById_1 = __importDefault(require("../lib/getReCommentById"));
const controller_1 = require("./controller");
const router = express_1.default.Router();
router.post("/:postId/:commentId", getCommentById_1.default, checkLoggedIn_1.default, checkOwnComment_1.default, controller_1.writeRecomment);
router.delete("/:postId/:commentId/:recommentId", getReCommentById_1.default, checkLoggedIn_1.default, checkOwnRecomment_1.default, controller_1.removeRecomment);
module.exports = router;
