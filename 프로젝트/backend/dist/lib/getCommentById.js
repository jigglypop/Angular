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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const comment_1 = __importDefault(require("../models/comment"));
const post_1 = __importDefault(require("../models/post"));
const mongoose_1 = __importDefault(require("mongoose"));
const { ObjectId } = mongoose_1.default.Types;
// 오브젝트 아이디 체크
const getCommentById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { postId, commentId } = req.params;
        if (!ObjectId.isValid(commentId) || !ObjectId.isValid(postId)) {
            throw new Error('잘못된 접근 요청입니다. ');
        }
        else {
            const post = yield post_1.default.findById(postId);
            const comment = yield comment_1.default.findById(commentId);
            if (!post || !comment) {
                throw new Error('코멘트가 존재하지 않습니다. ');
            }
            else {
                req.post = post;
                req.comment = comment;
                next();
            }
        }
    }
    catch (e) {
        res.status(400).send({ error: e.toString() });
    }
});
exports.default = getCommentById;
