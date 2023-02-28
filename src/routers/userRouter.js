import express from "express";
import {
  finishGithubSignin,
  finishGoogleSignin,
  finishKakaoSignin,
  getEdit,
  postEdit,
  profile,
  signout,
  startGithubSignin,
  startGoogleSignin,
  startKakaoSignin,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.route("/signout").get(signout);
userRouter.route("/edit").get(getEdit).post(postEdit);
userRouter.route("/:id").get(profile);
userRouter.route("/github/start").get(startGithubSignin);
userRouter.route("/github/finish").get(finishGithubSignin);
userRouter.route("/google/start").get(startGoogleSignin);
userRouter.route("/google/finish").get(finishGoogleSignin);
userRouter.route("/kakao/start").get(startKakaoSignin);
userRouter.route("/kakao/finish").get(finishKakaoSignin);

export default userRouter;
