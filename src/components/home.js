import React from 'react'
import './home.css';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';

const Home = (props) => {
    return (
        <>
            <div className="scrol"></div>
            <div className='homemaindiv' onClick={props.fn}>
                <div className='newdiv'>
                    <div className='homediv'>
                        <div className='stylediv'>
                            <div className='icondiv'>
                                <a href="https://www.google.com/search?sxsrf=AJOqlzUIPaB7raAC6_W1-MmCxTubtkkBBw:1677871109533&q=Jalal+Ahmad&stick=H4sIAAAAAAAAAOOwesSozi3w8sc9YSm5SWtOXmOU4BLzSsxLLEl0LkpNLEkNTk0sSs5wTixK4VnEyu2VmJOYo-CYkZuYAgCmLEfxOgAAAA&sa=X&sqi=2&ved=2ahUKEwiqttn7vMD9AhXE5XMBHZQTA98QnJoFegQIJxAG&biw=1536&bih=746&dpr=1.25" target={"blank"}>
                                    <i class="fa-brands fa-google"></i> </a>
                                <a href="https://www.facebook.com/profile.php?id=100009045999900" target={"blank"}>
                                    <i class="fa-brands fa-facebook-square"></i> </a>
                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                    <i class="fa-brands fa-twitter-square"></i></a>
                                <a href="https://www.instagram.com/jalal_khan_official/" target="_blank" rel="noopener noreferrer">
                                    <i class="fa-brands fa-instagram-square"></i></a>
                                <a href="https://www.linkedin.com/in/jalal-ahmad-1063b1222/" target="_blank" rel="noopener noreferrer">
                                    <i class="fa-brands fa-linkedin"></i></a>
                            </div>
                            <h2 className='nameheading' style={{ color: '#343a40' }}>
                                Hello I'm <span className='h1span' >JALAL AHMAD</span>
                            </h2>
                            <h4 className='developerh4' style={{ color: '#343a40' }}>
                                <span>
                                    <Typewriter
                                        words={[
                                            "Web Developer",
                                            "Frontend Developer",
                                            "React Developer",
                                            "JavaScript Developer"
                                        ]}
                                        loop={0}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1500}
                                    />
                                </span>
                            </h4>
                        </div>

                        <p className='mypara'>Welcome to my profile! I'm a web developer. Find my resume and work description on this portfolio website.</p>
                        <div className="buttondiv">
                            <Link to="myfooter" spy={true} smooth={true} offset={50} duration={500} >
                                <button className='buttons'>Hire Me</button> </Link>
                            <a href="jalal.pdf" download="Jalal_Ahmad_Resume.pdf" target="_blank" rel="noopener noreferrer">
                                <button className='buttons'>Get Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className='homedivimg'>
                        <img src="/images/profile_pic.jpg" alt="Profile picture of Jalal Ahmad" className='profileimg' />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home