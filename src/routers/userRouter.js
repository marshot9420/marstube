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
import { protectorMiddleware, publicOnlyMiddleware } from "../middlewares";

const userRouter = express.Router();

userRouter.route("/signout").all(protectorMiddleware).get(signout);
userRouter.route("/edit").all(protectorMiddleware).get(getEdit).post(postEdit);
userRouter.route("/:id").get(profile);
userRouter
  .route("/github/start")
  .all(publicOnlyMiddleware)
  .get(startGithubSignin);
userRouter
  .route("/github/finish")
  .all(publicOnlyMiddleware)
  .get(finishGithubSignin);
userRouter
  .route("/google/start")
  .all(publicOnlyMiddleware)
  .get(startGoogleSignin);
userRouter
  .route("/google/finish")
  .all(publicOnlyMiddleware)
  .get(finishGoogleSignin);
userRouter
  .route("/kakao/start")
  .all(publicOnlyMiddleware)
  .get(startKakaoSignin);
userRouter
  .route("/kakao/finish")
  .all(publicOnlyMiddleware)
  .get(finishKakaoSignin);

export default userRouter;
