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
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};

export const startGithubSignin = (req, res) => {
  const baseUrl = "https://github.com/login/oauth/authorize";
  const config = {
    client_id: process.env.GH_CLIENT,
    allow_signup: false,
    scope: "read:user user:email",
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  return res.redirect(finalUrl);
};

export const finishGithubSignin = async (req, res) => {
  const baseUrl = "https://github.com/login/oauth/access_token";
  const config = {
    client_id: process.env.GH_CLIENT,
    client_secret: process.env.GH_SECRET,
    code: req.query.code,
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  const tokenRequest = await (
    await fetch(finalUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    })
  ).json();
  if ("access_token" in tokenRequest) {
    const { access_token } = tokenRequest;
    const apiUrl = "https://api.github.com";
    const userData = await (
      await fetch(`${apiUrl}/user`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    const emailData = await (
      await fetch(`${apiUrl}/user/emails`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    const emailObj = emailData.find(
      (email) => email.primary === true && email.verified === true
    );
    if (!emailObj) {
      return res.redirect("/signin");
    }
    let user = await User.findOne({ email: emailObj.email });
    if (!user) {
      user = await User.create({
        avatarUrl: userData.avatar_url,
        name: userData.name,
        username: userData.login,
        email: emailObj.email,
        password: "",
        socialOnly: true,
        location: userData.location,
      });
    }
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect("/");
  } else {
    return res.redirect("/signin");
  }
};

export const startGoogleSignin = (req, res) => {
  const baseUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  const config = {
    client_id: process.env.GOOGLE_CLIENT,
    response_type: "code",
    scope: "openid profile email",
    redirect_uri: process.env.GOOGLE_REDIRECT_URL,
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  return res.redirect(finalUrl);
};

export const finishGoogleSignin = async (req, res) => {
  const baseUrl = "https://oauth2.googleapis.com/token";
  const config = {
    client_id: process.env.GOOGLE_CLIENT,
    client_secret: process.env.GOOGLE_SECRET,
    code: req.query.code,
    redirect_uri: process.env.GOOGLE_REDIRECT_URL,
    grant_type: "authorization_code",
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  const tokenRequest = await (
    await fetch(finalUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    })
  ).json();
  if ("access_token" in tokenRequest) {
    const { access_token } = tokenRequest;
    const apiUrl = "https://www.googleapis.com/oauth2/v1/userinfo";
    const userData = await (
      await fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
    ).json();
    let user = await User.findOne({ email: userData.email });
    if (!user) {
      user = User.create({
        avatarUrl: userData.picture,
        name: userData.name,
        username: userData.name,
        email: userData.email,
        password: "",
        socialOnly: true,
        location: userData.locale,
      });
    }
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect("/");
  } else {
    return res.redirect("/signin");
  }
};

export const signout = (req, res) => {
  req.session.user = null;
  res.locals.loggedInUser = req.session.user;
  req.session.loggedIn = false;
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
