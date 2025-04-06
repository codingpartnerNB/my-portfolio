import React, { useRef } from 'react'
import { FaEnvelopeOpen, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const notificationTheme = localStorage.getItem('theme');

  const toastOptions ={
    position: "top-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: `${notificationTheme === 'dark-theme' ? 'dark' : 'light'}`,
};

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7hvgfn7', 'template_h4eob1g', formRef.current, {
        publicKey: 'sC_ENg6dNefQednsK',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Email sent successfully! 😄", toastOptions);
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Failed to send email! 😟", toastOptions);
        },
      );
      e.target.reset();
  };

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Let's work together.</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />
              <div>
                <span className="info__title">Mail Me</span>
                <h4 className="info__desc">nehab5314@gmail.com</h4>
              </div>
            </div>
          </div>
          <div className="contact__socials">
            <a href="https://github.com/codingpartnerNB/" target='_blank' className="contact__social-link"><FaGithub /></a>
            <a href="/" className="contact__social-link"><FaLinkedin /></a>
          </div>
        </div>
        <form ref={formRef} onSubmit={sendEmail} className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text" placeholder='Your Name' name='name' className="form__control" required />
            </div>
            <div className="form__input-div">
              <input type="email" placeholder='Your Email' name='email' className="form__control" required />
            </div>
            <div className="form__input-div">
              <input type="text" placeholder='Your Subject' name='subject' className="form__control" required />
            </div>
          </div>
          <div className="form__input-div">
              <textarea placeholder='Your Message' name='message' className="form__control textarea" required></textarea>
          </div>
          <button type='submit' className="button">
            Send Message
            <span className="button__icon contact__button-icon"><FiSend /></span>
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  )
}

export default Contact;
