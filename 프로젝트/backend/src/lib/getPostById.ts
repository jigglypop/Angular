import { NextFunction, Request, Response } from 'express'
import Post from '../models/post'
import mongoose from 'mongoose'
import { RequestDecoded } from './jwtMiddleware'

const { ObjectId }  = mongoose.Types

// 오브젝트 아이디 체크
const getPostById = async ( req : RequestDecoded, res : Response, next : NextFunction ) =>{
    try{
        const { id } = req.params
        if (!ObjectId.isValid(id)){
            throw new Error('잘못된 접근 요청입니다. ')
        } else{
            const post = await Post.findById(id)
            if (!post) {
                throw new Error('포스트가 존재하지 않습니다. ')
            } else{
                req.post = post
                next()
            }
        }
    }catch(e){
        res.status(400).send({ error: e.toString() })
    }

}
export default getPostById