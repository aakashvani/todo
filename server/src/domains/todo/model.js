/*For schema of the given collection */

const mongoose=require("mongoose")

const todoSchema=mongoose.Schema({
        taskname:{type:String,required:true},
        description:{type:String,required:true},
        priority:{type:String,required:true},
        reminders:{type:Date,required:true},
        taskDate:{type:Date,required:true}
})
const Todo=mongoose.model("todo",todoSchema)

module.exports=Todo;