import { useState } from 'react';

const usePagination = (defaultLimit = 9) => {
  const [ page, setPage ] = useState(1);
  const [ limit ] = useState(defaultLimit);
  const [ totalResults, setTotalResults ] = useState(0);

  return [
    page, 
    limit, 
    totalResults, 
    setTotalResults,
    setPage
  ]
}

export default usePagination;