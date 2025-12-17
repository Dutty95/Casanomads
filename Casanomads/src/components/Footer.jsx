function Footer() {
  return (
    <footer style={{
      backgroundColor: '#006838',
      color: '#fff',
      textAlign: 'center',
      padding: '1rem',
      marginTop: '3rem'
    }}>
      <p>&copy; {new Date().getFullYear()} The Casa Nomads Company | Contact us: info@thecasanomads.com</p>
    </footer>
  );
}

export default Footer;
