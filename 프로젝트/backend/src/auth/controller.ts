import { NextFunction, Request, Response } from "express";
import User, { IUser } from '../models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { RequestDecoded } from "../lib/jwtMiddleware";

// 시리얼라이징
const serialize = ( user : IUser )  =>{
    const data = user.toJSON()
    delete data.hashedPassword
    return data
}
// 토큰 발급
const generateToken = (  user : IUser ) => {
    const token = jwt.sign(
        { _id: user.id, username : user.username },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    )
    return token
}
// 회원가입
export const register = async ( req : Request, res : Response, next : NextFunction ) =>{
    try {
        const { username, password } = req.body
        // 에러처리 (형식)
        if (!username || 
            username.length <= 3 || 
            username.length >= 10  ||             
            !password){
            throw new Error("형식이 올바르지 않습니다.")
        };
        // 에러처리 (이미 존재하는 계정)
        const exists = await User.findOne({ username })
        if (exists) throw new Error("이미 존재하는 계정입니다. ");
        // 해싱과 응답
        const user = new User({username})
        user.hashedPassword = await bcrypt.hash(password, 10)
        await user.save()
        // 토큰 발급
        res.cookie('access_token', generateToken(user),{ maxAge: 1000 * 60 * 60 * 24* 7, httpOnly: true})
        res.status(200).json(serialize(user))
    } catch(e) {
        res.status(500).json({ error: e.toString() })
    }
}
// 로그인
export const login = async ( req : Request, res : Response, next : NextFunction ) =>{
    const { username, password } = req.body
    // 에러처리 (형식)
    if (!username ||
         !password) throw new Error('이름과 비밀번호를 정확히 입력해 주세요')
    try {
        const user = await User.findOne({username})
        // 계정이 존재하는지
        if (!user) throw new Error('같은 이름의 계정이 존재하지 않습니다.')
        // 비밀번호가 일치하지 않음
        const valid = await bcrypt.compare(password, user.hashedPassword)
        if (!valid) throw new Error('비밀번호가 잘못되었습니다')
        // 토큰 발급
        await res.cookie('access_token', generateToken(user),{ maxAge: 1000 * 60 * 60 * 24* 7, httpOnly: true})
        await res.status(200).json(serialize(user))
    } catch (e){
        res.status(500).json({ error: e.toString() })
    }
}
export const check = async ( req : RequestDecoded, res : Response, next : NextFunction ) =>{
    const decoded = req.decoded
    if (!decoded){
        res.status(401).json({ error: new Error('허가되지 않은 사용자입니다.').toString() })
    }
    res.status(200).json(decoded)
}
// 로그아웃
export const logout = async ( req : Request, res : Response, next : NextFunction ) =>{
    await res.clearCookie('access_token')
    await res.status(200).json({message: '로그아웃 되었습니다.'})
}

