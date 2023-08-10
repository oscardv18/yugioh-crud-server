import { Request, Response } from "express";
import CardServices from "../services/cardServices";

// Controller Method for the route match '/'
const getAllCardsDeck = (req: Request, res: Response) => {
  CardServices.getAllCardsDeck();
  res.send("Get All Cards of user deck");
};

const getOneCardDeck = (req: Request, res: Response) => {
  CardServices.getOneCardDeck();
  res.send("Get an existent card in user deck");
};

const addCardToDeck = (req: Request, res: Response) => {
  CardServices.addCardToDeck();
  res.send("Add new card to user deck");
};

const updateCardDeck = (req: Request, res: Response) => {
  CardServices.updateCardDeck();
  res.send("UPdate an existent card in user deck");
};

const deleteCardDeck = (req: Request, res: Response) => {
  CardServices.deleteCardDeck();
  res.send("Delete an existent card in user deck");
};

export default {
  getAllCardsDeck,
  getOneCardDeck,
  addCardToDeck,
  updateCardDeck,
  deleteCardDeck,
};
