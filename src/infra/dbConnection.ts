import { Connection, createConnection } from "typeorm";

export const createDbConnection = (): Promise<Connection> => {
  return createConnection();
};
