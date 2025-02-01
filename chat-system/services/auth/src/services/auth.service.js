"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_model_1 = require("../services/users/model/user.model");
const token_util_1 = __importDefault(require("../utils/token.util"));
class AuthService {
    async register(data) {
        const { email, password } = data;
        // Verificar se o e-mail já está cadastrado
        const existingUser = await user_model_1.User.findOne({ where: { email } });
        if (existingUser)
            throw new Error("Email already registered");
        // Criptografar a senha
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        // Criar o usuário no banco de dados
        const user = await user_model_1.User.create({ email, password: hashedPassword });
        return { id: user.id, email: user.email };
    }
    async login(data) {
        const { email, password } = data;
        // Buscar usuário no banco
        const user = await user_model_1.User.findOne({ where: { email } });
        if (!user)
            throw new Error("Invalid credentials");
        // Comparar senha
        const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordValid)
            throw new Error("Invalid credentials");
        // Gerar token
        const token = token_util_1.default.generateToken({ id: user.id }, process.env.JWT_SECRET || "default_secret", "1h");
        return token;
    }
    async getUserFromToken(userData) {
        const user = await user_model_1.User.findByPk(userData.id);
        if (!user)
            throw new Error("User not found");
        return { id: user.id, email: user.email };
    }
}
exports.default = new AuthService();
