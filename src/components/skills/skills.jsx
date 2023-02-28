import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='experience'>
          <h5>What I have</h5>
          <h2>Skills</h2>

      <div className="container skills_container">
        <div className="skills_frontend">
          <h3>Frontend Development</h3>
          <div className="skills_content">
            <article className='skills_details'>
              <BsPatchCheckFill className='skills_details-icon '/>
              <div>
                <h4>HTML</h4>
                
              </div>
            </article>

            <article className='skills_details'>
              <BsPatchCheckFill className='skills_details-icon '/>
              <div>
                <h4>CSS</h4>
                
              </div>
            </article>

            <article className='skills_details'>
              <BsPatchCheckFill className='skills_details-icon '/>
              <div>
                <h4>JavaScript</h4>
                
              </div>
            </article>

            <article className='skills_details'>
              <BsPatchCheckFill className='skills_details-icon '/>
              <div>
                <h4>Bootstrap</h4>
                
              </div>
            </article>

          </div>
        </div>
        <div className="skills_backend">
        <h3>Backend Development</h3>
          <div className="skills_content">
            <article className='skills_details'>
              <BsPatchCheckFill className='skills_details-icon '/>
              <div>
                <h4>NodeJS</h4>
                
              </div>
            </article>

            <article className='skills_details'>
              <BsPatchCheckFill className='skills_details-icon '/>
              <div>
                <h4>ExpressJS</h4>
                
              </div>
            </article>

            <article className='skills_details'>
              <BsPatchCheckFill className='skills_details-icon '/>
              <div>
                <h4>MongoDB</h4>
                
              </div>
            </article>

            <article className='skills_details'>
              <BsPatchCheckFill className='skills_details-icon '/>
              <div>
                <h4>GraphQL</h4>
               
              </div>
            </article>

            <article className='skills_details'>
              <BsPatchCheckFill className='skills_details-icon '/>
              <div>
                <h4>SQL</h4>
                
              </div>
            </article>
          </div>

        </div>
        
      </div>
    </section>
  )
}

export default Skills