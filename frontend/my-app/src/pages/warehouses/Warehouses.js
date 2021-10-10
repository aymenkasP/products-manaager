import axios from 'axios'
import React, { useState ,useEffect } from 'react'
import Card from '../../components/card/Card'
import './index.css'

export default function Warehouses() {
    const [warehouses, setWarehouses] = useState([]);
 
    useEffect(() => {
        const userId = localStorage.getItem('userId');
        try {     
                axios.get(`/warehouse/all/${userId.replace(/["']/g, "")}`).then((r)=> { 
                        setWarehouses(r.data)
                        
                    })
        } catch (error) {console.error(error);}
    }, [])
    return (
        <div className="Warehouses" >
        <h2>
            My warehouses
        </h2>
        <div className="">  

            <div className="Card d-flex" >
            
                {
                    warehouses?.map(item => {
                            return <Card key={item._id} warehouseName = {item.warehousesName}
                             space = {item.space}  description={item.description} id = {item._id}/>
                    })
                }
                    
            </div>
           
        </div>
        </div>
    )
}
