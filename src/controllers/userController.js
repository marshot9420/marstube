import User from "../models/User";
import bcrypt from "bcrypt";

export const getSignup = (req, res) => {
  return res.render("signup", { pageTitle: "Sign Up" });
};

export const postSignup = async (req, res) => {
  const { name, username, email, password, confirmPassword, location } =
    req.body;
  const pageTitle = "Sign Up";
  if (password !== confirmPassword) {
    return res.status(400).render("signup", {
      pageTitle,
      errorMessage: "Password confirmation does not match.",
    });
  }
  const usernameExists = await User.exists({ username });
  if (usernameExists) {
    return res.status(400).render("signup", {
      pageTitle,
      errorMessage: "This username is already taken.",
    });
  }
  const emailExists = await User.exists({ email });
  if (emailExists) {
    return res.status(400).render("signup", {
      pageTitle,
      errorMessage: "This email is already taken.",
    });
  }
  await User.create({
    name,
    username,
    email,
    password,
    location,
  });
  return res.redirect("/signin");
};

export const getSignin = (req, res) => {
  return res.render("signin", { pageTitle: "Sign In" });
};

export const postSignin = async (req, res) => {
  const { username, password } = req.body;
  const pageTitle = "Sign In";
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).render("signin", {
      pageTitle,
      errorMessage: "An account with this username does not exists.",
    });
  }
  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    return res
      .status(400)
      .render("signin", { pageTitle, errorMessage: "Wrong password" });
  }
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
