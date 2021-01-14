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
exports.update = exports.remove = exports.read = exports.write = exports.list = void 0;
const post_1 = __importDefault(require("../models/post"));
const list = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield post_1.default.find().exec();
        res.status(200).json(posts);
    }
    catch (e) {
        res.status(500).json({ message: e });
    }
});
exports.list = list;
const write = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content, tags } = req.body;
    const post = new post_1.default({
        title,
        content,
        tags
    });
    try {
        yield post.save();
        res.status(200).json(req.body);
    }
    catch (e) {
        res.status(500).json({ message: e });
    }
});
exports.write = write;
const read = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const post = yield post_1.default.findById(id).exec();
        res.status(200).json(post);
    }
    catch (e) {
        res.status(404).send({ message: '포스트가 존재하지 않습니다.' });
    }
});
exports.read = read;
const remove = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield post_1.default.findByIdAndRemove(id).exec();
        res.status(200).json({ message: '포스트가 삭제되었습니다.' });
    }
    catch (e) {
        res.status(404).send({ message: '삭제할 포스트가 존재하지 않습니다.' });
    }
});
exports.remove = remove;
const update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const post = yield post_1.default.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(post);
    }
    catch (e) {
        res.status(500).send({ message: '업데이트가 정상적으로 이루어지지 않았습니다.' });
    }
});
exports.update = update;
