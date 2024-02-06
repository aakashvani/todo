/*This is parent Route file where all collections apis routing will be declared with end poitns   */

const express =require("express");
const router=express.Router();

const userRegister=require("../domains/userAuth/index")
const userLogin=require("../domains/userAuth/index")

const CreateTodo=require("../domains/todo/index")
const UpdateTodo=require("../domains/todo/index")
const GetTodo=require("../domains/todo/index")

router.use("/",userRegister)
router.use("/",userLogin)

router.use("/",CreateTodo)
router.use("/",UpdateTodo)
router.use("/",GetTodo)

module.exports=router
