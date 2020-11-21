const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const AuthCtrl = require("./../controllers/auth.controller");

router.post("/signup", AuthCtrl.signup);
router.post("/signin", AuthCtrl.signin);
router.post("/request-email-verification", AuthCtrl.RequestEmailVerification);
router.post("/verify-email", AuthCtrl.VerifyEmail);
router.post("/request-password-reset", AuthCtrl.RequestPasswordReset);
router.post("/reset-password", AuthCtrl.resetPassword);

module.exports = router;
