import React from 'react'
import {useForm } from "react-hook-form";
import axios from 'axios';
import './index.css';
import useAuth from '../../service/useAuth';
import useWarehouse from '../../service/useWarehouse';


export default function WarehouseF() {
    const { register, handleSubmit,watch ,formState: { errors } } = useForm();
    const {user} = useAuth()
    const {warehousesNames} =useWarehouse()
     const warehouseName= watch('warehousesName')
    const IsWarehouseNameU = warehousesNames?.find(element => element === warehouseName );
      

      const onSubmit = data => handleData(data);  
     
      function handleData(data) {
        
          try {       axios.post(`/warehouse/add`,{userId:user._id,...data})
          } catch (error) {
                  console.error(error);
          }
      }

    return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form onSubmit={handleSubmit(onSubmit)} className="form-create" >
        
        <input placeholder = "warehouse name" {...register("warehousesName", { required: true ,  maxLength: 20  })} />
        {errors.warehouseName && <span>This field is required</span>} {IsWarehouseNameU && <p> you should have a unique warehouse name</p>}
        {/* register your input into the hook by invoking the "register" function */} 
        <input type="text" placeholder = "Description" {...register("description", { required: false })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        
        <input type="submit" className={`form-control ${IsWarehouseNameU && "disabled"}`}   disabled={IsWarehouseNameU && true} />
      </form>
    );
}
