import express from "express"
import { deleteNoteById, getNoteById, getNotes, postNotes, shareNotes, updateNoteById } from "../controllers/notes.controller.js";

const router =express.Router();

router.get("/",getNotes);
router.get("/:id",getNoteById);
router.post("/",postNotes);
router.put("/:id",updateNoteById);
router.delete("/:id",deleteNoteById);
router.post('/:id/share',shareNotes);



export default router;