import React from 'react'
import { Link } from "react-router-dom";

import "./navbar.css"

function Navbar() {
    return (
        
        <div className="navigasi">
            
            <Link to = "/">Home</Link>
            <Link to="/Register">Register</Link>
            <Link to = "/Login">Login</Link>
            <Link to = "/Profile">Profile</Link>
            <Link to = "/Gallery">Gallery</Link>

        </div>
    )
}

export default Navbar
