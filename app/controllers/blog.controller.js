const blogmodel = require("../database/models/blog.model")
class Blog{
    static index = async(req, res)=>{ // localhost:3000/blog/
        try{
            const blogData = await blogmodel.find()
            res.send({apiStatus:true, data:blogData, message:"done"})
        }
        catch(e){
            res.send({apiStatus:false, message:e.message, data:e})
        }
    }
    static create = async (req,res)=>{
        try{
            const blogData = new blogmodel({
                userId:req.user._id, 
                ...req.body
            }) 
            await blogData.save()
            res.status(200).send({apiStatus:true, data:blogData, message:"done"})
        }
        catch(e){
            res.status(500).send({apiStatus:false, message:e.message, data:e})
        }
    }
    static getMyPosts =  async(req, res)=>{ // localhost:3000/blog/
        try{
            const blogData = await blogmodel.find({userId:req.user._id})
            res.status(200).send({apiStatus:true, data:blogData, message:"done"})
        }
        catch(e){
            res.status(500).send({apiStatus:false, message:e.message, data:e})
        }
    }
    static myposts = async(req,res)=>{ // localhost:3000/blog/
        try{
            await req.user.populate("myPosts")
            res.status(200).send({apiStatus:true, data:req.user.myPosts, message:"done"})
        }
        catch(e){
            res.status(500).send({apiStatus:false, message:e.message, data:e})
        }
    }
}
module.exports = Blog