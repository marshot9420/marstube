export const rootController = async (req, res) => {
  return res.render("index", { title: "MarsTube", message: "MarsTube" });
};
