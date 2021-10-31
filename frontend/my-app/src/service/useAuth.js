import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';



export default function useAuth() {
  const [isOnline, setIsOnline] = useState();
  const [user, setUser] = useState([]);
  const [currency, setCurrency] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory()
  const id = "615c6e3ff77fd424b4ba2f83";

  function logout() {
    localStorage.removeItem('userId');
    history.push('/login')
    setIsOnline(false); 
 }
  useEffect(() => {

      try {

        if(id){
            axios.get(`https://productsmanager.herokuapp.com/api/users/${id}`)
              .then((r) => {
                  setUser(r.data);
                  setCurrency(r.data.currency)
                  setIsOnline(true)})
        }
        
             
      } catch (error) {
        setError(error)
      }
    
}, [id])
 
  return    {isOnline,user,error,logout,currency,setIsOnline}

}