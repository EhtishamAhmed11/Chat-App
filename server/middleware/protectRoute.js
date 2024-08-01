import jwt, { decode } from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      res.status(401).json({ message: "Unauthorized - No Token Provided" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ error: "Unauthorized - User Not Found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("error in protectRoute Middleware:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export default protectRoute