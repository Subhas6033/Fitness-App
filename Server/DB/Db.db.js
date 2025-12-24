import mongoose from "mongoose";

console.log("Connecting to DB...");

export const connectDB = async () => {
  try {
    await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}?appName=Cluster0`
    );
    console.log("DB Connected Successfully");
  } catch (error) {
    console.error("DB Connection Error:", error);
    process.exit(1);
  }
};
