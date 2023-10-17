const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const formCollection1 = require("./model/model1");
require("./db/db");

// app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   // Redirect to the home page
//   res.redirect("/homepage");
// });

app.get("/form", (req, res) => {
  res.render("form");
});

// Sign-up and Sign-in route using /homepage
app.post("/homepage", async (req, res) => {
  const action = req.body.action;
  // Adding an "action" parameter to distinguish between sign-up and sign-in.

  if (action === "signup") {
    try {
      const username = req.body.username;
      const password = req.body.password;
      const cpassword = req.body.cpassword;

      if (password == cpassword) {
        const formData1 = new formCollection1({
          username: req.body.username,
          password: req.body.password,
          cpassword: req.body.cpassword,
        });

        const postData1 = await formData1.save();
        res.redirect("/form");
      } else {
        // res.send("Passwords do not match");
      }
    } catch (error) {
      res.send(error);
    }
  } else if (action === "signin") {
    try {
      const username = req.body.username;
      const password = req.body.loginPassword;

      const getUsername = await formCollection1.findOne({ username: username });

      if (getUsername && getUsername.password == password) {
        res.render("homepage");
      } else {
        res.send(
          '<script>alert("Username or password is incorrect"); window.location = "/form";</script>'
        );

        // alert("username or password incorrect");
        // res.render("form", { passwordIsIncorrect: true });
      }
    } catch (error) {
      res.send(error);
    }
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
