const express = require("express");
const router = express.Router();
const path = require('path')

router.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'contact-us.html'));
});
router.post("/contact-us", (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    console.log(username, email);
    res.redirect('/success');
});

module.exports = router;
