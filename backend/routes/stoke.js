const router = require("express").Router();
const Stoke = require("../models/Stoke");


//create
router.post("/create", async (req, res) => {
  try {
   

    //create new user
    const newStoke = new Stoke(req.body);

    //save user and respond
    const stoke = await newStoke.save();
    res.status(200).json(stoke);
  } catch (err) {
    res.status(500).json(err)
  }
});


//get stoke
router.get("/:id", async (req, res) => {
  try {
      const stoke = await Stoke.find({userId: req.params.id
          });
    !stoke && res.status(404).json("stoke not found");


    res.status(200).json(stoke)
  } catch (err) {
    res.status(500).json(err)
  }
});

//delete STOKE
router.delete("/:id", async (req, res) => {
  try {
    const stoke = await Stoke.findById(req.params.id);
    
      await stoke.deleteOne();
      res.status(200).json("the Stoke has been deleted");
   
  } catch (err) {
    res.status(500).json(err);
  }
});


//update space
router.put("/:id", async (req, res) => {
    try {
      const stoke = await Stoke.findById(req.params.id);
        const updateSpace = await stoke.updateOne({ unit: req.body.unit } );
        
        res.status(200).json(updateSpace);  
     
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;