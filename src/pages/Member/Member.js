import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MemberView from './MemberView';

import useMember from '../../hooks/useMember.js';

export default function Member() {
  const { id } = useParams()
  const [ member, ,setMemberId ] = useMember();

  useEffect(() => {
    if(id) {
      setMemberId(id)
    }
  }, [id, setMemberId, member]);

  if(member !== null) {    
    return <MemberView {...{member}} />
  } else {
    return (<div>alo</div>)
  }
}