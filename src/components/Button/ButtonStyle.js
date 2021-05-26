import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonPropsExtractor = ({ bdColor, bgColor, bgColorHover, color, colorHover, ...props }) => <Link {...props} />;
export const StyledButton = styled(ButtonPropsExtractor).attrs({
  className:"rounded-pill p-2 mx-1 flex-fill text-center"
})`
  background-color: ${props => props.bgColor || "#D8D8D8"};
  color: ${props => props.color || "#222D39"};
  font-weight: 600;
  transition: .2s;

  &:hover {
    background-color: ${props => props.bgColorHover || "#ff7d00"};
    color: ${props => props.colorHover || "#FFF"};
    text-decoration: none;
  }
`;