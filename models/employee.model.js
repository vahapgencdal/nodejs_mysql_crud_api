import connection from './database.js';
import { v4 as uuidv4 } from 'uuid';

// constructor
const EmployeeDao = function(employee) {
    this.lastName = employee.lastName;
    this.firstName = employee.firstName;
    this.email = employee.email;
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

EmployeeDao.findAllPromoted = (result)=>{
    //if there is many parameters : var params  = {id: 1, title: 'Hello MySQL'}; --> pass params to query
    connection.query(`SELECT * FROM employees WHERE promoted=1`, (err, res)=>{
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
        console.log("found employees: ", res);
        result(null, res);
    });
};

EmployeeDao.create = (employee, result)=>{
    const sql = "INSERT INTO employees(`lastName`,`firstName`,`employeeCode`,`email`,`salary`,`jobTitle`,`promoted`) VALUES (?,?,?,?,?,?,?)";
    const values = [employee.lastName,employee.firstName,'x'+ uuidv4().substring(1,7),employee.email,employee.salary,employee.jobTitle,employee.promoted];
    connection.query(sql, values, (err, res)=>{
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
          console.log(res);
          //console.log("created employee: ", { id: res.insertId, ...employee });
          result(null, { id: res.insertId, ...employee });
    });
}

EmployeeDao.updateById = (id, employee, result) => {
    const sql =  "UPDATE employees SET lastName = ?, firstName = ?, email = ?, salary = ?, jobTitle = ?, promoted = ? WHERE id = ?";
    const values = [employee.lastName,employee.firstName,employee.email,employee.salary,employee.jobTitle,employee.promoted,id];
    connection.query(sql, values, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Employee with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated employee: ", { id: id, ...employee });
        result(null, { id: id, ...employee });
      });
  };

  EmployeeDao.remove = (id, result) => {
    sql.query("DELETE FROM employees WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found EMployee with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted employee with id: ", id);
      result(null, res);
    });
  };
  
  EmployeeDao.removeAll = result => {
    sql.query("DELETE FROM employees", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} employees`);
      result(null, res);
    });
  };

export default EmployeeDao;