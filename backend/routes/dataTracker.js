const router = require("express").Router();
const User = require("../models/User");





//push data to  in-data
router.put("/:id/in-data", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
        await user.updateOne({ $push: { dataIn: req.body } });
        res.status(200).json("The post has been liked");
      
    } catch (err) {
      res.status(500).json(err);
    }
  });
//push data to  out--data
router.put("/:id/out-data", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
        await user.updateOne({ $push: { dataOut: req.body } });
        res.status(200).json("The data created successfully");
      
    } catch (err) {
      res.status(500).json(err);
    }
  });
//get data from out data 
router.get("/out-data", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      
        res.status(200).json(user.dataOut);
      
    } catch (err) {
      res.status(500).json(err);
    }
  });
//get data from in  data 
router.get("/in-data", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
        
        res.status(200).json(user.dataIn);
      
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router;