const express = require("express");
const router = express.Router();

const contactControllers = require('../controllers/contactUs')


router.get("/contact-us", contactControllers.getContact );
router.post("/contact-us", contactControllers.postContact);

module.exports = router;
