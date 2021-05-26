import styled from 'styled-components';

export const Main = styled.div`
  background-color: ${props => props.bgColor || "#FFF"};
  min-height: 350px;
  padding: 32px 0;
`;