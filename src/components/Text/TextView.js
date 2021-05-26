import React from 'react';
import { Text } from './TextStyle.js';

export default function TextView ({
  className, 
  weight, 
  color, 
  size, 
  content, 
  as = "p"
}) {
  return (    
    <Text {...{className, weight, color, size, as}}>
      {content}
    </Text>
  )
}