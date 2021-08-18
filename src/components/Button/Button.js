import React from 'react';
import './Button.css'

const STYLES = [
  'btn--primary',
  'btn--outline',
  'hide'
]

const SIZES = [
  'btn--medium',
  'btn--large'
]

export const Button = ({
  children, 
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {

  // checks if there is already a style then if true use button style then set default style at first position
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0] 
  // checks if there is already a size then if true use button size then set default size at first position
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0] 

  return (
    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
      {children}
    </button>
  )
}