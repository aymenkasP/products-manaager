import React from 'react'
import {useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../service/useAuth';
import './index.css';
import {useDispatch } from 'react-redux'
import {createStoke ,Refresh} from '../../features/warehouse/warehouseSlice'
import moment from 'moment';




export default function CreateStok({warehouseName}) {
    
    const { register, handleSubmit ,formState: { errors } } = useForm();
    const {user,currency} = useAuth()
    const Today = moment().format('YYYY-MM-DD');
      
    const dispatch = useDispatch()

    const onSubmit = data => handelStokeData(data);      

        function handelStokeData(data){
                try {
                    axios.post(`https://productsmanager.herokuapp.com/api/stoke/create`,{userId:user._id,warehouseName,...data}).then(res =>{
                      dispatch(Refresh(res.data))
                     dispatch(createStoke(false))
                    })

                    axios.put(`https://productsmanager.herokuapp.com/api/dataTracker/${user._id}/in-data`,{warehouseName,creatDate : new Date(Today),...data})
                    
                } catch (error) {
                    console.error(error);
                }
        }



    return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form onSubmit={handleSubmit(onSubmit)} className="form-create" >

        <div className="form-group">
          <label htmlFor="StokeName">Stoke Name</label>
          <input id="StokeName" placeholder = "Stoke name" {...register("StokeName", { required: true ,  maxLength: 20  })} />
          {errors.stokeName && <span>This field is required</span>}
          {/* register your input into the hook by invoking the "register" function */}
        </div>
       
        <div className="form-group">
          <label htmlFor="unit">unit</label>
        <input id='unit' type="number"  name="unit" placeholder = "unit"    {...register("unit" , {required: true } )} />
        {errors.unit && <p className="error">This field is required</p>}
        {/* include validation with required or other standard HTML validation rules */}
        </div>
        
        <div className="form-group">
          <label htmlFor="price">Buy price /unit {currency}  </label> 
        <input id='price' type="number"  name="price" placeholder = "Buy price"    {...register("price" , {required: true } )} /> 
        {errors.price && <p className="error">This field is required</p>}
        {/* include validation with required or other standard HTML validation rules */}
      </div>

      <button onClick={()=> dispatch(createStoke(false))} className='btn btn-red'>
        Cancel
      </button>  
        <input type="submit" className="form-control"  />
      </form>
    );
}
