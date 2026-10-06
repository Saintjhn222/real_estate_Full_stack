const mongoose = require("mongoose");

const connectdb = (uri) => {
	return mongoose
		.connect(uri)
		.then(() => console.log("connected to the db"))
		.catch((err) => console.log(err));
};

module.exports = connectdb;
