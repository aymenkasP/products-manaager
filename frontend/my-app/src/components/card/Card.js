import React from 'react'
import './index.css'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { PageData } from '../../features/Stoke/stokeSlice'


export default function Card({warehouseName , space,description , id}) {
    let history = useHistory();
    const dispatch = useDispatch()

    function handleClick() {
        dispatch(PageData({warehouseName ,description}))
        history.push( `warehouse/${id}`)
    }

    return (
        <>
                <div className="body" onClick={()=> handleClick() } >
                <div  >
                    <div className="info" >
                        <p> <span>Name </span> {warehouseName}  </p>
                    </div> 
                    </div> 
                </div>
        </>
    )
}
