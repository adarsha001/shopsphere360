const User=require("../models/user-model");
const Contact=require('../models/contact-models')

const getallusers=async(req,res) => {

    try {
        
const users= await User.find({},{password:0});
console.log(users);
if(!users||users.length===0){
    return res.status(404).json({message:"no users found "});
}
return res.status(200).json(users);

    } catch (error) {
        next(error);
    }
}

const getallcontacts= async(req,res) => {

    try {
        const contacts=await Contact.find();
        if(!contacts||contacts.length===0){
            return res.status(404).json({message:"no contacts found "});
        }
        return res.status(200).json(contacts) 
    } catch (error) {
        
    }
}


const deleteuserbyid=async(req,res)=>{
    try {
        const id=req.params.id;
        await User.deleteOne({_id:id})
        return res.status(200).json({message:"user deleted successfully"})
    } catch (error) {
        next(error);
    }
}
const deletecontactbyid=async(req,res)=>{
    try {
        const id=req.params.id;
        await Contact.deleteOne({_id:id})
        return res.status(200).json({message:"user deleted successfully"})
    } catch (error) {
        next(error);
    }
}
module.exports={getallusers,getallcontacts,deleteuserbyid, deletecontactbyid};