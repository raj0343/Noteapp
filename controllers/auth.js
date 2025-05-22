import UserModel from "../model/auth.js"       /////import the Usermodel from auth.js models



const Register= async(req,res)=>{
   try {
    const {userName,email,password}=req.body              /////get the data  of the user from body frontend    
    const existingUser=await UserModel.findOne({email})      ////checking if the user is already exisited or not
    if(existingUser){
            return res.status(303).json({sucess:false, message:"user already existed please login"})
    }
    
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

export {Register}