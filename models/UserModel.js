const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        require:[true ,"Please add the contact name"],
    },
    email:{
        type:String,
        require:[true ,"Please add the email"],
    },
    password:{
        type:String,
        require:[true ,"Please add the password"],
    },
},
    {
        timestamps: true,
    }
);

module.exports =mongoose.model("User", userSchema);