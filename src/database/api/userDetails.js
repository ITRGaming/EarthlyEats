const mongoose=require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
    {
        email: { type: String, unique: true}, 
        password: String,
    },
    {
        collection: "UserInfo",
    }
);

mongoose.model("UserInfo",UserDetailsScehma);