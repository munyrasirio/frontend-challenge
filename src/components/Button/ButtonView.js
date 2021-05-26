import React from 'react';
import { StyledButton } from './ButtonStyle.js';

export default function ButtonView({
  to, 
  target = "_self", 
  content, 
  className, 
  bgColor, 
  bgColorHover,
  color,
  colorHover
}) {
  return (    
    <StyledButton { ...{
      to, 
      target, 
      className, 
      bgColor, 
      bgColorHover,
      color,
      colorHover
    }} 
      title={content} 
    >
      {content}
    </StyledButton>
  )
}