const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {     
    userId: {
        type: String,
        required: true,
      },
       
      body: {
      type: String,
      require: true,
      min: 3,
      max: 320,
      
    },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notes", UserSchema);
