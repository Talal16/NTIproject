const courseModel = require("../database/models/course.model")
class Course{

    static create = async(req, res) =>{
        try{
            const courseContent = new courseModel({  AdminId:req.user._id,  ...req.body})
            await courseContent.save()
            res.status(200).send({ apiStatus:true, message:"course created", data: courseContent }) 
        }
        catch(e){
            res.status(500).send({ apiStatus: false, message:e.message, data:e })
        }
    }
    


}
module.exports=Course
