import React from 'react';
import SelectOrdererView from './SelectOrdererView.js';

export default function SelectOrderer({order, setOrder}) {
  return (
    <SelectOrdererView {...{order, setOrder}} />
  )
}