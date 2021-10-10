import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { PageData } from '../../features/Stoke/stokeSlice'
import './index.css'

export default function StokeCard({StokeName,unit,price,_id,date, SellBtn,currency ,tracker,SellPrice ,profitOrLose,SellQuantity, warehouseName}) {
   
    const dispatch = useDispatch()
    const history = useHistory()
    function handleSell(){
        dispatch(PageData({StokeName,unit,price,_id}))
        history.push('/sell')
    }
    return (
        <>
             {
                 !tracker ? (
                    <div className='body-stoke'>
                        <div className='body-name' >
                        <p>Name</p>
                            {StokeName}
                        </div>
                        <div className='body-space' >
                        <p>unit</p>
                        {unit}
                        </div>
                        <div className='body-price' >
                        <p>price/unit</p>
                        {currency}{price}
                        </div>
                       
                        <div>
                            
                            {SellBtn &&
                                <button onClick={()=>handleSell()} className="bg-dark">
                                sell
                                </button>
                            }
                       
                        </div>
                        {date?.substr(0,10)}
                            </div>

                 ) : (
                    <div className='body-stoke' style={{width : "70vw" , textAlign : 'center' , maxWidth : "1100px"}} >
                        <div className='body-name' >
                        <p>Name</p>
                            {StokeName}
                        </div>
                        <div className='body-name' >
                        <p>warehouse Name</p>
                            {warehouseName}
                        </div>
                        <div className='body-space' >
                        <p>Sell Quantity</p>
                        {SellQuantity}
                        </div>
                        <div className='body-price' >
                        <p>Buy price/unit</p>
                        {currency}{price}
                        </div>
                        <div className='body-price' >
                        <p>Sell price/unit</p>
                        {currency}{SellPrice}
                        </div>
                        <div className={`body-price ${profitOrLose < 0 ? "clr-red" : "clr-grn "} `}  >  
                        <p>profit Or Lose</p>
                        {currency} <span>{profitOrLose}</span>
                        </div>
                        {date?.substr(0,10)}

                            </div>
                 )
             }

        </>
    )
}
