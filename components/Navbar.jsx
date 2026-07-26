'use client';

import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('products');
  const [cart, setCart] = useState([]);
  const [selectedWeights, setSelectedWeights] = useState({});
  const [checkoutStep, setCheckoutStep] = useState('cart');

  // وزن کے آپشنز
  const weights = [
    { label: '100 گرام', factor: 1, grams: 100 },
    { label: '250 گرام', factor: 2.5, grams: 250 },
    { label: '500 گرام', factor: 5, grams: 500 },
    { label: '1 کلو', factor: 10, grams: 1000 }
  ];

  // تمام 32 مصنوعات کی مکمل فہرست
  const [products] = useState([
    { id: 1, nameUrdu: 'اسپغول مسلم', basePrice: 450, desc: 'معدہ کی صفائی' },
    { id: 2, nameUrdu: 'عناب اصل', basePrice: 350, desc: 'خون کی صفائی' },
    { id: 3, nameUrdu: 'سونا مکھی پاؤڈر', basePrice: 200, desc: 'قبض کشا' },
    { id: 4, nameUrdu: 'دار چینی پاؤڈر', basePrice: 300, desc: 'شوگر کنٹرول' },
    { id: 5, nameUrdu: 'ہلدی دیسی پاؤڈر', basePrice: 250, desc: 'اینٹی بائیوٹک' },
    { id: 6, nameUrdu: 'کلونجی پاؤڈر', basePrice: 350, desc: 'شفا بخش' },
    { id: 7, nameUrdu: 'میتھی دانہ پاؤڈر', basePrice: 180, desc: 'شوگر کے لیے' },
    { id: 8, nameUrdu: 'سونف پاؤڈر', basePrice: 220, desc: 'نظامِ ہضم' },
    { id: 9, nameUrdu: 'زیرہ سفید پاؤڈر', basePrice: 400, desc: 'وزن میں کمی' },
    { id: 10, nameUrdu: 'ملٹھی پاؤڈر', basePrice: 280, desc: 'گلے کے لیے' },
    { id: 11, nameUrdu: 'آملہ پاؤڈر', basePrice: 250, desc: 'بالوں کے لیے' },
    { id: 12, nameUrdu: 'بہَیڑہ پاؤڈر', basePrice: 220, desc: 'معدہ' },
    { id: 13, nameUrdu: 'ہرڑ پاؤڈر', basePrice: 260, desc: 'پیٹ کی صفائی' },
    { id: 14, nameUrdu: 'باہمن سفید پاؤڈر', basePrice: 600, desc: 'دل کی تقویت' },
    { id: 15, nameUrdu: 'ثعلب مصری پاؤڈر', basePrice: 1200, desc: 'طاقت' },
    { id: 16, nameUrdu: 'موصلی سفید', basePrice: 950, desc: 'کمر درد' },
    { id: 17, nameUrdu: 'موصلی سیاہ', basePrice: 500, desc: 'جوڑوں کا درد' },
    { id: 18, nameUrdu: 'حرمل پاؤڈر', basePrice: 180, desc: 'ریاحی درد' },
    { id: 19, nameUrdu: 'اجوائن دیسی', basePrice: 200, desc: 'گیس کے لیے' },
    { id: 20, nameUrdu: 'ادرک خشک پاؤڈر', basePrice: 350, desc: 'بلغم' },
    { id: 21, nameUrdu: 'گلِ سرخ پاؤڈر', basePrice: 300, desc: 'معدہ' },
    { id: 22, nameUrdu: 'صندل سفید', basePrice: 800, desc: 'چہرے کے نکھار' },
    { id: 23, nameUrdu: 'گوکھرو پاؤڈر', basePrice: 280, desc: 'مثانہ' },
    { id: 24, nameUrdu: 'روغنِ بادام', basePrice: 650, desc: 'دماغی طاقت' },
    { id: 25, nameUrdu: 'روغنِ زیتون', basePrice: 1200, desc: 'جلد و بال' },
    { id: 26, nameUrdu: 'روغنِ کلونجی', basePrice: 550, desc: 'ہر بیماری' },
    { id: 27, nameUrdu: 'روغنِ کدو', basePrice: 480, desc: 'نیند' },
    { id: 28, nameUrdu: 'روغنِ ارنڈ', basePrice: 300, desc: 'قبض' },
    { id: 29, nameUrdu: 'شہدِ سدرہ', basePrice: 1800, desc: 'خالص شہد' },
    { id: 30, nameUrdu: 'معجونِ شباب', basePrice: 1200, desc: 'طاقتور' },
    { id: 31, nameUrdu: 'شربتِ صندل', basePrice: 300, desc: 'ٹھنڈک' },
    { id: 32, nameUrdu: 'شربتِ بزوری', basePrice: 280, desc: 'گردے' }
  ]);

  // ڈیلیوری چارجز کا فنکشن (افضل صاحب کے بتائے ہوئے ریٹس)
  const getDeliveryCharges = (totalGrams) => {
    const kg = totalGrams / 1000;
    if (kg <= 1) return 200;
    if (kg <= 2) return 300;
    if (kg <= 3) return 400;
    if (kg <= 5) return 500;
    return 600; // 5 کلو سے زیادہ کے لیے
  };

  const addToCart = (product) => {
    const w = selectedWeights[product.id] || weights[0];
    const item = { ...product, ...w, finalPrice: Math.round(product.basePrice * w.factor) };
    setCart([...cart, item]);
    alert(`${product.nameUrdu} (${w.label}) کارٹ میں شامل!`);
  };

  const totalGrams = cart.reduce((acc, item) => acc + item.grams, 0);
  const subTotal = cart.reduce((acc, item) => acc + item.finalPrice, 0);
  const delivery = getDeliveryCharges(totalGrams);
  const grandTotal = subTotal + delivery;

  return (
    <div style={{ padding: '20px', direction: 'rtl', fontFamily: 'sans-serif', maxWidth: '500px', margin: 'auto', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', color: '#1b5e20' }}>گھر کا دواخانہ (مکمل لسٹ)</h2>
      
      <div style={{ display: 'flex', gap: '5px', marginBottom: '15px', justifyContent: 'center' }}>
        <button onClick={() => setActiveTab('products')} style={styles.btn}>مصنوعات</button>
        <button onClick={() => setActiveTab('cart')} style={styles.btn}>کارٹ ({cart.length})</button>
      </div>

      {activeTab === 'products' && (
        <div style={{ display: 'grid', gap: '10px' }}>
          {products.map(p => (
            <div key={p.id} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px', backgroundColor: 'white' }}>
              <h4 style={{ margin: '0 0 5px 0' }}>{p.nameUrdu}</h4>
              <p style={{ fontSize: '12px', margin: '0 0 5px 0' }}>{p.desc}</p>
              <select onChange={(e) => setSelectedWeights({...selectedWeights, [p.id]: weights[e.target.value]})} style={{ width: '100%', marginBottom: '5px' }}>
                {weights.map((w, i) => <option key={i} value={i}>{w.label}</option>)}
              </select>
              <button onClick={() => addToCart(p)} style={{ width: '100%', backgroundColor: '#2e7d32', color: 'white', border: 'none', padding: '8px', borderRadius: '4px', cursor: 'pointer' }}>
                شامل کریں
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'cart' && (
        <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px' }}>
          <h3>آپ کا آرڈر</h3>
          {cart.map((item, index) => (
            <div key={index} style={{ borderBottom: '1px solid #eee', padding: '10px 0', fontSize: '14px' }}>
              {item.nameUrdu} ({item.label}) - {item.finalPrice} روپے
            </div>
          ))}
          <div style={{ marginTop: '20px', borderTop: '2px solid #333', paddingTop: '10px' }}>
            <p><strong>سب ٹوٹل:</strong> {subTotal} روپے</p>
            <p><strong>ڈیلیوری چارجز:</strong> {delivery} روپے</p>
            <h4 style={{ color: 'green' }}>کل رقم: {grandTotal} روپے</h4>
            <button onClick={() => alert('آرڈر موصول ہو گیا!')} style={{ width: '100%', padding: '10px', backgroundColor: '#1b5e20', color: 'white', border: 'none', borderRadius: '5px' }}>
              آرڈر کنفرم کریں
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  btn: { padding: '8px 15px', cursor: 'pointer', borderRadius: '5px', border: '1px solid #1b5e20', backgroundColor: 'white' }
};
