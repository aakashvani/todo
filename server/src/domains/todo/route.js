/* For routing using methods but not functionality  */

const express=require("express")
const {createTodo,updateTodo,getTodo} =require("./controller.js")
const resGen=require("../../utils/response/resGenerator.js")
const router=express.Router()

router.post("/create",async(req,res)=>{
    try{
      const createTodoList=await createTodo(req)
    //   return res.send(createTodoList)
    return resGen(res,createTodoList)
    }
    catch(err){
        console.log(err)
    }
})

router.patch("/:id",async(req,res)=>{
    try{
      const updateTodoList=await updateTodo(req)
    //   return res.send(updateTodoList)
    return resGen(res,updateTodoList)
    }
    catch(err){
        console.log(err)
    }
})

router.get("",async(req,res)=>{
    try{
      const getTodoList=await getTodo(req)
    //   res.send(getTodoList)
    return resGen(res,getTodoList)
    }
    catch(err){
        console.log(err)
    }
})
module.exports=router