import connection from './database.js';
import mysql from 'mysql';

// constructor
const EmployeeDao = function(employee) {
    this.lastName = employee.lastName;
    this.firstName = employee.firstName;
    this.email = employee.email;
    this.employeeCode = employee.employeeCode;
    this.salary = employee.salary;
    this.jobTitle = employee.jobTitle;
    this.promoted = employee.promoted;
  };

  EmployeeDao.findById = (id, result)=>{
    //if there is many parameters : var params  = {id: 1, title: 'Hello MySQL'}; --> pass params to query
    connection.query(`SELECT * FROM employees WHERE id = ?`, {id}, (err, res)=>{
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
        if (res.length) {
            console.log("found employee: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found employee with the id
        result({ kind: "not_found" }, null);
    });
};

EmployeeDao.findAll = (result)=>{
    //if there is many parameters : var params  = {id: 1, title: 'Hello MySQL'}; --> pass params to query
    connection.query(`SELECT * FROM employees`, (err, res)=>{
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
        console.log("found employees: ", res);
        result(null, res);
    });
};

export default EmployeeDao;