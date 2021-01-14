import { NextFunction, Response } from "express";
import { RequestDecoded } from "./jwtMiddleware";

const checkLoggedIn = (req:RequestDecoded, res: Response, next:NextFunction) => {
    if (!req.decoded){
        res.status(401).json({ error: new Error('허가되지 않은 사용자입니다.').toString() })
    }else{
        next()
    }
}
export default checkLoggedIn