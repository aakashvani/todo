/*For crud function but without method such as get ,post ,delete and update of the given collection. this will handled by route.js */

const Todo=require("./model")
const logger=require("../../utils/logger/logger")

const createTodo=async(req,res)=>{
   try{
     const todo =await Todo.create(req.body)
    //  return res.send(todo)
    logger.info(
        `: todoId: => successfully logged in - ${null}`
      );
      console.log("create the todo",todo)
    //    return { todo };
    return {
        infomess: "success",
        infodata: {todo}
      };
   }
   catch(err){
    return {message:err.message}
   }
}

const updateTodo=async(req,res)=>{
    try{
      const todo=await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true})
    //   return res.send(todo)
    logger.info(
        `: todoId: => successfully logged in - ${null}`
      );
      console.log(todo)
       return { todo };
    }
    catch(err){
        return {message:err.message}
    }
}

const getTodo=async(req,res)=>{
    try{
      const todo=await Todo.find()
    //   return res.send(todo)
    logger.info(
        `: todoId: => successfully logged in - ${null}`
      );
      console.log("get the all todos",todo)
       return { todo };
    }
    catch(err){
        return {message:err.message}
    }
}

module.exports={createTodo,updateTodo,getTodo}