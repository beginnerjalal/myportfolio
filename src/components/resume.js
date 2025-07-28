import React, { useEffect } from "react";
import "./resume.css";
import { Link } from "react-scroll";
const Resume = (props) => {
  return (
    <>
      <div className="container resumecontainer" style={{ padding: "2%" }} onClick={props.fn}>
        <div style={{ display: "flex", justifyContent: "center" ,flexDirection:"column"}}>
          <h3 className="myqualipara">My Qualification</h3>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <p style={{ width: "100px", height: "2px", backgroundColor: "black" }}></p>
            <p style={{ width: "40px", height: "8px", backgroundColor: "red", borderRadius: "10px" }}></p>
            <p style={{ width: "100px", height: "2px", backgroundColor: "black" }}></p>
          </div>
        </div>
        <div className="qualification" >
          <div className="qualify"> 
          <h4 style={{marginBottom:"8%"}}> <i class="fa-solid fa-user-graduate"></i> <strong style={{color:'#343a40'}}> Education</strong>   </h4>

          <section class="">
            <div class="row">
              <div class="col-md-12">
                <ul class="timeline-1 text-black">
                  <li class="event" > 
                    <h4 className="newclass">Bachelor of Technology</h4>
                    <p className="light1"> Computer Science and Engineering (2015 - 2019)</p>
                    <p className="light1"> K.N.I.P.S.S.</p>
                    <p className="light1"> 67%</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section class="">
            <div class="row">
              <div class="col-md-12">
                <ul class="timeline-1 text-black">
                  <li class="event" >
                    <h4 className="newclass">Intermediate</h4>
                    <p className="light1">  H.M.H.M.I.C (2013 - 2015)</p>
                    <p className="light1">  63%</p>
                    
                  </li>
                </ul>
              </div>
            </div>
          </section>
        
          <section class="">
            <div class="row">
              <div class="col-md-12">
                <ul class="timeline-1 text-black">
                  <li class="event" >
                    <h4 className="newclass">Matriculation</h4>
                    <p className="light1">  H.M.H.M.I.C.  (2013)</p>
                    <p className="light1">  70%</p>
                   
                  </li>
                </ul>
              </div>
            </div>
          </section>
          </div>
          <div className="experience">
          <div className="qualify"> 
          <h4 style={{marginBottom:"8%"}}> <i class="fa-solid fa-briefcase"></i> <strong style={{color:'#343a40'}}> Experience</strong> </h4>
          <section class="">
            <div class="row">
              <div class="col-md-12">
                <ul class="timeline-1 text-black">
                  <li class="event" >
                    <h4 class="newclass">Full Stack Developer</h4>
                    <p className="light1"> Sare Team (feb - may 2022)</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section class="">
            <div class="row">
              <div class="col-md-12">
                <ul class="timeline-1 text-black">
                  <li class="event" >
                    <h4 className="newclass">E-Commerce Web Frontend</h4>
                    <p className="light1"> Sare Team (feb - may 2022)</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          </div>
          </div>
        </div>




        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <h4> <i class="fa-solid fa-user-graduate"></i> <strong style={{color:'#343a40'}}> Education</strong>   </h4>

      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <section class="">
            <div class="row">
              <div class="col-md-12">
                <ul class="timeline-1 text-black">
                  <li class="event" > 
                    <h4 className="newclass">Bachelor of Technology</h4>
                    <p className="light1"> Computer Science and Engineering (2015 - 2019)</p>
                    <p className="light1"> K.N.I.P.S.S.</p>
                    <p className="light1"> 67%</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section class="">
            <div class="row">
              <div class="col-md-12">
                <ul class="timeline-1 text-black">
                  <li class="event" >
                    <h4 className="newclass">Intermediate</h4>
                    <p className="light1">  H.M.H.M.I.C (2013 - 2015)</p>
                    <p className="light1">  63%</p>
                    
                  </li>
                </ul>
              </div>
            </div>
          </section>
        
          <section class="">
            <div class="row">
              <div class="col-md-12">
                <ul class="timeline-1 text-black">
                  <li class="event" >
                    <h4 className="newclass">Matriculation</h4>
                    <p className="light1">  H.M.H.M.I.C.  (2013)</p>
                    <p className="light1">  70%</p>
                   
                  </li>
                </ul>
              </div>
            </div>
          </section>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <h4 > <i class="fa-solid fa-briefcase"></i> <strong style={{color:'#343a40'}}> Experience</strong> </h4>

      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <section class="">
            <div class="row">
              <div class="col-md-12">
                <ul class="timeline-1 text-black">
                  <li class="event" >
                    <h4 class="newclass">Full Stack Developer</h4>
                    <p className="light1"> Sare Team (feb - may 2022)</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section class="">
            <div class="row">
              <div class="col-md-12">
                <ul class="timeline-1 text-black">
                  <li class="event" >
                    <h4 className="newclass">E-Commerce Web Frontend</h4>
                    <p className="light1"> Sare Team (feb - may 2022)</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
      </div>
    </div>
  </div>
  
</div>






      </div>
    </>
  );
};

export default Resume;
