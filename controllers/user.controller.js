import {asyncHandler} from "../utils/asynsHandler.js"
import {ApiError} from "../utils/APIerror.js"
import { User } from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js"
const registerUser = asyncHandler(async(req,res)=>{
    //1.GET USER DETAILS
    const {fullName,username,email,password}=req.body
    console.log("e",email);

    if([fullName,username,email,password].some((field)=>field?.trim()===""))
    {
        throw new ApiError(400,"all fields are required")
    }

    const existedUser = User.findOne({
        $or: [{ username },{ email }]
    })
    if (existedUser) {
        throw new ApiError(409,"user already exist");
    }
    const avatarLocalPath = req.files?.avatar[0]?.path
    const coverImageLocalPath = req.files?.coverImage[0]?.path

    if (!avatarLocalPath) {
        throw new ApiError(400,"avatar file is required")
    }
    const avatar= await uploadOnCloudinary(avatarLocalPath)
    const coverImage= await uploadOnCloudinary(coverImageLocalPath)

    if (!avatar) {
        throw new ApiError(400,"avatar file is required")
    }

    const user=await User.create(
        {fullName,
        avatar:avatar.url,
        coverImage:coverImage.url||"",
        email,
        password,
        username:username.toLowerCase()
        })

    const createdUser= await User.findOne(user._id).select("-password -refreshToken")

    if(!createdUser){
        throw new ApiError(500,"something went wrong while registering user ")
    }

    return res.status(201,json(
        new ApiResponse(200,createdUser,"user registered successfully")
    ))
})

export  {registerUser}