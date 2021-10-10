const router = require("express").Router();
const Notes = require("../models/Notes");


//create
router.post("/create", async (req, res) => {
  try {
    //create new user
    const newNotes = new Notes(req.body);

    //save user and respond
    const notes = await newNotes.save();
    const {_id , body} = notes;
    res.status(200).json(_id);
  } catch (err) {
    res.status(500).json(err)
  }
});


//get Notes
router.get("/:id", async (req, res) => {
  try {
    const notes = await Notes.find({userId: req.params.id});
    !notes && res.status(404).json("notes not found");


    res.status(200).json(notes)
  } catch (err) {
    res.status(500).json(err)
  }
});

//delete Note
router.delete("/:id", async (req, res) => {
  try {
    const notes = await Notes.findById(req.params.id);
   
      await notes.deleteOne();
      const {_id , body} = notes;
      res.status(200).json(_id);
  
  } catch (err) {
    res.status(500).json(err);
  }
});

//update note
router.put("/:id", async (req, res) => {
    try {
      const stoke = await Notes.findById(req.params.id);
        const updateNote = await stoke.updateOne({ body: req.body.note } );
        
        res.status(200).json(updateNote);
     
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;