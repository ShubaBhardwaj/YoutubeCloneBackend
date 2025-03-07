import apiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const healthCheck = asyncHandler(async (req,res)=>{
    return res
    .status(200)
    .json(new apiResponse(200,"OK","Health Check Successfull"));
})

export {healthCheck};