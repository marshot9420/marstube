import express from "express";
import {
  getSignin,
  getSignup,
  postSignin,
  postSignup,
} from "../controllers/userController";
import { home, search } from "../controllers/videoController";

const rootRouter = express.Router();

rootRouter.route("/").get(home);
rootRouter.route("/search").get(search);
rootRouter.route("/signup").get(getSignup).post(postSignup);
rootRouter.route("/signin").get(getSignin).post(postSignin);

export default rootRouter;
