import { NextFunction, Request, Response } from "express";
import { RequestDecoded } from "../lib/jwtMiddleware";
import Post from '../models/post'
import Comment from '../models/comment'


// 댓글읽기
export const readComment = async ( req : RequestDecoded, res : Response, next : NextFunction ) => {
    try {
        const post = await req.post
        res.status(200).json({
            comments: post.comment
        })
    } catch(e){
        res.status(404).send({ error: e.toString() })
    }
}

// 댓글쓰기
export const writeComment = async ( req : RequestDecoded, res : Response, next : NextFunction ) =>{
    const { id } = req.params
    try{
        const { content }  = req.body.comment
        if (!content ) throw new Error('댓글 내용을 입력해 주세요')
        const comment = new Comment({
            content: content,
            user : req.decoded
        })
        const post = await Post.findById(id)
        await post.comment.push(comment)
        await post.save()
        await comment.save()
        res.status(200).json({
            comments: post.comment
        })
    }catch(e){
        res.status(500).send({ error: e.toString() })
    }
}   


// 삭제
export const removeComment = async ( req : RequestDecoded, res : Response, next : NextFunction ) => {
    try{
        const post = await req.post
        const comment = await req.comment
        const n = await post.comment.length
        const _id = await comment._id
        post.comment = await post.comment.filter(x=> x._id.toString() !== comment._id.toString())
        if (n === post.comment.length) throw new Error('동일한 이름의 댓글이 없습니다')
        await post.save()
        await Comment.findByIdAndRemove(_id).exec()
        res.status(200).json({ message: '댓글이 삭제되었습니다.' })
    }catch(e){
        res.status(404).send({ error: e.toString() })
    }

}

