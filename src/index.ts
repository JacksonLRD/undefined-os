import "reflect-metadata";
import * as dotenv from "dotenv";
import { createApp } from "./infra/createApp";
import { createServer } from "./infra/createServer";
import { createDbConnection } from "./infra/dbConnection";

dotenv.config();
export const startAplication = async () => {
  try {
    await createDbConnection();
    const app = createApp();
    createServer(app);
  } catch (error) {
    console.log("Fatal Error: ", error);
  }
}

startAplication()
