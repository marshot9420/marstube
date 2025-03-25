import "./database";

import express from "express";
import morgan from "morgan";

import { URLS } from "./constants/urls";
import rootRouter from "./routers/rootRouter";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use(URLS.STATIC.PREFIX, express.static("dist"));

app.use(URLS.CLIENT.HOME, rootRouter);

export default app;
