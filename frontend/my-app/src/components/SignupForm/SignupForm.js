import React  from 'react'
import { Controller, useForm } from "react-hook-form";
import Select from "react-select"; 
import axios from 'axios';
import { useHistory } from 'react-router';

import "./Signup.css"
import { useDispatch } from 'react-redux';
import { isOnlineFunction } from '../../features/user/userSlice';

export default function SignupForm() {
    const { register, handleSubmit, watch, control ,formState: { errors } } = useForm();
    const history = useHistory()
    const dispatch = useDispatch()

    const onSubmit = data => createUser(data);
  
    console.log(watch("email")); // watch input value by passing the name of it
    
   
      async function createUser(data){
      await axios.post('https://productsmanager.herokuapp.com/api/auth/register', {
          ...data
        })
        .then(function (response) {
          console.log(response);
          localStorage.setItem("userId", JSON.stringify(response.data._id));
          dispatch(isOnlineFunction(true))

          history.push("/warehouses")

        })
        .catch(function (error) {
          console.log(error);
        });
      }
     

    return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form onSubmit={handleSubmit(onSubmit)} className="form-" >

        <input placeholder = "username" {...register("username", {  maxLength: 20  })} />
        {errors.username && <span>This field is required</span>}
        {/* register your input into the hook by invoking the "register" function */}
        <input type="email"  name="email" placeholder = "email"   {...register("email",{ pattern : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i } )} />
        
        {errors.email && <p className="error">{errors.email.message}</p>}
        {/* include validation with required or other standard HTML validation rules */}
        <input type="password" placeholder = "password" {...register("password", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

      <div className="select" >
        <p>currency</p>
        <Controller
        name="currency"
        control={control}
        render={({ field }) => <Select 
          {...field} 
          options={[
            { value: "$", label: "Dollar" },
            { value: "€", label: "eru" },
            { value: "£", label: "pound" }
          ]} 
        />}
      />
      </div>
        
        <button   type="submit" >
          submit
        </button>
      </form>
    );
}
