import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home'
import Company from './pages/Company'
import Community from './pages/Community'
import Innovation from './pages/Innovation'
import Initiatives from './pages/Initiatives'
import About from './pages/About'
import Contact from './pages/Contact'
import Collaborations from './pages/Collaborations'
import CollaborationDetail from './pages/CollaborationDetail'

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#FAFBFC] text-[#475569]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/community" element={<Community />} />
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/collaborations" element={<Collaborations />} />
            <Route path="/collaborations/:id" element={<CollaborationDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
