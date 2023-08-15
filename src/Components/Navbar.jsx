import React from 'react'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div style={{marginTop : '20px'}}>
        <Link to="/" style={{
          textDecoration: "none",
          padding: "10px",
          color: "white",
          backgroundColor: "blue",
          marginRight: "10px",
          borderRadius: "5px",
        }}>Home</Link>
        <Link to="/about" style={{
          textDecoration: "none",
          padding: "10px",
          color: "white",
          backgroundColor: "green",
          borderRadius: "5px",
        }}>About</Link>
    </div>
  )
}

export default Navbar
