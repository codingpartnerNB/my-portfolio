import React, { useRef } from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { FaCode } from 'react-icons/fa'
import { motion, useScroll, useTransform } from 'framer-motion';

const PortfolioItem = ({img, title, details, demoProject, gitUrl}) => {
    const desRef = useRef();
    const { scrollYProgress } = useScroll({
        target: desRef,
    });
    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  return (
    <div className="portfolio__item grid section" ref={desRef}>
        <div className='portfolio__hover-img'>
            <img src={img} alt={title} className="portfolio__img" />
            <div className="portfolio__hover">
                <h3 className="portfolio__title">{title}</h3>
            </div>
        </div>
        <motion.div className="portfolio__description" style={{y}}>
            <h3 className="portfolio__title">{title}</h3>
            <p className="portfolio__detail">{details}</p>
            <div className='portfolio__button-container grid'>
                <a href={demoProject} target='_blank' className='button' >See Demo
                    <span className="button__icon"><FiExternalLink /></span>
                </a>
                <a href={gitUrl} target='_blank' className='button' >Code Link
                    <span className="button__icon"><FaCode /></span>
                </a>
            </div>
        </motion.div>
    </div>
  )
}

export default PortfolioItem;
