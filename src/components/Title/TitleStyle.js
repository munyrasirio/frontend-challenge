import styled from 'styled-components';

export const Title = styled.h5.attrs({
  className: "mb-5"
})`
  color: ${props => props.color || "#222D39"};
  font-size: ${props => props.size || "32px"};
  font-weight: ${props => props.weight || "bold"};
`;