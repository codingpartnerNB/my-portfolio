import React from "react";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Home.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [typeText] = useTypewriter({
    words: ['Frontend Developer', 'Software Developer', 'Web Developer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80
  });
  return (
    <section className="home section grid">
      <div className="home__img">
        <img src={Profile} alt="My Profile Picture" />
        <div className="img__block"></div>
      </div>
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span className="home__title__name">Hey, I'm Neha Bisht.</span>
            I'm a{' '}
            <span className="home__title__profession">
              {typeText}
            </span>
            <span style={{color: 'red'}}><Cursor cursorStyle='|' /></span>
          </h1>
          <p className="home__description">
            I'm a front-end developer focused on crafting clean & user-friendly
            sites using HTML5, CSS3, JavaScript, ReactJs, Bootstrap etc.
          </p>
          <div className="home__socials">
            <a href="https://github.com/codingpartnerNB/" target='_blank' className="home__social-link"><FaGithub /></a>
            <a href="/" className="home__social-link"><FaLinkedin /></a>
          </div>
          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default Home;
