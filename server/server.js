import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// ------------------------
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
// ----------------------------------
import connectToMongoDB from "./db/connectToMongoDB.js";
// --------------------------------
const app = express();
const PORT = process.env.PORT || 5000;
// -----------------------------------
dotenv.config();
app.use(express.json()) //for parsing the incoming requests with JSON payloads(req.body)
app.use(cookieParser())
// ------------------------------------
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// -------------------------------------
// app.get("/", (req, res) => {
//   res.send("api running");
// });

app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`server is running on port:${PORT}`);
});