/* eslint-disable no-console */
import 'reflect-metadata';
import * as dotenv from 'dotenv';
import { Connection, createConnection } from 'typeorm';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

dotenv.config();

export const createDbConnection = (): Promise<Connection> => {
  return createConnection();
};

const createApp = (): express.Express => {
  const app = express();
  app.use(express.json({ limit: '3mb' }));
  app.use(cors());
  app.use(morgan('common'));

  return app;
};

const createServer = (app: express.Express) => {
  const { PORT } = process.env;
  app.listen(PORT, () => {
    console.log(`API is running on port ${PORT}`);
  });
};

const startApplication = async () => {
  try {
    await createDbConnection();
    console.log('Database connected!');
    const app = createApp();

    createServer(app);
  } catch (error) {
    console.log('Fatal Error: ', error);
  }
};

export default startApplication();
