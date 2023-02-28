import express from "express";
import {
  deleteVideo,
  getEdit,
  getUpload,
  postEdit,
  postUpload,
  watch,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.route("/:id").get(watch);
videoRouter.route("/:id/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.route("/:id/delete").get(deleteVideo);

export default videoRouter;
