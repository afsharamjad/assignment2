//  Maryam Afshar, Student ID: 301034443, Due Date: October 15, 2023

const mongoose = require("mongoose");

const app = require("./app");

//conecting to mongoDB by URI
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to mongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`running in port ${process.env.PORT} `);
    });
  })
  .catch((err) => console.log(err));
