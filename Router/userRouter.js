const express=require("express");
const userRouter=express.Router();

const userContImport=require('../Controller/userController');

userRouter.post('/register',userContImport.registerCont);

userRouter.post('/login',userContImport.loginCont);

userRouter.post('/gLogin/:email',userContImport.googleLoginCont);

module.exports=userRouter;

