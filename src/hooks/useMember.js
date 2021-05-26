import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const host = "http://localhost:3001";

const useMember = () => {
  const [ memberId, setMemberId ] = useState(0); 
  const [ member, setMember ] = useState(null); 

  const prevMemberIdRef = useRef(memberId);
  useEffect(() => {
    if(prevMemberIdRef.current !== memberId) {
      prevMemberIdRef.current = memberId;

      axios.get(`${host}/results/${memberId}`)
      .then(response => {          
        setMember(response.data);
      })
      .catch(error => {
        return "Erro."
      })
    }
  }, [memberId, member]);

  return [
    member, 
    memberId,
    setMemberId
  ]
};

export default useMember;