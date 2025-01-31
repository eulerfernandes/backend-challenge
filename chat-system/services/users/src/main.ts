import express from "express";
import dotenv from "dotenv";
import usersRoutes from "./routes/usersRoutes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/users", usersRoutes);

const PORT = Number(process.env.USERS_PORT) || 3002;
app.listen(PORT, () => {
  console.log(`🚀 Users service running on port ${PORT}`);
});
