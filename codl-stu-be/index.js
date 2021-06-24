const express = require("express");
const app = express(); 
const cors = require("cors"); 


app.use(express.json());
app.use(cors());

const db = require("./models");

//Routers
const studentRouter = require("./routes/student");
app.use("/student", studentRouter);

const studentRegisterRouter = require("./routes/studentRegister");
app.use("/auth", studentRegisterRouter);

const semesterRegistrationRouter = require("./routes/semesterRegistration");
app.use("/SemesterRegistration", semesterRegistrationRouter );


db.sequelize.sync().then(() =>{
    app.listen(3001, () => {
        console.log("Server is running on port 3001");
    }); 
});



