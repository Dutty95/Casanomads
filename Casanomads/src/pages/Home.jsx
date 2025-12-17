import { useNavigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ 
      color: '#ffffff',
      padding: '2rem',
      minHeight: '100vh',
      background: '#0d0d0d',
      fontFamily: 'Poppins, sans-serif'
    }}>
      
      {/* Header Section */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '3rem',
        maxWidth: '800px',
        margin: '0 auto 3rem auto'
      }}>
        <h1 style={{ 
          fontSize: '3.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          background: 'linear-gradient(45deg, #A0CC4B, #14B053)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Welcome to Casa Nomads
        </h1>
        <h2 style={{
          fontSize: '1.8rem',
          fontWeight: '600',
          color: '#A0CC4B',
          margin: '0 0 1.5rem 0',
          opacity: '0.9'
        }}>
          Walkthrough Page
        </h2>
        <p style={{
          fontSize: '1.2rem',
          color: '#cccccc',
          lineHeight: '1.6',
          margin: '0',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Discover how to use your Airbnb's kitchen and get the most out of your stay in Lagos.
          We've created helpful how-to videos, curated experiences, and provided important contacts to support your stay.
        </p>
      </div>

      {/* Slideshow Container */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 3rem auto',
        background: 'rgba(255, 255, 255, 0.06)',
        padding: '2rem',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
      }}>
        <Slideshow />
      </div>

      {/* Features Section */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto 3rem auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.06)',
          padding: '2rem',
          borderRadius: '15px',
          textAlign: 'center',
          border: '1px solid rgba(160, 204, 75, 0.2)',
          transition: 'all 0.3s ease'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎥</div>
          <h3 style={{ color: '#A0CC4B', marginBottom: '1rem', fontSize: '1.3rem' }}>How-To Videos</h3>
          <p style={{ color: '#cccccc', fontSize: '0.95rem', lineHeight: '1.5' }}>
            Step-by-step guides to master all kitchen appliances and make the most of your stay
          </p>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.06)',
          padding: '2rem',
          borderRadius: '15px',
          textAlign: 'center',
          border: '1px solid rgba(160, 204, 75, 0.2)',
          transition: 'all 0.3s ease'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏛️</div>
          <h3 style={{ color: '#A0CC4B', marginBottom: '1rem', fontSize: '1.3rem' }}>Lagos Experiences</h3>
          <p style={{ color: '#cccccc', fontSize: '0.95rem', lineHeight: '1.5' }}>
            Curated attractions, cultural sites, and hidden gems to explore in Nigeria's most vibrant city
          </p>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.06)',
          padding: '2rem',
          borderRadius: '15px',
          textAlign: 'center',
          border: '1px solid rgba(160, 204, 75, 0.2)',
          transition: 'all 0.3s ease'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📞</div>
          <h3 style={{ color: '#A0CC4B', marginBottom: '1rem', fontSize: '1.3rem' }}>Emergency Contacts</h3>
          <p style={{ color: '#cccccc', fontSize: '0.95rem', lineHeight: '1.5' }}>
            Important phone numbers and emergency services for your safety and peace of mind
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.06)',
        padding: '3rem 2rem',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(160, 204, 75, 0.2)',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '700',
          color: '#A0CC4B',
          marginBottom: '1.5rem'
        }}>
          Ready to Get Started?
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#cccccc',
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          Begin your Casa Nomads experience with our comprehensive kitchen tutorials
        </p>
        <button
          onClick={() => navigate('/how-to')}
          style={{
            background: 'linear-gradient(45deg, #14B053, #A0CC4B)',
            color: '#ffffff',
            fontWeight: '700',
            fontSize: '1.1rem',
            padding: '1rem 2.5rem',
            borderRadius: '25px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 25px rgba(20, 176, 83, 0.3)',
            transform: 'scale(1)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 12px 30px rgba(20, 176, 83, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 8px 25px rgba(20, 176, 83, 0.3)';
          }}
        >
          Let's Get Started →
        </button>
      </div>

      {/* Decorative Element */}
      <div style={{
        textAlign: 'center',
        marginTop: '3rem'
      }}>
        <div style={{
          width: '100px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #A0CC4B, transparent)',
          margin: '0 auto',
          opacity: '0.5'
        }}></div>
      </div>
    </div>
  );
}

export default Home;