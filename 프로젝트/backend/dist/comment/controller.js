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
exports.removeComment = exports.writeComment = exports.readComment = void 0;
const post_1 = __importDefault(require("../models/post"));
const comment_1 = __importDefault(require("../models/comment"));
// 댓글읽기
const readComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield req.post;
        res.status(200).json({
            comments: post.comment
        });
    }
    catch (e) {
        res.status(404).send({ error: e.toString() });
    }
});
exports.readComment = readComment;
// 댓글쓰기
const writeComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const { content } = req.body.comments;
        if (!content)
            throw new Error('댓글 내용을 입력해 주세요');
        const comment = new comment_1.default({
            content: content,
            user: req.decoded
        });
        const post = yield post_1.default.findById(id);
        yield post.comment.push(comment);
        yield post.save();
        yield comment.save();
        res.status(200).json({
            comments: post.comment
        });
    }
    catch (e) {
        res.status(500).send({ error: e.toString() });
    }
});
exports.writeComment = writeComment;
// 삭제
const removeComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield req.post;
        const comment = yield req.comment;
        const n = yield post.comment.length;
        const _id = yield comment._id;
        post.comment = yield post.comment.filter(x => x._id.toString() !== comment._id.toString());
        if (n === post.comment.length)
            throw new Error('동일한 이름의 댓글이 없습니다');
        yield post.save();
        yield comment_1.default.findByIdAndRemove(_id).exec();
        res.status(200).json({
            comments: post.comment
        });
    }
    catch (e) {
        res.status(404).send({ error: e.toString() });
    }
});
exports.removeComment = removeComment;
