const router = require("express").Router();
const UserController = require("../controllers/UserController");
// const verifyRefreshToken = require("../middleware/verifyRefreshToken");

router.get("/", UserController.refreshTokens);
router.post("/signUp", UserController.signUp);
module.exports = router;
