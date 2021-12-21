import * as express from "express";

export const createServer = (app: express.Express) => {
  const PORT = process.env.PORT;
  app.listen(PORT, () =>{
    console.log(`API is running on port ${PORT}`);
  })
}
