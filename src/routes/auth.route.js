const router = require("express").Router();
const { bodyValidation, Schemas } = require("../validators/joi");
const AuthController = require("./../controllers/auth.controller");

router.post(
  "/signup",
  bodyValidation(Schemas.userSchema),
  AuthController.signup
);
router.post(
  "/signin",
  bodyValidation(Schemas.loginSchema),
  AuthController.signin
);
router.post(
  "/request-email-verification",
  bodyValidation(Schemas.verifyEmailSchema),
  AuthController.RequestEmailVerification
);
router.post(
  "/verify-email",
  bodyValidation(Schemas.verifyEmailSchema),
  AuthController.VerifyEmail
);
router.post(
  "/request-password-reset",
  bodyValidation(Schemas.requestPasswordResetSchema),
  AuthController.RequestPasswordReset
);
router.post(
  "/reset-password",
  bodyValidation(Schemas.resetPasswordSchema),
  AuthController.resetPassword
);

module.exports = router;
