import mongoose from "mongoose"

const URI = process.env.MONGODB_URI

const connectDB = async() => {
    try {
        await mongoose.connect(URI)
        console.log("The Connection is successful!")
    } catch (error) {
        console.log("The Connection is unsuccessful, due to "+error)
    }
}

export default connectDB