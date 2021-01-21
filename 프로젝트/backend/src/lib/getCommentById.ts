import { NextFunction, Response } from 'express'
import Comment from '../models/comment'
import Post from '../models/post'
import mongoose from 'mongoose'
import { RequestDecoded } from './jwtMiddleware'

const { ObjectId }  = mongoose.Types

// 오브젝트 아이디 체크
const getCommentById = async ( req : RequestDecoded, res : Response, next : NextFunction ) =>{
    try{
        const { postId, id } = req.params
        if (!ObjectId.isValid(id)){
            throw new Error('잘못된 접근 요청입니다. ')
        } else{
            const post = await Post.findById(postId)
            const comment = await Comment.findById(id)
            if (!post || !comment) {
                throw new Error('코멘트가 존재하지 않습니다. ')
            } else{
                req.post  = post
                req.comment = comment
                next()
            }
        }
    }catch(e){
        res.status(400).send({ error: e.toString() })
    }

}
export default getCommentById