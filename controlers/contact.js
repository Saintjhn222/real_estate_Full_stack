const Contact = require("../model/contact");

const createMessage = async (req, res) => {
	try {
		const message = await Contact.create(req.body);
		res.status(200).json(message);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = { createMessage };
