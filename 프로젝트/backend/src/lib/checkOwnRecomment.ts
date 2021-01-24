import { NextFunction, Response } from 'express'
import { RequestDecoded } from './jwtMiddleware'

export interface RequestDecodedUsername extends RequestDecoded{
    decoded : {
        username : string
    }
}

// 글쓴이 체크
const checkOwnRecomment = async ( req : RequestDecodedUsername, res : Response, next : NextFunction ) =>{
    if (req.decoded.username !== req.recomment.user.username){
        res.status(403).json({ error: new Error('대댓글 주인이 아닙니다.').toString() })
    } else{
        next()
    }
}
export default checkOwnRecomment