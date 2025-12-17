import React, { useState, useEffect } from 'react';

function Experience() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Set loading to false after component mounts
    setIsLoading(false);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // PDF path that works in both dev and production
  const pdfPath = `${import.meta.env.BASE_URL}assets/experience-lagos.pdf`;

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#0d0d0d',
        color: '#A0CC4B',
        fontFamily: 'Poppins, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📄</div>
          <p style={{ fontSize: '1.2rem' }}>Loading Experience Guide...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      color: '#ffffff',
      padding: isMobile ? '1rem' : '2rem 1rem',
      minHeight: '100vh',
      background: '#0d0d0d',
      fontFamily: 'Poppins, sans-serif'
    }}>
      {/* Header Section */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '1.5rem',
        maxWidth: '800px',
        margin: '0 auto 1.5rem auto',
        padding: '0 0.5rem'
      }}>
        <h1 style={{ 
          fontSize: isMobile ? '1.8rem' : 'clamp(1.8rem, 5vw, 3rem)',
          fontWeight: 'bold',
          marginBottom: '0.8rem',
          background: 'linear-gradient(45deg, #A0CC4B, #14B053)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: '1.2'
        }}>
          What's Around Lagos
        </h1>
        <p style={{
          fontSize: isMobile ? '0.95rem' : 'clamp(1rem, 3vw, 1.2rem)',
          color: '#cccccc',
          lineHeight: '1.5',
          margin: '0'
        }}>
          Your comprehensive guide to Lagos attractions, dining, and activities
        </p>
      </div>

      {/* Mobile Instructions */}
      {isMobile && (
        <div style={{
          maxWidth: '900px',
          margin: '0 auto 1rem auto',
          background: 'rgba(160, 204, 75, 0.15)',
          padding: '1rem',
          borderRadius: '12px',
          border: '1px solid rgba(160, 204, 75, 0.3)',
          textAlign: 'center'
        }}>
          <p style={{
            color: '#A0CC4B',
            fontSize: '0.9rem',
            fontWeight: '600',
            margin: '0 0 0.5rem 0'
          }}>
            📱 Mobile Viewing Tips:
          </p>
          <p style={{
            color: '#cccccc',
            fontSize: '0.85rem',
            lineHeight: '1.5',
            margin: '0'
          }}>
            Tap the download button (↓) in the PDF toolbar to save and view with better controls, 
            or pinch to zoom and swipe to navigate pages.
          </p>
        </div>
      )}

      {/* Download Link for Mobile */}
      {isMobile && (
        <div style={{
          maxWidth: '900px',
          margin: '0 auto 1rem auto',
          textAlign: 'center'
        }}>
          <a
            href={pdfPath}
            download="Experience-Lagos-Guide.pdf"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(45deg, #14B053, #A0CC4B)',
              color: '#ffffff',
              padding: '0.8rem 1.5rem',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.95rem',
              boxShadow: '0 4px 15px rgba(160, 204, 75, 0.3)',
              transition: 'transform 0.2s ease'
            }}
            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            📥 Download PDF Guide
          </a>
        </div>
      )}

      {/* PDF Viewer Container */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.08)',
        padding: isMobile ? '0.8rem' : 'clamp(1rem, 3vw, 2rem)',
        borderRadius: isMobile ? '15px' : '20px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          paddingBottom: isMobile ? '100%' : '0',
          overflow: 'hidden',
          borderRadius: '10px'
        }}>
          <iframe
            src={pdfPath}
            width="100%"
            height={isMobile ? '600px' : '800px'}
            style={{
              border: 'none',
              borderRadius: '10px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              background: '#ffffff',
              display: 'block',
              ...(isMobile && {
                minHeight: '500px',
                maxHeight: '70vh'
              })
            }}
            title="Experience Lagos PDF Guide"
            loading="lazy"
          />
        </div>
      </div>

      {/* Info Section */}
      <div style={{
        maxWidth: '800px',
        margin: '1.5rem auto 0 auto',
        background: 'rgba(255, 255, 255, 0.06)',
        padding: isMobile ? '1rem' : '1.5rem',
        borderRadius: '15px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        textAlign: 'center'
      }}>
        <p style={{
          color: '#cccccc',
          fontSize: isMobile ? '0.85rem' : 'clamp(0.85rem, 2vw, 0.95rem)',
          lineHeight: '1.6',
          margin: '0',
          padding: '0 0.5rem'
        }}>
          💡 <strong style={{ color: '#A0CC4B' }}>Desktop Tip:</strong> Use your browser's built-in PDF controls to navigate, zoom, and download the guide.
        </p>
      </div>

      {/* Additional Mobile Help */}
      {isMobile && (
        <div style={{
          maxWidth: '800px',
          margin: '1rem auto 0 auto',
          background: 'rgba(255, 255, 255, 0.04)',
          padding: '1rem',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          textAlign: 'center'
        }}>
          <p style={{
            color: '#999',
            fontSize: '0.8rem',
            lineHeight: '1.5',
            margin: '0'
          }}>
            Having trouble viewing? Try downloading the PDF using the button above for the best mobile experience.
          </p>
        </div>
      )}
    </div>
  );
}

export default Experience;