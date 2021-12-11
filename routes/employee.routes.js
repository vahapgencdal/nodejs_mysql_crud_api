import express from "express";
import {findAllEmployees,findAllPromotedEmployees,findOneEmployee,createEmployee,updateEmployee,deleteEmployee,deleteAllEmployees} from '../controllers/employee.controller.js';

const router = express.Router();
 
// Retrieve all Employees
router.get("/", findAllEmployees);

// Retrieve all promoted Employees
router.get("/promoted", findAllPromotedEmployees);

// Retrieve a single Employee with id
router.get("/:id", findOneEmployee);

// Create a new Employee
router.post("/", createEmployee);

// Update a Employee with id
router.put("/:id", updateEmployee);

// Delete a Employee with id
router.delete("/:id", deleteEmployee);

// Delete all Employees
router.delete("/", deleteAllEmployees);


export default router;