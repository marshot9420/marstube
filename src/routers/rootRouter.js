import express from "express";

import { URLS } from "../constants/urls";
import { rootController } from "../controllers/rootController";

const rootRouter = express.Router();

rootRouter.get(URLS.API.ROOT, rootController);

export default rootRouter;
