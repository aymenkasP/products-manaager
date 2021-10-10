const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
     userId: {
      type: String,
      required: true,
    },
    warehousesName: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    },
    description: {
      type: String,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Warehouse", UserSchema);
