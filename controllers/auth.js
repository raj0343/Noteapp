import UserModel from "../model/auth.js"       /////import the Usermodel from auth.js models
import jwt from "jsonwebtoken"



const Register= async(req,res)=>{
   try {
    const {userName,email,password}=req.body              /////get the data  of the user from body frontend    

    if 
    (!userName || !email || !password) {
        return res.status(400).json({ sucess:false,message: "Please fill in all fields" });     //////
        }


    const existingUser=await UserModel.findOne({email})      ////checking if the user is already exisited or not
    if(existingUser){
            return res.status(303).json({sucess:false, message:"user already existed please login"})
    }
    

    // const hashpassword=await bcrypt.hashSync(password,10)     /////using this to hash the password in the database 
    const newUser= new UserModel({           /////////if the user is new let him see that you have to loged in 
        userName,email,password
    })


    newUser.save()
    res.status(200).json({sucess:true,message:"sucessfully loged in ",User:newUser})     /////shows that the new user logged in sucessfully

   } catch (error) {
            console.log(error)
            res.status(500).json({sucess:true,message:"internal error"})   ////if the error is in the code internally sees error

   }
}


////for login for the existed users
const login= async(req,res)=>{
    try {
        res.send(email,password)=req.body
        const checkUser=await UserModel.findOne({email})
        if(!findUser){
            return res.status(404).json({sucess:false,message:"user not found please register"})
        }
        const comparepassword=await password.compare(password,findUser.password)
        if(!comparepassword){
            return res.status(303).json({sucess:false,message:"password is incorrect"})
            }


            const token= await jwt.sign({userId:findUser._id},process.env.secretKey,{expiresIn:"3d"})
            res.cookie("token",token,{
                httpOnly:true,
                maxAge: 3 * 24 * 60 * 60 * 1000,
                secure:false
            })



            res.status(200).json({sucess:true,message:"sucessfully loged in ",User:findUser,
                token
            })
    } catch (error) {
        
    }
}

export {Register,login}