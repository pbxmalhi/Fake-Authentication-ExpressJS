var express = require("express");
var app = express();
var authRoute = require("./auth");
var groceryRoute = require("./grocery");
var session = require("express-session");
const cookieParser = require("cookie-parser");
const { nextTick } = require("process");
const PORT = 3001;
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(
  session({
    secret: "apdhsgfjks",
    resave: false,
    saveUninitialized: false,
  })
);
app.listen(PORT, () => console.log(`Running on PORT : ${PORT}`));

app.use("/auth", authRoute);
app.use((req, res, next) => {
  if (req.session.user) next();
  else res.send(401);
});
app.use("/grocery", groceryRoute);
