const express = require("express");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");  
const indexRoutes = require("./src/routes/index");
const loginRoutes = require("./src/routes/login");
const productsRoutes = require("./src/routes/products");
const cartRoutes = require("./src/routes/cart");
const product_detailsRoutes = require("./src/routes/product_details");
const new_productRoutes = require("./src/routes/new_product");


// Routes
app.use("/", indexRoutes);
app.use("/login", loginRoutes);
app.use("/products", productsRoutes);
app.use("/cart", cartRoutes);
app.use("/product_details", product_detailsRoutes);
app.use("/new_product", new_productRoutes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// view engine setup
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));



app.listen(3000, () =>
  console.log(`Application is running on http://localhost:3000`)
);
