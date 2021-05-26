import React from 'react';
import { useHistory } from 'react-router-dom';
import { StyledInputGroup, StyledFormControl } from './SearchFieldStyle.js';
import { FaSearch } from 'react-icons/fa';

export default function SearchFieldView({value, setValue, onEnter, bdColor, bgColor, ...props}) {
  const history = useHistory();

  return (    
    <StyledInputGroup {...{bdColor, bgColor}}>
      <span>
        <FaSearch />
      </span>        
      <StyledFormControl          
        placeholder="Buscar membro..."
        aria-label="Buscar membro"
        aria-describedby="search"
        value={value}
        onChange={evt => setValue(evt.target.value)}
        onKeyDown={evt => {
          if (evt.key === 'Enter') {
            onEnter(value);
            history.push("/");
          }
        }}
      />
    </StyledInputGroup>
  )
}