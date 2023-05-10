import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import dbConnection from "./db/db";

dotenv.config();

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Hello World!",
  });
});

const startServer = async () => {
  if (typeof process.env.MONGODB_URL === "string") {
    dbConnection(process.env.MONGODB_URL);
  }

  app.listen(process.env.SERVER_PORT, () => {
    console.log("🌩️[Server] Server is running! http://localhost:8000");
  });
};

startServer();
