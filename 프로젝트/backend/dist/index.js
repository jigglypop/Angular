"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./post/router"));
const router_2 = __importDefault(require("./auth/router"));
const router_3 = __importDefault(require("./comment/router"));
const router_4 = __importDefault(require("./recomment/router"));
const dotenv_1 = require("dotenv");
const mongoose_1 = __importDefault(require("mongoose"));
const jwtMiddleware_1 = __importDefault(require("./lib/jwtMiddleware"));
dotenv_1.config();
const { PORT, MONGO_URL } = process.env;
const app = express_1.default();
// CORS
const corsOptions = {
    origin: "http://localhost:4200",
    credentials: true
};
app.use(cors_1.default(corsOptions));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
app.use(cookie_parser_1.default());
app.use(jwtMiddleware_1.default);
// 라우팅
app.get('/', (req, res, next) => {
    res.send(`${PORT}에서 서버 가동 중`);
    next();
});
app.use('/api/posts', router_1.default);
app.use('/api/auth', router_2.default);
app.use('/api/comment', router_3.default);
app.use('/api/recomment', router_4.default);
// 연결부
mongoose_1.default
    .connect(MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(() => {
    console.log('Mongo DB connected');
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
exports.default = app;
