import mongoose from 'mongoose';
export const dbConnect = async () => {
  const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://codewithneon:kok_password@kokcluster.lclhyq6.mongodb.net/kok_db?retryWrites=true&w=majority"
  if (mongoose.connections.readyState === 1) {
    return mongoose.connection.asPromise();
  }
  return await mongoose.connect(MONGODB_URI)
}