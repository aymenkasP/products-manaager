import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './index.css'
import StokeCard from './StokeCard'
import { useSelector } from 'react-redux'
import useAuth from '../../service/useAuth'


export default function Stokes({warehouseName}) {

    const [data, setData] = useState([])
    const [IsLoading, setIsLoading] = useState(true)
    const userId = localStorage.getItem('userId');
    const Refresh = useSelector(state => state.warehouse.Refresh)

    const {currency} = useAuth()
    
    useEffect(() => {

        try{
           
            axios.get(`/stoke/${userId.replace(/["']/g, "")}`).then((response) => {
                setData(response.data.filter(item => item.warehouseName === warehouseName));
                setIsLoading(false)
            })  
  }catch (error){
        console.log(error)
  }
        
                 
},[warehouseName,userId,Refresh])
    return (
        
        <div className='container-stoke'>
            {
                IsLoading? <p>loading...</p>
                 :
                 data.map((stoke) =>{
                return <StokeCard currency={currency} {...stoke} key={stoke._id} SellBtn />
            })
            }
            

               
        </div>
    )
}
