import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import connect from "../db";
import globalRouter from "./routers/globalRouter";

const app = express();
const PORT = process.env.PORT;

app.set("view engine", "pug");

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan(`dev`));
connect();

app.use("/", globalRouter);

app.listen(PORT, () => {
  console.log(`Server Start ${PORT}`);
});
