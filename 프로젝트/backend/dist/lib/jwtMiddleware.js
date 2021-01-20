"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// 쿠키 로그인 상황 체크
const jwtMiddleware = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const decoded = jsonwebtoken_1.default.verify(authorization, process.env.JWT_SECRET);
        req.decoded = decoded;
        next();
    }
    catch (e) {
        next();
    }
};
exports.default = jwtMiddleware;
