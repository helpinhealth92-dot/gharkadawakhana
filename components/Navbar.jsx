'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('home');
  const [adminTab, setAdminTab] = useState('add');
  const [checkoutStep, setCheckoutStep] = useState('cart'); 

  // پروڈکٹس (تصویر، وزن، اسٹاک کے ساتھ)
  const [products, setProducts] = useState([
    { id: 1, nameUrdu: 'شربتِ صندل', nameEng: 'Sharbat Sandal', price: 250, stock: 20, weight: '500g', img: '/logo.png', desc: 'معدے اور جگر کے لیے' }
  ]);

  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({ nameUrdu: '', nameEng: '', price: '', stock: '', weight: '100g', img: '', desc: '' });

  // پروڈکٹ سیو کرنا
  const handleSaveProduct = (e) => {
    e.preventDefault();
    setProducts([...products, { ...formData, id: Date.now() }]);
    alert('پروڈکٹ شامل ہو گئی!');
    setFormData({ nameUrdu: '', nameEng: '', price: '', stock: '', weight: '100g', img: '', desc: '' });
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert('کارٹ میں شامل کر دیا گیا!');
  };

  return (
    <nav style={styles.navContainer}>
      {/* 1. لوگو اور ہیڈر بحال کیا */}
      <div style={styles.headerTop}>
        <div style={styles.brandText}>
          <h2 style={styles.titleUrdu}>گھر کا دواخانہ</h2>
          <h3 style={styles.titleEnglish}>Herbalist Afzal Nadeem</h3>
        </div>
        <img src="/logo.png" alt="Logo" style={styles.logo} />
      </div>

      {/* 2. اصل نیویگیشن بٹنز */}
      <div style={styles.buttonGrid}>
        <button onClick={() => {setActiveTab('home'); setCheckoutStep('cart')}} style={styles.btnDark}>Home 🏠</button>
        <button onClick={() => setActiveTab('products')} style={styles.btnLight}>Products 🌿</button>
        <button onClick={() => setActiveTab('cart')} style={styles.btnDark}>Cart ({cart.length}) 🛒</button>
        <button onClick={() => setActiveTab('admin')} style={styles.btnLight}>Admin ⚙️</button>
        <button onClick={() => setActiveTab('contact')} style={styles.btnDark}>Contact 📞</button>
      </div>

      {/* 3. کنٹینٹ ایریا */}
      <div style={styles.contentArea}>
        
        {activeTab === 'home' && <div style={styles.card}><h3>خوش آمدید</h3><p>آپ کے پسندیدہ دواخانے میں خوش آمدید۔</p></div>}

        {activeTab === 'products' && (
          <div style={styles.card}>
            <h3>مصنوعات</h3>
            {products.map(p => (
              <div key={p.id} style={styles.item}>
                <img src={p.img} style={{width:40}} />
                <div>
                  <strong>{p.nameUrdu}</strong> ({p.weight})
                  <p>قیمت: {p.price} Rs | سٹاک: {p.stock}</p>
                </div>
                <button onClick={() => addToCart(p)} style={styles.buyBtn}>شامل کریں</button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'cart' && (
          <div style={styles.card}>
            {checkoutStep === 'cart' && (
              <div>
                <h3>آپ کا کارٹ</h3>
                {cart.map((item, i) => <div key={i} style={styles.item}>{item.nameUrdu} - {item.price} Rs</div>)}
                <button onClick={() => setCheckoutStep('payment')} style={styles.payBtn}>چیک آؤٹ (Checkout)</button>
              </div>
            )}
            {checkoutStep === 'payment' && (
              <div>
                <h3>ادائیگی کا طریقہ</h3>
                <button onClick={() => setCheckoutStep('success')} style={styles.methodBtn}>کیش آن ڈلیوری</button>
                <button onClick={() => setCheckoutStep('success')} style={styles.methodBtn}>جاز کیش</button>
                <button onClick={() => setCheckoutStep('success')} style={styles.methodBtn}>ایزی پیسہ</button>
              </div>
            )}
            {checkoutStep === 'success' && (
              <div style={{textAlign:'center'}}>
                <h3>آپ کی خریداری کا بہت شکریہ!</h3>
                <button onClick={() => {setCheckoutStep('cart'); setCart([]); setActiveTab('home')}} style={styles.btnDark}>واپس جائیں</button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'admin' && (
          <div style={styles.card}>
            <h3>پروڈکٹ کا انتظام</h3>
            <form onSubmit={handleSaveProduct} style={styles.form}>
              <input placeholder="نام اردو" value={formData.nameUrdu} onChange={(e) => setFormData({...formData, nameUrdu: e.target.value})} style={styles.input} />
              <input type="number" placeholder="قیمت" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} style={styles.input} />
              <select value={formData.weight} onChange={(e) => setFormData({...formData, weight: e.target.value})} style={styles.input}>
                <option value="100g">100 گرام</option>
                <option value="500g">500 گرام</option>
                <option value="1kg">1 کلو گرام</option>
              </select>
              <button type="submit" style={styles.btnDark}>محفوظ کریں</button>
            </form>
          </div>
        )}
      </div>
    </nav>
  );
}

const styles = {
  navContainer: { padding: '15px', maxWidth: '450px', margin: '0 auto', fontFamily: 'sans-serif', direction: 'rtl' },
  headerTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' },
  logo: { width: '60px', borderRadius: '50%' },
  buttonGrid: { display: 'flex', flexWrap: 'wrap', gap: '5px', justifyContent: 'center' },
  btnDark: { padding: '8px', background: '#1b5e20', color: '#fff', border: 'none', borderRadius: '5px' },
  btnLight: { padding: '8px', background: '#e8f5e9', color: '#1b5e20', border: 'none', borderRadius: '5px' },
  card: { marginTop: '15px', padding: '15px', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 5px #ccc' },
  item: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #eee' },
  input: { padding: '8px', width: '100%', marginBottom: '5px' },
  payBtn: { width: '100%', padding: '15px', background: '#004d40', color: '#fff', border: 'none', marginTop: '10px' },
  methodBtn: { display: 'block', width: '100%', padding: '10px', margin: '5px 0', background: '#4caf50', color: '#fff', border: 'none' }
};
