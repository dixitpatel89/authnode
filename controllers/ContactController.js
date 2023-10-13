const asyncHandler =require("express-async-handler");
const Contact =require("../models/ContactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access private

const getContacts = asyncHandler(async(req ,res)=>{
    // const contacts =await Contact.find({ user_id:req.user.id });
    const contacts =await Contact.find();
    res.status(200).json(contacts);
});

//@desc create  New contacts
//@route POST /api/contacts
//@access private

const createContact =asyncHandler(async (req ,res)=>{
    console.log("the request body",req.body);
    const{name , email, phone} = req.body;
    if(!name ||!email ||!phone){
        res.status(400);
        throw new Error("all field are mandatory !");
    }
    const contact =await Contact.create({
     name,
     email,
     phone,
    //  user_id:req.user.id
    });
    res.status(200).json(contact);
});

//@desc get All contacts
//@route GET /api/contacts/:id
//@access private

const getContact = asyncHandler(async(req ,res)=>{
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

//@desc update contacts
//@route PUT /api/contacts
//@access private

const updateContact = asyncHandler(async (req ,res)=>{
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
   const updateContact= await Contact.findByIdAndUpdate
   (
    req.params.id,
    req.body,
    { new:true }
   );
    res.status(200).json(updateContact);
});

//@desc DELETE contacts
//@route DELETE /api/contacts
//@access private

const deleteContact = asyncHandler(async (req ,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }   
    await Contact.delete();
    res.status(200).json(contact);
});


module.exports =
{
     getContacts,
     createContact,
     getContact,
     updateContact,
     deleteContact
};