import React, {useState, useEffect, useCallback } from 'react';
import CheckboxListFilterView from './CheckboxListFilterView';

const MAX_FILTER_LENGTH = 5;
export default function CheckboxListFilter({selectedItems, setSelectedItems, filterItems: originalFilterItems}) {
  const [ showAll, setShowAll] = useState(false);
  const [ filterItems, setFilterItems] = useState(originalFilterItems);
  
  const isItemChecked = itemKey => {
    return selectedItems.some(item => item === itemKey)
  }

  const toggleCheckItem = itemKey => {
    const newSelectedItems = isItemChecked(itemKey) ? uncheckItem(itemKey) : checkItem(itemKey);
    setSelectedItems(newSelectedItems);
  } 

  const checkItem = itemKey => {
    return [...selectedItems, itemKey];
  }

  const uncheckItem = itemKey => {
    return selectedItems.filter(item => item !== itemKey);
  }

  const updateFilterItems = useCallback(() => {
    let newFilterItems = originalFilterItems;
    if(!showAll) {
      newFilterItems = [...originalFilterItems].slice(0, MAX_FILTER_LENGTH);
    }
    setFilterItems(newFilterItems);
  }, [showAll, originalFilterItems]);

  useEffect(() => {
    updateFilterItems()
  }, [updateFilterItems])

  return <CheckboxListFilterView { ...{filterItems, showAll, setShowAll, isItemChecked, toggleCheckItem}} />
}