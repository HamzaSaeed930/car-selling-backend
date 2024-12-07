const express = require("express");
const router = express.Router();
const { createCarForm } = require("../controllers/carController");
const verifyToken = require("../middlewares/tokenMiddleware");
const upload = require("../middlewares/multerMiddleware");

router.post(
  "/createCarForm",
  // verifyToken,
  upload.array("images", 5),
  createCarForm
);

module.exports = router;
