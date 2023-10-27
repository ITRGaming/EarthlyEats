const { type } = require("@testing-library/user-event/dist/type");
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

const SellerDetailsSchema = new mongoose.Schema(
    {
        name: String,
        gst: String,
        contact: Number,
        email: { type: String, unique: true},
        password: String,
    },
    {
        collection: "SellerInfo",
    }
    )
    mongoose.model("SellerInfo",SellerDetailsSchema);