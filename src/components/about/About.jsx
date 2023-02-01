import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaUserGraduate, FaProjectDiagram} from 'react-icons/fa'
import {HiOutlineWrenchScrewdriver} from 'react-icons/hi2'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaUserGraduate className='about_icon'/>
              <h5>Education</h5>
              <small>Software Development Diploma at Southern Alberta Institute Technology</small>
            </article>

            <article className='about_card'>
              <HiOutlineWrenchScrewdriver className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working as an IT Technican at Electronic Recycling Association</small>
            </article>

            <article className='about_card'>
              <FaProjectDiagram className='about_icon'/>
              <h5>Projects</h5>
              <small></small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About