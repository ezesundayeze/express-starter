const multer = require("multer");
const { maxMediaFileSize } = require("./config");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const config = require("../config/env");

const fileFilter = (req, file, cb) => {
  try {
    if (!["image/jpeg", "image/jpg", "image/png"].includes(file.mimetype)) {
      return cb(new Error("Only jpeg, jpg, png images allowed"));
    }
    if (req.headers["content-length"] > 2000000) {
      return cb(
        new Error(
          `File size exceeded, your image should not be more than ${maxMediaFileSize}`
        )
      );
    } // Multer Filesize limit doesn't work yet. There is still an open issue in the Multer repo for this issue
    // https://github.com/expressjs/multer/issues/344 for now, this should work
    cb(null, true);
  } catch (error) {
    new Error(error);
  }
};

cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    params: {
      folder: "hek",
      allowedFormats: ["jpg", "png", "jpeg"],
      transformation: [{ width: 262, height: 288, crop: "scale" }],
      format: async (req, file) => "jpg", // supports promises as well
      public_id: (req, file) => "computed-filename-using-request",
    },
  },
});

const singleImageUpload = multer({
  storage,
  fileFilter,
}).array("images", 6);

const singleImageUpload = multer({
  storage,
  fileFilter,
}).single("image");

module.exports = {
  singleImageUpload,
  singleImageUpload,
};
