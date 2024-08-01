import User from "../models/user.model.js"

export const getUsersForSidebar = async(req,res)=>{
    try {
        const loggedInUserId = req.user._id
        const filteredUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password") // find every user in database except the one which is not equal to loggedInUserId----$ne=>not equal
        res.status(200).json(filteredUsers)
    } catch (error) {
        console.log("Error in getUserSidebar:",error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}