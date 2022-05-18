const express = require("express");

const { storeSell, getAllSellList } = require("../controllers/sellController");

const router = express.Router();

router.route("/sell").post(storeSell);
router.route("/get-sell-data").get(getAllSellList);

module.exports = router;
