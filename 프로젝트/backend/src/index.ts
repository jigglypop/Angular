import bodyParser from "body-parser";
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express, { Request, Response, NextFunction } from "express";

import postRouter from "./post/router";
import authRouter from "./auth/router";
import commentRouter from "./comment/router";
import recommentRouter from "./recomment/router";

import { config } from 'dotenv'
import mongoose from 'mongoose'
import jwtMiddleware from "./lib/jwtMiddleware";

config()
const { PORT, MONGO_URL } = process.env
const app: express.Application = express();
// CORS
const corsOptions = {
  origin: "http://localhost:4200",
  credentials: true
}
app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser())
app.use(jwtMiddleware)

// 라우팅
app.get('/', ( req : Request, res : Response, next : NextFunction )=>{
  res.send(`${PORT}에서 서버 가동 중`)
  next()
})
app.use('/api/posts', postRouter)
app.use('/api/auth', authRouter)
app.use('/api/comment', commentRouter)
app.use('/api/recomment', recommentRouter)


// 연결부
mongoose
.connect(MONGO_URL, {
  useNewUrlParser:true, 
  useFindAndModify:false,
  useUnifiedTopology: true 
})
.then(() => {
  console.log('Mongo DB connected')
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

export default app;