const jwt = require("jsonwebtoken")
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { Students } = require("../models");

router.post("/", (req, res) => {

    const { email,password } = req.body;

   

    bcrypt.hash(password, 10)
    .then(hash => {

        Students.create({
            email: email,
            password: hash
        })
        .then(Student => {
            res.status(200).json({
                status: "success",
                data: {
                    id: Student.id,
                    token: jwt.sign({ sub: Student.id }, "03de0a66-316f-4400-80e7-fd65c9c9aed7")
                }
            })
        })
        .catch(e => res.status(400).json({ status: "failed" }))

    })
}); 

router.patch("/student", (req, res) => {

    jwt.verify(req.headers.authorization.split(" ")[1], "03de0a66-316f-4400-80e7-fd65c9c9aed7", function(err, data) {
        if (err == null) {

            const { reg_no, name, nameInitial, mobile, level,acdyear,gpa,address,nic,sex,yearAl,streamAl,
                ALsubject1,ALsubject1Result,ALsubject2,ALsubject2Result,ALsubject3,ALsubject3Result,
                ALenglishResult,ALgenTestmarks,qualificationName,qualificationInstitute,courseDuration,
                courseExpire,ProfTitile,ProfOrg} = req.body

            Students.findByPk(data.sub)
            .then(Student => {

                Student.update({
                    RegNo: reg_no,
                    Name: name,
                    nameInitial:nameInitial,
                    mobile:mobile,
                    level:level,
                    acdyear:acdyear,
                    gpa:gpa,
                    address:address,
                    nic:nic,
                    sex:sex,
                    yearAl:yearAl,
                    streamAl:streamAl,
                    ALsubject1:ALsubject1,
                    ALsubject1Result:ALsubject1Result,
                    ALsubject2:ALsubject2,
                    ALsubject2Result:ALsubject2Result,
                    ALsubject3:ALsubject3,
                    ALsubject3Result:ALsubject3Result,
                    ALenglishResult:ALenglishResult,
                    ALgenTestmarks:ALgenTestmarks,
                    qualificationName:qualificationName,
                    qualificationInstitute:qualificationInstitute,
                    courseDuration:courseDuration,
                    courseExpire:courseExpire,
                    ProfTitile:ProfTitile,
                    ProfOrg:ProfOrg,

                })
                .then(Student => res.status(200).json({status: "success"}))
                .catch(e => res.status(400).json({status: "failed"}))

            })
            .catch(e => res.status(400).json({status: "failed"}))

        }
    })

})

router.post("/login", (req, res) => {

    const {email, password} = req.body

    /**
     * [TODO]
     *    - Validation
     */

   
    Students.findOne({ where: {email: email} })
    .then(Student => {

        
        bcrypt.compare(password, Student.password)
        .then(match => {
            if (match) {
                res.status(200).json({
                    "status": "success",
                    "data": {
                        "token": jwt.sign({ sub: Student.id }, "03de0a66-316f-4400-80e7-fd65c9c9aed7")
                    }
                })
            } else {
                res.status(200).json({
                    "status": "failed"
                })
            }
        })

    })
    .catch(e => {
        res.status(400).json({
            "status": "failed"
        })
    })
    
}); 

module.exports = router;
