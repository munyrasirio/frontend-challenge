import React from 'react';
import { Col } from 'react-bootstrap';
import { Title } from './TitleStyle.js';

export default function TitleView({
  className, 
  weight, 
  color, 
  size, 
  content
}) {
  return (  
    <Col sm={12}>
      <Title {...{className, weight, color, size}}>
      {content}
      </Title>
    </Col>
  )
}