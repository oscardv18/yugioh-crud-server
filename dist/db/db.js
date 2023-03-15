"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dbConnection = (url) => {
    mongoose_1.default.connect(url)
        .then(() => console.log(" [MongoDB] Database is running on port 27017"))
        .catch((err) => console.log(err));
    const db = mongoose_1.default.connection;
    db.on('connecting', () => {
        console.log(" [MongoDB] Connecting...");
    });
    db.on('connected', () => {
        console.log(" [MongoDB] Connection successfully!");
    });
    db.on('error', () => {
        console.log(" [MongoDB] Connection error!");
    });
};
exports.default = dbConnection;
//# sourceMappingURL=db.js.map