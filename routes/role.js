const express = require("express");
const route= express.Router();
const roleModel = require("../schemas/role");

route.get("/", (req, res) => {
  roleModel.find({}, (error, data) => {
    if (error) {
      res.json({ status: 500, data: error });
    }

    res.json({ status: 200, data });
  });
});
    //buscar
    route.get("/:id", (req, res) => {
        roleModel.find({ id: req.params.id }, (error, data) => {
          if (error) {
            res.json({ status: 500, data: error });
          }
      
          res.json({ status: 200, data });
        });
      });
 // creacion de rutas role
 route.post("/create", (req, res) => {
    console.log("El body es: ", req.body);
  
    const role = new roleModel(req.body);
  
    role
      .save()
      .then((document) => {
        res.json({ status: 200, data: document });
      })
      .catch((error) => {
        res.json({ status: 500, data: error });
      });
  });

  

  route.delete("/:id", (req, res) => {
    roleModel.findOneAndDelete({ id: req.params.id }, {}, (error, data) => {
      if (error) {
        res.json({ status: 500, data: error });
      }
  
      res.json({ status: 200, data });
    });
  });

  route.put("/:id", (req, res) => {
    roleModel.findOneAndUpdate(
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