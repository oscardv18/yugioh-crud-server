import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import dbConnection from "./db/db";
import v1CardsDeckApi from "./routes/api/v1/cardsDeck";
import v1UserFactory from "./routes/api/v1/Factories/UserFactory";
import v1CardsFactory from "./routes/api/v1/Factories/BuyedCardsFactory";

dotenv.config();

const app: Express = express();

app.use("/api/v1/cards", v1CardsDeckApi);
app.use("/api/v1/factories/cards", v1CardsFactory);
app.use("/api/v1/factories/user", v1UserFactory);

const startServer = async () => {
  if (typeof process.env.MONGODB_URL === "string") {
    dbConnection(process.env.MONGODB_URL);
  }

  app.listen(process.env.SERVER_PORT, () => {
    console.log("🌩️[Server] Server is running! http://localhost:8000");
    console.log("[MongoDB Express] Mongo UI is running http://localhost:8081");
  });
};

startServer();
