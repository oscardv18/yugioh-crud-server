import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import dbConnection from "./db/db";
// import BuyedC from "./db/models/buyed_card";
import v1CardsDeckApi from "./routes/api/v1/cardsDeck";

dotenv.config();

const app: Express = express();

app.use("/api/v1/cards", v1CardsDeckApi);

// app.get("/", (req: Request, res: Response) => {
//   // try {
//   //   const newCardBuy = new BuyedC({
//   //     users_buyers: [
//   //       {
//   //         userId: "pqoweiur12",
//   //         username: "oscardv18",
//   //       },
//   //     ],
//   //     card_id: 13242134,
//   //   });
//   //
//   //   const cardbuyedSaved = newCardBuy
//   //     .save()
//   //     .then((coll) => {
//   //       console.log("Collection created successfully! ", coll);
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error al crear la collection:", error);
//   //     });
//   //   res.json(cardbuyedSaved);
//   // } catch (err) {
//   //   res.status(500).json({ err: "Error al crea collection" });
//   // }
//
//   res.send({
//     message: "Hello World!",
//   });
// });

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
