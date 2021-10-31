import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useForm } from 'react-hook-form';
import useAuth from '../../service/useAuth';
import { useSelector } from 'react-redux'

import './index.css'
import NotesCard from './NotesCard';

export default function Notes() {
    const { register, handleSubmit ,formState: { errors } } = useForm();
    const [Notes, setNotes] = useState([]);
    const [CreateSection, setCreateSection] = useState(false);
    const [isCreated , setNotesCreated] = useState(false)
    const isDeleted =  useSelector(state => state.note.isDeleted)
    const [isLoading , setIsLoading] = useState(false)

    const {user} = useAuth()

    const onSubmit = data => handleData(data);  

    function handleData(data) {
      
        try {   axios.post(`https://productsmanager.herokuapp.com/api/notes/create`,{userId:user._id,...data}).then(res=> {
            setNotesCreated(res.data)
            setCreateSection(false)
            console.log(res.data)
        })
        } catch (error) {
                console.error(error);
        }
    }


    useEffect(() => {

        try {     
            setIsLoading(true);
            axios.get(`https://productsmanager.herokuapp.com/api/notes/${user._id}`).then((res) => {
            setNotes(res.data)
            setIsLoading(false);
        })
    } catch (error) {
            console.error(error);
    }
        
    }, [user,isCreated,isDeleted]);
        
    return (
        <div className="Notes-page">
            <h2>Notes</h2>
        <div className='Notes'>
                <div>
                    <button className='btn-notes btn-notes-bg-dark' onClick={()=> setCreateSection(p => p? false : true)}>
                        Create a new note
                    </button>
                </div>
         {
            CreateSection &&  <div className="Notes-create">

                                <form onSubmit={handleSubmit(onSubmit)} className="form-create" >

                                <textarea placeholder = "Note" {...register("body", { required: true})} />
                                {errors.body && <span>This field is required</span>}
                                {/* register your input into the hook by invoking the "register" function */}
                                <button className='btn-notes btn-notes-bg-red' onClick={()=> setCreateSection(p => p? false : true)}>
                                    Cancel
                                </button>
                                <input type="submit" className="form-control"  />
                                </form>
                                </div>
         }  
                             </div>

           
                    <div className="get-notes" >
                    {
                        isLoading? <p>Loading</p> 
                        :
                     Notes.map(item => <NotesCard body={item.body}  id={item._id} key={item._id}/> ) }
                            
                    </div>  
        </div>
    )
}
