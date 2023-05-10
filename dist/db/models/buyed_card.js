"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Buyedcard = new mongoose_1.Schema({
    users_buyers: [{
            userId: String,
            username: String,
        }],
    card_id: Number,
});
const BuyedC = (0, mongoose_1.model)('Buyed_Card', Buyedcard);
exports.default = BuyedC;
//# sourceMappingURL=buyed_card.js.map