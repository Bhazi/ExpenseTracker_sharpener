const express = require("express");

const path = require("path");
const router = express.Router();
const mainController = require("../controller/main");

router.get("/", mainController.getForm);
router.post("/", mainController.postForm);
router.post("/delete", mainController.postDeleteElement);
router.post("/edit", mainController.postEditElement);

module.exports = router;
