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
              <small>Software Development Diploma at SAIT</small>
            </article>

            <article className='about_card'>
              <HiOutlineWrenchScrewdriver className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working as an IT Technican</small>
            </article>

            <article className='about_card'>
              <FaProjectDiagram className='about_icon'/>
              <h5>Projects</h5>
              <small></small>
            </article>
          </div>
          <p>
             Quae ab, hic expedita optio, officiis, laboriosam sit fugiat explicabo cupiditate at soluta consequuntur incidunt omnis nostrum in! Iure ratione facilis voluptas.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About