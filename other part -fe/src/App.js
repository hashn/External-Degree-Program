import React from 'react';
import Dashboard from './components/Admin/Dashboard';
import AdminStudent from './components/Admin/Student/AdminStudent';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contactus from './pages/Contactus';
import Login from './pages/Login';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Admin from './components/Admin/Admin_/Admin';
import Candidates from './components/Admin/Candidates/Candidates';
import Course from './components/Admin/Course/Course';
import Timetable from './components/Admin/Timetable/Timetable';
import Staff from './components/Admin/Staff/Staff';
import Lecturer from './components/Admin/Lecturer/Lecturer';
import CandidateExamApplicationArts from './pages/CandidateExamApplicationArts';
import UniversityRegistrationArts from './pages/UniversityRegistrationArts';
import AllCandidates from './components/Admin/Candidates/AllCandidates';
import UpdateAllCandidate from './components/Admin/Candidates/UpdateAllCandidate';
import AcceptAndSendMail from './components/Admin/Candidates/AcceptAndSendMail';
import AddTimetable from './components/Admin/Timetable/AddTimetable';
import ExamSelectedCandidate from './components/Admin/Candidates/ExamSelectedCandidate';
import InterviewSelectedCandidate from './components/Admin/Candidates/InterviewSelectedCandidate';
import ExamSelectedCandidateDetails from './components/Admin/Candidates/ExamSelectedCandidateDetails';
import AddCadidateExamMarks from './components/Admin/Candidates/AddCadidateExamMarks';
import AddInterviewExamMarks from './components/Admin/Candidates/AddInterviewExamMarks';
import InterViewSelectedCandidateDetails from './components/Admin/Candidates/InterViewSelectedCandidateDetails';
import OpenApplicationForm from './components/Admin/OpenApplicationForm';
import OpenAndCloseApplicationForm  from './components/Admin/OpenAndCloseApplicationForm';
import AllCanditatsMoreDetails from './components/Admin/Candidates/AllCanditatsMoreDetails';
import SendMail from './components/Admin/Candidates/SendMail';
import UserRejistration from './pages/UserRejistration';
import AddCourse from './components/Admin/Course/AddCourse';
import Editcourse from './components/Admin/Course/Editcourse';
import UpdateExamSelectedCandidate from './components/Admin/Candidates/UpdateExamSelectedCandidate';
import AcadamicYearCandidate from './components/Admin/Candidates/AcadamicYearCandidate';
import AddImage from './components/Admin/Timetable/AddImage';
import Download from './pages/Download';
import ApplicationStatus from './pages/ApplicationStatus';
import AddinterviewMarks from './components/Admin/Candidates/AddinterviewMarks';
import UpdateInterviewSelectedCandidate from './components/Admin/Candidates/UpdateInterviewSelectedCandidate';
import Foundation from './pages/foundation';
// import UserRejistration from './pages/UserRejistration';
//kavindhiya
import Degree from './pages/Degree';
import CoursesCC from './pages/CoursesCC';import CoursesEC from './pages/CoursesEC';
import CoursesEN from './pages/CoursesEN';import CoursesGY from './pages/CoursesGY';
import CoursesHC from './pages/CoursesHC';import CoursesHP from './pages/CoursesHP';
import CoursesHY from './pages/CoursesHY';import CoursesLG from './pages/CoursesLG';
import CoursesPH from './pages/CoursesPH';import CoursesPS from './pages/CoursesPS';
import CoursesPY from './pages/CoursesPY';import CoursesSN from './pages/CoursesSN';
import CoursesTA from './pages/CoursesTA';import foundation from './pages/foundation';
import Supplementary from './pages/Supplementary';

//student-admin
import A_AllStudent from './components/Admin/Student/A_AllStudent';
import A_StudentDetail from './components/Admin/Student/A_StudentDetail';
import A_EachStudMoreDetails from './components/Admin/Student/A_EachStudMoreDetail';
import A_EditStudent from './components/Admin/Student/A_EditStudent';
import A_courselist1 from './components/Admin/Student/A_courselist1';
import A_courselist2 from './components/Admin/Student/A_courselist2';
import A_courselist3 from './components/Admin/Student/A_courselist3';
import A_courselist4 from './components/Admin/Student/A_courselist4';
import A_updateGrade from './components/Admin/Student/A_updateGrade';


import UserReg from './components/Forms/userReg';

//kavindhiya

//
import Student from './components/Student/Student';
function App() {
  return (
   <>
   <Router>
     <Header/>
        <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/Login' component={Login}/>
                  <Route exact path='/Contactus' component={Contactus}/>
                  <Route exact path='/Login/Dashboard' component={Dashboard}/>
                  <Route exact path='/AdminStudent' component={AdminStudent}/>
                  <Route exact path='/Admin' component={Admin}/>
                  <Route exact path='/Candidates' component={Candidates}/>
                  <Route exact path='/Course' component={Course}/>
                  <Route exact path='/Timetable' component={Timetable}/>
                  <Route exact path='/Staff' component={Staff}/>
                  <Route exact path='/Lecturer' component={Lecturer}/>
                  <Route exact path='/CandidateExamApplicationArts' component={CandidateExamApplicationArts}/>
                  <Route exact path='/UniversityRegistrationArts' component={UniversityRegistrationArts}/>
                  <Route exact path='/AllCandidates/:id' component={AllCandidates}/>
                  <Route exact path='/UpdateAllCandidate/:id' component={UpdateAllCandidate}/>
                  <Route exact path='/AcceptAndSendMail/:id' component={AcceptAndSendMail}/>
                  <Route exact path='/AddTimetable' component={AddTimetable}/>
                  <Route exact path='/ExamSelectedCandidate/:id' component={ExamSelectedCandidate}/>
                  <Route exact path='/InterviewSelectedCandidate/:id' component={InterviewSelectedCandidate}/>
                  <Route exact path='/ExamSelectedCandidateDetails/:id' component={ExamSelectedCandidateDetails}/>
                  <Route exact path='/AddCadidateExamMarks/:id' component={AddCadidateExamMarks}/>
                  <Route exact path='/AddInterviewExamMarks' component={AddInterviewExamMarks}/>
                  <Route exact path='/InterViewSelectedCandidateDetails/:id' component={InterViewSelectedCandidateDetails}/>
                  <Route exact path='/OpenApplicationForm'component={OpenApplicationForm}/>
                  <Route exact path='/OpenAndCloseApplicationForm' component={OpenAndCloseApplicationForm}/>
                  <Route exact path='/AllCanditatsMoreDetails/:id' component={AllCanditatsMoreDetails}/>
                  <Route exact path='/Download/:id' component={Download}/>
                  <Route exact path='/ApplicationStatus' component={ApplicationStatus}/>
                  <Route exact path='/UpdateInterviewSelectedCandidate/:id' component={UpdateInterviewSelectedCandidate}/>
                  <Route exact path='/AddinterviewMarks/:id' component={AddinterviewMarks}/>
                  <Route exact path='/AddCourse' component={AddCourse}/>
                  <Route exact path='/Editcourse/:id' component={Editcourse}/>
                  <Route exact path='/UpdateExamSelectedCandidate/:id' component={UpdateExamSelectedCandidate}/>
                  
                  <Route exact path='/AcadamicYearCandidate' component={AcadamicYearCandidate}/>
                  <Route exact path='/SendMail/:id' component={SendMail}/>

                  <Route exact path='/AddImage' component={AddImage}/>
                  <Route  exact path='/Degree' component={Degree}/>
                  <Route  exact path='/CC' component={CoursesCC}/>
                  <Route  exact path='/EC' component={CoursesEC}/>
                  <Route  exact path='/EN' component={CoursesEN}/>
                  <Route  exact path='/GY' component={CoursesGY}/>
                  <Route  exact path='/HC' component={CoursesHC}/>
                  <Route  exact path='/HP' component={CoursesHP}/>
                  <Route  exact path='/HY' component={CoursesHY}/>
                  <Route  exact path='/LG' component={CoursesLG}/>
                  <Route  exact path='/PH' component={CoursesPH}/>
                  <Route  exact path='/PS' component={CoursesPS}/>
                  <Route  exact path='/PY' component={CoursesPY}/>
                  <Route  exact path='/SN' component={CoursesSN}/>
                  <Route  exact path='/TA' component={CoursesTA}/>
                  <Route  exact path='/Foundation' component={Foundation}/>
                  <Route  exact path='/Core' component={CoursesCC}/>
                  <Route  exact path='/supplementary' component={Supplementary}/>

                  <Route exact path='/Student' component={Student}/>
                  <Route exact path='/students/BA' component={A_AllStudent}/>
                  {/* <Route exact path='/students/BA/nameList' component={A_StudentDetail}/> */}
                  <Route exact path='/students/BA/nameList/MoreDetails/:RegNo' component={A_EachStudMoreDetails}/>
                  <Route exact path='/students/BA/nameList/:year' component={A_StudentDetail}/>
                  <Route exact path='/EditStudent/:sId' component={A_EditStudent}/>
                  <Route exact path='/students/BA/firstyearcourses' component={A_courselist1}/>
                  <Route exact path='/students/BA/secondyearcourses' component={A_courselist2}/>
                  <Route exact path='/students/BA/thirdyearcourses' component={A_courselist3}/>
                  <Route exact path='/students/BA/fourthyearcourses' component={A_courselist4}/>
                  {/* <Route exact path='/students/BA/firstyear/addmarks/:ID' component={A_updateGrade}/> */}
                  <Route exact path='/addMarks' component={A_updateGrade}/>

                  
                  
                  <Route exact path='/lectureReg' component={UserReg}/>
                  <Route exact path='/UserRejistration' component={UserRejistration}/>


                  
        </Switch>
     <Footer/>
     
    
   </Router>
   </>
  )
}

export default App;
