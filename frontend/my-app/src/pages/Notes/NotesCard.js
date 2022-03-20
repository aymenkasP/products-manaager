import axios from 'axios';
import React from 'react'
import {useDispatch } from 'react-redux'
import { isNoteDeleted } from '../../features/Notes/notesSlice'




export default function NotesCard({body,id}) {
    
    const dispatch = useDispatch()

 function  deleteNote() {

    console.log('deleteNote')
      
    try {       axios.delete(`https://productsmanager.herokuapp.com/api/notes/${id}`).then(res=> {
                     dispatch(isNoteDeleted(res.data));
    })
    } catch (error) {
            console.error(error);
    }
}


    return (
        <div className="body" >
               <div>
                        <p>
                            {body}
                        </p>
               </div>
                         <div className="card-btn" >
                                <button type="button" className=" btn-card " onClick={()=> deleteNote()} >
                                    Delete
                                </button>
                        </div>
                </div>
    )
}
