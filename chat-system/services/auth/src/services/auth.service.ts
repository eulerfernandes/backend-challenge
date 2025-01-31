import bcrypt from "bcryptjs";
import { User } from "@users/model/user.model";
import TokenUtil from "../utils/token.util";

type AuthData = { email: string; password: string };

class AuthService {
  async register(data: AuthData) {
    const { email, password } = data;

    // Verificar se o e-mail já está cadastrado
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) throw new Error("Email already registered");

    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar o usuário no banco de dados
    const user = await User.create({ email, password: hashedPassword });

    return { id: user.id, email: user.email };
  }

  async login(data: AuthData) {
    const { email, password } = data;

    // Buscar usuário no banco
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error("Invalid credentials");

    // Comparar senha
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error("Invalid credentials");

    // Gerar token
    const token = TokenUtil.generateToken(
      { id: user.id },
      process.env.JWT_SECRET || "default_secret",
      "1h"
    );

    return token;
  }

  async getUserFromToken(userData: { id: string }) {
    const user = await User.findByPk(userData.id);
    if (!user) throw new Error("User not found");

    return { id: user.id, email: user.email };
  }
}

export default new AuthService();
