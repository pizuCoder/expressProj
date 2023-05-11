const express = require("express");
const router = express.Router();

router.use("/add-product", (req, res, next) => {
  res.send(
    '<form action = "/admin/product" method="POST"> <input type="text" name="title"> <select name="size"> <option value="L"> L </option> <option value="M"> M </option> <option value="S"> S </option> </select> <button type=submit>Add</button></form>'
  );
});
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
