const Validation = require("../../components/validation");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

const JWT_SECRET = "codekarkarkethakgyahuneedaarhihai000";
const mongoUrl =
  "";//mongo url

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

require("./userDetails");

const User = mongoose.model("UserInfo");

app.post("/register", async (req, res) => {
  const { email, password, confirm_password } = req.body;
  const validationErrors = await Validation({ email, password, confirm_password});
  if (Object.keys(validationErrors).length === 0) {
    
    
    try {
        const oldUser = await User.findOne({ email });
        
        if (oldUser) {
            return res.json({ error: "Email already exists" });
        }
        const encryptedPassword = await bcrypt.hash(password, 10);
        await User.create({
            email,
            password: encryptedPassword,
        });
        res.json({ status: "ok" });
    } catch (error) {
        res.json({ status: "error", error: "error" });
    }
}else{
    return res.json({ error: validationErrors });
}
});

app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({}, JWT_SECRET);
    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "Invalid Password" });
});

app.listen(5000, () => {
  console.log("Server Started");
});
