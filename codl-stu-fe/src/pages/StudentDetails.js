import React from "react"

class StudentDetails extends React.Component {

    // Constructor
    constructor(props) {
        super(props)

        // STATE
        this.state = {
            reg_no: null,
            name: null,
            nameInitial: null,
            mobile: null,
            level: null,
            acdyear: null,
            gpa: null,
            address: null,
            nic: null,
            sex: null,
            yearAl: null,
            streamAl: null,
            ALsubject1: null,
            ALsubject1Result: null,
            ALsubject2: null,
            ALsubject2Result: null,
            ALsubject3: null,
            ALsubject3Result: null,
            ALenglishResult: null,
            ALgenTestmarks: null,
            qualificationName: null,
            qualificationInstitute: null,
            courseDuration: null,
            courseExpire: null,
            ProfTitile: null,
            ProfOrg: null,
        }
    }

    // Life Cycle ( DidMount )
    componentDidMount = () => {
        if (localStorage.getItem("token") == null) {
            this.props.history.push("/login")
        } else {

            fetch("http://localhost:3001/student", {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
            .then(Response => Response.json())
            .then(Response => {
                this.setState({
                    reg_no: Response.data.student.RegNo,
                    name: Response.data.student.Name,
                    mobile: Response.data.student.mobile,
                    level: Response.data.student.level,
                    acdyear: Response.data.student.acdyear,
                    gpa: Response.data.student.gpa,
                    address: Response.data.student.address,
                    nic: Response.data.student.nic,
                    sex: Response.data.student.sex,
                    yearAl: Response.data.student.yearAl,
                    streamAl: Response.data.student.streamAl,
                    ALsubject1: Response.data.student.ALsubject1,
                    ALsubject1Result: Response.data.student.ALsubject1Result,
                    ALsubject2: Response.data.student.ALsubject2,
                    ALsubject2Resul: Response.data.student.ALsubject2Resul,
                    ALsubject3: Response.data.student.ALsubject3,
                    ALsubject3Resul: Response.data.student.ALsubject3Resul,
                    ALenglishResult: Response.data.student.ALenglishResult,
                    ALgenTestmarks: Response.data.student.ALgenTestmarks,
                    qualificationName: Response.data.student.qualificationName,
                    qualificationInstitute: Response.data.student.qualificationInstitute,
                    courseDuration: Response.data.student.courseDuration,
                    courseExpire: Response.data.student.courseExpire,
                    ProfTitile: Response.data.student.ProfTitile,
                    ProfOrg: Response.data.student.ProfOrg,
                })
            })

        }
    }


    On_Update = () => {

        fetch("http://localhost:3001/auth/student", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
            body: JSON.stringify({
                reg_no: this.state.reg_no,
                name: this.state.name,
                nameInitial: this.state.nameInitial,
                mobile:this.state.mobile,
                level:this.state.level,
                acdyear:this.state.acdyear,
                gpa:this.state.gpa,
                address:this.state.address,
                nic:this.state.nic,
                sex:this.state.sex,
                yearAl:this.state.yearAl,
                streamAl:this.state.streamAl,
                ALsubject1:this.state.ALsubject1,
                ALsubject1Result:this.state.ALsubject1Result,
                ALsubject2:this.state.ALsubject2,
                ALsubject2Result:this.state.ALsubject2Result,
                ALsubject3:this.state.ALsubject3,
                ALsubject3Result:this.state.ALsubject3Result,
                ALenglishResult:this.state.ALenglishResult,
                ALgenTestmarks:this.state.ALgenTestmarks,
                qualificationName:this.state.qualificationName,
                qualificationInstitute:this.state.qualificationInstitute,
                courseDuration:this.state.courseDuration,
                courseExpire:this.state.courseExpire,
                ProfTitile:this.state.ProfTitile,
                ProfOrg:this.state.ProfOrg,

            })
        })
        .then(Response => Response.json())
        .then(Response => {
            (Response.status === "success") ? alert("success") : alert("failed")
        })

    }

    // RENDER
    render(){
        return (
            <div className ="container">
                <div className="row">
                    <div className="col-md-10 mx-auto">


                        <div>
                            <img src="assets\imagas\logo3.png" class="rounded mx-auto d-block" alt="CODL logo"/>
                        </div>

                        <h4 class="my-5">
                        Update your details
                        </h4>
                        <hr className="mb-5"></hr>

                        <form className="form">
                            
                            <div class="form-row mb-4">
                                
                                <div class="form-group col">
                                    <label for="RegNo">Registration Number &nbsp;</label>
                                    <label class="tamil">(பதிவு எண்)</label>
                                    <input type="text" class="form-control" placeholder="Registration Number"
                                    onChange={e => this.setState({reg_no: e.target.value})} value={this.state.reg_no} />
                                </div>
                                
                            </div>

                            <div class="form-row mb-4">
                                
                                <div class="form-group col">
                                    <label for="Name"> Name &nbsp;</label>
                                    <label class="tamil">(பெயர்)</label>
                                    <input type="text" 
                                    class="form-control" 
                                    id="Name" 
                                    placeholder="Name"
                                    onChange={e => this.setState({name: e.target.value})} value={this.state.name} />
                                </div>

                            </div>

                            <div class="form-row mb-4">
                                
                                <div class="form-group col">
                                    <label for="nameInitial"> Name with Initials &nbsp;</label>
                                    <label class="tamil">(தொடக்கங்களுடன் பெயர்)</label>
                                    <input type="text"
                                    class="form-control"
                                    id="nameInitial"
                                    placeholder="Name with Initials"
                                    onChange={e => this.setState({nameInitial: e.target.value})} value={this.state.nameInitial} />
                                </div>

                            </div>

                            <div class="form-row mb-4">
                                
                                {/* <div class="form-group col">
                                    <label for="email"> Email &nbsp;</label>
                                    <label class="tamil">(தொடக்கங்களுடன் பெயர்)</label>
                                    <input type="email"
                                    class="form-control"
                                    id="email"
                                    placeholder="Name with Initials"
                                    onChange={(event)=>{setEmail(event.target.value);}} />
                                </div> */}

                                <div class="form-group col">
                                    <label for="mobile"> Mobile &nbsp;</label>
                                    <label class="tamil">(கைபேசி)</label>
                                    <input type="text"
                                    class="form-control"
                                    id="mobile"
                                    placeholder="mobile"
                                    onChange={e => this.setState({mobile: e.target.value})} value={this.state.mobile} />
                                </div>

                            </div>

                            <div class="form-row mb-4">
                                
                                <div class="form-group col">
                                    <label for="level"> Level &nbsp;</label>
                                    <label class="tamil">(நிலை)</label>
                                    <input type="text"
                                    class="form-control"
                                    id="level"
                                    placeholder="Level"
                                    onChange={e => this.setState({level: e.target.value})} value={this.state.level} />
                                </div>

                                <div class="form-group col">
                                    <label for="acdyear"> Accademic Year &nbsp;</label>
                                    <label class="tamil">(கல்வி ஆண்டில்)</label>
                                    <input type="text"
                                    class="form-control"
                                    id="acdyear"
                                    placeholder="Accademic Year"
                                    onChange={e => this.setState({acdyear: e.target.value})} value={this.state.acdyear} />
                                </div>

                            </div>

                            <div class="form-row mb-4">
                                
                                <div class="form-group col">
                                    <label for="gpa"> GPA &nbsp;</label>
                                    <label class="tamil">(ஜி.பி.ஏ.)</label>
                                    <input type="text"
                                    class="form-control"
                                    id="gpa"
                                    placeholder="GPA"
                                    onChange={e => this.setState({gpa: e.target.value})} value={this.state.gpa} />
                                </div>

                            </div>

                            <div class="form-row mb-4">
                                
                                <div class="form-group col">
                                    <label for="address"> Address &nbsp;</label>
                                    <label class="tamil">(முகவரி)</label>
                                    <input type="text"
                                    class="form-control"
                                    id="address"
                                    placeholder="Address"
                                    onChange={e => this.setState({address: e.target.value})} value={this.state.address} />
                                </div>

                            </div>

                            <div class="form-row mb-4">
                                
                                <div class="form-group col">
                                    <label for="nic"> NIC &nbsp;</label>
                                    <label class="tamil">(என்.ஐ.சி.)</label>
                                    <input type="text"
                                    class="form-control"
                                    id="nic"
                                    placeholder="NIC" 
                                    onChange={e => this.setState({nic: e.target.value})} value={this.state.nic} />
                                </div>

                            </div>

                            <div class="form-row mb-4">
                                
                                <div class="form-group col">
                                    <label for="sex"> SEX &nbsp;</label>
                                    <label class="tamil">(செக்ஸ்)</label>
                                    <input type="text"
                                    class="form-control"
                                    id="sex"
                                    placeholder="SEX"
                                    onChange={e => this.setState({sex: e.target.value})} value={this.state.sex} />
                                </div>

                            </div>

                            <div class="form-row mb-4">
                                <h1>
                                EDUCATIONAL QUALIFICATION (கல்வி தகுதி)
                                </h1>
                            
                            </div>

                            <div class="form-row mb-4">
                                
                                <div class="form-group col">
                                    <label for="yearAl"> Year of A/L &nbsp;</label>
                                    <label class="tamil">(A / L ஆண்டு)</label>
                                    <input type="text"
                                    class="form-control"
                                    id="yearAl"
                                    placeholder="Year of A/L"
                                    onChange={e => this.setState({yearAl: e.target.value})} value={this.state.yearAl} />
                                </div>

                                <div class="form-group col">
                                    <label for="streamAl"> Stream of A/L &nbsp;</label>
                                    <label class="tamil">(A / L இன் நீரோடை)</label>
                                    <input type="text"
                                    class="form-control"
                                    id="streamAl"
                                    placeholder="Stream of A/L"
                                    onChange={e => this.setState({streamAl: e.target.value})} value={this.state.streamAl} />
                                </div>


                            </div>

                            <div class="form-row mb-4">
                                
                                <div class="form-group col">
                                    <label for="ALsubject1"> Subject 1 &nbsp;</label>
                                    <label class="tamil">(பொருள் 1)</label>
                                    <input type="text"
                                    class="form-control"
                                    id="ALsubject1"
                                    placeholder="Subject 1"
                                    onChange={e => this.setState({ALsubject1: e.target.value})} value={this.state.ALsubject1} />
                                </div>

                                <div class="form-group col">
                                    <label for="ALsubject1Result"> Subject 1 Result &nbsp;</label>
                                    <label class="tamil">(பொருள் 1 முடிவு)</label>
                                    <input type="text"
                                    class="form-control"
                                    id="ALsubject1Result"
                                    placeholder="Subject 1 Result"
                                    onChange={e => this.setState({ALsubject1Result: e.target.value})} value={this.state.ALsubject1Result} />
                                </div>


                            </div>

                            <div class="form-row mb-4">
                                
                                <div class="form-group col">
                                    <label for="ALsubject2"> Subject 2 &nbsp;</label>
                                    <label class="tamil">(பொருள் 2)</label>
                                    <input type="text"
                                    class="form-control"
                                    id="ALsubject2"
                                    placeholder="Subject 2"
                                    onChange={e => this.setState({ALsubject2: e.target.value})} value={this.state.ALsubject2} />
                                </div>

                                <div class="form-group col">
                                    <label for="ALsubject2Result"> Subject 2 Result &nbsp;</label>
                                    <label class="tamil">(பொருள் 2 முடிவு)</label>
                                    <input type="text"
                                    class="form-control"
                                    id="ALsubject2Result"
                                    placeholder="Subject 2 Result"
                                    onChange={e => this.setState({ALsubject2Result: e.target.value})} value={this.state.ALsubject2Result} />
                                </div>


                            </div>

                            <div class="form-row mb-4">
                                
                                <div class="form-group col">
                                    <label for="ALsubject3"> Subject 3 &nbsp;</label>
                                    <label class="tamil">(பொருள் 3)</label>
                                    <input type="text"
                                    class="form-control"
                                    id="ALsubject3"
                                    placeholder="Subject 3"
                                    onChange={e => this.setState({ALsubject3: e.target.value})} value={this.state.ALsubject3} />
                                </div>

                                <div class="form-group col">
                                    <label for="ALsubject3Result"> Subject 3 Result &nbsp;</label>
                                    <label class="tamil">(பொருள் 3 முடிவு)</label>
                                    <input type="text"
                                    class="form-control"
                                    id="ALsubject3Result"
                                    placeholder="Subject 3 Result"
                                    onChange={e => this.setState({ALsubject3Result: e.target.value})} value={this.state.ALsubject3Result} />
                                </div>


                            </div>

                            <div class="form-row mb-4">
                                
                                <div class="form-group col">
                                    <label for="ALenglishResult"> General English Results &nbsp;</label>
                                    <label class="tamil">(பொது ஆங்கில முடிவுகள்)</label>
                                    <input type="text"
                                    class="form-control"
                                    id="ALenglishResult"
                                    placeholder="General English Results"
                                    onChange={e => this.setState({ALenglishResult: e.target.value})} value={this.state.ALenglishResult} />
                                </div>

                                <div class="form-group col">
                                    <label for="ALgenTestmarks"> General test Result &nbsp;</label>
                                    <label class="tamil">(பொது சோதனை முடிவு)</label>
                                    <input type="text"
                                    class="form-control"
                                    id="ALgenTestmarks"
                                    placeholder="General Knowledge test Result"
                                    onChange={e => this.setState({ALgenTestmarks: e.target.value})} value={this.state.ALgenTestmarks} />
                                </div>


                            </div>

                            <div class="form-row mb-4">
                                <h1>
                                OTHER QUALIFICATIONS (பிற தகுதிகள்)
                                </h1>
                            
                            </div>

                            <div class="form-row mb-4">
                                
                                <div class="form-group col">
                                    <label for="qualificationName"> Name &nbsp;</label>
                                    <label class="tamil">(பெயர்)</label>
                                    <input type="text"
                                    class="form-control"
                                    id="qualificationName"
                                    placeholder=""
                                    onChange={e => this.setState({qualificationName: e.target.value})} value={this.state.qualificationName} />
                                </div>

                                <div class="form-group col">
                                    <label for="qualificationInstitute">Institute &nbsp;</label>
                                    <label class="tamil">(நிறுவனம்)</label>
                                    <input type="text"
                                    class="form-control"
                                    id="qualificationInstitute" 
                                    placeholder=""
                                    onChange={e => this.setState({qualificationInstitute: e.target.value})} value={this.state.qualificationInstitute} />
                                </div>


                            </div>

                            <div class="form-row mb-4">
                                
                                <div class="form-group col">
                                    <label for="courseDuration"> Duration &nbsp;</label>
                                    <label class="tamil">(காலம்)</label>
                                    <input type="text"
                                    class="form-control"
                                    id="courseDuration"
                                    placeholder=""
                                    onChange={e => this.setState({courseDuration: e.target.value})} value={this.state.courseDuration} />
                                </div>

                                <div class="form-group col">
                                    <label for="courseExpire">Expire Date &nbsp;</label>
                                    <label class="tamil">(முடிவு தேதி)</label>
                                    <input type="text"
                                    class="form-control"
                                    id="courseExpire"
                                    placeholder=""
                                    onChange={e => this.setState({courseExpire: e.target.value})} value={this.state.courseExpire} />
                                </div>


                            </div>

                            <div class="form-row mb-4">
                                <h1>
                                PROFESSIONAL QUALIFICATIONS (தொழில்முறை தகுதிகள்)
                                </h1>
                            
                            </div>

                            <div class="form-row mb-4">
                                
                                <div class="form-group col">
                                    <label for="ProfTitile"> Position &nbsp;</label>
                                    <label class="tamil">(நிலை)</label>
                                    <input type="text"
                                    class="form-control"
                                    id="ProfTitile"
                                    placeholder=""
                                    onChange={e => this.setState({ProfTitile: e.target.value})} value={this.state.ProfTitile} />
                                </div>

                            </div>

                            <div class="form-row mb-4">

                                <div class="form-group col">
                                        <label for="ProfOrg">Organization &nbsp;</label>
                                        <label class="tamil">(அமைப்பு)</label>
                                        <input type="text"
                                        class="form-control"
                                        id="ProfOrg" 
                                        placeholder=""
                                        onChange={e => this.setState({ProfOrg: e.target.value})} value={this.state.ProfOrg} />
                                </div>

                            </div>

                            {/* <div class="form-row mb-4">

                                <div class="form-group col">
                                        <label for="password">Password &nbsp;</label>
                                        <label class="tamil">(கடவுச்சொல்)</label>
                                        <input type="password"
                                        class="form-control"
                                        id="password"
                                        placeholder="Your password"
                                        onChange={(event)=>{setPassword(event.target.value);}} />
                                </div>

                            </div> */}
                            
                            <button onClick={this.On_Update} type="button" className="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentDetails;
