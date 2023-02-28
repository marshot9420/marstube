import express from "express";
import {
  getEdit,
  postEdit,
  profile,
  signout,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.route("/signout").get(signout);
userRouter.route("/edit").get(getEdit).post(postEdit);
userRouter.route("/:id").get(profile);

export default userRouter;
