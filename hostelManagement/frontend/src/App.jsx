// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Students from './pages/Students';
// import Rooms from './pages/Rooms';
// import Complaints from './pages/Complaints';
// import Home from './components/Home.jsx'


import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

// working components here. 

import Students from './pages/Students' 
import Rooms from './pages/Rooms'
import Complaints from './pages/Complaints'
import Home from './components/Home'

// const Home = () => (
//   <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
//     <h1 style={{ color: '#1e293b', marginBottom: '10px' }}>Hostel Management Dashboard</h1>
//     <p style={{ color: '#64748b', marginBottom: '30px' }}>Welcome to HostelMS. Select an option below to manage.</p>
    
//     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
//       <a href="/students" style={{ padding: '20px', background: 'white', border: '1px solid #ddd', borderRadius: '8px', textDecoration: 'none', color: 'black' }}>
//         <h2>Students</h2>
//         <p style={{color:'gray'}}>Manage student records</p>
//       </a>
//       <a href="/rooms" style={{ padding: '20px', background: 'white', border: '1px solid #ddd', borderRadius: '8px', textDecoration: 'none', color: 'black' }}>
//         <h2>Rooms</h2>
//         <p style={{color:'gray'}}>Check room availability</p>
//       </a>
//       <a href="/complaints" style={{ padding: '20px', background: 'white', border: '1px solid #ddd', borderRadius: '8px', textDecoration: 'none', color: 'black' }}>
//         <h2>Complaints</h2>
//         <p style={{color:'gray'}}>View hostel complaints</p>
//       </a>
//     </div>
//   </div>
// )

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#a2e3f7', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/complaints" element={<Complaints />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;

// function App() {
//   return (
//     // The light gray background is REQUIRED so white cards are visible
//     <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>
//       <Navbar />
      
//       <Routes>
//         {/* THIS tells the app to show the Home component on the main landing page */}
//         <Route path="/Home" element={<Home />} />
        
//         {/* THESE handle your other pages */}
//         <Route path="/students" element={<Students />} />
//         <Route path="/rooms" element={<Rooms />} />
//         <Route path="/complaints" element={<Complaints />} />
//       </Routes>
//     </div>
//   )
// }

// export default App