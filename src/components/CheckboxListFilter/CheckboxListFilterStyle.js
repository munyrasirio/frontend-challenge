import styled from 'styled-components';
import { Form } from 'react-bootstrap';

const FormPropsExtractor = ({ bgColor, ...props }) => <Form.Check {...props} />;
export const StyledForm = styled(FormPropsExtractor)`
  color: ${props => props.color || "#222D39"};
  font-weight: 600;
  transition: .2s;

  input:checked~.custom-control-label::before {
    background-color: ${props => props.bgColor || "#ff7d00"};
    border-color: ${props => props.bgColor || "#ff7d00"};
  }

  .custom-control-input:focus:not(:checked)~.custom-control-label::before,
  .custom-control-input:focus~.custom-control-label::before {
    box-shadow: ${props => props.bgColor ? `0 0 0 0.2rem rgb(${props.bgColor}/ 25%)` : "0 0 0 0.2rem rgb(255 125 0 / 25%)"};
    border-color: ${props => props.bgColor || "#ff7d00"};
  }
`;