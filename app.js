const express = require("express");
const app = express();
const port = process.env.PORT || 1000;
require("dotenv").config();

const router = require("./routers/contact");
const connectdb = require("./db/connect");

//middleware
app.use(express.json());
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));

//route
app.use("/api/v1/contact", router);

//error

//connection

const start = async () => {
	await connectdb(process.env.MONGO_URI);
	app.listen(port, () => {
		console.log(`server is listening on port ${port}`);
	});
};

start();
