const mongoose =require("mongoose");

 const contactSchema =mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User",
    },
    name:{
        type:String,
        require:[true ,"Please add the contact name"],
    },
    email:{
        type:String,
        require:[true ,"Please add the email"],
        unique:[true ,"Email address is already take"],
    },
    phone:{
        type:String,
        require:[true ,"Please add the contact name"],
    },
},
    {
        timestamps: true,
    }
 );

 module.exports =mongoose.model("Contact",contactSchema);