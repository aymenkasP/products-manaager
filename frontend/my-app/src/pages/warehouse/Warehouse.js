import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './index.css'
import CreateStoke from '../../components/CreatStock/CreateStoke'
import { useParams } from 'react-router';
import Stokes from '../../components/GStoke/Stokes';
import {useSelector , useDispatch } from 'react-redux'
import {warehouseId } from '../../features/Stoke/stokeSlice'
import {createStoke } from '../../features/warehouse/warehouseSlice'
import useAuth from '../../service/useAuth';




export default function Warehouse() {
  const {user} =useAuth()

    const [data, setData] = useState([]);


    const createStokeSec = useSelector(state=>state.warehouse.createStoke)

    const dispatch = useDispatch()

    
    let { id } = useParams();

    useEffect(() => {

      try{ 
        axios.get(`/warehouse/${id}`).then((r) => {
          setData(r.data)
          dispatch(warehouseId({id, warehouseName:r.data.warehousesName}))

        }) 
      
      }catch (error){
            console.log(error)
      }
                  
    }, [id,dispatch])

    console.log(user.dataOut)

    return (
        <div className="warehouse">

            <div>
                <h2>
                    {data.warehousesName}
                </h2>
                <p>
                    {data.description}
                </p>
            </div>

              {createStokeSec &&
                   <div className='create-stoke' >
                        <h2>Create Stoke</h2>
                        <CreateStoke warehouseName={data.warehousesName}  />
                    </div>
             }  
                
                <div className='stokes' >
               <h2>Stoke</h2>
               {
                !createStokeSec  &&
                <button type="button" className="btn"  onClick={()=> dispatch(createStoke(true))}>
                    Create Stoke
                </button>
              }  
                 <Stokes warehouseName={data.warehousesName} id={id}  />  
                </div>
        </div>  
    )
}
