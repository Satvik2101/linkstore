import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.DB_NAME;

// check the MongoDB URI
if (!MONGODB_URI) {
  throw new Error("Define the MONGODB_URI environmental variable");
}

// check the MongoDB DB
if (!MONGODB_DB) {
  throw new Error("Define the MONGODB_DB environmental variable");
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  try {
    const { connection } = await mongoose.connect(MONGODB_URI);
    if (connection.readyState == 1) {
      console.log("database connected");
    }
  } catch (errors) {
    return Promise.reject(errors);
  }

  // // check the cached.
  // if (cachedClient && cachedDb) {
  //   // load from cache
  //   return {
  //     client: cachedClient,
  //     db: cachedDb,
  //   };
  // }

  // // set the connection options
  // const opts = {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // };

  // // Connect to cluster
  // try {
  //   console.log("Trying to Connect to DB");

  //   let client = new MongoClient(MONGODB_URI, opts);
  //   await client.connect();
  //   let db = client.db(MONGODB_DB);

  //   // set cache
  //   cachedClient = client;
  //   cachedDb = db;

  //   console.log("Connected to DB");
  //   return {
  //     client: cachedClient,
  //     db: cachedDb,
  //   };
  // } catch (error) {
  //   throw new Error(error);
  // }
}
