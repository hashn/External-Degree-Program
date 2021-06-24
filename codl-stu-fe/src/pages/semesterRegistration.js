import React from "react"

class SemesterRegistration extends React.Component {

    // Constructor
    constructor(props) {
        super(props)

        // STATE
        this.state = {
            RegNo: null,
            Name: null,
            AccdYear: null,
            Semester: null,
            Csub1: null,
            Csub2: null,
            Csub3: null,
            Supsub1: null,
            Supsub2: null,
            Supsub3: null,
            Fsub1: null,
            Fsub2: null,
            Fsub3: null
        }

    }

    // Life Cycle ( DidMount )
    componentDidMount = () => {
        if (localStorage.getItem("token") == null) {
            this.props.history.push("/login")
        }
    }


    /**
     * This method will pass the data to backend application
     * once the user submit semester registration form.
     */
    On_SemesterRegistration = () => {

        fetch("http://localhost:3001/SemesterRegistration", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
            body: JSON.stringify({
                RegNo: this.state.RegNo,
                Name: this.state.Name,
                AccdYear: this.state.AccdYear,
                Semester: this.state.Semester,
                Csub1: this.state.Csub1,
                Csub2: this.state.Csub2,
                Csub3: this.state.Csub3,
                Supsub1: this.state.Supsub1,
                Supsub2: this.state.Supsub2,
                Supsub3: this.state.Supsub3,
                Fsub1: this.state.Fsub1,
                Fsub2: this.state.Fsub2,
                Fsub3: this.state.Fsub3
                
            })
        })
        .then(Response => Response.json())
        .then(Response => {
            (Response.status === "success") ? alert("success") : alert("failed")
        })

    }

    // RENDER
    render() {
        return (
            <div className ="container">
                <div className="row">
                    <div className="col-md-10 mx-auto">


                        <div>
                            <img src="assets\imagas\logo3.png" class="rounded mx-auto d-block" alt="CODL logo"/>
                        </div>

                        <h4 class="my-5">
                        Semester Registartion
                        </h4>
                        <hr className="mb-5"></hr>

                        <form className="form">
                            
                            <div class="form-row mb-4">
                                
                                <div class="form-group col">
                                    <label for="RegNo">Registration Number &nbsp;</label>
                                    <label class="tamil">(பதிவு எண்)</label>
                                    <input type="text"  
                                    class="form-control" 
                                    id="RegNo" 
                                    placeholder="Registration Number"
                                    onChange={e => this.setState({RegNo: e.target.value})} />
                                </div>
                                
                            </div>

                            <div class="form-row mb-4">
                                
                                <div class="form-group col">
                                    <label for="Name"> Name &nbsp;</label>
                                    <label class="tamil">(பெயர்)</label>
                                    <input type="text" class="form-control" id="Name" placeholder="Name" value={this.state.Name} onChange={e => this.setState({Name: e.target.value})} />
                                </div>

                            </div>

                            <div class="form-row mb-4">
                                
                                <div class="form-group col">
                                    <label for="AccdYear"> Accademic Year &nbsp;</label>
                                    <label class="tamil">(கல்வி ஆண்டில்)</label>
                                    <input type="text" 
                                    class="form-control" 
                                    id="AccdYear" 
                                    placeholder="Accademic Year "
                                    onChange={e => this.setState({AccdYear: e.target.value})} />
                                </div>

                            </div>

                            <div class="form-row mb-4">
                                
                                <div class="form-group col">
                                    <label for="Semester"> Semester &nbsp;</label>
                                    <label class="tamil">(தவணை)</label>
                                    <input type="text" 
                                    class="form-control" 
                                    id="Semester" 
                                    placeholder="Semester"
                                    onChange={e => this.setState({Semester: e.target.value})} />
                                </div>

                            </div>

                            <h4 class="my-5">
                                    Core Subjects
                            </h4>

                            <div class="form-row mb-4">
                                
                                <div class="form-group col">
                                    <label for="Csub1"> Subject 1 &nbsp;</label>
                                    <label class="tamil">(பொருள் 1)</label>
                                    <input type="text" 
                                    class="form-control" 
                                    id="Csub1" 
                                    placeholder="Subject 1"
                                    onChange={e => this.setState({Csub1: e.target.value})} />
                                </div>

                                <div class="form-group col">
                                    <label for="Csub2"> Subject 2 &nbsp;</label>
                                    <label class="tamil">(பொருள் 2)</label>
                                    <input type="text" 
                                    class="form-control" 
                                    id="Csub2" 
                                    placeholder="Subject 2 "
                                    onChange={e => this.setState({Csub2: e.target.value})} />
                                </div>

                                <div class="form-group col">
                                    <label for="Csub3"> Subject 3 &nbsp;</label>
                                    <label class="tamil">(பொருள் 3)</label>
                                    <input type="text" 
                                    class="form-control" 
                                    id="Csub3" 
                                    placeholder="Subject 3"
                                    onChange={e => this.setState({Csub3: e.target.value})} />
                                </div>

                            </div>

                            <h4 class="my-5">
                                Supplementary Subjects
                            </h4>

                            <div class="form-row mb-4">
                                
                                <div class="form-group col">
                                    <label for="Supsub1"> Subject 1 &nbsp;</label>
                                    <label class="tamil">(பொருள் 1)</label>
                                    <input type="text" 
                                    class="form-control" 
                                    id="Supsub1" 
                                    placeholder="Subject 1"
                                    onChange={e => this.setState({Supsub1: e.target.value})} />
                                </div>

                                <div class="form-group col">
                                    <label for="Supsub2"> Subject 2 &nbsp;</label>
                                    <label class="tamil">(பொருள் 2)</label>
                                    <input type="text" 
                                    class="form-control" 
                                    id="Supsub2" 
                                    placeholder="Subject 2 "
                                    onChange={e => this.setState({Supsub2: e.target.value})} />
                                </div>

                                <div class="form-group col">
                                    <label for="Supsub3"> Subject 3 &nbsp;</label>
                                    <label class="tamil">(பொருள் 3)</label>
                                    <input type="text" 
                                    class="form-control" 
                                    id="Supsub3" 
                                    placeholder="Subject 3"
                                    onChange={e => this.setState({Supsub3: e.target.value})} />
                                </div>

                            </div>

                            <h4 class="my-5">
                                Foundation Subjects
                            </h4>

                            <div class="form-row mb-4">
                                
                                <div class="form-group col">
                                    <label for="Fsub1"> Subject 1 &nbsp;</label>
                                    <label class="tamil">(பொருள் 1)</label>
                                    <input type="text" 
                                    class="form-control" 
                                    id="Fsub1" 
                                    placeholder="Subject 1"
                                    onChange={e => this.setState({Fsub1: e.target.value})} />
                                </div>

                                <div class="form-group col">
                                    <label for="Fsub2"> Subject 2 &nbsp;</label>
                                    <label class="tamil">(பொருள் 2)</label>
                                    <input type="text" 
                                    class="form-control" 
                                    id="Fsub2" 
                                    placeholder="Subject 2 "
                                    onChange={e => this.setState({Fsub2: e.target.value})} />
                                </div>

                                <div class="form-group col">
                                    <label for="Fsub3"> Subject 3 &nbsp;</label>
                                    <label class="tamil">(பொருள் 3)</label>
                                    <input type="text" 
                                    class="form-control" 
                                    id="Fsub3" 
                                    placeholder="Subject 3"
                                    onChange={e => this.setState({Fsub3: e.target.value})} />
                                </div>

                            </div>
                            <button onClick={this.On_SemesterRegistration} type="button" className="btn btn-success">Submit</button>
                        </form>    
                    </div>
                </div>        
            </div>
        );
    }
}

export default SemesterRegistration;
