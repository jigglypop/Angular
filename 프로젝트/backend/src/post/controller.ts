import { NextFunction, Request, Response } from "express";
import { RequestDecoded } from "../lib/jwtMiddleware";
import Post, { IPost } from '../models/post'

// 리스트
export const list = async ( req : Request, res : Response, next : NextFunction ) =>{
    const page = req.query.page
    // 한 페이지 최대 숫자
    const Max = 10
    let numPage = 0
    if (typeof page === 'string'){
        numPage = ( parseInt(page) - 1 ) * Max
    }
    const tag = req.query.tag
    const username = req.query.username
    // username 과 tag 쿼리 구현
    const query = {
        ...(username ? { 'user.username' : username} : {}),
        ...(tag? { tags : tag} : {}),
    }
    try{
        const posts = await Post.find(query)
            .sort({ _id : -1 })
            .limit(Max)
            .skip(numPage)
            .exec()
        // 100자 제한 슬라이싱
        const postSlice = posts
            .map(post => post.toJSON())
            .map((post : IPost) => ({
                ...post,
                content: post.content.length < 200 ? post.content : `${post.content.slice(0, 100)}...`
            }))
        const postCount = await Post.countDocuments().exec()
        const last = await Math.ceil(postCount / Max).toString()
        res.status(200).json({ 
            posts : postSlice,
            last : last
        })
    } catch(e){
        res.status(500).json({ message: e })
    }
}

// 글쓰기
export const write = async ( req : RequestDecoded, res : Response, next : NextFunction ) =>{
    const { title, content, tags } = req.body
    try {
        const post = new Post({
            title, 
            content,
            tags,
            user : req.decoded
        })
        // 내용이 모두 있는지
        if (!title || !content ) throw new Error('제목과 내용을 모두 입력해 주세요')
        const result = await post.save()
        await res.status(200).json(result)
    } catch(e){
        res.status(500).json({ error: e.toString() })
    }
}   

// 읽기
export const read = async ( req : RequestDecoded, res : Response, next : NextFunction ) => {
    try {
        const post = await req.post
        res.status(200).json({
            post: post
        })
    } catch(e){
        res.status(404).send({ error: e.toString() })
    }
}

// 삭제
export const remove = async ( req : Request, res : Response, next : NextFunction ) => {
    const { id } = req.params
    try{
        await Post.findByIdAndRemove(id).exec()
        res.status(200).json({ message: '포스트가 삭제되었습니다.' })
    }catch(e){
        res.status(404).send({ error: e.toString() })
    }

}

// 업데이트
export const update = async ( req : Request, res : Response, next : NextFunction ) => {
    const { id } = req.params
    try{
        const post = await Post.findByIdAndUpdate(id, req.body, { new : true })
        res.status(200).json({
            post: post
        })
    }catch(e){
        res.status(500).send({ error: e.toString() })
    }
}
