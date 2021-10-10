import React from 'react'
import { FaClipboardList, FaWarehouse } from 'react-icons/fa';
import { GrAdd, GrNotes } from 'react-icons/gr';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import './index.css';


export default function BottomNavigation() {
    const history = useHistory()
    let id  = useLocation();

    console.log(id.pathname === "/warehouses")
    return (
        <div>
            <nav class="nav">

            <button className="nav__link b-nav-btn"  onClick={()=> history.push('/creat-warehouse')}  > 
                <GrAdd className='nav__icon' />
            </button>

                <Link  to="/warehouses" className={` nav__link  ${id.pathname === "/warehouses" ? "nav__link--active" : "" }`} ><FaWarehouse  className="material-icons nav__icon" /> Warehouses </Link>
                <Link  to="/tracker"    className={` nav__link  ${id.pathname === "/tracker" && "nav__link--active" }`}   ><FaClipboardList  className="material-icons nav__icon" />Tracker </Link>
                <Link  to="/notes"   className={` nav__link  ${id.pathname === "/notes" ? "nav__link--active" : "" }`} ><GrNotes  className="material-icons nav__icon" />Notes </Link>
                </nav>
        </div>
    )
}
