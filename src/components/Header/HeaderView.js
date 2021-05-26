import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Col,
  Container,
  Row
} from 'react-bootstrap';
import { Nav } from './HeaderStyle.js';
import StyledButtonLink from '../Button';
import SearchField from '../SearchField';
import logo from '../../assets/logo.svg';

export default function HeaderView({bgColor, onEnter}) {
  return (
    <Nav bgColor={bgColor}>
      <Container>
        <Row className="align-items-center">
          <Col md={3} className="d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
            <Link to="/" title="Juntos Somos +">
              <img src={logo} width="148" alt="Juntos Somos +" />
            </Link>
          </Col> 
          <Col md className="mb-3 mb-md-0">
            <SearchField {...{onEnter}}/>
          </Col>
          <Col md={5} lg={4} className="d-flex">
            <StyledButtonLink to="/" content="Link 1"/>
            <StyledButtonLink to="/" content="Link 2"/>
          </Col>
        </Row>
      </Container>
    </Nav>
  )
}