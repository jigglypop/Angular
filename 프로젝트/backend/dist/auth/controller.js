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
exports.logout = exports.check = exports.login = exports.register = void 0;
const User_1 = __importDefault(require("../models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// 시리얼라이징
const serialize = (user) => {
    const data = user.toJSON();
    delete data.hashedPassword;
    return data;
};
// 토큰 발급
const generateToken = (user) => {
    const token = jsonwebtoken_1.default.sign({ _id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '7d' });
    return token;
};
// 회원가입
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        // 에러처리 (형식)
        if (!username ||
            username.length <= 3 ||
            username.length >= 10 ||
            !password) {
            throw new Error("형식이 올바르지 않습니다.");
        }
        ;
        // 에러처리 (이미 존재하는 계정)
        const exists = yield User_1.default.findOne({ username });
        if (exists)
            throw new Error("이미 존재하는 계정입니다. ");
        // 해싱과 응답
        const user = new User_1.default({ username });
        user.hashedPassword = yield bcrypt_1.default.hash(password, 10);
        yield user.save();
        // 토큰 발급
        res.cookie('access_token', generateToken(user), { maxAge: 1000 * 60 * 60 * 24 * 7, httpOnly: true });
        res.status(200).json(serialize(user));
    }
    catch (e) {
        res.status(500).json({ error: e.toString() });
    }
});
exports.register = register;
// 로그인
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    // 에러처리 (형식)
    if (!username ||
        !password)
        throw new Error('이름과 비밀번호를 정확히 입력해 주세요');
    try {
        const user = yield User_1.default.findOne({ username });
        // 계정이 존재하는지
        if (!user)
            throw new Error('같은 이름의 계정이 존재하지 않습니다.');
        // 비밀번호가 일치하지 않음
        const valid = yield bcrypt_1.default.compare(password, user.hashedPassword);
        if (!valid)
            throw new Error('비밀번호가 잘못되었습니다');
        // 토큰 발급
        yield res.cookie('access_token', generateToken(user), { maxAge: 1000 * 60 * 60 * 24 * 7, httpOnly: true });
        yield res.status(200).json(serialize(user));
    }
    catch (e) {
        res.status(500).json({ error: e.toString() });
    }
});
exports.login = login;
const check = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const decoded = req.decoded;
    if (!decoded) {
        res.status(401).json({ error: new Error('허가되지 않은 사용자입니다.').toString() });
    }
    res.status(200).json(decoded);
});
exports.check = check;
// 로그아웃
const logout = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield res.clearCookie('access_token');
    yield res.status(200).json({ message: '로그아웃 되었습니다.' });
});
exports.logout = logout;
