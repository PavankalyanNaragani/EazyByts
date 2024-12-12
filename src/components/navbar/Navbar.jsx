import React from 'react'
import './Navbar.css';
import { Link } from 'react-scroll';
function Navbar() {
  return (
    <nav className='Navbar'>
        <h1>Portfolio</h1>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Contact</Link>

        </div>
        <button className="desktopMenuBtn" onClick={() =>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
          
        }}>
            Contact me
        </button>
    </nav>
  )
}

export default Navbar