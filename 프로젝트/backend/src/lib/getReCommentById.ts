import { NextFunction, Response } from 'express'
import Comment from '../models/comment'
import Recomment from '../models/recomment'
import Post from '../models/post'
import mongoose from 'mongoose'
import { RequestDecoded } from './jwtMiddleware'

const { ObjectId }  = mongoose.Types

// 오브젝트 아이디 체크
const getReCommentById = async ( req : RequestDecoded, res : Response, next : NextFunction ) =>{
    try{
        const { postId, commentId, recommentId } = req.params
        if (!ObjectId.isValid(postId) || !ObjectId.isValid(commentId) || !ObjectId.isValid(recommentId)){
            throw new Error('잘못된 접근 요청입니다. ')
        } else{
            const post = await Post.findById(postId)
            const comment = await Comment.findById(commentId)
            const recomment = await Recomment.findById(recommentId)
            if (!post || !comment || !recomment) {
                throw new Error('코멘트가 존재하지 않습니다. ')
            } else{
                req.post  = post
                req.comment = comment
                req.recomment = recomment
                next()
            }
        }
    }catch(e){
        res.status(400).send({ error: e.toString() })
    }

}
export default getReCommentById