import express, { Router } from "express";
import CardController from "../../../controllers/cardController";

// Express Router
const router: Router = express.Router();

// Route for get all cards in the user deck
router.get("/", CardController.getAllCardsDeck);

// Route for View one card and details
router.get("/:cardDeckId", CardController.getOneCardDeck);

// Route for add new card to user deck
router.post("/", CardController.addCardToDeck);

// Route for editar or update one card in user deck
router.patch("/:cardDeckId", CardController.updateCardDeck);

// Route for delete card
router.delete("/:cardDeckId", CardController.deleteCardDeck);

export default router;
