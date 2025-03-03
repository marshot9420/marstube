import express from "express";

import { rootController } from "../controllers/rootController";

const rootRouter = express.Router();

rootRouter.get("/", rootController);

export default rootRouter;
