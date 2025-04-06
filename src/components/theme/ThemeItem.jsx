import React from 'react'

const ThemeItem = ({color, img, onChangeColor}) => {
  return (
    <img src={img} alt='Theme Color' className="theme__img" onClick={()=>{onChangeColor(color)}} />
  )
}

export default ThemeItem
