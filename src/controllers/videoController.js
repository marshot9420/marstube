import Video from "../models/Video";

export const home = async (req, res) => {
  const videos = await Video.find({});
  return res.render("home", {
    pageTitle: "Home",
    siteName: "MarsTube",
    videos,
  });
};

export const search = (req, res) => {
  return res.render("search", { pageTitle: "Search Video" });
};

export const watch = (req, res) => {
  return res.render("videos/watch", { pageTitle: "Watch Video" });
};

export const getEdit = (req, res) => {
  return res.render("videos/edit", { pageTitle: "Edit Video" });
};

export const postEdit = (req, res) => {
  return res.redirect("/");
};

export const getUpload = (req, res) => {
  return res.render("videos/upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  return res.redirect("/");
};

export const deleteVideo = (req, res) => {
  return res.redirect("/");
};
