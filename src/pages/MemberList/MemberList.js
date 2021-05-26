import React from 'react';
import MemberListView from './MemberListView.js';

import useFilterStates from '../../hooks/useFilterStates.js';
import usePagination from '../../hooks/usePagination.js';
import useMembers from '../../hooks/useMembers.js';
import useOrderer from '../../hooks/useOrderer.js';

const INITIAL_ORDERER = "ASC";
export default function MemberList({filter, setFilter}) {
  const [ selectedStates, setSelectedStates, brStates, getStateLabel ] = useFilterStates();
  const [ page, limit, totalResults, setTotalResults, setPage ] = usePagination();
  const [ order, setOrder ] = useOrderer(INITIAL_ORDERER);
  const [ members ] = useMembers({
    brState: {selectedStates, getStateLabel},
    pagination: {page, limit, totalResults, setTotalResults},
    orderer: {order},
    globalFilter: {filter, setFilter}
  });
  const routes = [{"to":"/", "label":"Membros"}];

  return <MemberListView { ...{
    routes, 
    selectedStates, 
    setSelectedStates, 
    brStates, 
    members, 
    page, 
    limit, 
    totalResults, 
    setPage,
    order,
    setOrder
  }} />
}