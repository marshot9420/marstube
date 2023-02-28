export const getSignup = (req, res) => {
  return res.render("signup", { pageTitle: "Sign Up" });
};

export const postSignup = (req, res) => {
  return res.redirect("/signin");
};

export const getSignin = (req, res) => {
  return res.render("signin", { pageTitle: "Sign In" });
};

export const postSignin = (req, res) => {
  return res.redirect("/");
};

export const signout = (req, res) => {
  return res.redirect("/");
};

export const getEdit = (req, res) => {
  return res.render("users/edit-profile", { pageTitle: "Edit Profile" });
};

export const postEdit = (req, res) => {
  return res.redirect("/");
};

export const profile = (req, res) => {
  return res.render("users/profile", { pageTitle: "Profile" });
};
