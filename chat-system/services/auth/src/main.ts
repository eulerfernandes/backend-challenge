import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// Rotas
import authRoutes from "./routes/auth.routes";
app.use("/auth", authRoutes);

const PORT = process.env.AUTH_PORT || 3001;
app.listen(PORT, () => {
  console.log(`Auth service running on port ${PORT}`);
});
