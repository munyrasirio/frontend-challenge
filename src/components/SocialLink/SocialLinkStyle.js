import styled from 'styled-components';

export const Anchor = styled.a.attrs({
  className:"d-flex align-items-center justify-content-center rounded-circle p-2 mx-1"
})`
  width: 40px;
  height: 40px;
  background-color: ${props => props.bgColor || "#28B0FC"};
  color: ${props => props.color || "#FFF"};
  transition: .2s;

  &:hover {
    background-color: ${props => props.bgColorHover || "#ff7d00"};
    color: ${props => props.colorHover || "#FFF"};
    text-decoration: none;
  }
`;