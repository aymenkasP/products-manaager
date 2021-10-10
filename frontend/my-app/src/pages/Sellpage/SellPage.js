import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './index.css'
import { useHistory } from 'react-router'
import axios from 'axios'
import useAuth from '../../service/useAuth'
import moment from 'moment';


export default function SellPage() {

    const [SellQuantity, setSellQuantity] = useState(false)
    const [SellPrice, setSellPrice] = useState(false)
    const {currency,user} = useAuth()

    const warehouseInf = useSelector((state) => state.sellPage.warehouseId)
    const Today = moment().format('YYYY-MM-DD');



    const data = useSelector(state => state.sellPage.stoke)
    const {StokeName,unit,price,_id } = data
    const history = useHistory()

    

    function sell(){
        try{ 
            
        axios.put(`/stoke/${_id}`,{unit : unit - SellQuantity })
        axios.put(`/dataTracker/${user._id}/out-data`,{ SellPrice , SellQuantity ,
             StokeName , profitOrLose : SellPrice - price ,
              price , warehouseId : warehouseInf.id , warehouseName : warehouseInf.warehouseName,creatDate : new Date(Today)})
            if(SellQuantity === unit){
                 axios.delete(`/stoke/${_id}`) 
            }
            

        history.push('/warehouse/'+ warehouseInf.id)
    }catch (error){
          console.log(error)
    }
    }


    return (
        <div className="sell">

           <button className="back-btn"  onClick={()=>  history.push('/warehouse/'+ warehouseInf.id) } >
             Go  back
           </button>

            <div className="shadow">   

            <div className="sell-stoke" >
                    <div >
                        <p> <span> stoke name</span> {StokeName} </p>
                        <p> <span>unit</span> {unit} </p>
                        <p> <span> buy price/unit</span> {price}{currency} </p>
                    </div>
            </div>

                        <div className='sellInput' > 

                        <div className='margin_'>
                           <label htmlFor="Quantity">Quantity</label>
                           <input id="Quantity" placeholder='Quantity' type="number" value={SellQuantity} onChange={(e) => setSellQuantity(e.target.value)} min="0" max={unit} /> 
                        </div> 

                       <div className="margin_">
                        <label htmlFor="SellPrice">Sell Price</label>
                       <input id='SellPrice' type="number" placeholder='Sell price' value={SellPrice} onChange={(e) => setSellPrice(e.target.value)} min="0"/> {currency}
                       </div>

                        <div className='sell-btn'>
                           <button type="button" onClick={()=> setSellQuantity(unit)} >all</button>
                           <button disabled={SellQuantity & SellPrice ? false : true} type="button" onClick={()=>sell()} >sell</button>
                          {SellQuantity >= unit + 1 ? `you have just ${unit}m²` : ""} 
                        </div>
                       
                       </div> 
            </div>

            </div>
       
    )
}
