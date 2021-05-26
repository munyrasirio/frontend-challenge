import React from 'react';
import { Anchor } from './SocialLinkStyle.js';

export default function SocialLinkView({
  href, 
  target, 
  icon, 
  title, 
  bgColor, 
  bgColorHover, 
  color, 
  colorHover
}) {
  return (    
    <Anchor {...{href, title, target, bgColor, bgColorHover, color, colorHover}} >
      {icon}
    </Anchor>
  )
}