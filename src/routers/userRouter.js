import express from "express";
import {
  finishGithubSignin,
  finishGoogleSignin,
  finishKakaoSignin,
  getChangePassword,
  getEdit,
  postChangePassword,
  postEdit,
  profile,
  signout,
  startGithubSignin,
  startGoogleSignin,
  startKakaoSignin,
} from "../controllers/userController";
import {
  avatarUpload,
  protectorMiddleware,
  publicOnlyMiddleware,
} from "../middlewares";

const userRouter = express.Router();

userRouter.route("/signout").all(protectorMiddleware).get(signout);
userRouter
  .route("/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(avatarUpload.single("avatar"), postEdit);
userRouter
  .route("/change-password")
  .all(protectorMiddleware)
  .get(getChangePassword)
  .post(postChangePassword);
userRouter.route("/:id([0-9a-f]{24})").get(profile);
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
