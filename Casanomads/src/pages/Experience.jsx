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
      padding: isMobile ? '1rem 0.5rem' : '2rem 1rem',
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

      {/* Mobile Download Priority */}
      {isMobile && (
        <div style={{
          maxWidth: '900px',
          margin: '0 auto 1.5rem auto',
          padding: '0 0.5rem'
        }}>
          <div style={{
            background: 'rgba(160, 204, 75, 0.15)',
            padding: '1.2rem',
            borderRadius: '12px',
            border: '2px solid rgba(160, 204, 75, 0.4)',
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
            <p style={{
              color: '#A0CC4B',
              fontSize: '1rem',
              fontWeight: '700',
              margin: '0 0 0.8rem 0'
            }}>
              📱 Best Mobile Experience
            </p>
            <p style={{
              color: '#cccccc',
              fontSize: '0.9rem',
              lineHeight: '1.6',
              margin: '0 0 1rem 0'
            }}>
              For the best viewing experience on mobile, download the PDF to view in your phone's PDF reader app.
            </p>
            <a
              href={pdfPath}
              download="Experience-Lagos-Guide.pdf"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(45deg, #14B053, #A0CC4B)',
                color: '#ffffff',
                padding: '1rem 2rem',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1.05rem',
                boxShadow: '0 6px 20px rgba(160, 204, 75, 0.4)',
                transition: 'all 0.2s ease',
                border: 'none',
                cursor: 'pointer'
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.transform = 'scale(0.95)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(160, 204, 75, 0.3)';
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(160, 204, 75, 0.4)';
              }}
            >
              📥 Download PDF Guide
            </a>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '0.8rem',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
            marginBottom: '1.5rem'
          }}>
            <p style={{
              color: '#999',
              fontSize: '0.8rem',
              lineHeight: '1.4',
              margin: '0'
            }}>
              Preview below may have limited functionality. Download for full features including zoom, search, and easy navigation.
            </p>
          </div>
        </div>
      )}

      {/* PDF Viewer Container */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.08)',
        padding: isMobile ? '0.5rem' : 'clamp(1rem, 3vw, 2rem)',
        borderRadius: isMobile ? '12px' : '20px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
      }}>
        {isMobile ? (
          // Mobile: Better fitting iframe
          <div style={{
            position: 'relative',
            width: '100%',
            height: '75vh', // Use viewport height for better mobile fit
            minHeight: '500px',
            maxHeight: '800px',
            borderRadius: '8px',
            overflow: 'hidden',
            background: '#ffffff'
          }}>
            <iframe
              src={pdfPath}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '8px',
                display: 'block'
              }}
              title="Experience Lagos PDF Guide"
              loading="lazy"
            />
          </div>
        ) : (
          // Desktop: Standard iframe
          <div style={{
            position: 'relative',
            width: '100%',
            borderRadius: '10px',
            overflow: 'hidden',
            background: '#ffffff'
          }}>
            <iframe
              src={pdfPath}
              width="100%"
              height="800px"
              style={{
                border: 'none',
                borderRadius: '10px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                background: '#ffffff',
                display: 'block'
              }}
              title="Experience Lagos PDF Guide"
              loading="lazy"
            />
          </div>
        )}
      </div>

      {/* Desktop Info Section */}
      {!isMobile && (
        <div style={{
          maxWidth: '800px',
          margin: '1.5rem auto 0 auto',
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
      )}

      {/* Mobile Alternative Help */}
      {isMobile && (
        <div style={{
          maxWidth: '800px',
          margin: '1.5rem auto 0 auto',
          padding: '0 0.5rem'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.04)',
            padding: '1rem',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            textAlign: 'center'
          }}>
            <p style={{
              color: '#A0CC4B',
              fontSize: '0.85rem',
              fontWeight: '600',
              margin: '0 0 0.5rem 0'
            }}>
              💡 Quick Tips:
            </p>
            <ul style={{
              color: '#999',
              fontSize: '0.8rem',
              lineHeight: '1.8',
              margin: '0',
              padding: '0 0 0 1.2rem',
              textAlign: 'left',
              listStyle: 'disc'
            }}>
              <li>Tap the download button above for best experience</li>
              <li>In preview: Pinch to zoom, swipe to change pages</li>
              <li>Some phones may have limited PDF preview features</li>
              <li>Downloaded PDF opens in your phone's native reader</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Experience;