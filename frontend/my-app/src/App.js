import React, { useEffect, useState } from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Signup from "./pages/signup/Signup"
import Login from './pages/login/Login';
import Appbar from './components/Appbar/Appbar';
import SideBar from './components/sidebar/SideBar';
import CreateWhs from './pages/creatWarehouse/CreateWarehouse';
import Warehouses from './pages/warehouses/Warehouses';
import Warehouse from './pages/warehouse/Warehouse';
import PrivateRoute from './service/PrivateRoute';
import useAuth from './service/useAuth';
import Notes from './pages/Notes/Notes';
import SellPage from './pages/Sellpage/SellPage';
import Tracker from './pages/tracker/Tracker';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
function App() {
  const id = localStorage.getItem('userId')
  const {isOnline} = useAuth(id) 
  const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);





    useEffect(() => {
      const handleResize = () => setScreenSize(window.innerWidth);
  
      window.addEventListener('resize', handleResize);
  
      handleResize();
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
      if (screenSize <= 800) {
        setActiveMenu(false);
      } else {
        setActiveMenu(true);
      }
    }, [screenSize,isOnline]);


  return (
    <div className="App">
      <Appbar />
     <div className="main" >
                  <div className= {`sidebar ${!isOnline  && "d-no"} ${!activeMenu && "d-no"} `}>
                   <SideBar  />
                  </div>  
               

            <div  className= {`body-text ${isOnline && "margin"} ${!activeMenu && "no-margin "}`}>
            
       <Switch>
       
          <Route path="/signup" component ={Signup} />
          <Route path="/login" component ={Login} />

          <PrivateRoute>
          <Route path="/warehouses" component ={Warehouses} />
          <Route path="/creat-warehouse" component ={CreateWhs} />
          <Route path="/warehouse/:id" component ={Warehouse} />
          <Route path="/notes" component ={Notes} />
          <Route path="/sell" component ={SellPage} />
          <Route path="/tracker" component ={Tracker} />
          </PrivateRoute>
          
        </Switch>

       
      </div>
     
</div>
            {
              !activeMenu && <BottomNavigation />
            } 
     </div>
         
    
  );
}

export default App;
