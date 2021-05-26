import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkPropsExtractor = ({ color, colorHover, size, weight, ...props }) => <Link {...props} />
export const Anchor = styled(LinkPropsExtractor).attrs({
  className: props => props.className
})`
  color: ${props => props.color || "#222D39"} ;
  font-size: ${props => props.size || "14px"};
  font-weight: ${props => props.weight};
  transition: .2s;

  &:hover {
    color: ${props => props.colorHover || "#ff7d00"};
    text-decoration: none;
  }
`;