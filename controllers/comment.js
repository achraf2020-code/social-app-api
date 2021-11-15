

module.exports = {
    getAllComment :async(req,res)=>{
        res.send('All Comment Routes')
    },
    getOneComment : async (req,res)=>{
        res.send('get one comment')
    },
    createComment :async (req,res)=>{
        res.send('create Comment')
    },
    updateComment : async(req,res)=>{
        res.send('update Comment')
    },
    deleteComment : async(req,res)=>{
        res.send('delete Comment')
    }
}