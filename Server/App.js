import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true, limit: "100kb" }));

app.use(cookieParser());

export { app };
