const Post = require('../models/post')
const { BadRequestError,UnauthorizedRequest,NotFoundError} = require('../customErrors')
const {StatusCodes} = require('http-status-codes')

module.exports = {
    getAllPosts : async(req,res)=>{
        const {id} = req.user
        // console.log(req.user)
        const posts = await Post.find({createdBy:id})
        res.status(StatusCodes.OK).json({posts})
        res.send('getAllPosts')
    },
    getOnePost : async(req,res)=>{
        const postId = req.params.id
        const userId = req.user.id

        const post = await Post.findOne({_id:postId,createdBy:userId})
        if(!post){
            throw new NotFoundError ('You have no post')
        }
        res.status(StatusCodes.OK).json({post})
    },
    createPost:async(req,res)=>{
        const {text} = req.body
        const postTemp = {
            text:text ,
            createdBy:req.user.id
        }
        const post = await Post.create(postTemp)
        if(!post){
            throw BadRequestError('Post must have a text')
        }
        res.status(StatusCodes.OK).json({post})
        res.send('Create post')
    },
    updateOnePost : async(req,res) =>{
        const postId = req.params.id
        const userId = req.user.id
        const {text} = req.body
        const postUpdateInfo = {
            text:text
        }
        const post = await Post.findOneAndUpdate({_id:postId,createdBy:userId},postUpdateInfo,{new:true,runValidator:true})
        res.status(StatusCodes.OK).json({post})
    },
    deleteOnePost : async(req,res)=>{
        const postId = req.params.id
        const userId = req.user.id
        const post = await Post.findOneAndDelet({_id:postId,createdBy:userId})
        res.status(StatusCodes.OK).json({post})
    }
}