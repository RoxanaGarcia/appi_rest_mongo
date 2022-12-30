const express = require("express");
const app = express();
//requerimos mongoose
const mongoose = require("mongoose");

//requerir la ruta
const userRoute = require("./routes/user");
const roleRoute = require("./routes/role");
const taskRoute = require("./routes/task");

// middlewares a nivel de rutas
const log = require('./middlewares/log');

// middlewares a nivel global
app.use(log);
app.use(express.json());
// pasando por la ruta
app.get("/", (req, res) => {
    res.send("Holaaaaaa!")
  })
//agregar la ruta 
app.use("/user",userRoute);
app.use("/role",roleRoute);
app.use("/task",taskRoute);


mongoose.connect("mongodb://127.0.0.1:27017/db_mongo", (error) => {
  if (error) {
    console.log("Hubo un error en la conexion a MongoDB", error);
  } else {
    console.log("Conexion exitosa con MongoDB");
  }
})

app.listen(3000);