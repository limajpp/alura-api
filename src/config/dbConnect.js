import mongoose from "mongoose";

const connectDb = async function () {
  await mongoose.connect(process.env.DB_CONNECTION_STRING);
  return mongoose.connection;
};

export default connectDb;
