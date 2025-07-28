import React from 'react'
import './footer.css';
import { Link } from 'react-scroll';
import { useState } from 'react';

const Footer = (props) => {

  const [uparrow, setuparrow] = useState(false)
  const toggleUparrow = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setuparrow(true)
    }
    else if (scrolled <= 300) {
      setuparrow(false)
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  };
  React.useEffect(() => {
    window.addEventListener('scroll', toggleUparrow);
    return () => window.removeEventListener('scroll', toggleUparrow);
  }, []);
  return (
    <>
      <div className="myfooter" onClick={props.fn}>

        <div className="icondiv footericon">
          <p>Social Media Links  &nbsp;: &nbsp; &nbsp; </p>
          <a href="https://www.facebook.com/profile.php?id=100009045999900" target={"blank"}>
            <i class="fa-brands fa-facebook-square"></i> </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-twitter-square"></i></a>
          <a href="https://www.instagram.com/jalal_khan_official/" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-instagram-square"></i></a>
          <a href="https://www.linkedin.com/in/jalal-ahmad-1063b1222/" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-linkedin"></i></a>
        </div>

        {/* <Link activeClass="active" to="newdiv" spy={true} smooth={true} offset={50} duration={500} >  */}
        <div className='uparrow' onClick={scrollToTop} style={{ display: uparrow ? 'flex' : 'none' }} >  <i class="fa-solid fa-arrow-up-long"></i></div>
        {/* </Link> */}

      </div>
    </>
  )
}

export default Footer