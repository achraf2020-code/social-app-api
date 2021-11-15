

module.exports = {
    getAllPosts : async(req,res)=>{
        console.log(req.user)
        res.send('getAllPosts')
    },
    getOnePost : async(req,res)=>{
        res.send('get One post')
    },
    createPost:async(req,res)=>{
        res.send('Create post')
    },
    updateOnePost : async(req,res) =>{
        res.send('update one post')
    },
    deleteOnePost : async(req,res)=>{
        res.send('Delete one post')
    }
}