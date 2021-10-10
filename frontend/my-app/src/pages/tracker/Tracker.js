import React, { useEffect, useState } from 'react'
import useAuth from '../../service/useAuth';
import './index.css'
import { getUserData } from './trackerFunctions';
import TrackerStokeSection from './TrackerStokeSection';



function Tracker() {
    /* user state */
    const {user,currency} = useAuth()
    const [Lose, setLose] = useState([]);
    const [Profit, setProfit] = useState([]);


    /* state to define Days range */
    const [ThisRange, setThisRange] = useState("Today");

    /* state to control the data is in or out*/
    const [StokeSection, setStokeSection] = useState('in');

    /* sum the the profit and the lose   and the total*/
    const sumProfit = Profit.length && Profit.reduce((a,v) => { return  a + v })
    const sumLose = Lose.length &&  Lose.reduce((a,v) => { return  a + v })
     const Total =  sumProfit + sumLose




    useEffect(() => {
        /* get the user stoke data */
        getUserData(user,setProfit,setLose)

    }, [user]);

    return (
        
        <div className='tracker' >
            
            <div className='tracker-title'><h2>Tracker</h2></div>

                    {/* lose profit total card */}
            <div className='tracker-data' >
                <div className="tracker-data-info" >
                    <p>Lose</p>
                    <p className='lose ' >{sumLose} <span> {currency} </span> </p>
                </div>
                <div className="tracker-data-info" >
                <p>Profit</p>
                    <p className='profit' >{sumProfit} <span> {currency} </span> </p>
                </div>
                <div className="tracker-data-info" > 
                <p>Total</p>
                    <p className={Total > 0 ? 'profit' : 'lose' } >{Total} <span> {currency} </span> </p>
                </div>
            </div>

                {/* stoke Section */}
            <div  className='tracker-stoke' >
                <div className='tracker-stoke-title' >
                        <h2>
                            Stoke <span>{StokeSection}</span> 
                        </h2>
                </div>


                    {/* stoke in or out  button */}
                    <div className="tracker-stoke-btn">
                        <button className ={StokeSection === "in" ? 'active-btn': "" }
                         onClick={()=> setStokeSection('in')}>
                            Stoke in 
                        </button>

                        <button 
                         className ={StokeSection === "out" ? 'active-btn': "" }
                          onClick={()=> setStokeSection('out')}>
                            Stoke out 
                        </button>
                    </div>

                    {/* days range button */}
                    <div className="tracker-stoke-btn">
                        <button className ={ThisRange === "30Days" ? 'active-btn': "" }
                         onClick={()=> setThisRange('30Days')}>
                            30 Days
                        </button>

                        <button 
                         className ={ThisRange === "7days" ? 'active-btn': "" }
                          onClick={()=> setThisRange('7days')}>
                            7 Days 
                        </button>

                        <button 
                         className ={ThisRange === "Today" ? 'active-btn': "" }
                          onClick={()=> setThisRange('Today')}>
                            Today 
                        </button>
                    </div>

                    {/* stoke cards */}
                    <div className="tracker-stoke-" > 
                       <TrackerStokeSection ThisRange={ThisRange} StokeSection={StokeSection} />
                     </div>
            </div>
        </div>
    )
}

export default Tracker
