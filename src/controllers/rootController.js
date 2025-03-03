export const rootController = async (req, res) => {
  return res.render("pages/home", { title: "MarsTube", message: "MarsTube" });
};
