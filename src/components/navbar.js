import React from 'react'
import './navbar.css';
import { Link } from 'react-scroll';

const Sidebar = (props) => {
  function ham() {
    let list = document.querySelector(".listul");
    list.classList.toggle("listToggle");

  }

  function remove() {
    let list = document.querySelector(".listul");
    list.classList.remove("listToggle");
  }
 

  return (
    <div className='sidebarmain fixed-top navbar-expand-lg' >
      <div className='brandname' onClick={props.fn}>
        <h3 className='H1name'>Portifolio </h3>
      </div>
      <div className="list">
        <ul className='listul' id='listul' onClick={props.fn}>
          {/* <Link  to="homemaindiv" spy={true} smooth={true} offset={50} duration={500} >
         <li className='listmenu'> <a href="#"> Home  </a></li></Link> */}

          <Link to="homemaindiv" spy={true} smooth={true} offset={-55} duration={500} >
            <li className='listmenu' onClick={remove} >Home</li></Link>

          <Link to="container" spy={true} smooth={true} offset={-90} duration={500} >
            <li className='listmenu' onClick={remove} >About</li></Link>
          <Link to="fa-bootstrap" spy={true} smooth={true} offset={50} duration={500} >
            <li className='listmenu' onClick={remove} >Resume</li> </Link>
          <Link to="scroller" spy={true} smooth={true} offset={0} duration={500} >
            <li className='listmenu' onClick={remove} >Contact Me</li></Link>
        </ul>
      </div>
      <div className='hamburger' id='hamburger' onClick={ham} > <i class="fa-solid fa-bars"></i></div>
    </div>
  )
}

export default Sidebar