import express from "express";
import usersRoutes from "./routes/usersRoutes";

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use("/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`Users service running on port ${PORT}`);
});
