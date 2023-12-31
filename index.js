const express = require("express");

const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const taskRouter = require("./routes/taskRouter");
const app = express();
const port = 8000;
app.use(express.json());
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

let corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions))



app.use("/task", taskRouter);



app.listen(port, () => {
  console.log("server running on port:", port);
});
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.slgrxuz.mongodb.net/${process.env.MONGODB_DB_NAME}?retryWrites=true&w=majority`
  )
  .then((res) => {
    console.log("Mongodb connected successfully.");
  })
  .catch((error) => console.log("mongoose error:", error));
