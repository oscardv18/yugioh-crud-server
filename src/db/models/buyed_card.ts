import { Schema, model } from "mongoose";

interface BuyedCard {
    users_buyers: Array<Object>,
    card_id: Number,
}

const Buyedcard = new Schema<BuyedCard>({
    users_buyers: [{
        userId: String,
        username: String,
    }],
    card_id: Number,
})

const BuyedC = model<BuyedCard>('Buyed_Card', Buyedcard);

export default BuyedC;