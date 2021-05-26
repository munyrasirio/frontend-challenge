import styled from 'styled-components';

export const Text = styled.p`
  color: ${props => props.color || "#222D39"};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  margin-bottom: 0;
`;