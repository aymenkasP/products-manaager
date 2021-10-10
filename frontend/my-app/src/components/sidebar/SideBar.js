import React from 'react'
import { useHistory } from "react-router-dom";
import { GrAdd } from "react-icons/gr";
import {FaWarehouse} from "react-icons/fa";
import {FaClipboardList} from "react-icons/fa";
import {GrNotes} from "react-icons/gr";
import {Link , useLocation } from "react-router-dom";
import './SideBar.css'



export default function SideBar() {

   let id  = useLocation();
    const history = useHistory()
    const style = {
        "width": "50px",
        "height": "20px",
        "color": "black"
 }

    return (
        <div className="side" >

        <div className="create-btn" >
              <button className="btn"  onClick={()=> history.push('/creat-warehouse')}  > 
                <GrAdd style= {style} />
            </button>
        </div>
          
           
           <div className='sidebar-btn' >

            <div className='btn-links '  >
           
            <ul>
              <li  className={id.pathname === "/warehouses"? "selected" : ""}  >
                <Link to="/warehouses"><FaWarehouse style={style} /> <span>Warehouses</span> </Link>
              </li>
              <li className={id.pathname === "/tracker"? "selected" : ""} >
                <Link to="/tracker"><FaClipboardList style={style} /><span>Tracker</span></Link>
              </li>
              <li className={id.pathname === "/notes"? "selected" : ""} >
                <Link to="/notes"><GrNotes style={style} /><span>Notes</span></Link>
              </li>
          </ul>
     
            </div>

           </div>
        </div>
    )
}
