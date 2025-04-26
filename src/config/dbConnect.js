import mongoose, { mongo } from "mongoose";

const connectDb = async function () {
  mongoose.connect(
    "mongodb+srv://joaopedrocal101:bCdj9Q7RfLa4pMPI@alura-api.qspdwom.mongodb.net/?retryWrites=true&w=majority&appName=Alura-API"
  );
  return mongoose.connection;
};

export default connectDb;
