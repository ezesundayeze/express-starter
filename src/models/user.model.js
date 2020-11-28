const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const config = require("../config/env");
const Schema = mongoose.Schema;
let env = process.env.NODE_ENV || "development";
const bcryptSalt = config[env].bcryptSalt;

const userSchema = new Schema(
  {
    name: { type: String, trim: true, required: [true, "Name is required"] },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email is required"],
    },
    password: { type: String },
    image: { type: String },
    role: {
      type: String,
      trim: true,
      enum: ["user", "admin"],
      default: "user",
    },
    isActive: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  console.log(this.password, "password");
  const hash = await bcrypt.hash(this.password, Number(bcryptSalt));
  this.password = hash;

  next();
});

module.exports = mongoose.model("users", userSchema);
