import mongoose from "mongoose";


const connectToMongoDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected To MongoDB")
    } catch (error) {
        console.log("Error connection to MONGODb:",error.message)
    }
}
export default connectToMongoDB