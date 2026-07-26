import React from 'react';

export default function Navbar() {
  return (
    <nav style={styles.navContainer}>
      {/* لوگو اور دواخانے کا نام */}
      <div style={styles.headerTop}>
        <div style={styles.brandText}>
          <h2 style={styles.titleUrdu}>گھر کا دواخانہ</h2>
          <h3 style={styles.titleEnglish}>Herbalist Afzal Nadeem</h3>
        </div>
        <img 
          src="logo.png" 
          alt="Logo" 
          style={styles.logo} 
        />
      </div>

      {/* بٹنز کا سیکشن */}
      <div style={styles.buttonGrid}>
        <a href="#home" style={{ ...styles.btn, ...styles.btnLight }}>
          Home 🏠
        </a>
        <a href="#admin" style={{ ...styles.btn, ...styles.btnDark }}>
          Admin ⚙️
        </a>
        <a href="#products" style={{ ...styles.btn, ...styles.btnLight }}>
          Products 🌿
        </a>
        <a href="#cart" style={{ ...styles.btn, ...styles.btnDark }}>
          Cart (0) 🛒
        </a>
        <a href="#contact" style={{ ...styles.btn, ...styles.btnLight, ...styles.fullWidthBtn }}>
          Contact 📞
        </a>
      </div>
    </nav>
  );
}

// درست جاوا سکرپٹ ابجیکٹ اسٹائلز
const styles = {
  navContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '15px',
    maxWidth: '450px',
    margin: '0 auto',
    fontFamily: 'sans-serif',
    direction: 'rtl'
  },
  headerTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: '20px'
  },
  brandText: {
    textAlign: 'right'
  },
  titleUrdu: {
    color: '#2b5e29',
    fontSize: '24px',
    margin: '0 0 5px 0',
    fontWeight: 'bold'
  },
  titleEnglish: {
    color: '#444',
    fontSize: '16px',
    margin: 0
  },
  logo: {
    width: '65px',
    height: '65px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  buttonGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '12px',
    width: '100%',
    direction: 'ltr'
  },
  btn: {
    padding: '10px 18px',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '14px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer'
  },
  btnLight: {
    backgroundColor: '#f1f8e9',
    color: '#1b5e20',
    border: 'none'
  },
  btnDark: {
    backgroundColor: '#1b5e20',
    color: '#ffffff',
    border: 'none'
  },
  fullWidthBtn: {
    width: 'auto',
    minWidth: '140px'
  }
};
