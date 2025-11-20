import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

export default function Navbar() {
  return (
    <>
        <nav className="navbar">
            <div className="nav_brand">
                <Link to='/'>Movie App</Link>
            </div>
            <div className="navbar_links">
                <Link to='/' className="nav_link">Home</Link>
                <Link to='/favorites' className="nav_link">Favorites</Link>
            </div>
        </nav>
    </>
  )
}
