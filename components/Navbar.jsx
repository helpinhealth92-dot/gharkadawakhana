import React, { useState } from 'react';

export default function Navbar() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <nav style={styles.navContainer}>
      {/* لوگو اور دواخانے کا نام */}
      <div style={styles.headerTop}>
        <div style={styles.brandText}>
          <h2 style={styles.titleUrdu}>گھر کا دواخانہ</h2>
          <h3 style={styles.titleEnglish}>Herbalist Afzal Nadeem</h3>
        </div>
        <img 
          src="/logo.png" 
          alt="Logo" 
          style={styles.logo} 
        />
      </div>

      {/* اصلی نیویگیشن لنکس */}
      <div style={styles.buttonGrid}>
        <a href="#home" style={{ ...styles.btn, ...styles.btnLight }}>
          Home 🏠
        </a>
        
        {/* ایڈمن کا ڈراپ ڈاؤن بٹن */}
        <button 
          onClick={() => setIsAdminOpen(!isAdminOpen)} 
          style={{ ...styles.btn, ...styles.btnDark }}
        >
          {isAdminOpen ? '▲ Admin Menu' : '▼ Admin Dashboard ⚙️'}
        </button>

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

      {/* ایڈمن ڈیش بورڈ کے اپشنز (جب ایڈمن پر کلک کیا جائے) */}
      {isAdminOpen && (
        <div style={styles.adminMenuPanel}>
          <h4 style={styles.adminTitle}>ایڈمن کنٹرول پینل</h4>
          <div style={styles.adminButtonsGroup}>
            <button style={{ ...styles.adminBtn, ...styles.addBtn }}>
              ➕ Add Product (پروڈکٹ شامل کریں)
            </button>
            <button style={{ ...styles.adminBtn, ...styles.manageBtn }}>
              📋 Manage Products (پروڈکٹ مینیج کریں)
            </button>
            <button style={{ ...styles.adminBtn, ...styles.removeBtn }}>
              🗑️ Remove Product (پروڈکٹ ختم کریں)
            </button>
            <button style={{ ...styles.adminBtn, ...styles.logoutBtn }}>
              🚪 Logout (لاگ آؤٹ)
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// تمام اسٹائلز JavaScript کی درست ترتیب میں
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
    cursor: 'pointer',
    border: 'none'
  },
  btnLight: {
    backgroundColor: '#f1f8e9',
    color: '#1b5e20'
  },
  btnDark: {
    backgroundColor: '#1b5e20',
    color: '#ffffff'
  },
  fullWidthBtn: {
    width: 'auto',
    minWidth: '140px'
  },
  adminMenuPanel: {
    width: '100%',
    marginTop: '15px',
    padding: '15px',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    border: '1px solid #e0e0e0',
    boxSizing: 'border-box'
  },
  adminTitle: {
    margin: '0 0 10px 0',
    color: '#1b5e20',
    textAlign: 'center',
    fontSize: '16px'
  },
  adminButtonsGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  adminBtn: {
    padding: '10px',
    borderRadius: '8px',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '13px',
    cursor: 'pointer',
    textAlign: 'center'
  },
  addBtn: {
    backgroundColor: '#e8f5e9',
    color: '#2e7d32'
  },
  manageBtn: {
    backgroundColor: '#e3f2fd',
    color: '#1565c0'
  },
  removeBtn: {
    backgroundColor: '#fff3e0',
    color: '#e65100'
  },
  logoutBtn: {
    backgroundColor: '#ffebee',
    color: '#c62828'
  }
};
