const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {     
    userId: {
        type: String,
        required: true,
      },
      warehouseName :{
            type: String,
            require: true,
        },
      StokeName: {
      type: String,
      require: true,
      min: 3,
      max: 20,
     
    },
    unit: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    }
    

    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Stoke", UserSchema);
