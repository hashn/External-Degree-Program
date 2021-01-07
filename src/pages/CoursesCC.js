import React, { Component } from 'react'

class CoursesCC extends Component {
    render() {
        return (
            <div className='courses'>
                <div className='core-courses-sec1'>
                    <h2 className="sec1-sub-title">Core Subjects</h2>
                    <div class="row">
                        <div class="col">
                            <div className="sec1-sub-box"><a href="#CC">Christian Civilization</a></div>
                        </div>
                        <div class="col">
                            <div className="sec1-sub-box"><a href="/Econ">Economics</a></div>
                        </div>
                        <div class="col">
                            <div className="sec1-sub-box"><a href="/EngLit">English Literature</a></div>
                        </div>
                        <div class="col">
                            <div className="sec1-sub-box"><a href="/Geography">Geography</a></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div className="sec1-sub-box"><a href="/HinduCiv">Hindu Civilization</a></div>
                        </div>
                        <div class="col">
                            <div className="sec1-sub-box"><a href="/HinduPhil">Hindu Philosophy</a></div>
                        </div>
                        <div class="col">
                            <div className="sec1-sub-box"><a href="/History">History</a></div>
                        </div>
                        <div class="col">
                            <div className="sec1-sub-box"><a href="/Linguistics">Linguistics</a></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div className="sec1-sub-box"><a href="/Philosophy">Philosophy</a></div>
                        </div>
                        <div class="col">
                            <div className="sec1-sub-box"><a href="/PolSci">Political Science</a></div>
                        </div>
                        <div class="col">
                            <div className="sec1-sub-box"><a href="/Psychology">Psychology</a></div>
                        </div>
                        <div class="col">
                            <div className="sec1-sub-box"><a href="/CSanskritC">Sanskrit</a></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                        </div>
                        <div class="col">
                            <div className="sec1-sub-box"><a href="/Tamils">Tamil</a></div>
                        </div>
                        <div class="col">
                            <div className="sec1-sub-box"><a href="/More">More</a></div>
                        </div>
                        <div class="col">
                        </div>
                    </div>
                    <img src="assets/imagas/course.jpg" className="card-image-center" />
                </div>
                
                {/* Christian Civilization */}
                <a name="#CC" />
                <div className='core-courses-sec2'>
                    <div className='courseunit-box'>
                        <h2 className='courseunit-title'>Christian Civilization</h2>
                        <div className='courseunits'>
                            <h4 className='courseunits-year'>First Year</h4>
                            <div className='courseunits-link'><a href="#">nmnmn</a></div>
                            <div className='courseunits-link'><a href="#">nmnmn</a></div>
                            <div className='courseunits-link'><a href="#">nmnmn</a></div>
                            <div className='courseunits-link'><a href="#">nmnmn</a></div>                            
                        </div>
                        <div className='courseunits'>
                            <h4 className='courseunits-year'>First Year</h4>
                            <div className='courseunits-link'><a href="#">nmnmn</a></div>
                            <div className='courseunits-link'><a href="#">nmnmn</a></div>
                            <div className='courseunits-link'><a href="#">nmnmn</a></div>
                            <div className='courseunits-link'><a href="#">nmnmn</a></div>                            
                        </div>
                        <div className='courseunits'>
                            <h4 className='courseunits-year'>First Year</h4>
                            <div className='courseunits-link'><a href="#">nmnmn</a></div>
                            <div className='courseunits-link'><a href="#">nmnmn</a></div>
                            <div className='courseunits-link'><a href="#">nmnmn</a></div>
                            <div className='courseunits-link'><a href="#">nmnmn</a></div>                            
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default CoursesCC
