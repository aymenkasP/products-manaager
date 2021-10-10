import moment from "moment";


            /* today date */
const Today = moment().format('YYYY-MM-DD');

        /* get the user stoke data */

export function getUserData(user,setProfit,setLose){

        if(user){
               user?.dataOut?.forEach(data => {
           if(data.profitOrLose > 0) {
            setProfit(oldArray => [...oldArray , data.profitOrLose ])
           } else {
            setLose(oldArray => [...oldArray , data.profitOrLose ])
           }
       })
        }
    }

         /* Get in stoke  data by date  */

export function GetDataInByDate(user ,setIn7days,setIn30Days ,setInToday ) {
    user.dataIn?.forEach(item => {
          
            const DaysT = moment(item.creatDate, "YYYYMMDD").fromNow();

                if(DaysT.replace(/\D/g,'') <= 7){
                       
                        setIn7days(oldArray => [...oldArray , item])
                    
                } if (DaysT.replace(/\D/g,'')  <= 30){
                    setIn30Days(oldArray => [...oldArray , item])

                } if (item.creatDate.substr(0,10) === Today){

                    setInToday(oldArray => [...oldArray,item])
                }
    })}

             /* Get Out stoke  data by date  */

 export   function GetDataOutByDate(user ,setOut7days,setOut30Days ,setOutToday ) {
        
        user.dataOut?.forEach(item => {
              
                const DaysT = moment(item.creatDate, "YYYYMMDD").fromNow();
                console.log(DaysT.replace(/\D/g,'') )

                
                    if(DaysT.replace(/\D/g,'') <= 7){
                        console.log("DaysT[0]",DaysT[0])
                        setOut7days(oldArray => [...oldArray , item])
                        

                    } if (DaysT.replace(/\D/g,'')  <= 30 ){
                        setOut30Days(oldArray => [...oldArray , item])

                    } if (item.creatDate.substr(0,10) === Today ){
                        setOutToday(oldArray => [...oldArray,item])
                    }
        })}
      

                /* Sort Stoke By Date */
    export  function SortStokeByDate(array){

            const newArray = array.sort((dateA, dateB) => {
                 const d1 = new Date(dateA.creatDate?.substr(0,10)) 
                 const d2 = new Date(dateB.creatDate?.substr(0,10)) 
                 return d1 - d2
          })
     
          return newArray
     
         }
         
     