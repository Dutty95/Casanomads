import { useNavigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow';

function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: '🎥',
      title: 'How-To Videos',
      description: 'Step-by-step guides to master all kitchen appliances',
      color: '#14B053',
      link: '/how-to'
    },
    {
      icon: '🏛️',
      title: 'Lagos Experiences',
      description: 'Curated attractions and cultural sites to explore',
      color: '#A0CC4B',
      link: '/experience'
    },
    {
      icon: '🚨',
      title: 'Emergency Contacts',
      description: 'Important phone numbers for your safety',
      color: '#14B053',
      link: '/emergency'
    }
  ];

  return (
    <div className="page-content" style={{ 
      color: '#ffffff',
      padding: '2rem 1rem',
      minHeight: '100vh',
      background: '#0d0d0d'
    }}>
      
      {/* Hero Section */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '4rem',
        maxWidth: '900px',
        margin: '0 auto 4rem auto',
        padding: '0 1rem'
      }}>
        <div style={{
          display: 'inline-block',
          marginBottom: '1.5rem',
          animation: 'float 3s ease-in-out infinite'
        }}>
          <span style={{ fontSize: '4rem' }}>🏡</span>
        </div>
        
        <h1 style={{ 
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 'bold',
          marginBottom: '1rem',
          background: 'linear-gradient(45deg, #A0CC4B, #14B053)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: '1.2'
        }}>
          Welcome to Casa Nomads
        </h1>
        
        <h2 style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
          fontWeight: '600',
          color: '#A0CC4B',
          margin: '0 0 1.5rem 0',
          opacity: '0.9'
        }}>
          Your Complete Guide
        </h2>
        
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: '#cccccc',
          lineHeight: '1.8',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          Discover how to use your Airbnb's kitchen and get the most out of your stay in Lagos. 
          We've created helpful videos, curated experiences, and important contacts.
        </p>
      </div>

      {/* Slideshow */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 4rem auto',
        background: 'rgba(255, 255, 255, 0.06)',
        padding: 'clamp(1rem, 3vw, 2rem)',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
      }}>
        <Slideshow />
      </div>

      {/* Features Grid */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 4rem auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        padding: '0 1rem'
      }}>
        {features.map((feature, index) => (
          <div
            key={index}
            onClick={() => navigate(feature.link)}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              padding: '2.5rem 2rem',
              borderRadius: '20px',
              textAlign: 'center',
              border: '1px solid rgba(160, 204, 75, 0.2)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.borderColor = feature.color;
              e.currentTarget.style.boxShadow = `0 20px 40px ${feature.color}33`;
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(160, 204, 75, 0.2)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
            }}
          >
            <div style={{ 
              fontSize: '3.5rem', 
              marginBottom: '1.5rem',
              transition: 'transform 0.3s ease'
            }}
            className="feature-icon">
              {feature.icon}
            </div>
            <h3 style={{ 
              color: '#A0CC4B', 
              marginBottom: '1rem', 
              fontSize: '1.4rem',
              fontWeight: '700'
            }}>
              {feature.title}
            </h3>
            <p style={{ 
              color: '#cccccc', 
              fontSize: '1rem', 
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              {feature.description}
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: feature.color,
              fontWeight: '600',
              fontSize: '0.95rem'
            }}>
              Explore <span style={{ fontSize: '1.2rem' }}>→</span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div style={{
        textAlign: 'center',
        maxWidth: '700px',
        margin: '0 auto',
        background: 'linear-gradient(135deg, rgba(20, 176, 83, 0.1), rgba(160, 204, 75, 0.1))',
        padding: 'clamp(2rem, 5vw, 3rem)',
        borderRadius: '25px',
        backdropFilter: 'blur(10px)',
        border: '2px solid rgba(160, 204, 75, 0.3)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
      }}>
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: '700',
          color: '#A0CC4B',
          marginBottom: '1rem'
        }}>
          Ready to Get Started?
        </h2>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.1rem)',
          color: '#cccccc',
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          Begin your Casa Nomads experience with our kitchen tutorials
        </p>
        <button
          onClick={() => navigate('/how-to')}
          style={{
            background: 'linear-gradient(45deg, #14B053, #A0CC4B)',
            color: '#ffffff',
            fontWeight: '700',
            fontSize: 'clamp(1rem, 2vw, 1.1rem)',
            padding: '1.2rem 3rem',
            borderRadius: '30px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 25px rgba(20, 176, 83, 0.4)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05) translateY(-2px)';
            e.target.style.boxShadow = '0 12px 35px rgba(20, 176, 83, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1) translateY(0)';
            e.target.style.boxShadow = '0 8px 25px rgba(20, 176, 83, 0.4)';
          }}
        >
          Let's Get Started →
        </button>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .feature-icon {
          transition: transform 0.3s ease;
        }
        
        .feature-icon:hover {
          transform: scale(1.1) rotate(5deg);
        }
      `}</style>
    </div>
  );
}

export default Home;