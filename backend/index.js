const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const userRoute = require("./routes/users");
const warehouseRoute = require("./routes/warehouse");
const stokeRoute = require("./routes/stoke");
const notesRoute = require("./routes/notes");
const dataTrackerRoute = require("./routes/dataTracker");


const authRoute = require("./routes/auth");
const router = express.Router();
const path = require("path");
const PORT =  process.env.PORT || 8800



dotenv. config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },() => {console.log("Connected to MongoDB");}
);

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));



app.use("/api/auth", authRoute);        
app.use("/api/users", userRoute);
app.use("/api/warehouse", warehouseRoute);
app.use("/api/stoke", stokeRoute);
app.use("/api/notes", notesRoute);
app.use("/api/dataTracker", dataTrackerRoute);



if(process.env.NODE_ENV === 'production'){
 app.use(express.static('../frontend/my-app/build'))
}





app.listen(PORT, () => {
    console.log("Backend server is running!");
  });