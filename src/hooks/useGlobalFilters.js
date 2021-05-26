import { useState } from 'react';

const useGlobalFilters = (defaultFilter = "") => {
  const [ filter, setFilter ] = useState(defaultFilter);

  return [
    filter, 
    setFilter
  ]
}

export default useGlobalFilters;