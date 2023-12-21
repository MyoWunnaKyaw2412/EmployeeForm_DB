const db = require("../models/index");
const Employee = db.users;

exports.create = (req, res) => {
  console.log(req.body);
  if (!req.body.name) {
    return res.status(404).send({
      message: "Please enter your email",
    });
  }
  Employee.create({
    name: req.body.name,
    father_name: req.body.father_name,
    date_of_birth: req.body.date_of_birth,
    gender: req.body.gender,
    nrc_exist: req.body.nrc_exist,
    nrc: req.body.nrc,
  })
    .then((data) => {
      res.status(201).send({
        status: "Success",
        message: "Successfully created",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({
        status: "Fail",
        message: "Some error occoured while creating a user ",
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.email;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Employee.findAll({ where: condition })
    .then((data) => {
      res.status(200).send({
        status: "Success",
        message: "Retrieved all tutorials.",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

exports.finbyPk = (req, res) => {
  const primId = req.params.id;

  Employee.findByPk(primId)
    .then((data) => {
      if (data) {
        res.status(200).send({
          status: "Success",
          data: data,
        });
      } else {
        res.status(404).send({
          status: "Fail",
          message: `Can't Find User with id ${primId}`,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        status: "Fail",
        message: "Error retrieving user with id! ",
      });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
  
    Employee
      .update(req.body, {
        where: { id: id },
      })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Update successfully.",
          });
        } else {
          res.send({
            message: `Cannot update Students with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Students with id=" + id,
        });
      });
  };
exports.delete = (req, res) => {
  const id = req.params.id;

  Employee.destroy({
    where: {
      id: id,
    },
  })
    .then((Number) => {
      if ((Number = 1)) {
        res.status(200).send({
          status: "Success",
          message: "Employee was deleted Successfully",
        });
      } else {
        res.status(404).send({
          status: "Fail",
          message: `Can't delete Employee with ${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        status: "Fail",
        messsage: err.message || `Error deleting Employee with ${id}`,
      });
    });
};
exports.deleteAll = (req,res) => {

    Employee.destroy({
        where:{},
        truncate : false,
    }).then(Number => {
        res.status(200).send({
            status: "Success",
            message: `${Number} Employee were deleted Successfully`
        })
    }).catch(err=>{
        res.status(500).send({
            status: "Fail",
            message: err.message || "Some error occoured while removing all Employee!"
        })
    })
}