const express = require("express");
const userCtrl = require("../controller/employeeCtrl");

module.exports = (app) => {
    const router = express.Router();

        router.post("/",userCtrl.create);

        router.get("/",userCtrl.findAll);
        
        router.get("/:id",userCtrl.finbyPk);

        router.patch("/:id",userCtrl.update);

        router.delete("/:id",userCtrl.delete);

        router.delete("/",userCtrl.deleteAll);

        app.use("/api/v1/employee",router);

}