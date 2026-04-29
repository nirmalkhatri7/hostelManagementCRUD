import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css' // <-- IMPORTANT: Import the CSS file you just created

const Navbar = () => {
  const location = useLocation()
  // const navigate = useNavigate()

  // Handle logout (adjust this based on how you handle auth in your app)
  const handleLogout = () => {
    localStorage.removeItem('token') // or however you clear your auth state
    navigate('/login')
  }

  return (
    <nav className="navbar">
      {/* Brand Name */}
      <Link to="/" className="nav-brand">
        HostelMS
      </Link>

      {/* Navigation Links with Modern Active Styling */}
      <div className="nav-links">
        <Link 
          to="/students" 
          className={`nav-link ${location.pathname === '/students' ? 'active' : ''}`}
        >
          Students
        </Link>
        <Link 
          to="/rooms" 
          className={`nav-link ${location.pathname === '/rooms' ? 'active' : ''}`}
        >
          Rooms
        </Link>
        <Link 
          to="/complaints" 
          className={`nav-link ${location.pathname === '/complaints' ? 'active' : ''}`}
        >
          Complaints
        </Link>
      </div>

      {}
      {/* <div className="nav-actions">
        <button className="logout-btn" onClick={handleLogout}>
          dummy
        </button>
      </div> */}
    </nav>
  )
}

export default Navbar