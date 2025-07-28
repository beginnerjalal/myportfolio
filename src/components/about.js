import React from "react";
import "./about.css";

const About = (props) => {
  return (
    <>
      <div className="container aboutcontainer"  onClick={props.fn} >
        <div className="aboutheading">
          <h3 style={{ margin: "0px" }}>  <span style={{color:"#343a40"}}> About Me </span> </h3>
          {/* <p style={{ marginBottom: "7px" }}>why choose me</p> */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <p style={{ width: "100px", height: "2px", backgroundColor: "black" }}></p>
            <p style={{ width: "40px", height: "8px", backgroundColor: "red", borderRadius: "10px" }}></p>
            <p style={{ width: "100px", height: "2px", backgroundColor: "black" }}></p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p className="aboutpara">Frontend Developer with around {(() => {
  const startDate = new Date(2022, 0); // Jan 2022
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  if (months < 0) { years--; months += 12; }
  return `${years} year${years !== 1 ? 's' : ''} and ${months} month${months !== 1 ? 's ' : ''}`;
})()}
  of experience specializing in building responsive, scalable web applications using React.js,
JavaScript, and Kendo UI. Proficient in React Hooks, Redux, and RESTful API integration. Hands-on with MES platforms and
industrial UI systems. Strong grasp of full stack development with Node.js and MongoDB. Passionate about clean code, reusable
components, and creating modern UI experiences.</p>
        </div>

        <div className="aboutdescription">
          <div className="imgdiv">

            <img src="/images/profile_pic.jpg" alt="" />
          </div>
          {/* <div className="fullstack">
            <div className="descpara">


              <h3>Frontend  developer</h3>
              <p>
                Intractive Front End  as  per the Design
              </p>
              <p>Java Script</p>
              <p>React js</p>
              <p>Rest Api</p>
              <p>GraphQl</p>
              <p>GraphQl</p>
              <div className="buttondiv">
                <button className='buttons myscroll'>Hire Me</button>
                <a href="jalal.pdf" download="jalal's Resume">
                  <button className='buttons'>Get Resume</button>
                </a>
              </div>
            </div>
          </div> */}

          <div className="detailwrapper">
            <div className="abouticon">
              <p className="mmm">  <i class="fa-regular fa-user "></i> <strong> Name :</strong>   Jalal Ahmad </p>
              <p className="mmm">  <i class="fa-solid fa-phone"></i> <strong>  Phone : </strong> +91 8707767742 </p>
              <p className="mmm">  <i class="fa-regular fa-envelope"></i> <strong>  Email : </strong><a href="mailto:beginner.jalal@gmail.com">beginner.jalal@gmail.com </a> </p>

            </div>
            <div style={{marginTop:"5%"}} className="ppp">
              <h6 className="option">My Intrest</h6>
              <div className="intrest_p"> 
              <p className="mmm kkk">  <i class="fa-solid fa-headphones"></i>  Music </p>
              <p className="mmm kkk"> <i class="fa-solid fa-train-tram"></i>  Travelling </p>
              <p className="mmm kkk"> <i class="fa-brands fa-readme"></i>  Poetry  </p>
              <p className="mmm kkk"> <i class="fa-brands fa-readme"></i>  New things </p>
              </div>
            </div>
            <div style={{marginTop:"5%" }} className="ppp">
              <h6 className="option">Skills</h6>
              <div className="intrest_p"> 
              <p className="mmm kkk">Html,</p>
              <p className="mmm kkk">Css,</p>
              <p className="mmm kkk">Java Script,</p>
              <p className="mmm kkk">React Js,</p>
              <p className="mmm kkk">Redux,</p>
              <p className="mmm kkk">Context Api,</p>
              <p className="mmm kkk">Figma,</p>
              <p className="mmm kkk">Bootstrap,</p>
              <p className="mmm kkk">KendoUI,</p>
              <p className="mmm kkk">NodeJS,</p>
              <p className="mmm kkk">Express,</p>
              <p className="mmm kkk">Signalr,</p>
              <p className="mmm kkk">SQL,</p>
              <p className="mmm kkk">Git,</p>
              <p className="mmm kkk">Jira,</p>
              <p className="mmm kkk">Aveva Work task,</p>              
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default About;
