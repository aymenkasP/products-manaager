import axios from 'axios';
import { useState, useEffect } from 'react';



export default function useWarehouse() {
  const [warehousesNames, setWarehousesNames] = useState(null);
  const [error, setError] = useState(null);
  const id = localStorage.getItem('userId');


  useEffect(() => {
      try {
       
        axios.get(`/warehouse/all/${id.replace(/["']/g, "")}`).then((r)=> { 
            setWarehousesNames(r.data.map(item => item.warehousesName))
        })
      } catch (error) {
        setError(error)
        
      }
    
}, [id])
 
  return    {warehousesNames,error}

}