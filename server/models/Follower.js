const mongoose = require("mongoose");
const { Schema } = mongoose;

const FollowerSchema = new Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  followerNo: { type: Number, required: true },
  profession: { type: String, required: true },
});

const FollowerModel = mongoose.model("Follower", FollowerSchema);

module.exports = FollowerModel;
