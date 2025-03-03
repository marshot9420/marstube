import express from "express";
import rootRouter from "./routers/rootRouter";

const app = express();
const PORT = 3000;

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use("/", rootRouter);

const handleServerListening = () =>
  console.log(`✅ 서버 수신 중 - http://localhost:${PORT}`);

app.listen(PORT, handleServerListening);
