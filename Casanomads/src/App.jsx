import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowTo from './pages/HowTo';
import Experience from './pages/Experience';
import Emergency from './pages/Emergency';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router basename="/">
      <div 
        style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          background: '#0d0d0d',  // Prevents white flash
          color: '#ffffff'
        }}
      >
        <Navbar />
        <main 
          style={{ 
            flex: 1,
            width: '100%',
            background: '#0d0d0d'  // Ensures main area is also dark
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-to" element={<HowTo />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;