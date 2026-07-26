'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('home');
  const [adminTab, setAdminTab] = useState('add');
  const [checkoutStep, setCheckoutStep] = useState('cart'); // 'cart', 'payment', 'success'
  
  const [products, setProducts] = useState([
    { id: 1, nameUrdu: 'شربتِ صندل', nameEng: 'Sharbat Sandal', price: 250, stock: 20, weight: '500g', img: '', desc: 'جگر کے لیے مفید' }
  ]);

  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({ nameUrdu: '', nameEng: '', price: '', stock: '', weight: '100g', img: '', desc: '' });
  const [editingId, setEditingId] = useState(null);

  // پروڈکٹ آپریشنز
  const handleSaveProduct = (e) => {
    e.preventDefault();
    if (editingId) {
      setProducts(products.map(p => p.id === editingId ? { ...formData, id: editingId } : p));
      setEditingId(null);
    } else {
      setProducts([...products, { ...formData, id: Date.now() }]);
    }
    setFormData({ nameUrdu: '', nameEng: '', price: '', stock: '', weight: '100g', img: '', desc: '' });
    alert('محفوظ ہو گیا!');
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert('کارٹ میں شامل کر دیا گیا');
  };

  const handleCheckout = (method) => {
    setCheckoutStep('success');
    setCart([]); // کارٹ خالی کر دیں
  };

  return (
    <nav style={styles.container}>
      {/* ہیڈر */}
      <div style={styles.header}>
        <h2 style={styles.title}>گھر کا دواخانہ</h2>
      </div>

      {/* نیویگیشن */}
      <div style={styles.navGrid}>
        <button onClick={() => {setActiveTab('home'); setCheckoutStep('cart')}} style={styles.navBtn}>Home</button>
        <button onClick={() => setActiveTab('products')} style={styles.navBtn}>Products</button>
        <button onClick={() => setActiveTab('cart')} style={styles.navBtn}>Cart ({cart.length})</button>
        <button onClick={() => setActiveTab('admin')} style={styles.navBtn}>Admin</button>
      </div>

      {/* کنٹینٹ ایریا */}
      <div style={styles.content}>
        
        {/* ہوم */}
        {activeTab === 'home' && <div style={styles.box}><h3>خوش آمدید!</h3><p>یہاں آپ کی تمام ادویات دستیاب ہیں۔</p></div>}

        {/* پروڈکٹس */}
        {activeTab === 'products' && (
          <div style={styles.box}>
            {products.map(p => (
              <div key={p.id} style={styles.item}>
                <h4>{p.nameUrdu} ({p.weight})</h4>
                <p>قیمت: {p.price} روپے</p>
                <button onClick={() => addToCart(p)} style={styles.btnGreen}>خریدیں</button>
              </div>
            ))}
          </div>
        )}

        {/* کارٹ اور چیک آؤٹ */}
        {activeTab === 'cart' && (
          <div style={styles.box}>
            {checkoutStep === 'cart' && (
              <div>
                <h3>آپ کا کارٹ</h3>
                {cart.length === 0 ? <p>خالی ہے</p> : (
                  <>
                    {cart.map((item, i) => <div key={i} style={styles.item}>{item.nameUrdu} - {item.price} Rs</div>)}
                    <button onClick={() => setCheckoutStep('payment')} style={styles.btnBlue}>چیک آؤٹ پر جائیں</button>
                  </>
                )}
              </div>
            )}
            
            {checkoutStep === 'payment' && (
              <div>
                <h3>ادائیگی کا طریقہ منتخب کریں</h3>
                <button onClick={() => handleCheckout('COD')} style={styles.payBtn}>کیش آن ڈلیوری</button>
                <button onClick={() => handleCheckout('Jazz')} style={styles.payBtn}>جاز کیش</button>
                <button onClick={() => handleCheckout('Easy')} style={styles.payBtn}>ایزی پیسہ</button>
              </div>
            )}

            {checkoutStep === 'success' && (
              <div style={{textAlign:'center'}}>
                <h3>آپ کی خریداری کا بہت شکریہ!</h3>
                <p>آپ کا آرڈر موصول ہو چکا ہے۔</p>
                <button onClick={() => {setCheckoutStep('cart'); setActiveTab('home')}} style={styles.btnGreen}>واپس جائیں</button>
              </div>
            )}
          </div>
        )}

        {/* ایڈمن پینل */}
        {activeTab === 'admin' && (
          <div style={styles.box}>
            <form onSubmit={handleSaveProduct} style={styles.form}>
              <input placeholder="نام اردو" value={formData.nameUrdu} onChange={(e) => setFormData({...formData, nameUrdu: e.target.value})} style={styles.input} />
              <input type="number" placeholder="قیمت" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} style={styles.input} />
              <select value={formData.weight} onChange={(e) => setFormData({...formData, weight: e.target.value})} style={styles.input}>
                <option value="100g">100 گرام</option>
                <option value="500g">500 گرام</option>
                <option value="1kg">1 کلو گرام</option>
              </select>
              <button type="submit" style={styles.btnGreen}>محفوظ کریں</button>
            </form>
            <hr />
            {products.map(p => (
              <div key={p.id} style={styles.item}>
                {p.nameUrdu} 
                <button onClick={() => setProducts(products.filter(x => x.id !== p.id))} style={styles.btnRed}>حذف</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

const styles = {
  container: { padding: '15px', direction: 'rtl', fontFamily: 'sans-serif', maxWidth: '500px', margin: 'auto' },
  header: { textAlign: 'center', marginBottom: '20px', color: '#2b5e29' },
  navGrid: { display: 'flex', gap: '5px', justifyContent: 'center' },
  navBtn: { padding: '8px', border: 'none', background: '#e0e0e0', cursor: 'pointer' },
  box: { marginTop: '15px', padding: '15px', background: '#f9f9f9', borderRadius: '10px' },
  item: { display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #ddd' },
  form: { display: 'flex', flexDirection: 'column', gap: '5px' },
  input: { padding: '8px' },
  btnGreen: { padding: '10px', background: '#2e7d32', color: '#fff', border: 'none', cursor: 'pointer' },
  btnBlue: { padding: '10px', background: '#1976d2', color: '#fff', border: 'none', cursor: 'pointer', marginTop: '10px' },
  btnRed: { background: '#d32f2f', color: '#fff', border: 'none', cursor: 'pointer' },
  payBtn: { display: 'block', width: '100%', padding: '15px', margin: '10px 0', background: '#4caf50', color: '#fff', border: 'none' }
};
