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
// 리스트
const list = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const page = req.query.page;
    // 한 페이지 최대 숫자
    const Max = 10;
    let numPage = 0;
    if (typeof page === 'string') {
        numPage = (parseInt(page) - 1) * Max;
    }
    const tag = req.query.tag;
    const username = req.query.username;
    // username 과 tag 쿼리 구현
    const query = Object.assign(Object.assign({}, (username ? { 'user.username': username } : {})), (tag ? { tags: tag } : {}));
    try {
        const posts = yield post_1.default.find(query)
            .sort({ _id: -1 })
            .limit(Max)
            .skip(numPage)
            .exec();
        // 100자 제한 슬라이싱
        const postSlice = posts
            .map(post => post.toJSON())
            .map((post) => (Object.assign(Object.assign({}, post), { content: post.content.length < 200 ? post.content : `${post.content.slice(0, 100)}...` })));
        const postCount = yield post_1.default.countDocuments().exec();
        res.set('last', Math.ceil(postCount / Max).toString());
        res.status(200).json(postSlice);
    }
    catch (e) {
        res.status(500).json({ message: e });
    }
});
exports.list = list;
// 글쓰기
const write = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content, tags } = req.body;
    try {
        const post = new post_1.default({
            title,
            content,
            tags,
            user: req.decoded
        });
        // 내용이 모두 있는지
        if (!title || !content)
            throw new Error('제목과 내용을 모두 입력해 주세요');
        const result = yield post.save();
        yield res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({ error: e.toString() });
    }
});
exports.write = write;
// 읽기
const read = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield req.post;
        res.status(200).json(post);
    }
    catch (e) {
        res.status(404).send({ error: e.toString() });
    }
});
exports.read = read;
// 삭제
const remove = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield post_1.default.findByIdAndRemove(id).exec();
        res.status(200).json({ message: '포스트가 삭제되었습니다.' });
    }
    catch (e) {
        res.status(404).send({ error: e.toString() });
    }
});
exports.remove = remove;
// 업데이트
const update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const post = yield post_1.default.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(post);
    }
    catch (e) {
        res.status(500).send({ error: e.toString() });
    }
});
exports.update = update;
