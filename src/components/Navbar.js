import React from "react";
import { Link } from "react-router-dom";
import './styles/navbar.css';

const Navbar = () => {
    return (
        <div className="con">
        <div className="sum">
            <div className="logo">
                CHARITY
            </div>
            <div className="item">
                <ul className="ul">
                    <li>
                        <Link to='/Donate'>Donate</Link>
                    </li>
                    
                    <li>
                            <Link to='/Dashboard'>Contact</Link>
                    </li>
                    <li>
                            <Link to='/Login'>Login</Link>
                    </li>
                    
                </ul>
            </div>
        </div>
        </div>
    )
}
export default Navbar;