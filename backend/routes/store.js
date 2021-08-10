const express = require("express");
const router = express.Router();
const StoreController = require("../controllers/store");

router.post("/registerStore", StoreController.registerStore);
router.get("/listStore", StoreController.listStore);

module.exports = router;