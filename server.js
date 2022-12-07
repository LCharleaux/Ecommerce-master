const express = require("express");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");  
const bodyParser = require("body-parser");
const indexRoutes = require("./src/routes/index.routes");
const loginRoutes = require("./src/routes/login.routes");
const productRoutes = require("./src/routes/products.routes");
const cartRoutes = require("./src/routes/cart.routes");
const userRoutes = require("./src/routes/user.routes");
const db = require("./db");


// Routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json({type: 'application/json'}));
app.use("/", loginRoutes);
app.use("/index", indexRoutes);
app.use("/product", productRoutes);
app.use("/cart", cartRoutes);
app.use("/user", userRoutes);

// view engine setup
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));



app.listen(3000, () =>
  console.log(`Application is running on http://localhost:3000`)
);


const connect = async () => {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connect();