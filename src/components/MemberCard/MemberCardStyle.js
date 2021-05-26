import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const CardImage = styled.img`
  height: 90px;
  width: 90px;
  border-radius: 50%;
`;

export const StyledCard = styled(Card)`
  min-height: 300px;
  transition: .2s;
  &:hover {
    background-color: #28B0FC;
;
    color: #FFF;
  }
  &:hover h6,
  &:hover a,
  &:hover p {
    color: #FFF;
    text-decoration: none;
  }
`;