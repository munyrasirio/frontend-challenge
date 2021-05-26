import React from 'react';
import { StyledPagination, StyledPaginationItem } from './PaginationStyle.js';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export default function PaginationView({page, totalPages, setPage, paginationIndexes}) {
  return (
    <StyledPagination>      
      <StyledPaginationItem disabled={page === 1} onClick={() => {setPage(page - 1)}}>
        <FaAngleLeft />
      </StyledPaginationItem>
        {
          paginationIndexes.map((item, index) => (
            <StyledPaginationItem key={index} active={item === page} onClick={() => {
              setPage(item)
            }}>
              {item}
            </StyledPaginationItem>
          ))
        }
      <StyledPaginationItem disabled={page === totalPages} onClick={() => {setPage(page + 1)}}>
        <FaAngleRight />
      </StyledPaginationItem>
    </StyledPagination>
  )
}