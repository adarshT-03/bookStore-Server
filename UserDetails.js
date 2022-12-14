const mongoose = require("mongoose");

const UserDetailSchema = new mongoose.Schema(
  {
    uname: String,
    mobile: { type: String },
    email: String,
    password: String,
    guestId: { type: String,unique:true },
    token: String,
    gender: String,
    profession: String,
    profile: String,
    booksUploaded: Array,
    bookmarked: Array,
    savedMeanings: Array,
    googleLogin:String
  },
  { collection: "UserInfo" }
);

mongoose.model("UserInfo", UserDetailSchema);
