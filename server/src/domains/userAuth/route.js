/* For routing using methods but not functionality  */
const express=require("express");
const {register,login}=require("./controller.js")
const router = express.Router();

// app.use(express.json());

router.post("/register",async(req,res)=>{
    try{
      const registeruser=await register(req)
      // console.log("register",register())
      return res.send(registeruser)
    }
    catch(err){
        console.log(err)
    }
})

router.post("/login",async(req,res)=>{
    try{
      const loginuser=await login(req)
      return res.send(loginuser)
    }
    catch(err){
        console.log(err)
    }
})
// app.post("/login",login)
// router.route("/register").post(register);
// router.route("/login").post(login);

module.exports=router
