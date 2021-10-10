import React, { useEffect, useState } from 'react'
import StokeCard from '../../components/GStoke/StokeCard'
import useAuth from '../../service/useAuth';
import { GetDataInByDate, GetDataOutByDate, SortStokeByDate } from './trackerFunctions';

function TrackerStokeSection({ThisRange,StokeSection}) {

    const {user} = useAuth()

     /* states to manage Days range  */
     const [Out7days, setOut7days] = useState([]);
     const [Out30Days, setOut30Days] = useState([]);
     const [OutToday, setOutToday] = useState([]);
     const [In7days, setIn7days] = useState([]);
     const [In30Days, setIn30Days] = useState([]);
     const [InToday, setInToday] = useState([]);


    useEffect(() => {
         /* Get in stoke  data by date  */
         GetDataInByDate(user ,setIn7days,setIn30Days ,setInToday )
         /* Get in stoke  data by date  */
       GetDataOutByDate(user ,setOut7days,setOut30Days ,setOutToday )
    },[user])

    return (
        <>
             {
                            StokeSection === "out"  & ThisRange === "Today" ? 
                            OutToday.length > 0 ?  OutToday.reverse().map((item,index) => {
                                 return <StokeCard {...item}  date={item.creatDate} tracker  key={index}/>
                             }) : <p>there is no data for today yet</p> :""
                        }

                        {
                            StokeSection === "out"  & ThisRange === "30Days" ?
                            SortStokeByDate(Out30Days).reverse().map((item,index) => {
                                 return <StokeCard {...item} date={item.creatDate} tracker  key={index}/>
                             }):''
                        }

                        {
                            StokeSection === "out"  & ThisRange === "7days" ?
                            SortStokeByDate(Out7days).reverse().map((item,index) => {
                                 return <StokeCard {...item}  date={item.creatDate} tracker  key={index}/>
                             }):""
                        }

                        {
                            StokeSection === "in"  & ThisRange === "Today" ? 
                         InToday.length > 0  ? InToday.reverse().map((item,index) => {
                                 return <StokeCard {...item}   date={item.creatDate}  key={index}/>
                             }) : <p>there is no data for today yet</p>  :""
                        }

                        {
                            StokeSection === "in"  & ThisRange === "30Days" ?
                            SortStokeByDate(In30Days).reverse().map((item,index) => {
                                 return <StokeCard {...item}  date={item.creatDate}   key={index}/>
                             }):''
                        }

                        {
                            StokeSection === "in"  & ThisRange === "7days" ?
                            SortStokeByDate(In7days).reverse().map((item,index) => {
                                 return <StokeCard {...item}  date={item.creatDate}  key={index}/>
                             }):""
                        }
                        
        </>
    )
}

export default TrackerStokeSection
