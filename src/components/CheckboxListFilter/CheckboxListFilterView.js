import React from 'react';
import { StyledForm } from './CheckboxListFilterStyle.js';
import Anchor from '../Anchor';

export default function CheckboxListFilterView({
  filterItems, 
  showAll, 
  setShowAll, 
  isItemChecked, 
  toggleCheckItem
}) {
  return (  
    <>
      {filterItems.map((item, key) => {
        const itemKey = Object.keys(item).join();
        const isChecked = isItemChecked(itemKey);
        return (
          <StyledForm 
            custom
            key={key} 
            id={itemKey} 
            label={item[itemKey]}
            value={itemKey} 
            checked={isChecked} 
            onChange={() => toggleCheckItem(itemKey)}
          />
        )
      })}

      <Anchor content={showAll ? "Mostrar menos" : "Ver todos"} onClick={() =>setShowAll(!showAll)}/>
    </>
  )
}