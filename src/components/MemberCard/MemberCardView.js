import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import Text from '../Text';
import { StyledCard, CardImage } from './MemberCardStyle.js';

export default function MemberCardView({memberData}) {
  return ( 
    <Col sm={12} md={6} xl={4} className="mb-3">
      <StyledCard>
        <Link to={`member/${memberData.id}`}>
          <StyledCard.Body className="d-flex flex-column align-items-center text-center">
            <CardImage src={memberData.picture.medium} alt={memberData.name.fullname}></CardImage>
            <Text as="h6" className="text-capitalize my-3" size="20px" content={memberData.name.fullname} />
            <Text as="p" className="text-capitalize" size="14px" content={memberData.location.street} />
            <Text as="p" className="text-capitalize mb-0" size="12px" content={memberData.location.city} />
            <Text as="p" className="text-capitalize" size="12px" content={`${memberData.location.state} - CEP: ${memberData.location.postcode}`}/>
          </StyledCard.Body>
        </Link>
      </StyledCard>
    </Col>
  )
}