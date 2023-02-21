import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lol7dpo', 'template_r33rzm8', form.current, '5zDEuKJzmVmQIF2c-')
    
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>pjy5658@gmail.com</h5>
            <a href='mailto:pjy5658@gmail.com' target="_blank">Send me a message</a>
          </article>
          
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messanger</h4>
            <h5>pjy5658@gmail.com</h5>
            <a href='http://m.me/jinyoung.park.7798'>Send me a message</a>
          </article>
          
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>pjy5658@gmail.com</h5>
            <a href='https://api.whatsapp.com/send?phone+'>Send me a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact