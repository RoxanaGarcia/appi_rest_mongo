const express = require("express");
const route= express.Router();
const taskModel = require("../schemas/task");

route.get("/", (req, res) => {
  taskModel.find({}, (error, data) => {
    if (error) {
      res.json({ status: 500, data: error });
    }

    res.json({ status: 200, data });
  });
});
    //buscar
    route.get("/:id", (req, res) => {
        taskModel.find({ id: req.params.id }, (error, data) => {
          if (error) {
            res.json({ status: 500, data: error });
          }
      
          res.json({ status: 200, data });
        });
      });
 // creacion de rutas task
 route.post("/create", (req, res) => {
    console.log("El body es: ", req.body);
  
    const task = new taskModel(req.body);
  
    task
      .save()
      .then((document) => {
        res.json({ status: 200, data: document });
      })
      .catch((error) => {
        res.json({ status: 500, data: error });
      });
  });

  //borrar

  route.delete("/:id", (req, res) => {
    taskModel.findOneAndDelete({ id: req.params.id }, {}, (error, data) => {
      if (error) {
        res.json({ status: 500, data: error });
      }
  
      res.json({ status: 200, data });
    });
  });
//insertar
  route.put("/:id", (req, res) => {
    taskModel.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      {
        new: true
      },
      (error, data) => {
        if (error) {
          res.json({ status: 500, data: error });
        }
  
        res.json({ status: 200, data });
      }
    );
  });
  
module.exports=route;