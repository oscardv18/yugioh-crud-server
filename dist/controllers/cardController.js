"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cardServices_1 = __importDefault(require("../services/cardServices"));
const getAllCardsDeck = (req, res) => {
    cardServices_1.default.getAllCardsDeck();
    res.send("Get All Cards of user deck");
};
const getOneCardDeck = (req, res) => {
    cardServices_1.default.getOneCardDeck();
    res.send("Get an existent card in user deck");
};
const addCardToDeck = (req, res) => {
    cardServices_1.default.addCardToDeck();
    res.send("Add new card to user deck");
};
const updateCardDeck = (req, res) => {
    cardServices_1.default.updateCardDeck();
    res.send("UPdate an existent card in user deck");
};
const deleteCardDeck = (req, res) => {
    cardServices_1.default.deleteCardDeck();
    res.send("Delete an existent card in user deck");
};
exports.default = {
    getAllCardsDeck,
    getOneCardDeck,
    addCardToDeck,
    updateCardDeck,
    deleteCardDeck,
};
//# sourceMappingURL=cardController.js.map