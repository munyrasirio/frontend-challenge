import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const host = "http://localhost:3001";
const STANDARD_ORDER_BY = "name.fullname";

const useMembers = ({
  brState = {selectedStates: [], getStateLabel: () => {}},
  pagination = {page: 1, limit: 9, setTotalResults: () => {}},
  orderer = {order: "ASC"},
  globalFilter = {filter: "", setFilter: () => {}}
}) => {  
  const { selectedStates, getStateLabel } = brState;
  const { page, limit, setTotalResults } = pagination;
  const { order } = orderer;
  const { filter } = globalFilter;
  
  const [ members, setMembers ] = useState(null);
  const prevPageRef = useRef(page);
  const prevMembersRef = useRef(members);
  const prevSelectedStatesRef = useRef(selectedStates);
  const prevFilterRef = useRef(filter);
  const prevOrderRef = useRef(order);

  useEffect(() => {
    if (prevOrderRef.current !== order || prevFilterRef.current !== filter || members === null || prevPageRef.current !== page || prevSelectedStatesRef.current !== selectedStates) {
      prevPageRef.current = page;
      prevMembersRef.current = members;
      prevSelectedStatesRef.current = selectedStates;
      prevFilterRef.current = filter;
      prevOrderRef.current = order;

      const selectedStatesLabels = selectedStates.map(stateKey => getStateLabel(stateKey));
      const joinedStatesFilter = `(${selectedStatesLabels.join("|")})`;
      const queryResults = selectedStates.length > 0 ? `&location.state_like=${joinedStatesFilter}` : "";

      const queryGlobalFilters = filter !== "" ? `&name.fullname_like=${filter}` : "";

      axios.get(`${host}/results?_page=${page}&_limit=${limit}&_sort=${STANDARD_ORDER_BY}&_order=${order}${queryResults}${queryGlobalFilters}`)
      .then(response => {          
        setMembers(response.data);
        setTotalResults(parseInt(response.headers['x-total-count']));
      })
      .catch(error => {
        return "Erro."
      })      
    }
  }, [
    selectedStates, 
    getStateLabel,
    members, 
    page, 
    limit, 
    setTotalResults, 
    filter, 
    order
  ]);

  return [
    members === null ? [] : members, 
    setMembers, 
  ]
}

export default useMembers;