const mongoose= require("mongoose")
const courseSchema = mongoose.Schema({
    AdminId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    title:{
        type:String,
        trim:true,
        required:true
    },
    courseImg:{
        type:String,
        trim:true,
        required:true
    },
    description:{
        type:String,
        trim:true,
        required:true
    },
    chapters:[
        {
            sectionTitle:{ type:String,
                trim:true,
                required:true},

            sectionLink:{ type:String,
                trim:true,
                required:true},

            sectionimg:{ type:String,
                trim:true,
                required:true},

            sectionDescription:{ type:String,
                trim:true,
                required:true},

        }
    ]
},
{ 
    timestamps:true 
}
)

const Course = mongoose.model("Course", courseSchema)
module.exports=Course