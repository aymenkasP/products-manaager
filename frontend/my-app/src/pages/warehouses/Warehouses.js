import axios from 'axios'
import React, { useState ,useEffect } from 'react'
import Card from '../../components/card/Card'
import './index.css'

export default function Warehouses() {
    const [warehouses, setWarehouses] = useState([]);
    const id = "615c6e3ff77fd424b4ba2f83";

 
    useEffect(() => {
        try {     
                axios.get(`https://productsmanager.herokuapp.com/api/warehouse/all/${id}`).then((r)=> { 
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
