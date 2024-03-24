import Notes from "../models/notes.model.js";
import User from "../models/user.model.js";




export const getNotes=async(req,res)=>
{
    try {
       const userId=req.user._id;
       const notes=await Notes.find({userId,...(req.query.search && {note:{$regex:req.query.search,$options:'i'}})})
       res.status(200).json(notes)
    } catch (error) {
        console.log("Error in getNotes Controller",error.message)
        res.status(500).json({error:"Internal Server Error"})      
    }
    

}


export const getNoteById=async(req,res)=>
{
    try {
       
        const userId=req.user._id;
        const noteId=req.params.id;
        const notes=await Notes.findById(noteId)
  
        if(userId.toString() === notes.userId.toString() || notes.sharedUser.includes(userId.toString()))
        {
           return res.status(200).json(notes)
        }
    
        return res.status(404).json({error:'You are not authorized'})

     } catch (error) {
         console.log("Error in getNoteById Controller",error.message)
         res.status(500).json({error:"Internal Server Error"})     
     }
}


export const postNotes=async(req,res)=>
{

    try {
        const userId=req.user._id;
        const {note}=req.body
        const newNote=new Notes({
            note,userId
        });

        await newNote.save();
        res.status(200).json(newNote);

        
    } catch (error) {
         console.log("Error in postNotes Controller",error.message)
         res.status(500).json({error:"Internal Server Error"})     
    }
}


export const updateNoteById=async(req,res)=>
{
    try {
        const userId=req.user._id;
        const noteId=req.params.id;

        const note = await Notes.findById(noteId);
     
        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }

        if(userId.toString()===note.userId.toString())
         {

           await Notes.findByIdAndUpdate(noteId,req.body)
            return res.status(200).json({message:'Note Updated Successfully'})
         }

         return res.status(404).json({error:'You are not authorized'})

     } catch (error) {
         console.log("Error in getNoteById Controller",error.message)
         res.status(500).json({error:"Internal Server Error"})     
     }
}



export const deleteNoteById=async(req,res)=>
{
    try {
        const userId=req.user._id;
        const noteId=req.params.id;

        const note = await Notes.findById(noteId);

        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }

         if(userId.toString()===note.userId.toString())
         {
            await Notes.findByIdAndDelete(noteId)
            return res.status(200).json({message:'Note Deleted Successfully'})
         }

         return res.status(404).json({error:'You are not authorized'})
           
        

     } catch (error) {
         console.log("Error in getNoteById Controller",error.message)
         res.status(500).json({error:"Internal Server Error"})     
     }
}



export const shareNotes=async(req,res)=>
{
    try {
        const noteId=req.params.id;
        const note = await Notes.findById(noteId);

        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
          }

          if (note.userId.toString() !== req.user._id.toString()) {
            return res.status(403).json({ error: 'You are not authorized to share this note' });
          }

          const { userEmail } = req.body;

          const checkUser=await User.findOne({email:userEmail});

          if(!checkUser)
          {
            return  res.status(400).json({error:'User not found'})
          }

          note.sharedUser.push(checkUser._id)
          await note.save();
          res.status(200).json({message:'shared successfully'})

    } catch (error) {
        console.log("Error in shareNotes Controller",error.message)
         res.status(500).json({error:"Internal Server Error"})     
    }
}


