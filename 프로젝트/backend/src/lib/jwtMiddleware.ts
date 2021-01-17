import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { IPost } from '../models/post'

export interface RequestDecoded extends Request{
    decoded : string | object;
    post : IPost 
}

// 쿠키 로그인 상황 체크
const jwtMiddleware =  ( req :RequestDecoded,  res : Response, next : NextFunction ) => {
    try {
        const { authorization } = req.headers
        const decoded = jwt.verify(authorization, process.env.JWT_SECRET)
        req.decoded = decoded
        next()
    } catch (e){
        next()
    }
}

export default jwtMiddleware