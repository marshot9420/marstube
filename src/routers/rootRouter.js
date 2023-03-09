import express from "express";
import {
  getSignin,
  getSignup,
  postSignin,
  postSignup,
} from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import { publicOnlyMiddleware } from "../middlewares";

const rootRouter = express.Router();

rootRouter.route("/").get(home);
rootRouter.route("/search").get(search);
rootRouter
  .route("/signup")
  .all(publicOnlyMiddleware)
  .get(getSignup)
  .post(postSignup);
rootRouter
  .route("/signin")
  .all(publicOnlyMiddleware)
  .get(getSignin)
  .post(postSignin);

export default rootRouter;
