import * as express from "express";
import * as cors from "cors";
import * as morgan from "morgan";

export const createApp = (): express.Express => {
  const app = express();
  app.use(express.json({ limit: "3mb" }));
  app.use(cors());
  app.use(morgan("dev"));

  return app;
};
