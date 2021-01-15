"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkLoggedIn = (req, res, next) => {
    if (!req.decoded) {
        res.status(401).json({ error: new Error('허가되지 않은 사용자입니다.').toString() });
    }
    else {
        next();
    }
};
exports.default = checkLoggedIn;
