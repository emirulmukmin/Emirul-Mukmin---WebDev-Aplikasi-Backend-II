const express = require("express");
const router = express.Router();
const { urlController } = require("../controllers"); 
const { urlValidation } = require("../validators"); 
const { body, param, validationResult } = require('express-validator');

router.route("/").get(urlController.getUser);
router.route("/:nama").get(urlValidation.getUserByName, urlController.getUserByName);
router.route("/:telepon/:email").get(urlValidation.getUserByPhoneEmail, urlController.getUserByPhoneEmail)
router.route("/insert").post(urlValidation.insertUser, urlController.insertUser);
router.route("/insertBulk").post(urlValidation.insertBulkUser, urlController.insertBulkUser);
router.route("/delete").delete(urlValidation.deleteUser, urlController.deleteUser);
router.route("/patch").patch(urlValidation.updateUser, urlController.updateUser);

module.exports = router;