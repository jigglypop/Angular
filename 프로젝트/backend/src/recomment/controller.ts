import { NextFunction, Response } from "express";
import { RequestDecoded } from "../lib/jwtMiddleware";
import Recomment from '../models/recomment'


// 대댓글 쓰기
export const writeRecomment = async ( req : RequestDecoded, res : Response, next : NextFunction ) =>{
    try{
        const { content }  = req.body.recomments
        const comment  = req.comment
        const post = req.post
        if (!content ) throw new Error('대댓글 내용을 입력해 주세요')
        if (!comment || !post ) throw new Error('포스트와 댓글이 없습니다.')
        const recomment = new Recomment({
            content: content,
            user : req.decoded
        })
        for (let _comment of post.comment){
            if (_comment._id.toString() === comment._id.toString()){
                await _comment.recomment.push(recomment)
            }
        }
        await post.save()
        await comment.save()
        await recomment.save()
        res.status(200).json({
            comments: post.comment
        })
    } catch(e){
        res.status(500).send({ error: e.toString() })
    }
}   


// 대댓글 삭제
export const removeRecomment = async ( req : RequestDecoded, res : Response, next : NextFunction ) => {
    try {
        const { postId, commentId, recommentId } = req.params
        const comment  = req.comment
        const post = req.post
        if (!comment || !post ) throw new Error('포스트와 댓글이 없습니다.')
        for (let _comment of post.comment){
            if (_comment._id.toString() === comment._id.toString()){
                _comment.recomment =  _comment.recomment.filter(x => x._id.toString() !== recommentId.toString())
            }
        }
        await post.save()
        await comment.save()
        await Recomment.findByIdAndRemove(recommentId).exec()
        res.status(200).json({
            comments: post.comment
        })   
    } catch(e){
        res.status(404).send({ error: e.toString() })
    }

}

