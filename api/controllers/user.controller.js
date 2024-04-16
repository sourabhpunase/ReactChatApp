import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js"


export const getUsersForSidebar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;

		const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const deleteUser= async(req,res,next)=> {
    if(req.user.id!==req.params.id) return next(errorHandler(401," you can only delete your own account"));

try{
    await User.findByIdAndDelete(req.params.id,{new:true});
    res.clearCookie('access_token');
res.status(200).json('user deleted successfully');

}
catch(error){
    next(error);

}

}
