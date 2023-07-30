"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", (_req, res) => {
    res.send("Get All Cards of user");
});
router.get("/:cardDeckId", (_req, res) => {
    res.send("Get an existent card in user deck");
});
router.post("/", (_req, res) => {
    res.send("Add new card to user deck");
});
router.patch("/:cardDeckId", (_req, res) => {
    res.send("Update an existent card in user deck");
});
router.delete("/:cardDeckId", (_req, res) => {
    res.send("Delete an existent card in user deck");
});
exports.default = router;
//# sourceMappingURL=cardsDeck.js.map