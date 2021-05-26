import { useState } from 'react';

const useOrderer = (defaultOrder = "ASC") => {
  const [ order, setOrder ] = useState(defaultOrder);

  return [
    order, 
    setOrder
  ]
}

export default useOrderer;