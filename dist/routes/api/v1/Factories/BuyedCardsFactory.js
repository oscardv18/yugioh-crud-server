"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const buyed_card_1 = __importDefault(require("../../../../db/models/buyed_card"));
const router = express_1.default.Router();
router.post("/buyedcards", (_req, res) => {
    try {
        const newCardBuy = new buyed_card_1.default({
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
    }
    catch (err) {
        res.status(500).json({ err: "Error al crea collection" });
    }
});
exports.default = router;
//# sourceMappingURL=BuyedCardsFactory.js.map