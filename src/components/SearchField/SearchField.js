import React, { useState } from 'react';
import SearchFieldView from './SearchFieldView.js';

export default function SearchField({bdColor, bgColor, onEnter}) {
  const [value, setValue] = useState("");

  return (
    <SearchFieldView {...{value, setValue, onEnter, bdColor, bgColor}} />
  )
}