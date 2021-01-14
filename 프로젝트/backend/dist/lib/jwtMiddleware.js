"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwtMiddleware = (req, res, next) => {
    try {
        // const { access_token } = req.cookies
        next();
    }
    catch (e) {
        console.log(req.cookies);
        next();
    }
};
exports.default = jwtMiddleware;
