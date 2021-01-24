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
exports.removeRecomment = exports.writeRecomment = void 0;
const recomment_1 = __importDefault(require("../models/recomment"));
// 대댓글 쓰기
const writeRecomment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { content } = req.body.recomments;
        const comment = req.comment;
        const post = req.post;
        if (!content)
            throw new Error('대댓글 내용을 입력해 주세요');
        if (!comment || !post)
            throw new Error('포스트와 댓글이 없습니다.');
        const recomment = new recomment_1.default({
            content: content,
            user: req.decoded
        });
        for (let _comment of post.comment) {
            if (_comment._id.toString() === comment._id.toString()) {
                yield _comment.recomment.push(recomment);
            }
        }
        yield post.save();
        yield comment.save();
        yield recomment.save();
        res.status(200).json({
            comments: post.comment
        });
    }
    catch (e) {
        res.status(500).send({ error: e.toString() });
    }
});
exports.writeRecomment = writeRecomment;
// 대댓글 삭제
const removeRecomment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { postId, commentId, recommentId } = req.params;
        const comment = req.comment;
        const post = req.post;
        if (!comment || !post)
            throw new Error('포스트와 댓글이 없습니다.');
        for (let _comment of post.comment) {
            if (_comment._id.toString() === comment._id.toString()) {
                _comment.recomment = _comment.recomment.filter(x => x._id.toString() !== recommentId.toString());
            }
        }
        yield post.save();
        yield comment.save();
        yield recomment_1.default.findByIdAndRemove(recommentId).exec();
        res.status(200).json({
            comments: post.comment
        });
    }
    catch (e) {
        res.status(404).send({ error: e.toString() });
    }
});
exports.removeRecomment = removeRecomment;
