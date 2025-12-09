import mongoose from "mongoose";

declare global {
  // allow global cache in dev to avoid multiple connections
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var _mongoose: any;
}

const MONGODB_URI = process.env.MONGODB_URI as string;
if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

async function connectDB() {
  if (global._mongoose && global._mongoose.connection.readyState) {
    return global._mongoose;
  }

  const mongooseOpts = {
    // options here if you want
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  } as mongoose.ConnectOptions;

  const conn = await mongoose.connect(MONGODB_URI, mongooseOpts);
  global._mongoose = conn;
  return conn;
}

export default connectDB;
