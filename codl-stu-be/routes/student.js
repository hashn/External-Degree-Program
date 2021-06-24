const jwt = require("jsonwebtoken")
const express = require("express");
const router = express.Router();
//student - db table
const { Students } = require("../models");

router.get("/", (req, res) => {

    jwt.verify(req.headers.authorization.split(" ")[1], "03de0a66-316f-4400-80e7-fd65c9c9aed7", function(err, data) {
        if (err == null) {

            Students.findByPk(data.sub)
            .then(Student => {
                res.status(200).json({
                    status: "success",
                    data: {
                        student: {
                            id: Student.id,
                            RegNo: Student.RegNo,
                            Name: Student.Name,
                            nameInitial: Student.nameInitial,
                            email: Student.email,
                            mobile: Student.mobile,
                            level: Student.level,
                            acdyear: Student.acdyear,
                            gpa: Student.gpa,
                            address: Student.address,
                            nic: Student.nic,
                            sex: Student.sex,
                            yearAl: Student.yearAl,
                            streamAl: Student.streamAl,
                            ALsubject1: Student.ALsubject1,
                            ALsubject1Result: Student.ALsubject1Result,
                            ALsubject2: Student.ALsubject1,
                            ALsubject2Result: Student.ALsubject1Result,
                            ALsubject3: Student.ALsubject1,
                            ALsubject3Result: Student.ALsubject1Result,
                            ALenglishResult: Student.ALenglishResult,
                            ALgenTestmarks: Student.ALgenTestmarks,
                            qualificationName: Student.qualificationName,
                            qualificationInstitute: Student.qualificationInstitute,
                            courseDuration: Student.courseDuration,
                            courseExpire: Student.courseExpire,
                            ProfTitile: Student.ProfTitile,
                            ProfOrg: Student.ProfOrg,

                        }
                    }
                })
            })
            .catch(e => res.status(400).json({ status: "failed" }))

        }
    })
})

router.post("/", async(req,res)=>{
    const student1 = req.body;
    await Students.create(student1);
    res.json( student1 ); 
});


module.exports = router;