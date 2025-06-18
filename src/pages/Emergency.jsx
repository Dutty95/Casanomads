function Emergency() {
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
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          background: 'linear-gradient(45deg, #A0CC4B, #14B053)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Emergency Contacts
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#cccccc',
          lineHeight: '1.6',
          margin: '0'
        }}>
          Important emergency contacts for Lagos - Save these numbers for quick access
        </p>
      </div>

      {/* Emergency Services Section */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'grid',
        gap: '2.5rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.08)',
          padding: '2.5rem',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderLeft: '4px solid #14B053',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease'
        }}>
          <h2 style={{ 
            color: '#A0CC4B',
            fontSize: '1.8rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            🚨 Emergency Services
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '1.5rem',
              borderRadius: '15px',
              border: '1px solid rgba(20, 176, 83, 0.2)',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '0.5rem'
              }}>
                🚑 Ambulance
              </div>
              <a 
                href="tel:08022887777" 
                style={{ 
                  color: '#14B053',
                  textDecoration: 'none',
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  display: 'block',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(20, 176, 83, 0.1)';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                0802 288 7777
              </a>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '1.5rem',
              borderRadius: '15px',
              border: '1px solid rgba(20, 176, 83, 0.2)',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '0.5rem'
              }}>
                🔥 Fire Service
              </div>
              <a 
                href="tel:08033234943" 
                style={{ 
                  color: '#14B053',
                  textDecoration: 'none',
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  display: 'block',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(20, 176, 83, 0.1)';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                0803 323 4943
              </a>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '1.5rem',
              borderRadius: '15px',
              border: '1px solid rgba(20, 176, 83, 0.2)',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '0.5rem'
              }}>
                👮 Police
              </div>
              <a 
                href="tel:08033011052" 
                style={{ 
                  color: '#14B053',
                  textDecoration: 'none',
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  display: 'block',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(20, 176, 83, 0.1)';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                0803 301 1052
              </a>
            </div>
          </div>
        </div>

        {/* Medical Emergencies Section */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.08)',
          padding: '2.5rem',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderLeft: '4px solid #14B053',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease'
        }}>
          <h2 style={{ 
            color: '#A0CC4B',
            fontSize: '1.8rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            🏥 Medical Emergencies
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '1.5rem',
              borderRadius: '15px',
              border: '1px solid rgba(20, 176, 83, 0.2)',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '0.8rem'
              }}>
                EURACARE Multi-Specialist Hospital
              </div>
              <a 
                href="tel:02014664090" 
                style={{ 
                  color: '#14B053',
                  textDecoration: 'none',
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  display: 'block',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(20, 176, 83, 0.1)';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                0201 466 4090
              </a>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '1.5rem',
              borderRadius: '15px',
              border: '1px solid rgba(20, 176, 83, 0.2)',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '0.8rem'
              }}>
                REDDINGTON Medical Hospital
              </div>
              <a 
                href="tel:09165359769" 
                style={{ 
                  color: '#14B053',
                  textDecoration: 'none',
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  display: 'block',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(20, 176, 83, 0.1)';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                0916 535 9769
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Tips Section */}
      <div style={{
        maxWidth: '800px',
        margin: '3rem auto 0 auto',
        background: 'rgba(255, 255, 255, 0.06)',
        padding: '2rem',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        textAlign: 'center'
      }}>
        <h3 style={{
          color: '#A0CC4B',
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '1rem'
        }}>
          💡 Emergency Tips
        </h3>
        <p style={{
          color: '#dddddd',
          fontSize: '1rem',
          lineHeight: '1.6',
          margin: '0'
        }}>
          Save these numbers to your phone's emergency contacts. In case of emergency, stay calm and provide clear information about your location and the nature of the emergency.
        </p>
      </div>
    </div>
  );
}

export default Emergency;