import jwt, { SignOptions } from "jsonwebtoken";

class TokenUtil {
  static generateToken(
    payload: object,
    secret: string,
    expiresIn: string | number
  ) {
    const options: SignOptions = { expiresIn: expiresIn as any }; // Força a conversão para evitar erro de tipagem
    return jwt.sign(payload, secret, options);
  }

  static verifyToken(token: string, secret: string) {
    try {
      return jwt.verify(token, secret);
    } catch (error) {
      throw new Error("Invalid or expired token");
    }
  }
}

export default TokenUtil;
