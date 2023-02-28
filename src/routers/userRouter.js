import express from "express";
import {
  finishGithubSignin,
  getEdit,
  postEdit,
  profile,
  signout,
  startGithubSignin,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.route("/signout").get(signout);
userRouter.route("/edit").get(getEdit).post(postEdit);
userRouter.route("/:id").get(profile);
userRouter.route("/github/start").get(startGithubSignin);
userRouter.route("/github/finish").get(finishGithubSignin);

export default userRouter;
