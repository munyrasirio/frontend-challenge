import React from 'react';
import { Main } from './MainStyle.js';

export default function MainView({bgColor, ...props}) {
  return (
    <Main bgColor={bgColor}>      
      {props.children}        
    </Main>
  )
}