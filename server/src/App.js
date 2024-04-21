const mongoose = require("mongoose");
const mongoURI = 'mongodb://localhost:27017/db';
const express = require("express");
const app = express();
const workerRouter = require("./routers/signup_workers");
const routes = require("./routers/signupCustomer");
const bodyParser = require("body-parser");

const book_service = require("./routers/book-services");
require("./db/mongoose");
require("dotenv").config();
const bookingService=require("./routers/booking-service")
// Creating Express App
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);
app.use(workerRouter);
app.use(book_service);
app.use(bookingService);
const port = process.env.port || 5000;
mongoose.connect(mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
  })

app.get("/", (req, res) => {
	res.send("Hello world");
});

app.listen(port, () => {
	console.log("Server is up on the port " + port);
});
