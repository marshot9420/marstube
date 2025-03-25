import { URLS } from "../constants/urls";

export const rootController = async (req, res) => {
  return res.render(URLS.PUG.HOME, { title: "MarsTube", message: "MarsTube" });
};
