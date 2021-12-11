import EmployeeDao from '../models/employee.model.js';

export const findAllEmployees = (req, res)=>{
    EmployeeDao.findAll((err, data)=>{
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving employees."
        });
        else res.send(data);
    });
}

export const findAllPromotedEmployees =(req, res)=>{
    res.send("users");
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
    res.send("users");
}

export const updateEmployee =(req, res)=>{
    res.send("users");
}

export const deleteEmployee =(req, res)=>{
    res.send("users");
}

export const deleteAllEmployees =(req, res)=>{
    res.send("users");
}