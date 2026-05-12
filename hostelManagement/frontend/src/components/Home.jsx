import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <h1 style={{ color: '#1e293b', marginBottom: '0.5rem' }}>Hostel Management CRUD</h1>
      <p style={{ color: '#64748b', marginBottom: '2rem' }}>Welcome back!</p>

      <div style={{ display: 'flex', gap: '1.5rem' }}>
        
        <Link to="/students" style={{ 
            padding: '1.5rem', backgroundColor: 'white', borderRadius: '8px', 
            border: '1px solid #e2e8f0', textDecoration: 'none', color: 'black', flex: 1 
        }}>
          <h2>Students</h2>
          <p style={{ color: 'gray' }}>CRUD Students</p>
        </Link>

        <Link to="/rooms" style={{ 
            padding: '1.5rem', backgroundColor: 'white', borderRadius: '8px', 
            border: '1px solid #e2e8f0', textDecoration: 'none', color: 'black', flex: 1 
        }}>
          <h2>Rooms</h2>
          <p style={{ color: 'gray' }}>CRUD Rooms</p>
        </Link>

        <Link to="/complaints" style={{ 
            padding: '1.5rem', backgroundColor: 'white', borderRadius: '8px', 
            border: '1px solid #e2e8f0', textDecoration: 'none', color: 'black', flex: 1 
        }}>
          <h2>Complaints</h2>
          <p style={{ color: 'gray' }}>CRUD Complaints</p>
        </Link>

      </div>
    </div>
  )
}

export default Home