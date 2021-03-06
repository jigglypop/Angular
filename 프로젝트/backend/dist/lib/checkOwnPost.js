"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// 글쓴이 체크
const checkOwnPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.decoded.username !== req.post.user.username) {
        res.status(403).json({ error: new Error('글쓴이가 아닙니다.').toString() });
    }
    else {
        next();
    }
});
exports.default = checkOwnPost;
