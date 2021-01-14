"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const router = express_1.default.Router();
router.get("/", controller_1.list);
router.post("/", controller_1.write);
router.get("/:id", controller_1.read);
router.delete("/:id", controller_1.remove);
router.patch("/:id", controller_1.update);
module.exports = router;
