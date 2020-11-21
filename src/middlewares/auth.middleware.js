const JWT = require("jsonwebtoken");
const User = require("./../models/user.model");
const CustomError = require("./../utils/customError");
const { jwtSecret } = require("./../config/env");

function auth() {
  return async (req, res, next) => {
    if (!req.headers.authorization)
      throw new CustomError("Unauthorized access: Token not found", 401);

    const token = req.headers.authorization.split(" ")[1];
    const decoded = JWT.verify(token, jwtSecret);

    let user = await User.findOne({ _id: decoded.id });
    if (!user)
      throw new CustomError("Unauthorized access: User does not exist", 401);
    if (!user.isActive)
      throw new CustomError(
        "Unauthorized access: User has been deactivated",
        401
      );
    if (!user.isVerified)
      throw new CustomError(
        "Unauthorized access: Please verify email address",
        401
      );

    req.$user = user;

    next();
  };
}

module.exports = auth;
