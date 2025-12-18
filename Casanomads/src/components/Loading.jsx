function Loading() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '50vh',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <div style={{
        width: '60px',
        height: '60px',
        border: '4px solid rgba(160, 204, 75, 0.2)',
        borderTop: '4px solid #A0CC4B',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <p style={{ color: '#A0CC4B', fontSize: '1.1rem' }}>Loading...</p>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default Loading;