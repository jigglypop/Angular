import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { IPost } from '../models/post'

export interface RequestDecoded extends Request{
    decoded : string | object;
    post : IPost 
}

const jwtMiddleware =  ( req :RequestDecoded,  res : Response, next : NextFunction ) => {
    try {
        const { access_token } = req.cookies
        const decoded = jwt.verify(access_token, process.env.JWT_SECRET)
        req.decoded = decoded
        next()
    } catch (e){
        next()
    }
}

export default jwtMiddleware