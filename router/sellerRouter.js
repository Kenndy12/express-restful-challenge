const express = require("express");
const router = express.Router();

const {
	getSellers,
	getSeller,
	updateSeller,
	createSeller,
	deleteSeller,
} = require("../controller/sellerController");

router.get("/", getSellers);
router.get("/:sellerId", getSeller);
router.put("/:sellerId", updateSeller);
router.post("/", createSeller);
router.delete("/:sellerId", deleteSeller);

module.exports = router;
