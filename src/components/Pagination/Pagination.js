import React, {useRef, useEffect} from 'react';
import PaginationView from './PaginationView.js';

const paginationItemsGenerator = (currentPage, range, totalPages) => {
  let start = 1;
  let paginationIndexes = [];

  if (currentPage < (range / 2) + 1 ) {
    start = 1;
  } else if (currentPage >= (totalPages - (range / 2) )) {
    start = Math.floor(totalPages - range + 1);
  } else {
    start = (currentPage - Math.floor(range / 2));
  }
  for (let i = start; i <= ((start + range) - 1); i++) {
    paginationIndexes.push(i);
  }
  return paginationIndexes;
}

export default function Pagination({page, limit, totalResults, setPage}) {
  const totalPages = Math.ceil(totalResults / limit);
  const maxPages = (totalResults >= totalPages && totalPages < 5) ? totalPages : 5;
  let paginationIndexes = paginationItemsGenerator(
    page, 
    maxPages,
    totalPages
  );
  const prevTotalResultsRef = useRef(totalResults);
  useEffect(() => {
    if(prevTotalResultsRef.current !== totalResults) {
      prevTotalResultsRef.current = totalResults;
      setPage(1);
    }
  }, [setPage, totalResults]);

  return (
    <PaginationView {...{page, totalPages, setPage, paginationIndexes}} />
  )
}