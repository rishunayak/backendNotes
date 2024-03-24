import mongoose from "mongoose";
import User from "./user.model.js";

const notesSchema=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:User,require:true},
    note:{type:String,require:true},
    sharedUser:{type:Array,default:[]}
},{timestamps:true})


const Notes=mongoose.model("note",notesSchema);

export default Notes;