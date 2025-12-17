import React from 'react';

function Experience() {
  return (
    <div style={{ 
      color: '#ffffff',
      padding: '2rem 1rem',
      minHeight: '100vh',
      background: '#0d0d0d',
      fontFamily: 'Poppins, sans-serif'
    }}>
      {/* Header Section */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '2rem',
        maxWidth: '800px',
        margin: '0 auto 2rem auto'
      }}>
        <h1 style={{ 
          fontSize: 'clamp(1.8rem, 5vw, 3rem)',
          fontWeight: 'bold',
          marginBottom: '1rem',
          background: 'linear-gradient(45deg, #A0CC4B, #14B053)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          What's Around Lagos?
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 3vw, 1.2rem)',
          color: '#cccccc',
          lineHeight: '1.6',
          margin: '0',
          padding: '0 1rem'
        }}>
          Your comprehensive guide to Lagos attractions, dining, and activities
        </p>
      </div>

      {/* PDF Viewer Container */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.08)',
        padding: 'clamp(1rem, 3vw, 2rem)',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
      }}>
        <iframe
          src="/assets/experience-lagos.pdf"
          width="100%"
          height="800px"
          style={{
            border: 'none',
            borderRadius: '10px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
            background: '#ffffff'
          }}
          title="Experience Lagos PDF Guide"
        />
      </div>

      {/* Info Section */}
      <div style={{
        maxWidth: '800px',
        margin: '2rem auto 0 auto',
        background: 'rgba(255, 255, 255, 0.06)',
        padding: '1.5rem',
        borderRadius: '15px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        textAlign: 'center'
      }}>
        <p style={{
          color: '#cccccc',
          fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
          lineHeight: '1.6',
          margin: '0',
          padding: '0 0.5rem'
        }}>
          💡 <strong style={{ color: '#A0CC4B' }}>Tip:</strong> Use your browser's built-in PDF controls to navigate, zoom, and download the guide.
        </p>
      </div>
    </div>
  );
}

export default Experience;