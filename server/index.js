const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connect");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth");
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const Follower = require("./models/Follower");
require("dotenv").config();
const app = express();

const jwtSecret = "fasefraw4r5r3wq45wdfgw34twdfg";

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use("/", authRouter);

app.get("/", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const { firstName, lastName, email, _id } = await User.findById(
        userData.id
      );
      res.json({ firstName, lastName, email, _id });
    });
  } else {
    res.json(null);
  }
});

app.get("/all/:pageNo", async (req, res) => {
  const page = Number(req.params.pageNo) || 3;
  const limit = 8;
  const skip = (page - 1) * limit;
  const followers = await Follower.find({}).skip(skip).limit(limit);
  res.status(200).json({ followers, nbHits: followers.length });
});

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
