const AuthServ = require("../services/auth.service");
const response = require("../utils/response");

class AuthContoller {
  async signup(req, res) {
    const result = await AuthServ.signup(req.body);
    res.status(201).send(response.success("User created", result));
  }

  async signin(req, res) {
    const result = await AuthServ.signin(req.body);
    res.status(200).send(response.success("User login successful", result));
  }

  async updatePassword(req, res) {
    const result = await AuthServ.updatePassword(req.params.userId, req.body);
    res.status(200).send(response.success("Password updated", result));
  }

  async RequestEmailVerification(req, res) {
    const result = await AuthServ.RequestEmailVerification(req.query.email);
    res
      .status(200)
      .send(response.success("Email verfication link sent", result));
  }

  async VerifyEmail(req, res) {
    const result = await AuthServ.VerifyEmail(req.body);
    res
      .status(200)
      .send(response.success("Email verified successfully", result));
  }

  async RequestPasswordReset(req, res) {
    const result = await AuthServ.RequestPasswordReset(req.query.email);
    res.status(200).send(response.success("Password reset link sent", result));
  }
  async resetPassword(req, res) {
    const result = await AuthServ.resetPassword(req.body);
    res.status(200).send(response.success("Password updated", result));
  }
}

module.exports = new AuthContoller();
