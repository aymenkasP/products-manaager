const User = require("../models/User");
const router = require("express").Router();


/* git user  */

router.get("/:id", async (req, res) => {
    const userId = req.params.id;
    
    try {
      const user =  await User.findById(userId) 
        
      const { password, updatedAt, ...other } = user._doc;
      res.status(200).json(other);
    } catch (err) {
      res.status(500).json(err);
    }
  });


//delete user 
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    
      res.status(200).json("Account has been deleted");
   
  } catch (err) {
    res.status(500).json(err);
  }
});

  module.exports = router;
