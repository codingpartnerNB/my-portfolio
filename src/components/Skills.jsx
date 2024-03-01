import React from 'react'
import { skills } from '../data'

const Skills = () => {
  const isDark = localStorage.getItem('theme');
  return (
    <>
        {skills.map(({title, image, imgLink}, index) => (
            <div className="skill__box" key={index}>
                <a href={imgLink} target='_blank' className={`skill__circle ${isDark && title === 'GitHub' ? 'bg-white' : ''}`}>
                    <img src={image} alt={title} className="skill__img" />
                </a>
              <h3 className="skill__title">{title}</h3>
            </div>
        ))}
    </>
  )
}

export default Skills;
