import "reflect-metadata";
import * as dotenv from "dotenv";
import { createApp } from "./infra/createApp";
import { createServer } from "./infra/createServer";

dotenv.config();
export const startAplication = () => {
  try {
    const app = createApp();
    createServer(app);
  } catch (error) {
    console.log("Fatal Error: ", error);
  }
}

startAplication()
