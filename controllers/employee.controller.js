import EmployeeDao from '../models/employee.model.js';

export const findAllEmployees = (req, res)=>{
    EmployeeDao.findAll((err, data)=>{
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving employees."
        });
        else 
            res.send(data);
    });
}

export const findAllPromotedEmployees =(req, res)=>{
    EmployeeDao.findAllPromoted((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving employees."
          });
        else res.send(data);
      });
}

// Find a single Employee by Id
export const findOneEmployee = (req, res)=>{
    EmployeeDao.findById(req.params.id, (err, data)=>{
        if(err) {
            if(err.kind == 'not_found'){
                res.status(400).send({
                    message: `Not found Employee with id ${req.params.id}.`
                })
            }else{
                res.status(500).send({
                    message: "Error retrieving Employee with id " + req.params.id
                });
            }
        }else {
            res.send(data);
        }
   });
}

export const createEmployee =(req, res)=>{
    // Validate request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    //here you should also check length of string
    if (!req.body.lastName||
        !req.body.firstName||
        !req.body.email||
        !req.body.salary||
        !req.body.jobTitle) {    
            res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Employee
    const employee = new EmployeeDao({
        lastName : req.body.lastName,
        firstName : req.body.firstName,
        email : req.body.email,
        salary : req.body.salary,
        jobTitle : req.body.jobTitle,
        promoted : req.body.promoted?1:0
    });

  // Save Employee in the database
    EmployeeDao.create(employee, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Employee."
        });
        else res.send(data);
    });
}

export const updateEmployee =(req, res)=>{
   // Validate request
   if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    //here you should also check length of string
    if (!req.body.lastName||
        !req.body.firstName||
        !req.body.email||
        !req.body.salary||
        !req.body.jobTitle) {    
            res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    EmployeeDao.updateById(req.params.id,new EmployeeDao(req.body),(err, data)=>{
        if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Employee with id ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Error updating Employee with id " + req.params.id
              });
            }
          } else res.send(data);
    });
}

export const deleteEmployee =(req, res)=>{
    EmployeeDao.remove(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Employee with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Employee with id " + req.params.id
            });
          }
        } else res.send({ message: `Employee was deleted successfully!` });
      });
}

export const deleteAllEmployees =(req, res)=>{
    EmployeeDao.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all employees."
          });
        else res.send({ message: `All employees were deleted successfully!` });
      });
}