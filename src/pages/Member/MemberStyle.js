import styled from 'styled-components';
import {Row} from 'react-bootstrap';

import bgOff from '../../assets/bg_off.svg';

export const Wrapper = styled.div.attrs({
  className: 'py-5'
})`
  overflow: hidden;
  position: relative;
  border-bottom: 3px solid #ff7d00;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: -15%;
    width: 100%;
    height: 100%;
    background-image: url(${bgOff});
    background-repeat: no-repeat;
    transform: rotate(20deg);
    z-index: -1;
  }

  @media (min-width: 768px) {
    &:before {
      width: 100vw;
      height: 65vw;
    }
  }
`;

export const PhotoContainer = styled.div.attrs({
  className: 'd-flex align-items-center justify-content-center align-self-center mb-4'
})`
  position: relative;
  border-radius: 50%;
  width: 160px;
  height: 160px;
  box-shadow: 0px 3px 10px 1px black;

  &:before {
    content: "";
    margin: auto;
    position: absolute;
    display: block;
    width: 170px;
    height: 170px;
    border: 3px solid #ff7d00;
    border-radius: 50%;
  }
`;

export const Photo = styled.img`
  border-radius: 50%;
  width: 160px;
  height: 160px;  
`;


export const NameWrapper = styled(Row).attrs({
  className: 'd-flex align-items-center mb-4'
})`

  span {
    display: block;
    height: 5px;
    background-color: #ff7d00;
    border-radius: 25px;
  }
`;