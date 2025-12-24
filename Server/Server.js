import { app } from "./App.js";
import { connectDB } from "./DB/Db.db.js";
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.get("/", (req, res) => {
    res.send("Server is running");
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
});
