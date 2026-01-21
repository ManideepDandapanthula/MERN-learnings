const cloudinary = require("cloudinary");
const CloudinaryStorage = require("multer-storage-cloudinary").CloudinaryStorage;

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    folder: "MajorProject",
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

module.exports = { cloudinary, storage };
