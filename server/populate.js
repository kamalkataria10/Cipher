require("dotenv").config();

const connectDB = require("./db/connect");
const Follower = require("./models/Follower");

const data = require("./followers.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Follower.deleteMany();
    await Follower.create(data);
    console.log("Success");
    process.exit(0);
  } catch (error) {
    console.log(error);
  }
};

start();
