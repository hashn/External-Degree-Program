const jwt = require("jsonwebtoken")
const express = require("express");
const router = express.Router();
const { SemesterRegistrations } = require("../models");

router.post("/", (req, res) => {

    const { Name, RegNo, AccdYear, Semester, Csub1, Csub2, Csub3, Supsub1, Supsub2, Supsub3, Fsub1, Fsub2, Fsub3 } = req.body;

    jwt.verify(req.headers.authorization.split(" ")[1], "03de0a66-316f-4400-80e7-fd65c9c9aed7", function(err, data) {
        if (err == null) {

            SemesterRegistrations.create({
                Name: Name,
                student_id: data.sub,
                RegNo: RegNo,
                AccdYear:AccdYear,
                Semester:Semester,
                Csub1:Csub1,
                Csub2:Csub2,
                Csub3:Csub3,
                Supsub1:Supsub1,
                Supsub2:Supsub2,
                Supsub3:Supsub3,
                Fsub1:Fsub1,
                Fsub2:Fsub2,
                Fsub3:Fsub3,
            })
            .then(Semreg => {
                res.status(200).json({
                    status: "success",
                    data: {
                        id: Semreg.id,
                    }
                })
            })
            .catch(e => res.status(400).json({ status: "failed" }))

        }
    })


});

module.exports = router;