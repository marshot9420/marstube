import "./database";

import express from "express";
import morgan from "morgan";

import rootRouter from "./routers/rootRouter";

const app = express();
const logger = morgan("dev");
const PORT = 3000;

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(logger);
app.use("/", rootRouter);

const handleServerListening = () =>
  console.log(`✅ 서버 수신 중 - http://localhost:${PORT}`);

app.listen(PORT, handleServerListening);
