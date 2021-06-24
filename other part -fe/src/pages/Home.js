import React, { Component } from 'react'
import Imageslider from '../components/Imageslider.js'
class Home extends Component 
{
        render() {
          return (
            <>
              <Imageslider/>
              {/*- Welcome Section */}
              <div className="container-fluid">
                <div className="row Jumbotron">
                  <div className="col-xs-12 col-sm-12 col-md-9 clo-lg-9 col-xl-10">
                  <h1 className="change-font-color">Welcome to Centre for Open and Distance Learning
                    University of Jaffna</h1>
                  </div>
                </div>
              </div>
              {/*- Three Column Section Mission and Vision */}
              <div className="container-fluid padding">
                <div className="row padding">
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body row text-center">
                        <h4 className="card-title" >.</h4>
                        <p className="card-text"><b>OUR  VISION</b><br />“To be a leading center of excellence in teaching, learning, research and scholarship”</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body row text-center">
                        <h4 className="card-title">.</h4>
                        <p className="card-text"><b>OUR  MISSION</b><br />“Providing quality teaching and learning and by carrying out research in producing intellectually
                          and professionally competent capable graduates to meet the emerging challenges of the national and international community 
                          with special emphasis on the social, economic and cultural needs of Northern Sri Lanka.”</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <img src="assets/imagas/body.jpg" className="card-image-center" alt="Logo_image"/>
                    </div>
                  </div>
                </div>
              </div>
              {/*- AboutUs Section */}
              <a name="AboutUsSection" />
              <div className="container-fluid padding">
                <div className="row padding">
                  <div className="col-md-12">
                    <div className="card AboutUs">
                      <div className="card-body text-center">
                        <h1 className="card-title">About Us</h1>
                        <p className="card-text">
                          Center for Open and Distance Learning (CODL) which was
                          formally called as Distance Learning Unit – was started in 1991 with the objective of providing higher educational opportunities for candidates. This centre would consist of three divisions such as Registration &amp; Examination, Learning &amp; Resources and Training &amp; Development. CODL would be managed by Board of Management -BOM- which would be resourced by a Director and Three Coordinators.
                          CODL will work with respective degree offering faculties. Academic programmes are being designed, planned and implemented through Board of Study which consists of academics appointed by respective faculties.
                          Board of Management would be the executive body of CODL which would consists of Vice Chancellor, UOJSL (Chairman), two council nominees, Deans of Faculties offering external degrees, Director- CEDPL-, Chairman of Board of Studies for which courses are offered via CEDPL, three optional representatives from public, private and NGO, three Coordinators who have no voting rights such as Registration &amp; Examination, Learning &amp; Resources and Training &amp; Development, Ex-officio, Registrar, Bursar and SAR. The Director of CODL
                          is the Secretary for Board of Management of CODL.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        }

        
}

export default Home

