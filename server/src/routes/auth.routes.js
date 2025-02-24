const router = require("express").Router();
const UserController = require("../controllers/UserController");
const verifyRefreshToken = require("../middleware/verifyRefreshToken");

router.get("/", verifyRefreshToken, UserController.refreshTokens);
router.post("/signUp", UserController.signUp);
router.post("/signIn", UserController.signIn);
router.get("/signOut", UserController.signOut);
module.exports = router;
