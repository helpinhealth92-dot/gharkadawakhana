'use client';

import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('products');
  const [cart, setCart] = useState([]);
  const [weightState, setWeightState] = useState({});
  const [customer, setCustomer] = useState({ name: '', phone: '', address: '', payment: 'COD' });
  const [orderSuccess, setOrderSuccess] = useState(false);

  // واٹس ایپ نمبر
  const whatsappNumber = '923477357397';

  // ایڈمن کے لیے نئی پروڈکٹ
  const [newProduct, setNewProduct] = useState({ nameUrdu: '', basePrice: '', desc: '', img: '' });

  // تمام 32 مصنوعات
  const [products, setProducts] = useState([
    { id: 1, nameUrdu: 'اسپغول مسلم', basePrice: 450, img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200', desc: 'معدہ اور انتڑیوں کی صفائی' },
    { id: 2, nameUrdu: 'عناب اصل', basePrice: 350, img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200', desc: 'خون کی صفائی کے لیے' },
    { id: 3, nameUrdu: 'سونا مکھی پاؤڈر', basePrice: 200, img: 'https://images.unsplash.com/photo-1509358271058-acd05cc93280?w=200', desc: 'قبض کشا اور پیٹ صاف' },
    { id: 4, nameUrdu: 'دار چینی پاؤڈر', basePrice: 300, img: 'https://images.unsplash.com/photo-1509358271058-acd05cc93280?w=200', desc: 'شوگر اور وزن کنٹرول' },
    { id: 5, nameUrdu: 'ہلدی دیسی پاؤڈر', basePrice: 250, img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200', desc: 'قدرتی اینٹی بائیوٹک' },
    { id: 6, nameUrdu: 'کلونجی خالص پاؤڈر', basePrice: 350, img: 'https://images.unsplash.com/photo-1509358271058-acd05cc93280?w=200', desc: 'شفا بخش دوا' },
    { id: 7, nameUrdu: 'میتھی دانہ پاؤڈر', basePrice: 180, img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200', desc: 'شوگر اور جوڑوں کے لیے' },
    { id: 8, nameUrdu: 'سونف پاؤڈر', basePrice: 220, img: 'https://images.unsplash.com/photo-1509358271058-acd05cc93280?w=200', desc: 'نظامِ ہضم کے لیے' },
    { id: 9, nameUrdu: 'زیرہ سفید پاؤڈر', basePrice: 400, img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200', desc: 'وزن اور گیس کم کرے' },
    { id: 10, nameUrdu: 'ملٹھی پاؤڈر', basePrice: 280, img: 'https://images.unsplash.com/photo-1509358271058-acd05cc93280?w=200', desc: 'گلے اور کھانسی کے لیے' },
    { id: 11, nameUrdu: 'آملہ پاؤڈر', basePrice: 250, img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200', desc: 'بالوں اور بینائی کے لیے' },
    { id: 12, nameUrdu: 'بہَیڑہ پاؤڈر', basePrice: 220, img: 'https://images.unsplash.com/photo-1509358271058-acd05cc93280?w=200', desc: 'معدے کی طاقت' },
    { id: 13, nameUrdu: 'ہرڑ پاؤڈر', basePrice: 260, img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200', desc: 'پیٹ کی مکمل صفائی' },
    { id: 14, nameUrdu: 'باہمن سفید پاؤڈر', basePrice: 600, img: 'https://images.unsplash.com/photo-1509358271058-acd05cc93280?w=200', desc: 'دل اور اعصاب کی تقویت' },
    { id: 15, nameUrdu: 'ثعلب مصری پاؤڈر', basePrice: 1200, img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200', desc: 'مردانہ طاقت و توانائی' },
    { id: 16, nameUrdu: 'موصلی سفید پاؤڈر', basePrice: 950, img: 'https://images.unsplash.com/photo-1509358271058-acd05cc93280?w=200', desc: 'کمر درد اور قوت' },
    { id: 17, nameUrdu: 'موصلی سیاہ پاؤڈر', basePrice: 500, img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200', desc: 'جوڑوں اور اعصاب کے لیے' },
    { id: 18, nameUrdu: 'حرمل پاؤڈر', basePrice: 180, img: 'https://images.unsplash.com/photo-1509358271058-acd05cc93280?w=200', desc: 'ریاحی درد کے لیے' },
    { id: 19, nameUrdu: 'اجوائن دیسی', basePrice: 200, img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200', desc: 'پیٹ درد اور گیس' },
    { id: 20, nameUrdu: 'ادرک خشک (سونٹھ)', basePrice: 350, img: 'https://images.unsplash.com/photo-1509358271058-acd05cc93280?w=200', desc: 'بلغم اور جوڑوں کا درد' },
    { id: 21, nameUrdu: 'گلِ سرخ پاؤڈر', basePrice: 300, img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200', desc: 'معدہ اور دل کے لیے' },
    { id: 22, nameUrdu: 'صندل سفید پاؤڈر', basePrice: 800, img: 'https://images.unsplash.com/photo-1509358271058-acd05cc93280?w=200', desc: 'چہرے کی خوبصورتی' },
    { id: 23, nameUrdu: 'گوکھرو پاؤڈر', basePrice: 280, img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200', desc: 'گردے اور مثانے کے لیے' },
    { id: 24, nameUrdu: 'روغنِ بادام', basePrice: 650, img: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=200', desc: 'دماغی اور اعصابی طاقت' },
    { id: 25, nameUrdu: 'روغنِ زیتون', basePrice: 1200, img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=200', desc: 'جلد اور بالوں کی حفاظت' },
    { id: 26, nameUrdu: 'روغنِ کلونجی', basePrice: 550, img: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=200', desc: 'ہر بیماری کا علاج' },
    { id: 27, nameUrdu: 'روغنِ کدو', basePrice: 480, img: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=200', desc: 'پرامید نیند اور سکون' },
    { id: 28, nameUrdu: 'روغنِ ارنڈ (کاسٹر آئل)', basePrice: 300, img: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=200', desc: 'دائمی قبض کا خاتمہ' },
    { id: 29, nameUrdu: 'شہدِ سدرہ (بیری کا شہد)', basePrice: 1800, img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=200', desc: '100% خالص قدرتی شہد' },
    { id: 30, nameUrdu: 'معجونِ شباب', basePrice: 1200, img: 'https://images.unsplash.com/photo-1509358271058-acd05cc93280?w=200', desc: 'خاص طاقت اور توانائی' },
    { id: 31, nameUrdu: 'شربتِ صندل', basePrice: 300, img: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c?w=200', desc: 'دل اور جگر کی ٹھنڈک' },
    { id: 32, nameUrdu: 'شربتِ بزوری', basePrice: 280, img: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c?w=200', desc: 'گردے اور جگر کی صفائی' }
  ]);

  const weights = [
    { label: '100 گرام', factor: 1, grams: 100 },
    { label: '250 گرام', factor: 2.5, grams: 250 },
    { label: '500 گرام', factor: 5, grams: 500 },
    { label: '1 کلو', factor: 10, grams: 1000 }
  ];

  const addToCart = (product) => {
    const w = weightState[product.id] || weights[0];
    const finalPrice = Math.round(product.basePrice * w.factor);
    setCart([...cart, { ...product, ...w, finalPrice }]);
    alert(`${product.nameUrdu} (${w.label}) کارٹ میں شامل ہو گیا!`);
  };

  const totalGrams = cart.reduce((acc, item) => acc + item.grams, 0);
  
  const getDeliveryCharges = (grams) => {
    if (grams === 0) return 0;
    const kg = grams / 1000;
    if (kg <= 1) return 200;
    if (kg <= 2) return 300;
    if (kg <= 3) return 400;
    if (kg <= 5) return 500;
    return 600;
  };

  const subTotal = cart.reduce((acc, item) => acc + item.finalPrice, 0);
  const deliveryCharges = getDeliveryCharges(totalGrams);
  const grandTotal = subTotal + deliveryCharges;

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    if (!customer.name || !customer.phone || !customer.address) {
      alert('براہِ کرم تمام خانے پر کریں۔');
      return;
    }

    const itemsList = cart.map((i, index) => `${index + 1}. ${i.nameUrdu} (${i.label}) - Rs.${i.finalPrice}`).join('%0A');
    const text = `*نیا آرڈر - گھر کا دواخانہ*%0A%0A*گاہک کی تفصیلات:*%0Aنام: ${customer.name}%0Aفون: ${customer.phone}%0Aپتہ: ${customer.address}%0Aادائیگی: ${customer.payment}%0A%0A*آئٹمز:*%0A${itemsList}%0A%0A*کُل وزن:* ${totalGrams / 1000} kg%0A*سب ٹوٹل:* Rs.${subTotal}%0A*ڈیلیوری چارجز:* Rs.${deliveryCharges}%0A*کُل رقم:* Rs.${grandTotal}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    setOrderSuccess(true);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.nameUrdu || !newProduct.basePrice) return;
    setProducts([...products, { ...newProduct, id: Date.now(), basePrice: Number(newProduct.basePrice), img: newProduct.img || 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200' }]);
    setNewProduct({ nameUrdu: '', basePrice: '', desc: '', img: '' });
    alert('نئی پروڈکٹ شامل ہو گئی!');
  };

  return (
    <div style={{ maxWidth: '450px', margin: 'auto', fontFamily: 'sans-serif', backgroundColor: '#ffffff', minHeight: '100vh', padding: '15px' }}>
      
      {/* 1. لوگو اور نام (لوگو اوپر آپ کی تصویر کے مطابق) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2 style={{ color: '#2e7d32', margin: '0', fontSize: '28px', fontFamily: 'Urdu, sans-serif' }}>گھر کا دواخانہ</h2>
          <p style={{ margin: '5px 0 0 0', color: '#555', fontSize: '18px', fontWeight: '500' }}>Herbalist Afzal Nadeem</p>
        </div>
        
        {/* لوگو / مونوگرام */}
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '2px solid #2e7d32', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e8f5e9' }}>
          <img 
            src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200" 
            alt="Herbalist Afzal Nadeem Logo" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <span style={{ fontSize: '10px', textAlign: 'center', color: '#1b5e20', fontWeight: 'bold' }}>Herbalist<br/>Afzal Nadeem</span>
        </div>
      </div>

      {/* 2. آپ کے پسندیدہ گول بٹنز (تصویر کے مطابق) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center', marginBottom: '25px' }}>
        
        <div style={{ display: 'flex', gap: '15px', width: '100%', justifyContent: 'center' }}>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" style={{ ...styles.pillBtnLight, textDecoration: 'none', color: '#1b5e20' }}>
            Contact 📞
          </a>
          <button onClick={() => { setActiveTab('products'); setOrderSuccess(false); }} style={styles.pillBtnLight}>
            Home 🏠
          </button>
        </div>

        <button onClick={() => { setActiveTab('admin'); setOrderSuccess(false); }} style={styles.pillBtnDark}>
          ▼ Admin Dashboard ⚙️
        </button>

        <button onClick={() => { setActiveTab('products'); setOrderSuccess(false); }} style={styles.pillBtnLight}>
          Products 🌿
        </button>

        <button onClick={() => { setActiveTab('cart'); setOrderSuccess(false); }} style={styles.pillBtnDark}>
          Cart ({cart.length}) 🛒
        </button>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '20px 0' }} />

      {/* 3. مصنوعات کی لسٹ */}
      {activeTab === 'products' && (
        <div style={{ display: 'grid', gap: '15px' }}>
          {products.map(p => (
            <div key={p.id} style={{ display: 'flex', gap: '12px', backgroundColor: '#f9f9f9', padding: '12px', borderRadius: '12px', border: '1px solid #e0e0e0', alignItems: 'center', direction: 'rtl' }}>
              <img src={p.img} alt={p.nameUrdu} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} />
              <div style={{ flexGrow: 1 }}>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', color: '#1b5e20' }}>{p.nameUrdu}</h4>
                <p style={{ margin: '0 0 6px 0', fontSize: '12px', color: '#666' }}>{p.desc}</p>
                
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <select onChange={(e) => setWeightState({ ...weightState, [p.id]: weights[e.target.value] })} style={{ padding: '4px 8px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '12px' }}>
                    {weights.map((w, i) => (
                      <option key={i} value={i}>{w.label} - Rs.{Math.round(p.basePrice * w.factor)}</option>
                    ))}
                  </select>
                  <button onClick={() => addToCart(p)} style={styles.addCartBtn}>+ شامل کریں</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 4. کارٹ اور فارم */}
      {activeTab === 'cart' && !orderSuccess && (
        <div style={{ direction: 'rtl' }}>
          <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '12px', marginBottom: '15px' }}>
            <h3 style={{ margin: '0 0 10px 0', borderBottom: '2px solid #1b5e20', paddingBottom: '5px' }}>آپ کا کارٹ</h3>
            {cart.length === 0 ? (
              <p style={{ textAlign: 'center', color: '#777' }}>آپ کا کارٹ خالی ہے۔</p>
            ) : (
              cart.map((item, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #eee' }}>
                  <span>{item.nameUrdu} ({item.label})</span>
                  <strong>Rs. {item.finalPrice}</strong>
                </div>
              ))
            )}

            {cart.length > 0 && (
              <div style={{ marginTop: '15px', backgroundColor: '#fff', padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }}>
                <p style={{ margin: '3px 0' }}>سب ٹوٹل: Rs. {subTotal}</p>
                <p style={{ margin: '3px 0' }}>ڈیلیوری چارجز: Rs. {deliveryCharges}</p>
                <h4 style={{ margin: '5px 0 0 0', color: '#1b5e20' }}>کُل رقم: Rs. {grandTotal}</h4>
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <form onSubmit={handleConfirmOrder} style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <h4 style={{ margin: '0', color: '#1b5e20' }}>آرڈر اور ایڈریس کی تفصیل:</h4>
              <input type="text" placeholder="آپ کا پورا نام" required value={customer.name} onChange={(e) => setCustomer({ ...customer, name: e.target.value })} style={styles.input} />
              <input type="tel" placeholder="موبائل / واٹس ایپ نمبر" required value={customer.phone} onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} style={styles.input} />
              <textarea placeholder="مکمل پتہ (مکان نمبر، گلی، شہر)" required value={customer.address} onChange={(e) => setCustomer({ ...customer, address: e.target.value })} style={{ ...styles.input, height: '60px' }}></textarea>
              
              <label style={{ fontSize: '12px', fontWeight: 'bold' }}>ادائیگی کا طریقہ:</label>
              <select value={customer.payment} onChange={(e) => setCustomer({ ...customer, payment: e.target.value })} style={styles.input}>
                <option value="COD">کیش آن ڈلیوری (Cash on Delivery)</option>
                <option value="JazzCash">جاز کیش (JazzCash)</option>
                <option value="EasyPaisa">ایزی پیسہ (EasyPaisa)</option>
              </select>

              <button type="submit" style={styles.confirmOrderBtn}>واٹس ایپ پر آرڈر بھیجیں 💬</button>
            </form>
          )}
        </div>
      )}

      {/* 5. شکریہ کی سکرین */}
      {orderSuccess && (
        <div style={{ padding: '30px 15px', textAlign: 'center', backgroundColor: '#e8f5e9', borderRadius: '12px', direction: 'rtl' }}>
          <h1 style={{ fontSize: '48px', margin: '0' }}>🎉</h1>
          <h2 style={{ color: '#1b5e20' }}>بہت بہت شکریہ!</h2>
          <p>آپ کا آرڈر موصول ہو چکا ہے۔ واٹس ایپ پر تفصیلات بھیج دی گئی ہیں۔</p>
          <button onClick={() => { setCart([]); setOrderSuccess(false); setActiveTab('products'); }} style={styles.confirmOrderBtn}>مزید خریداری کریں</button>
        </div>
      )}

      {/* 6. ایڈمن ڈیش بورڈ */}
      {activeTab === 'admin' && (
        <div style={{ direction: 'rtl' }}>
          <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '12px', marginBottom: '15px' }}>
            <h3>➕ نئی پروڈکٹ شامل کریں</h3>
            <form onSubmit={handleAddProduct} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <input type="text" placeholder="پروڈکٹ کا نام" required value={newProduct.nameUrdu} onChange={(e) => setNewProduct({ ...newProduct, nameUrdu: e.target.value })} style={styles.input} />
              <input type="number" placeholder="100 گرام کی قیمت (Rs)" required value={newProduct.basePrice} onChange={(e) => setNewProduct({ ...newProduct, basePrice: e.target.value })} style={styles.input} />
              <input type="text" placeholder="مختصر فائدہ" value={newProduct.desc} onChange={(e) => setNewProduct({ ...newProduct, desc: e.target.value })} style={styles.input} />
              <input type="text" placeholder="تصویر کا لنک (Image URL)" value={newProduct.img} onChange={(e) => setNewProduct({ ...newProduct, img: e.target.value })} style={styles.input} />
              <button type="submit" style={styles.addCartBtn}>محفوظ کریں</button>
            </form>
          </div>

          <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '12px' }}>
            <h3>📋 تمام پروڈکٹس ({products.length})</h3>
            {products.map(p => (
              <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #eee', alignItems: 'center' }}>
                <span>{p.nameUrdu} (100g = Rs.{p.basePrice})</span>
                <button onClick={() => setProducts(products.filter(pr => pr.id !== p.id))} style={{ backgroundColor: '#d32f2f', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}>حذف کریں</button>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

// سٹائلز (آپ کی تصویر والے ڈیزائن کے مطابق)
const styles = {
  pillBtnLight: {
    backgroundColor: '#f1f8e9',
    color: '#1b5e20',
    border: 'none',
    padding: '12px 28px',
    borderRadius: '30px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px'
  },
  pillBtnDark: {
    backgroundColor: '#1b5e20',
    color: 'white',
    border: 'none',
    padding: '14px 35px',
    borderRadius: '35px',
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '85%',
    textAlign: 'center'
  },
  addCartBtn: { backgroundColor: '#1b5e20', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px' },
  input: { padding: '8px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '13px' },
  confirmOrderBtn: { backgroundColor: '#1b5e20', color: 'white', padding: '12px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '15px', fontWeight: 'bold', width: '100%', marginTop: '10px' }
};
