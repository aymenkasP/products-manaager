import React, {useState } from 'react'
import {  useForm } from "react-hook-form";
import axios from 'axios';
import './index.css'
import { useHistory } from 'react-router';






export default function LoginForm() {
    const [LogError, setLogError] = useState(null) 
    const history = useHistory()

    


    const { register, handleSubmit ,formState: { errors } } = useForm();
    const onSubmit = data => handleData(data);

  async  function handleData(data) {

     await axios.post('https://productsmanager.herokuapp.com/api/auth/login', {
           ...data
         })
         .then(function (response) {
             console.log(response)
             localStorage.setItem("userId", JSON.stringify(response.data._id));
             history.push('/warehouses')
             
         }).catch( (error) =>  {
          setLogError(error);
         });
    }

    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-" >

        {/* register your input into the hook by invoking the "register" function */}
        <input type="email"  name="email" placeholder = "email"   {...register("email",{ pattern : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i } )} />
        
        {errors.email && <p className="error"> somting </p>}
        {/* include validation with required or other standard HTML validation rules */}
        <input type="password" placeholder = "password" {...register("password", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

       {
        LogError &&  <span> the email or the password is wrong </span>
       }
        
        <input type="submit"/>
      </form>
    )
}
