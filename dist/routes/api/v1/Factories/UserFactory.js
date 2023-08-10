"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../../../../db/models/user"));
const router = express_1.default.Router();
router.post("/signup", (_req, res) => {
    try {
        const newUser = new user_1.default({
            username: "oscardv18",
            fname: "Oscar",
            lname: "Diaz",
            password: "18os-123$$$M",
            phone_number: 231234124,
            email: "mail@mail.com",
            profile_photo: "owquoqwieuoquwe.jpg",
        });
        newUser
            .save()
            .then((coll) => {
            console.log("User created successfully", coll);
        })
            .catch((err) => {
            console.error("Error to create collection: ", err);
        });
        res.status(201).json({
            name: newUser.fname,
            mail: newUser.email,
        });
    }
    catch (err) {
        res.status(500).json({ err: "Error al crear la coleccion" });
    }
});
exports.default = router;
//# sourceMappingURL=UserFactory.js.map