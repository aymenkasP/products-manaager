const router = require("express").Router();
const Warehouse = require("../models/Warehouse");


//create
router.post("/add", async (req, res) => {
  try {
   

    //create new user
    const newWarehouse = new Warehouse(req.body);

    //save user and respond
    const warehouse = await newWarehouse.save();
    res.status(200).json(warehouse);
  } catch (err) {
    res.status(500).json(err)
  }
});


//get warehouses
router.get("/all/:id", async (req, res) => {
  try {
    const warehouses = await Warehouse.find({userId: req.params.id});
   
    res.status(200).json(warehouses)
  } catch (err) {
    res.status(500).json(err)
  }
});

//get warehouse information
router.get("/:id", async (req, res) => {
  try {
    const warehouse = await Warehouse.findById(req.params.id);
   
      res.status(200).json(warehouse);
   
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete warehouse
router.delete("/:id", async (req, res) => {
  try {
    const warehouse = await Warehouse.findById(req.params.id);
   
      await warehouse.deleteOne();
      res.status(200).json("the warehouse has been deleted");
   
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;