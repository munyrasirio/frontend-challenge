import styled from 'styled-components';
import { FormControl } from 'react-bootstrap';

export const StyledFormControl = styled(FormControl)`
  border: none;
  border-radius: 0;

  &:focus {
    box-shadow: none;
  }
`;