import React , {useState,useEffect} from 'react';
// import './styles/login.css'
import { useNavigate,Link } from "react-router-dom";
import axios from 'axios';
import './styles/dashboard.css'
import Leftpanel from './Leftpanel';
import Rightpanel from './Rightpanel';
import '../index.js'

const Dashboard = () => {
    return(
        <div className='cont'>
            <div className='leftPanel'>    
                <Leftpanel/>
            </div>
            <div className='rightPanel'>
                <Rightpanel/>
            </div>
        </div>
    )
}
export default Dashboard;