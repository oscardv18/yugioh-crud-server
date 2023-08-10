import express, { Router, Request, Response } from "express";
import BuyedC from "../../../../db/models/buyed_card";

const router: Router = express.Router();

router.post("/buyedcards", (_req: Request, res: Response) => {
  try {
    const newCardBuy = new BuyedC({
      users_buyers: [
        {
          userId: "asd234aasdfqwer1321",
          username: "louisLitt",
        },

        {
          userId: "mmaqere134354123123",
          username: "harveySpecter",
        },

        {
          userId: "aadfasdfqwerqwer141234",
          username: "jessicaPearson",
        },
      ],
      card_id: 938457394875,
    });

    const cardbuyedSaved = newCardBuy
      .save()
      .then((coll) => {
        console.log("Collection created successfully! ", coll);
      })
      .catch((error) => {
        console.error("Error al crear la collection:", error);
      });
    res.json(cardbuyedSaved);
  } catch (err) {
    res.status(500).json({ err: "Error al crea collection" });
  }
});

export default router;
