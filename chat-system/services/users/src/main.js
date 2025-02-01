"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/users", usersRoutes_1.default);
const PORT = Number(process.env.USERS_PORT) || 3002;
app.listen(PORT, () => {
    console.log(`🚀 Users service running on port ${PORT}`);
});
