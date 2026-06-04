import User from '../models/user.js';
const registerUser=async(req,res)=>{
    try{
        const {name,email,mobile,password}=req.body;
        if(!name||!email|| !mobile||! password){//CHECKING IF ALL FIELDS ARE THERE
            return res.status(400).json({message:"All fields are required"});//IF NOT THERE
        }
        const user =new User({name,email,mobile,password});//creating new user
        await user.save();//will take time hence using await
        res.status(201).json({message:"User Registered Successfully"})
        

    }catch(error){
    console.log(error);
    res.status(500).json({message:"Server error"})

    }
}
const loginUser=async(req,res)=>{
    try{
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
        return res.status(400).json({ message: "User not found" });
        }
        if (user.password!==password) {
        return res.status(400).json({ message: "Wrong password" });
        }

        res.status(201).json({message:"User Logged In Successfully"})

    }catch(error){
    console.log(error);
    res.status(500).json({message:"Server error"})

    }
}
export  {registerUser, loginUser};
//     res.status(201).json({ 
//         message: "User Registered (mock)",
//          data: req.body });
//  } catch (error) { 
//     console.log(error); 
//     res.status(500).json({ message: "Server error" }); 
// }
 