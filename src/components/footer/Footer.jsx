import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
    <a href='#' className='footer_logo'>Jin-young Park</a>

    <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#'>About</a></li>
      <li><a href='#'>Skills</a></li>
      <li><a href='#'>Portfolio</a></li>
      {/* <li><a href='#'>Testimonials</a></li> */}
      <li><a href='#'>Contact</a></li>
    </ul>

    <div className='footer_socials'>
      <a href="https://www.linkedin.com/in/jin-young-park-7830a2175/" target="blank"><BsLinkedin/></a>
      <a href="https://github.com/DEVpjy5658" target="blank"><FaGithub/></a>
    </div>

    <div className="footer_copyright">
      <small>&copy; Jin-young Park. All rights reserved.</small>
    </div>
    </footer>
  )
}

export default Footer