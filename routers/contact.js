const express = require("express");
const router = express.Router();
const { createMessage } = require("../controlers/contact");

router.route("/").post(createMessage);

module.exports = router;
