const express=require("express");
const app=express();
const cors=require("cors");
const mysql = require("mysql");

app.use(cors());
app.use(express.json());



   
var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "codldb"
  });
 
  
  //####################################All Candidates###########################//
                app.post('/create',(req,res)=>
                {
                    const fullnametamil=req.body.fullnametamil;
                    const fullnameeng=req.body.fullnameeng;
                    const nic=req.body.nic;
                    const address=req.body.address;
                    const phoneno=req.body.phoneno;
                    const email=req.body.email;
                    const year=req.body.year;
                    const section=req.body.section;
                    const subjectl=req.body.subjectl;
                    const result1=req.body.result1;
                    const subject2=req.body.subject2;
                    const result2=req.body.result2;
                    const subject3=req.body.subject3;
                    const result3=req.body.result3;
                    const english_result=req.body.english_result;
                    const common_general_test_result=req.body.common_general_test_result;
                    const other_qualification_name=req.body.other_qualification_name;
                    const qualification_provided_company=req.body.qualification_provided_company;
                    const duration_of_course=req.body.duration_of_course;
                    const validity_date=req.body.validity_date;
                    const position=req.body.position;
                    const company=req.body.company;
                    const acadamic_year=req.body.acadamic_year;
                    const faculty=req.body.faculty;


                  db.query("INSERT INTO all_candidates(full_name_tamil,full_name_eng,nic,address,phone_no,year,section,subject_1,result_1,subject_2,result_2,subject_3,result_3,english_result,common_general_test_result,other_qualification_name,qualification_provider,duration_of_course,validity_date,position,company,Email,faculty,AccadamicYear) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                                                          [fullnametamil,fullnameeng,nic,address,phoneno,year,section,subjectl,result1,subject2,result2,subject3,result3,english_result,common_general_test_result,other_qualification_name,qualification_provided_company,duration_of_course,validity_date,position,company,email,faculty,acadamic_year],
                          (err,result)=>
                          {
                            if(err)
                            {
                              console.log(err);
                              console.log("CAerror");
                            }
                            else
                            {
                              res.send("values Inseted");
                            }
                  });
                  
                });  

                app.get('/allCandidates/:id',(req,res)=>{
                  const id=req.params.id;
                  db.query("SELECT * FROM all_candidates WHERE AccadamicYear=?",[id],(err,result)=>{
                    if(err)
                    {
                      console.log(err);
                    }
                    else{
                      res.send(result);
                    
                      
                    }
                  })
                });
                app.get('/CandidatesDetailsId/:id',(req,res)=>{
                  const id=req.params.id;
                  db.query("SELECT * FROM all_candidates WHERE ID=?",id,(err,result)=>{
                    if(err)
                    {
                      console.log(err);
                      
                    }
                    else{
                      res.send(result);
                      
                    }
                  })
                });

                app.put('/updateCandidate/:id',(req,res)=>{
                  var id=req.params.id;
                  const  editData=req.body.editData;
                  const  cloumn=req.body.cloumn;
                  
                
                    var sql=`UPDATE all_candidates SET  ${cloumn}=? WHERE ID=?`; 
                    db.query(sql,[editData,id],(err,result)=>{
                        if(err){
                          console.log(err);
                        }
                        else{
                          res.send("updated");
                        }
                      })
                  
                  });

                  app.delete('/delete_candidate/:id',(req,res)=>{
                    var id=req.params.id;
                    db.query("DELETE FROM all_candidates WHERE ID=?",id,(err,result)=>{
                      if(err)
                      {
                        console.log(err);
                      }
                      else{
                        res.send(result);
                       
                      }
                    })
                  });

                  app.put("/updateState",(req,res)=>{
                    const id=req.body.id;
                    const status=req.body.status;
                  
                    var sql = "UPDATE all_candidates SET status=? WHERE ID=?";
                    db.query(sql,[status,id],(err,result)=>{
                      if(err)
                      {
                        console.log(err);
                      }
                      else{
                        res.send();
                      }
                    })
                  
                  })
// //#####################All Candidates#####################################//



// //############################ NOTICE ###########################//
              app.post('/createNotice',(req,res)=>{
                const type=req.body.type;
                db.query("INSERT INTO Admin_Notice(Type) VALUES(?)",
                type,
                (err,result)=>
                {
                  if(err)
                  {
                    console.log(err);

                  }
                  else
                  {
                    res.send("values inserted");
                  }
                });
              })
              app.get('/notice',(req,res)=>
              {
                db.query("SELECT * FROM Admin_Notice",(err,result)=>{
                  if(err)
                  {
                    console.log(err);
                  }
                  else
                  {
                    res.send(result);
                  }
                })
              })
                

app.delete('/delete_notice/:id',(req,res)=>{
  var id=req.params.id;
  db.query("DELETE FROM Admin_Notice WHERE ID=?",id,(err,result)=>{
    if(err)
    {
      console.log(err);
    }
    else{
      res.send(result);
    }
  })
});

// //############################ NOTICE ###########################//



/////#################OPEN AND CLOSE APPLICATIONS ###############################////////////////////////////
          app.put('/addOpenApplication',(req,res)=>{
            
            
            const Opening_date=new Date();
            const Closing_date=req.body.Closing_date;
            const Acadamic_year=req.body.Acadamic_year;
            const Department=req.body.Department;
            const Application_Name=req.body.Application_Name;
            const status=req.body.status;
          db.query("UPDATE open_application_details SET OpeningDate=?,ClosingDate=?,AcadamicYear=?,status=? WHERE ApplicationName=? and Department=?",
          [Opening_date,Closing_date,Acadamic_year,status,Department,Application_Name]),
          (err,result)=>
          {
          if(err)
          {
          console.log(err);

          }
          else
          {
          res.send("values inserted");
          }
          }
          });

          app.get('/viewOpenApplications',(req,res)=>{
            db.query("SELECT * FROM open_application_details",(err,result)=>{
              if(err)
              {
                console.log(err);
              }
              else{
                res.send(result);
              
                
              }
            })
          });
          app.put('/setstatusApplication/:id',(req,res)=>{
            const id=req.params.id;
            const status=req.body.status;
          var sql="UPDATE open_application_details SET status=? WHERE ID=?"
          db.query(sql,[status,id],(err,result)=>{
          if(err)
          {
            console.log(err);
          }
          else{
            res.send(result);
            
          }
          })
          });
          
          app.get('/openApplicationDetailsCandidate',(req,res)=>{
            var sql="SELECT * FROM open_application_details WHERE ApplicationName='Candidate Exam Application' and Department='BA'";
            db.query(sql,(err,result)=>{
              if(err)
              {
                console.log(err);
              }
              else{
                res.send(result);
                console.log('resutls'+result)
               
              }
            })
          });
          
 /////#################OPEN AND CLOSE APPLICATIONS ###############################////////////////////////////
/////#################ACADAMIC YEAR ###############################////////////////////////////
         

          app.post('/addAcadamicYearDetails',(req,res)=>{
            
            const Acadamic_year=req.body.Acadamic_year;
            const Department=req.body.Department;
            const Application_Name=req.body.Application_Name;
          db.query("INSERT INTO acadamic_year (User_Type,Year,Department) VALUES(?,?,?)",
          [Application_Name,Acadamic_year,Department]),
          (err,result)=>
          {
          if(err)
          {
          console.log(err);

          }
          else
          {
          res.send("values inserted");
          }
          }
          });
          
          app.get('/acadamicYearDeatails',(req,res)=>{
            db.query("SELECT * FROM acadamic_year",(err,result)=>{
              if(err)
              {
                console.log(err);
              }
              else{
                res.send(result);
              
                
              }
            })
          });
          
          
/////#################Acadamic Year ###############################////////////////////////////







// /////////////#####################EXAM SELECTED CANDIDATE####################///////////////

app.post("/addExamSelectedCandidate",(req,res)=>{
  const ID=req.body.id;
  const Candidate_Exam_Marks=null;
  const Acadamic_year=req.body.Acadamic_year;
  const Department=req.body.department;
  var sql="INSERT INTO examselectedcandidate(ID,Candidate_Exam_Marks,Acadamic_year,Department) VALUES(?,?,?,?)";
  db.query(sql,[ID,Candidate_Exam_Marks,Acadamic_year,Department],(err,result)=>
  {
    if(err)
    {
      console.log(err);
    }
    else
    {
      res.send("values inserted");
    }
  })
});

app.get('/examMarks/:id',(req,res)=>{
  const id=req.params.id;
  db.query("SELECT Candidate_Exam_Marks FROM examselectedcandidate WHERE ID=?",[id],(err,result)=>{
    if(err)
    {
      console.log(err);
    }
    else{
      res.send(result);
      
     
      
    }
  })
});

app.get('/examSelectedCandidateDetails/:id',(req,res)=>{
  const id=req.params.id;
  db.query("SELECT * FROM examselectedcandidate WHERE acadamic_year=?",[id],(err,result)=>{
    if(err)
    {
      console.log(err);
    }
    else{
      res.send(result);
     
      
    }
  })
});




app.get('/examSelectedCandidateDetalsId/:id',(req,res)=>{
  const id=req.params.id;
  db.query("SELECT * FROM examselectedcandidate WHERE ID=?",id,(err,result)=>{
    if(err)
    {
      console.log(err);
    }
    else{
      res.send(result);
     
    }
  })
});



app.put('/updateExamSelectedcandidate/:id',(req,res)=>{
  var id=req.params.id;
  const  editData=req.body.editData;
  const  cloumn=req.body.cloumn;
  
    var sql=`UPDATE examselectedcandidate SET  ${cloumn}=? WHERE ID=?`; 
    db.query(sql,[editData,id],(err,result)=>{
        if(err){
          console.log(err);
        }
        else{
          res.send("updated");
        }
      

    })
     
  });

  app.delete('/delete_exam_selected_candidate/:id',(req,res)=>{
    var id=req.params.id;
    db.query("DELETE FROM examselectedcandidate WHERE ID=?",id,(err,result)=>{
      if(err)
      {
        console.log(err);
      }
      else{
        res.send(result);
       
      }
    })
  });
// /////////////#####################EXAM SELECTED CANDIDATE####################///////////////


// /////////////#####################INTERVIEW SELECTED CANDIDATE####################///////////////
      


        app.post("/addInterviewSelectedCandidate",(req,res)=>{
          const ID=req.body.id;
          // const  Email=req.body.Email;
          const Acadamic_year=req.body.Acadamic_year;
          const Department=req.body.department;
          const interviewMarks=0;
         
          var sql="INSERT INTO interviewselectedcandidates(ID,InterviewMarks,acadamic_year,Department) VALUES(?,?,?,?)";
          db.query(sql,[ID,interviewMarks,Acadamic_year,Department,],(err,result)=>
          {
            if(err)
            {
              console.log(err);
            }
            else
            {
              res.send("values inserted");
            }
          })
        });

      app.get("/interviewselectedcandidatesDetails/:id",(req,res)=>{
        const id=req.params.id;
        db.query("SELECT * FROM interviewselectedcandidates WHERE acadamic_year=?",[id],(err,result)=>{
          if(err)
          {
            console.log(err);
          }
          else{
            res.send(result);
          }
        })
      }
      );

      app.get('/interviewselectedcandidatesDetailsId/:id',(req,res)=>{
        const id=req.params.id;
        db.query("SELECT * FROM interviewselectedcandidates WHERE ID=?",id,(err,result)=>{
          if(err)
          {
            console.log(err);
          }
          else{
            res.send(result);
          
          }
        })
      });
      

      app.delete('/delete_interview_selected_candidate/:id',(req,res)=>{
        var id=req.params.id;
        db.query("DELETE FROM interviewselectedcandidates WHERE ID=?",id,(err,result)=>{
          if(err)
          {
            console.log(err);
          }
          else{
            res.send(result);
           
          }
        })
      });
      app.put('/updateIWSelectedcandidate/:id',(req,res)=>{
        var id=req.params.id;
        const  editData=req.body.editData;
        
          var sql1=`UPDATE interviewselectedcandidates SET  InterviewMarks=? WHERE ID=?`; 
          db.query(sql1,[editData,id],(err,result)=>{
            if(err){
              console.log(err);
            }
            else{
              res.send("updated");
            }
          })

        });
      
/////////////#####################INTERVIEW SELECTED CANDIDATE####################///////////////

/////##########################User Registration#####################//////////////
          app.post('/createUserregister',(req,res)=>{
                      const fullname=req.body.fullname;
                      const email=req.body.email;
                      const nic_id=req.body.nic_id;
                      const type1=req.body.type1;
                      const password=req.body.password;
                      

            var sql="INSERT INTO userregistration(FullName,UserType,NIC_ID,Email,Password) VALUES(?,?,?,?,?)";

          db.query(sql,[fullname,type1,nic_id,email,password],(err,result)=>
            {
              if(err)
              {
                console.log(err);
              }
              else
              {
                res.send(result);
              }
            })

          })

          app.post('/createUser',(req,res)=>{
            const fullname=req.body.fullname;
            const email=req.body.email;
            const nic_id=req.body.nic_id;
            const type1=req.body.type1;
            const password=req.body.password;
            
            
          var sql="INSERT INTO user(FullName,UserType,NIC_ID,Email,Password) VALUES(?,?,?,?,?)";

          db.query(sql,[fullname,type1,nic_id,email,password],(err,result)=>
          {
          if(err)
          {
          console.log(err);
          }
          else
          {
          res.send(result);
          }
          })

          })

          app.post('/createCourse',(req,res)=>{
            const name=req.body.name;
            const id=req.body.id;
            const type=req.body.type;
            const year=req.body.year;
            const depatment=req.body.depatment;
            const credit=req.body.credit;
            
            console.log(name,id,type,year,depatment,credit);
          var sql="INSERT INTO course(ID,Name,Type,year,Department,credit) VALUES(?,?,?,?,?,?)";

          db.query(sql,[id,name,type,year,depatment,credit],(err,result)=>
          {
          if(err)
          {
          console.log(err);
          }
          else
          {
          res.send(result);
          }
          })

          })
          

          app.get("/getCourse",(req,res)=>{
            db.query("SELECT * FROM course",(err,result)=>{
              if(err)
              {
                console.log(err);
              }
              else{
                res.send(result);
                
              }
            })
          }
          );
         
          app.get("/courseDetailsId/:id",(req,res)=>{
            var id=req.params.id;
            db.query("SELECT * FROM course WHERE ID=?",id,(err,result)=>{
              if(err)
              {
                console.log(err);

              }
              else{
                res.send(result);
                
              }
            })
          }
          );
          
          app.delete('/deleteCourse/:id',(req,res)=>{
            var id=req.params.id;
            db.query("DELETE FROM course WHERE ID=?",id,(err,result)=>{
              if(err)
              {
                console.log(err);
              }
              else{
                res.send(result);
               
              }
            })
          });
          
          app.put('/updateCourse/:id',(req,res)=>{
            
            const id=req.params.id;
             
            
            const  editData=req.body.editData;
            const  cloumn=req.body.cloumn;
            var sql=`UPDATE course SET  ${cloumn}=? WHERE ID=?`; 
              db.query(sql,[editData,id],(err,result)=>{
                  if(err){
                    console.log(err);
                  }
                  else{
                    res.send("updated");
                  }
                })
             });
          app.get("/getCoursefoundation",(req,res)=>{
            db.query("SELECT * FROM course WHERE Type='Foundation'",(err,result)=>{
              if(err)
              {
                console.log(err);
              }
              else{
                res.send(result);
              }
            })
          }
          );
          
          app.get("/getCourseCore",(req,res)=>{
            db.query("SELECT * FROM course WHERE Type='Core'",(err,result)=>{
              if(err)
              {
                console.log(err);
              }
              else{
                res.send(result);
              }
            })
          }
          );
          app.get("/getCourseSublimentary",(req,res)=>{
            db.query("SELECT * FROM course WHERE Type='Supplementary'",(err,result)=>{
              if(err)
              {
                console.log(err);
              }
              else{
                res.send(result);
              }
            })
          }
          );
          
          app.listen(3001,()=>{
              console.log('port number is 3001');
          });


/////////////#####################Admin Student Pages####################///////////////

// acdemic year

app.get('/studentDetails/:year',(req,res)=>{
  const year=req.params.year;
  db.query("SELECT * FROM student WHERE acdyear=?",year,(err,result)=>{
    if(err)
    {
      console.log(err);
      
    }
    else{
      res.send(result);
      
    }
  })
});


app.post('/addBatch',(req,res)=>{
  const batchNo=req.body.batchNo;
  const acdYear=req.body.acdYear;
  const comDate=req.body.comDate;

  var sql="INSERT INTO newbatch (batchNo,acdYear,comDate) VALUES (?,?,?)";
  db.query(sql,[batchNo,acdYear,comDate],(err,result)=>
  {
    if(err)
    {
      console.log(err);

    }
    else
    {
      res.send("values inserted");
    }
  })
})

app.get('/viewBatchh',(req,res)=>{
  db.query("SELECT * FROM newbatch",(err,result)=>{
    if(err)
    {
      console.log(err);
    }
    else{
      res.send(result);
    
      
    }
  })
});

app.get('/studentMoreDetails/:RegNo',(req,res)=>{
  const RegNo=req.params.RegNo;
  db.query("SELECT * FROM student WHERE RegNo=?",RegNo,(err,result)=>{
    if(err)
    {
      console.log(err);
      
    }
    else{
      res.send(result);
      
    }
  })
});

app.get('/AcdemicDetails/:RegNo',(req,res)=>{
  const RegNo=req.params.RegNo;
  db.query("SELECT * FROM studentcoursedetails WHERE RegNo=?",RegNo,(err,result)=>{
    if(err)
    {
      console.log(err);
      
    }
    else{
      res.send(result);
      
    }
  })
});

app.post('/upgradeAll',(req,res)=>{
  var sql="update student set level=level+1 where level>0";
  db.query(sql,(err,result)=>
  {
    if(err)
    {
      console.log(err);

    }
    else
    {
      res.send("upgraded");
    }
  })
})

app.post('/upgradeStudent/:sId',(req,res)=>{
  const sId=req.params.sId;
  var sql="update student set level=level+1 where sId=?";
  db.query(sql,[sId],(err,result)=>
  {
    if(err)
    {
      console.log(err);

    }
    else
    {
      res.send("upgraded");
    }
  })
})

app.post('/completeStudent/:sId',(req,res)=>{
  const sId=req.params.sId;
  var sql="update student set level=0 where sId=?";
  db.query(sql,[sId],(err,result)=>
  {
    if(err)
    {
      console.log(err);

    }
    else
    {
      res.send("degree completed");
    }
  })
})

//view in editStudent page
app.get('/EditStudent/:sId',(req,res)=>{
  const sId=req.params.sId;
  db.query("SELECT * FROM student WHERE sId=?",sId,(err,result)=>{
    if(err)
    {
      console.log(err);
      
    }
    else{
      res.send(result);
      
    }
  })
});

//update student
app.put('/updateStudent',(req,res)=>{
  const sId=req.body.sId
  const Name=req.body.Name;
  const sql="UPDATE student SET Name=? WHERE sId=?"; 
      db.query(sql,[Name,sId],(err,result)=>{
          if(err){
            console.log(err);
          }
          else{
            res.send("updated");
          }
        })  
  });
  app.put('/updateStudentemail',(req,res)=>{
    const sId=req.body.sId
    const email=req.body.email;
    const sql="UPDATE student SET email=? WHERE sId=?"; 
        db.query(sql,[email,sId],(err,result)=>{
            if(err){
              console.log(err);
            }
            else{
              res.send("updated");
            }
          })
    });

app.put('/updateStudentnic',(req,res)=>{
  const sId=req.body.sId
  const nic=req.body.nic;
  const sql="UPDATE student SET nic=? WHERE sId=?"; 
  db.query(sql,[nic,sId],(err,result)=>{
    if(err){
      console.log(err);
    }
    else{
      res.send("updated");
    }
  })
});
app.put('/updateStudentlevel',(req,res)=>{
  const sId=req.body.sId
  const level=req.body.level;
  const sql="UPDATE student SET level=? WHERE sId=?"; 
  db.query(sql,[level,sId],(err,result)=>{
    if(err){
      console.log(err);
    }
    else{
      res.send("updated");
    }
  })
});
app.put('/updateStudentaddress',(req,res)=>{
  const sId=req.body.sId
  const address=req.body.address;
  const sql="UPDATE student SET address=? WHERE sId=?"; 
  db.query(sql,[address,sId],(err,result)=>{
    if(err){
      console.log(err);
    }
    else{
      res.send("updated");
    }
  })
});
app.put('/updateStudentgpa',(req,res)=>{
  const sId=req.body.sId
  const gpa=req.body.gpa;
  const sql="UPDATE student SET gpa=? WHERE sId=?"; 
  db.query(sql,[gpa,sId],(err,result)=>{
    if(err){
      console.log(err);
    }
    else{
      res.send("updated");
    }
  })
});
app.put('/updateStudentmobile',(req,res)=>{
  const sId=req.body.sId
  const mobile=req.body.mobile;
  const sql="UPDATE student SET mobile=? WHERE sId=?"; 
  db.query(sql,[mobile,sId],(err,result)=>{
    if(err){
      console.log(err);
    }
    else{
      res.send("updated");
    }
  })
});
app.put('/updateStudentsex',(req,res)=>{
  const sId=req.body.sId
  const sex=req.body.sex;
  const sql="UPDATE student SET sex=? WHERE sId=?"; 
  db.query(sql,[sex,sId],(err,result)=>{
    if(err){
      console.log(err);
    }
    else{
      res.send("updated");
    }
  })
});

  app.delete('/deleteStudent/:sId',(req,res)=>{
    const sId=req.params.sId;
    db.query("DELETE FROM student WHERE sId=?",sId,(err,result)=>{
      if(err)
      {
        console.log(err);
      }
      else{
        res.send(result);
       
      }
    })
  });
  
  //add marks
//level 1
  app.get('/viewCourses1/found',(req,res)=>{
    db.query("SELECT * FROM course WHERE level=1 and type='Foundation'",(err,result)=>{
      if(err){
        console.log(err);
      }
      else{
        res.send(result);
      }
    })
  });
  app.get('/viewCourses1/sup',(req,res)=>{
    db.query("SELECT * FROM course WHERE level=1 and type='Supplementary'",(err,result)=>{
      if(err){
        console.log(err);
      }
      else{
        res.send(result);
      }
    })
  });
  app.get('/viewCourses1/core',(req,res)=>{
    db.query("SELECT * FROM course WHERE level=1 and type='Core'",(err,result)=>{
      if(err){
        console.log(err);
      }
      else{
        res.send(result);
      }
    })
  });

  //level 2
  app.get('/viewCourses2/found',(req,res)=>{
    db.query("SELECT * FROM course WHERE level=2 and type='Foundation'",(err,result)=>{
      if(err){
        console.log(err);
      }
      else{
        res.send(result);
      }
    })
  });
  app.get('/viewCourses2/sup',(req,res)=>{
    db.query("SELECT * FROM course WHERE level=2 and type='Supplementary'",(err,result)=>{
      if(err){
        console.log(err);
      }
      else{
        res.send(result);
      }
    })
  });
  app.get('/viewCourses2/core',(req,res)=>{
    db.query("SELECT * FROM course WHERE level=2 and type='Core'",(err,result)=>{
      if(err){
        console.log(err);
      }
      else{
        res.send(result);
      }
    })
  });

  //level 3
  app.get('/viewCourses3/found',(req,res)=>{
    db.query("SELECT * FROM course WHERE level=3 and type='Foundation'",(err,result)=>{
      if(err){
        console.log(err);
      }
      else{
        res.send(result);
      }
    })
  });
  app.get('/viewCourses3/sup',(req,res)=>{
    db.query("SELECT * FROM course WHERE level=3 and type='Supplementary'",(err,result)=>{
      if(err){
        console.log(err);
      }
      else{
        res.send(result);
      }
    })
  });
  app.get('/viewCourses3/core',(req,res)=>{
    db.query("SELECT * FROM course WHERE level=3 and type='Core'",(err,result)=>{
      if(err){
        console.log(err);
      }
      else{
        res.send(result);
      }
    })
  });

  //level 4
  app.get('/viewCourses4/found',(req,res)=>{
    db.query("SELECT * FROM course WHERE level=4 and type='Foundation'",(err,result)=>{
      if(err){
        console.log(err);
      }
      else{
        res.send(result);
      }
    })
  });
  app.get('/viewCourses4/sup',(req,res)=>{
    db.query("SELECT * FROM course WHERE level=4 and type='Supplementary'",(err,result)=>{
      if(err){
        console.log(err);
      }
      else{
        res.send(result);
      }
    })
  });
  app.get('/viewCourses4/core',(req,res)=>{
    db.query("SELECT * FROM course WHERE level=4 and type='Core'",(err,result)=>{
      if(err){
        console.log(err);
      }
      else{
        res.send(result);
      }
    })
  });


  // app.get('/addmarks/:ID',(req,res)=>{
  //   const id=req.params.ID;
  //   db.query("SELECT * FROM student_course WHERE CourseId=?",id,(err,result)=>{
  //     if(err)
  //     {
  //       console.log(err);
  //     }
  //     else{
  //       res.send(result);
        
  //     }
  //   })
  // });

  // app.get('/viewCourse/:ID',(req,res)=>{
  //   const id=req.params.ID;
  //   db.query("SELECT * FROM course WHERE ID=?",id,(err,result)=>{
  //     if(err)
  //     {
  //       console.log(err);
  //     }
  //     else{
  //       res.send(result);
        
  //     }
  //   })
  // });

  //add grade
  app.post('/addgrade',(req,res)=>{
    const grade=req.body.Grade;
    const regno=req.body.RegNo;
    const Cid=req.body.CourseId;

    var sql="update studentcoursedetails set Grade=? where CourseId=? and RegNo=?";
    db.query(sql,[grade,Cid,regno],(err,result)=>
    {
      if(err)
      {
        console.log(err);
  
      }
      else
      {
        res.send("added");
      }
    })
  })
  
  
  app.get('/lecturerDetails',(req,res)=>{
    db.query("SELECT * FROM lecturer",(err,result)=>{
      if(err)
    {
      console.log(err);
      
    }
    else{
      res.send(result);
    }

    })
  });
 
  app.post('/addLec',(req,res)=>{
    const Fullname=req.body.Fullname;
    const Username=req.body.Username;
    const NIC=req.body.NIC;
    const Email=req.body.Email
    const Password=req.body.Password;
    const Subject1=req.body.Subject1;
    const Subject2=req.body.Subject2;
    const Subject3=req.body.Subject3;
    
  
    var sql="INSERT INTO lecturer (Fullname,Username,NIC,Email,Password,Subject1,Subject2,Subject3) VALUES (?,?,?,?,?,?,?,?)";
    db.query(sql,[Fullname,Username,NIC,Email,Password,Subject1,Subject2,Subject3],(err,result)=>
    {
      if(err)
      {
        console.log(err);
  
      }
      else
      {
        res.send("values inserted");
      }
    })
  })
