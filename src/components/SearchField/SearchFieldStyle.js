import styled from 'styled-components';
import { 
  FormControl,
  InputGroup,
} from 'react-bootstrap';

const InputGroupPropsExtractor = ({ bdColor, bgColor, ...props }) => <InputGroup {...props} />
export const StyledInputGroup = styled(InputGroupPropsExtractor).attrs({
  className:"d-flex align-items-center py-1 px-3 rounded-pill"
})`
  background-color: ${props => props.bgColor || "#FFF"};
  border: 1px solid #B0B0B0;
  transition: .2s;
  span {
    transition: .2s;
  }

  &:focus-within {
    border-color: ${props => props.bdColor || "#ff7d00"};
    box-shadow: ${props => props.bdColor ? `0 0 0 0.2rem rgb(${props.bdColor}/ 25%)` : "0 0 0 0.2rem rgb(255 125 0 / 25%)"};
    span {
      color: ${props => props.bdColor || "#ff7d00"};
    }
  }
`;

export const StyledFormControl = styled(FormControl)`
  border: none;
  border-radius: 0;

  &:focus {
    box-shadow: none;
  }
`;