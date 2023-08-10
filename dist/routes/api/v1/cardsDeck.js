"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cardController_1 = __importDefault(require("../../../controllers/cardController"));
const router = express_1.default.Router();
router.get("/", cardController_1.default.getAllCardsDeck);
router.get("/:cardDeckId", cardController_1.default.getOneCardDeck);
router.post("/", cardController_1.default.addCardToDeck);
router.patch("/:cardDeckId", cardController_1.default.updateCardDeck);
router.delete("/:cardDeckId", cardController_1.default.deleteCardDeck);
exports.default = router;
//# sourceMappingURL=cardsDeck.js.map