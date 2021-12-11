import express from "express";
import cors from 'cors';
import employee_routes from './routes/employee.routes.js';

const app =express();

let corsOptions={
    origin : "http://localhost:8081"
}

// app will accept requests from just specified domains
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}));

//main root
app.get("/",(req,res)=>{
    res.json({ message: "Welcome to employeed CRUD API." });
});

app.use('/employees',employee_routes);

const PORT = process.env.PORT||8080
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}.`);
});