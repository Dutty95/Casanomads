import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

import Home from './pages/Home';
import HowTo from './pages/HowTo';
import Experience from './pages/Experience';
import Emergency from './pages/Emergency';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Navbar />
        
        <main className="layout">
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
