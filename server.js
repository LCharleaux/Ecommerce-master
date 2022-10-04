const express = require("express");
const path = require("path");
const app = express();
const indexRoutes = require("./src/routes/index");
const loginRoutes = require("./src/routes/login");

// Routes
app.use("/", indexRoutes);
app.use("/login", loginRoutes);


// view engine setup
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));



app.listen(3000, () =>
  console.log(`Application is running on http://localhost:3000`)
);
