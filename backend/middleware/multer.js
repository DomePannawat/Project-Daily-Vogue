import multer from "multer";

/* This JavaScript code snippet is setting up a file upload configuration using the `multer` library. */
const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
