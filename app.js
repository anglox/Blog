const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routers/blogRoutes");

//express app
const app = express();

//db connect
const dbURI =
  "mongodb+srv://username:password@name.zudcw.mongodb.net/name?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => /*console.log('Connected to the DB.'))*/ app.listen(3000))
  .catch((err) => console.log(err));

//ejs register
app.set("view engine", "ejs");

//middleware
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.locals.path = res.path;
  next();
});

//routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

//blog routes
app.use("/blogs", blogRoutes);

//404
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
