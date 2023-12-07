import { error } from "console";
import { connect, disconnect } from "mongoose";

async function connectToDb() {
  try {
    await connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to connect to database");
  }
}

async function disconnectFromDb() {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("DB Disconnection failed");
  }
}

export { connectToDb, disconnectFromDb };
