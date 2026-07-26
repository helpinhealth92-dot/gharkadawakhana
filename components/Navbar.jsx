'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null); // 'add', 'manage', 'remove'

  // پروڈکٹس کی لسٹ (ڈمی ڈیٹا)
  const [products, setProducts] = useState([
    { id: 1, name: 'شربتِ صندل', price: '250' },
    { id: 2, name: 'معجونِ شباب', price: '850' }
  ]);

  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState('');

  // پروڈکٹ شامل کرنے کا فنکشن
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newName || !newPrice) return alert('براہ کرم تمام معلومات درج کریں');
    const newProd = { id: Date.now(), name: newName, price: newPrice };
    setProducts([...products, newProd]);
    setNewName('');
    setNewPrice('');
    alert('پروڈکٹ کامیابی سے شامل کر دی گئی ہے!');
  };

  // پروڈکٹ ڈیلیٹ کرنے کا فنکشن
  const handleRemoveProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
    alert('پروڈکٹ ختم کر دی گئی ہے!');
  };

  // لاگ آؤٹ فنکشن
  const handleLogout = () => {
    setIsAdminOpen(false);
    setActiveTab(null);
    alert('آپ ایڈمن پینل سے لاگ آؤٹ ہو چکے ہیں!');
  };

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
        
        {/* ایڈمن ڈراپ ڈاؤن بٹن */}
        <button 
          onClick={() => {
            setIsAdminOpen(!isAdminOpen);
            if(isAdminOpen) setActiveTab(null);
          }} 
          style={{ ...styles.btn, ...styles.btnDark }}
        >
          {isAdminOpen ? '▲ Admin Menu' : '▼ Admin Dashboard ⚙️'}
        </button>

        <a href="#products" style={{ ...styles.btn, ...styles.btnLight }}>
          Products 🌿
        </a>
        
        <a href="#cart" style={{ ...styles.btn, ...styles.btnDark }}>
          Cart ({products.length}) 🛒
        </a>
        
        <a href="#contact" style={{ ...styles.btn, ...styles.btnLight, ...styles.fullWidthBtn }}>
          Contact 📞
        </a>
      </div>

      {/* ایڈمن کنٹرول پینل */}
      {isAdminOpen && (
        <div style={styles.adminMenuPanel}>
          <h4 style={styles.adminTitle}>ایڈمن کنٹرول پینل</h4>
          <div style={styles.adminButtonsGroup}>
            <button 
              onClick={() => setActiveTab('add')} 
              style={{ ...styles.adminBtn, ...styles.addBtn }}
            >
              ➕ Add Product (پروڈکٹ شامل کریں)
            </button>
            <button 
              onClick={() => setActiveTab('manage')} 
              style={{ ...styles.adminBtn, ...styles.manageBtn }}
            >
              📋 Manage Products (پروڈکٹ مینیج کریں)
            </button>
            <button 
              onClick={() => setActiveTab('remove')} 
              style={{ ...styles.adminBtn, ...styles.removeBtn }}
            >
              🗑️ Remove Product (پروڈکٹ ختم کریں)
            </button>
            <button 
              onClick={handleLogout} 
              style={{ ...styles.adminBtn, ...styles.logoutBtn }}
            >
              🚪 Logout (لاگ آؤٹ)
            </button>
          </div>

          {/* ایڈمن ایکشنز کا بیک اینڈ ویو */}
          <div style={styles.actionBox}>
            {activeTab === 'add' && (
              <form onSubmit={handleAddProduct} style={styles.form}>
                <h5>نیا پروڈکٹ درج کریں</h5>
                <input 
                  type="text" 
                  placeholder="پروڈکٹ کا نام" 
                  value={newName} 
                  onChange={(e) => setNewName(e.target.value)} 
                  style={styles.input}
                />
                <input 
                  type="number" 
                  placeholder="قیمت (روپے)" 
                  value={newPrice} 
                  onChange={(e) => setNewPrice(e.target.value)} 
                  style={styles.input}
                />
                <button type="submit" style={styles.saveBtn}>سیو کریں</button>
              </form>
            )}

            {activeTab === 'manage' && (
              <div>
                <h5>موجودہ پروڈکٹس</h5>
                {products.length === 0 ? <p>کوئی پروڈکٹ موجود نہیں</p> : (
                  <ul style={styles.list}>
                    {products.map(p => (
                      <li key={p.id} style={styles.listItem}>
                        <span>{p.name}</span> - <strong>{p.price} Rs</strong>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {activeTab === 'remove' && (
              <div>
                <h5>پروڈکٹ ڈیلیٹ کریں</h5>
                {products.length === 0 ? <p>ڈیلیٹ کرنے کے لیے کوئی پروڈکٹ نہیں</p> : (
                  <ul style={styles.list}>
                    {products.map(p => (
                      <li key={p.id} style={styles.listItem}>
                        <span>{p.name}</span>
                        <button 
                          onClick={() => handleRemoveProduct(p.id)} 
                          style={styles.deleteBtn}
                        >
                          ڈیلیٹ
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

// تمام اسٹائلز JavaScript میں
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
  },
  actionBox: {
    marginTop: '15px',
    padding: '10px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    border: '1px border #ddd'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  input: {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px'
  },
  saveBtn: {
    padding: '8px',
    backgroundColor: '#2b5e29',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 0',
    borderBottom: '1px solid #eee'
  },
  deleteBtn: {
    padding: '4px 8px',
    backgroundColor: '#d32f2f',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};
