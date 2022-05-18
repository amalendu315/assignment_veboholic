const express = require("express");

const { storeBuy, getAllBuyList } = require("../controllers/buyController");

const router = express.Router();

router.route("/buy").post(storeBuy);
router.route("/get-buy-data").get(getAllBuyList);

module.exports = router;