"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./db/db"));
const cardsDeck_1 = __importDefault(require("./routes/api/v1/cardsDeck"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use("/api/v1/cards", cardsDeck_1.default);
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof process.env.MONGODB_URL === "string") {
        (0, db_1.default)(process.env.MONGODB_URL);
    }
    app.listen(process.env.SERVER_PORT, () => {
        console.log("🌩️[Server] Server is running! http://localhost:8000");
        console.log("[MongoDB Express] Mongo UI is running http://localhost:8081");
    });
});
startServer();
//# sourceMappingURL=app.js.map