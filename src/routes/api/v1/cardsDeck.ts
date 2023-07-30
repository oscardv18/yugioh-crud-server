import express,{ Request, Response, Router } from "express";

// Express Router
const router: Router = express.Router();

// Route for get all cards in the user deck
router.get("/", (_req: Request, res: Response) => {
  res.send("Get All Cards of user");
});

// Route for View one card and details
router.get("/:cardDeckId", (_req: Request, res: Response) => {
  res.send("Get an existent card in user deck");
});

// Route for add new card to user deck
router.post("/", (_req: Request, res: Response) => {
  res.send("Add new card to user deck");
});

// Route for editar or update one card in user deck
router.patch("/:cardDeckId", (_req: Request, res: Response) => {
  res.send("Update an existent card in user deck");
});

// Route for delete card
router.delete("/:cardDeckId", (_req: Request, res: Response) => {
  res.send("Delete an existent card in user deck");
});

export default router;
