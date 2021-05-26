import React from 'react';
import { Anchor } from './AnchorStyle.js';

export default function AnchorView({
  className, 
  weight, 
  color, 
  colorHover, 
  size, 
  content, 
  to = "", 
  target,
  onClick
}) {
  return (    
    <Anchor title={content} {...{className, weight, color, colorHover, size, to, target, onClick}}>
      {content}
    </Anchor>
  )
}