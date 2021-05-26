import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { StyledFormControl } from './SelectOrdererStyle.js';

export default function SelectOrdererView({order, setOrder}) {
  return (
    <Form.Group as={Row} className="mb-0">
      <Form.Label column xs={6} md={12} lg={5} className="py-0 text-lg-right">
      Ordenar por
      </Form.Label>
      <Col xs={6} md={12} lg={7}>
        <StyledFormControl
          as="select" sm={12}
          value={order}
          onChange={(evt)=> {setOrder(evt.target.value)}}
        >
          <option value="ASC">Nome (A-Z)</option>
          <option value="DESC">Nome (Z-A)</option>
        </StyledFormControl>      
      </Col>
    </Form.Group>
  )
}