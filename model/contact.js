const mongoose = require("mongoose");

const Contact = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "the name is required"],
		trim: true,
	},
	email: {
		type: String,
		required: [true, "the email is required"],
		trim: true,
	},
	message: {
		type: String,
		required: [true, "the message is required"],
		trim: true,
	},
});

module.exports = mongoose.model("Messages", Contact);
