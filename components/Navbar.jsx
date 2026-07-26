'use client';

import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('products');
  const [adminTab, setAdminTab] = useState('add');
  const [checkoutStep, setCheckoutStep] = useState('cart'); // 'cart', 'payment', 'success'
  const [selectedPayment, setSelectedPayment] = useState('COD');

  // 30 سے زائد دیسی جڑی بوٹیوں اور پاؤڈر کی مکمل فہرست
  const [products, setProducts] = useState([
    { id: 1, nameUrdu: 'اسپغول مسلم', nameEng: 'Ispaghol Husk', price: 450, stock: 50, weight: '250 گرام', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200', desc: 'معدہ اور انتڑیوں کی صفائی کے لیے' },
    { id: 2, nameUrdu: 'عناب اصل', nameEng: 'Unnab / Jujube', price: 350, stock: 30, weight: '250 گرام', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200', desc: 'خون کی صفائی اور مصفیٰ خون' },
    { id: 3, nameUrdu: 'سونا مکھی پاؤڈر', nameEng: 'Sena Leaves Powder', price: 200, stock: 40, weight: '100 گرام', img: 'https://images.unsplash.com/photo-1509358271058-acd05cc93280?w=200', desc: 'قبض کشا اور پیٹ کی صفائی' },
    { id: 4, nameUrdu: 'دار چینی پاؤڈر', nameEng: 'Cinnamon Powder', price: 300, stock: 25, weight: '100 گرام', img: 'https://images.unsplash.com/photo-1509358271058-acd05cc93280?w=200', desc: 'شوگر اور میٹابولزم کے لیے' },
    { id: 5, nameUrdu: 'ہلدی دیسی پاؤڈر', nameEng: 'Pure Turmeric Powder', price: 250, stock: 60, weight: '250 گرام', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200', desc: 'خالص اینٹی بائیوٹک اور دردوں کے لیے' },
    { id: 6, nameUrdu: 'کلونجی خالص پاؤڈر', nameEng: 'Kalonji Powder', price: 350, stock: 45, weight: '200 گرام', img: 'https://images.unsplash.com/photo-1509358271058-acd05cc93280?w=200', desc: 'شفا بخش اور قوتِ مدافعت کے لیے' },
    { id: 7, nameUrdu: 'میلو / میتھی دانہ پاؤڈر', nameEng: 'Fenugreek Powder', price: 180, stock: 50, weight: '250 گرام', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200', desc: 'شوگر اور بال مضبوط کرنے کے لیے' },
    { id: 8, nameUrdu: 'سونف پاؤڈر', nameEng: 'Fennel Powder', price: 220, stock: 35, weight: '250 گرام', img: 'https://images.unsplash.com/photo-1509358271058-acd05cc93280?w=200', desc: 'نظامِ ہضم اور نظر کے لیے' },
    { id: 9, nameUrdu: 'زیرہ سفید پاؤڈر', nameEng: 'White Cumin Powder', price: 400, stock: 30, weight: '200 گرام', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200', desc: 'وزن کم کرنے اور ہاضمے کے لیے' },
    { id: 10, nameUrdu: 'ملہم / ملٹھی پاؤڈر', nameEng: 'Mulethi Powder', price: 280, stock: 20, weight: '100 گرام', img: 'https://images.unsplash.com/photo-1509358271058-acd05cc93280?w=200', desc: 'گلے اور کھانسی کے لیے بہترین' },
    { id: 11, nameUrdu: 'آملہ پاؤڈر', nameEng: 'Amla Powder', price: 250, stock: 40, weight: '250 گرام', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200', desc: 'بالوں اور وٹامن سی کی کمی کے لیے' },
    { id: 12, nameUrdu: 'بہَیڑہ پاؤڈر', nameEng: 'Baheda Powder', price: 220, stock: 25, weight: '250 گرام', img: 'https://images.unsplash.com/photo-1509358271058-acd05cc93280?w=200', desc: 'ترپھلا کا جزو اور معدے کے لیے' },
    { id: 13, nameUrdu: 'ہرڑ پاؤڈر (ہلیل)', nameEng: 'Haritaki Powder', price: 260, stock: 30, weight: '250 گرام', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200', desc: 'پیٹ اور نظر کی صفائی کے لیے' },
    { id: 14, nameUrdu: 'باہمن سفید پاؤڈر', nameEng: 'Behman Safaid', price: 600, stock: 15, weight: '100 گرام', img: 'https://images.unsplash.com/photo-1509358271058-acd05cc93280?w=200', desc: 'تقویتِ قلب اور دل کے لیے' },
    { id: 15, nameUrdu: 'ثعلب مصری پاؤڈر', nameEng: 'Salab Misri Powder', price: 1200, stock: 10, weight: '100 گرام', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200', desc: 'مردانہ طاقت اور اعصابی قوت' },
    { id: 16, nameUrdu: 'موصلی سفید ہندوستانی', nameEng: 'Safed Musli Powder', price: 950, stock: 15, weight: '100 گرام', img: 'https://images.unsplash.com/photo-1509358271058-acd05cc93280?w=200', desc: 'کمر درد اور قوت کے لیے' },
    { id: 17, nameUrdu: 'موصلی سیاہ پاؤڈر', nameEng: 'Black Musli Powder', price: 500, stock: 20, weight: '100 گرام', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200', desc: 'جوڑوں اور اعصاب کے لیے' },
    { id: 18, nameUrdu: 'اسپند / حرمل پاؤڈر', nameEng: 'Harmal Powder', price: 180, stock: 35, weight: '200 گرام', img: 'https://images.unsplash.com/photo-1509358271058-acd05cc93280?w=200', desc: 'ریاحی درددں کے لیے' },
    { id: 19, nameUrdu: 'اجوائن دیسی پاؤڈر', nameEng: 'Ajwain Powder', price: 200, stock: 50, weight: '250 گرام', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200', desc: 'گیس، تبخیر اور پیٹ درد کے لیے' },
    { id: 20, nameUrdu: 'زنجبیل / ادرک خشک پاؤڈر', nameEng: 'Dry Ginger Powder', price: 350, stock: 30, weight: '200 گرام', img: 'https://images.unsplash.com/photo-1509358271058-acd05cc93280?w=200', desc: 'بلغم اور جوڑوں کے درد میں مفید' },
    { id: 21, nameUrdu: 'گلِ سرخ / گلاب پاؤڈر', nameEng: 'Rose Petals Powder', price: 300, stock: 25, weight: '100 گرام', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200', desc: 'معدے اور دل کی تفریح کے لیے' },
    { id: 22, nameUrdu: 'صندل سفید پاؤڈر', nameEng: 'Sandalwood Powder', price: 800, stock: 15, weight: '100 گرام', img: 'https://images.unsplash.com/photo-1509358271058-acd05cc93280?w=200', desc: 'چہرے کے نکھار اور دل کی گرمی کے لیے' },
    { id: 23, nameUrdu: 'گوکھرو / بھکڑا پاؤڈر', nameEng: 'Gokhru Powder', price: 280, stock: 30, weight: '200 گرام', img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200', desc: 'گردے اور مثانے کے مسائل کے لیے' },
    { id: 24, nameUrdu: 'روغنِ بادام خالص', nameEng: 'Pure Almond Oil', price: 650, stock: 20, weight: '100 گرام', img: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=200', desc: 'دماغ اور قبض کشائی کے لیے' },
    { id: 25, nameUrdu: 'روغنِ زیتون خالص', nameEng: 'Extra Virgin Olive Oil', price: 1200, stock: 25, weight: '500 گرام', img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=200', desc: 'جلد، بالوں اور صحت کے لیے' },
    { id: 26, nameUrdu: 'روغنِ کلونجی', nameEng: 'Kalonji Oil', price: 550, stock: 30, weight: '100 گرام', img: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=200', desc: 'ہر بیماری کی شفا کے لیے' },
    { id: 27, nameUrdu: 'روغنِ کدو', nameEng: 'Pumpkin Seed Oil', price: 480, stock: 15, weight: '100 گرام', img: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=200', desc: 'نیند کی کمی اور گرمیِ دماغ کے لیے' },
    { id: 28, nameUrdu: 'روغنِ ارنڈ (کیسٹر آئل)', nameEng: 'Castor Oil', price: 300, stock: 40, weight: '200 گرام', img: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=200', desc: 'قبض اور بالوں کی بڑھوتری کے لیے' },
    { id: 29, nameUrdu: 'شہدِ خالص سدرہ', nameEng: 'Pure Berry Honey', price: 1800, stock: 15, weight: '1 کلو', img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=200', desc: 'خالص چھتے کا قدرتی شہد' },
    { id: 30, nameUrdu: 'معجونِ شبابِ آور', nameEng: 'Majoon Shabab', price: 1200, stock: 10, weight: '250 گرام', img: 'https://images.unsplash.com/photo-1509358271058-acd05cc93280?w=200', desc: 'مردانہ اور اعصابی طاقت کا کورس' },
    { id: 31, nameUrdu: 'شربتِ صندل خاص', nameEng: 'Sharbat Sandal', price: 300, stock: 50, weight: '500 گرام', img: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c?w=200', desc: 'جگر، معدے اور دل کی ٹھنڈک' },
    { id: 32, nameUrdu: 'شربتِ بزوری معتدل', nameEng: 'Sharbat Bazoori', price: 280, stock: 40, weight: '500 گرام', img: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c?w=200', desc: 'گردے اور مثانے کی گرمی دور کرے' }
  ]);

  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({ nameUrdu: '', nameEng: '', price: '', stock: '', weight: '100 گرام', img: '', desc: '' });
  const [editingId, setEditingId] = useState(null);

  // پروڈکٹ کا نام اور فارم ہینڈلر
  const handleSaveProduct = (e) => {
    e.preventDefault();
    if (!formData.nameUrdu || !formData.price) return alert('براہ کرم نام اور قیمت درج کریں');
    
    if (editingId) {
      setProducts(products.map(p => p.id === editingId ? { ...formData, id: editingId, price: Number(formData.price) } : p));
      setEditingId(null);
      alert('پروڈکٹ میں ترمیم کر دی گئی ہے!');
    } else {
      setProducts([...products, { ...formData, id: Date.now(), price: Number(formData.price) }]);
      alert('نئی پروڈکٹ کامیابی سے شامل کر دی گئی!');
    }
    setFormData({ nameUrdu: '', nameEng: '', price: '', stock: '', weight: '100 گرام', img: '', desc: '' });
  };

  const startEdit = (p) => {
    setFormData(p);
    setEditingId(p.id);
    setActiveTab('admin');
    setAdminTab('add');
  };

  const handleRemoveProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
    alert('پروڈکٹ ختم کر دی گئی ہے');
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.nameUrdu} کارٹ میں شامل کر دیا گیا!`);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const calculateTotal = () => cart.reduce((total, item) => total + Number(item.price), 0);

  const handleFinalCheckout = () => {
    setCheckoutStep('success');
  };

  return (
    <div style={styles.container}>
      {/* 1. ہیڈر اور لوگو */}
      <div style={styles.headerTop}>
        <div style={styles.brandText}>
          <h2 style={styles.titleUrdu}>گھر کا دواخانہ</h2>
          <h3 style={styles.titleEnglish}>Herbalist Afzal Nadeem</h3>
        </div>
        <img 
          src="/logo.png" 
          alt="Logo" 
          style={styles.logo}
          onError={(e) => { e.target.src = 'https://via.placeholder.com/65?text=DawaKhana'; }}
        />
      </div>

      {/* 2. مرکزی نیویگیشن بٹنز */}
      <div style={styles.buttonGrid}>
        <button 
          onClick={() => { setActiveTab('home'); setCheckoutStep('cart'); }} 
          style={{ ...styles.btn, ...(activeTab === 'home' ? styles.btnActive : styles.btnLight) }}
        >
          Home 🏠
        </button>

        <button 
          onClick={() => { setActiveTab('admin'); }} 
          style={{ ...styles.btn, ...(activeTab === 'admin' ? styles.btnActive : styles.btnDark) }}
        >
          {activeTab === 'admin' ? '▲ Admin Panel' : '▼ Admin Dashboard ⚙️'}
        </button>

        <button 
          onClick={() => { setActiveTab('products'); setCheckoutStep('cart'); }} 
          style={{ ...styles.btn, ...(activeTab === 'products' ? styles.btnActive : styles.btnLight) }}
        >
          Products 🌿
        </button>

        <button 
          onClick={() => { setActiveTab('cart'); }} 
          style={{ ...styles.btn, ...(activeTab === 'cart' ? styles.btnActive : styles.btnDark) }}
        >
          Cart ({cart.length}) 🛒
        </button>

        <button 
          onClick={() => { setActiveTab('contact'); }} 
          style={{ ...styles.btn, ...(activeTab === 'contact' ? styles.btnActive : styles.btnLight), ...styles.fullWidthBtn }}
        >
          Contact 📞
        </button>
      </div>

      {/* 3. مرکزی مواد (Content Area) */}
      <div style={styles.contentArea}>

        {/* ہوم (HOME) */}
        {activeTab === 'home' && (
          <div style={styles.card}>
            <h3>خوش آمدید! گھر کا دواخانہ 🌿</h3>
            <p>ہمارے ہاں تمام دیسی جڑی بوٹیاں، خالص پاؤڈرز، اور آئل اعلیٰ معیار کے ساتھ دستیاب ہیں۔</p>
            <button onClick={() => setActiveTab('products')} style={styles.actionBtn}>
              تمام 30+ مصنوعات دیکھیں 🛒
            </button>
          </div>
        )}

        {/* کانٹیکٹ (CONTACT) */}
        {activeTab === 'contact' && (
          <div style={styles.card}>
            <h3>رابطہ کا طریقہ 📞</h3>
            <p><strong>طبیب:</strong> ہربلسٹ افضل ندیم</p>
            <p><strong>واٹس ایپ:</strong> +92 300 1234567</p>
            <p><strong>پتہ:</strong> مین بازار، نزد جامع مسجد</p>
            <a 
              href="https://wa.me/923001234567" 
              target="_blank" 
              rel="noreferrer" 
              style={styles.whatsappBtn}
            >
              💬 واٹس ایپ پر آرڈر بھیجیں
            </a>
          </div>
        )}

        {/* پروڈکٹس (PRODUCTS) - 30+ جڑی بوٹیاں */}
        {activeTab === 'products' && (
          <div style={styles.card}>
            <h3 style={{ marginBottom: '15px' }}>دیسی جڑی بوٹیاں اور پاؤڈر (30+ کیٹلاگ) 🌿</h3>
            <div style={styles.prodGrid}>
              {products.map(p => (
                <div key={p.id} style={styles.productCard}>
                  <img 
                    src={p.img || 'https://via.placeholder.com/80'} 
                    alt={p.nameUrdu} 
                    style={styles.prodImg} 
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/80?text=Herbs'; }}
                  />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: '0 0 5px 0', color: '#1b5e20' }}>{p.nameUrdu}</h4>
                    <p style={styles.subText}>{p.nameEng} - <span style={styles.badge}>{p.weight}</span></p>
                    <p style={{ fontSize: '12px', margin: '3px 0', color: '#555' }}>{p.desc}</p>
                    <p style={styles.price}>قیمت: {p.price} روپے</p>
                  </div>
                  <button onClick={() => addToCart(p)} style={styles.buyBtn}>
                    کارٹ میں شامل کریں 🛒
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* کارٹ اور چیک آؤٹ (CART & CHECKOUT) */}
        {activeTab === 'cart' && (
          <div style={styles.card}>
            {checkoutStep === 'cart' && (
              <div>
                <h3>آپ کا کارٹ (Shopping Cart) 🛒</h3>
                {cart.length === 0 ? (
                  <p>آپ کا کارٹ فی الحال خالی ہے</p>
                ) : (
                  <div>
                    {cart.map((item, index) => (
                      <div key={index} style={styles.cartItem}>
                        <div>
                          <strong>{item.nameUrdu}</strong> ({item.weight})
                          <br />
                          <span style={{ color: '#2e7d32' }}>{item.price} روپے</span>
                        </div>
                        <button onClick={() => removeFromCart(index)} style={styles.deleteBtn}>
                          حذف کریں
                        </button>
                      </div>
                    ))}
                    <hr style={{ margin: '15px 0' }} />
                    <h4 style={{ textAlign: 'right' }}>کل رقم (Total): {calculateTotal()} روپے</h4>
                    <button onClick={() => setCheckoutStep('payment')} style={styles.checkoutBtn}>
                      چیک آؤٹ (Checkout) کریں 💳
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* ادائیگی کا انتخاب */}
            {checkoutStep === 'payment' && (
              <div>
                <h3>ادائیگی کا طریقہ منتخب کریں 💳</h3>
                <p>کل قابلِ ادا رقم: <strong>{calculateTotal()} روپے</strong></p>
                
                <div style={styles.paymentOptions}>
                  <label style={styles.radioLabel}>
                    <input 
                      type="radio" 
                      name="payment" 
                      value="COD" 
                      checked={selectedPayment === 'COD'} 
                      onChange={() => setSelectedPayment('COD')} 
                    />
                    💵 کیش آن ڈلیوری (Cash on Delivery)
                  </label>

                  <label style={styles.radioLabel}>
                    <input 
                      type="radio" 
                      name="payment" 
                      value="JazzCash" 
                      checked={selectedPayment === 'JazzCash'} 
                      onChange={() => setSelectedPayment('JazzCash')} 
                    />
                    📱 جاز کیش (JazzCash)
                  </label>

                  <label style={styles.radioLabel}>
                    <input 
                      type="radio" 
                      name="payment" 
                      value="EasyPaisa" 
                      checked={selectedPayment === 'EasyPaisa'} 
                      onChange={() => setSelectedPayment('EasyPaisa')} 
                    />
                    🟢 ایزی پیسہ (EasyPaisa)
                  </label>
                </div>

                {selectedPayment !== 'COD' && (
                  <div style={styles.paymentAccountBox}>
                    <p style={{ margin: 0, fontWeight: 'bold' }}>اکاؤنٹ کی تفصیلات:</p>
                    <p style={{ margin: '5px 0' }}>اکاؤنٹ نمبر: <strong>0300-1234567</strong></p>
                    <p style={{ margin: 0 }}>عنوان: <strong>افضل ندیم</strong></p>
                  </div>
                )}

                <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                  <button onClick={() => setCheckoutStep('cart')} style={styles.backBtn}>
                    واپس کارٹ
                  </button>
                  <button onClick={handleFinalCheckout} style={styles.confirmBtn}>
                    آرڈر کنفرم کریں
                  </button>
                </div>
              </div>
            )}

            {/* آرڈر کی تصدیق اور شکریہ کا پیغام */}
            {checkoutStep === 'success' && (
              <div style={{ textAlign: 'center', padding: '20px 10px' }}>
                <h2 style={{ color: '#2e7d32', fontSize: '28px', margin: '0 0 10px 0' }}>🎉 شکریہ!</h2>
                <h3 style={{ color: '#1b5e20', margin: '0 0 15px 0' }}>آپ کی خریداری کا بہت شکریہ!</h3>
                <p style={{ fontSize: '15px', color: '#444', lineHeight: '1.6' }}>
                  آپ کا آرڈر موصول ہو چکا ہے۔ ہم جلد ہی آپ کی فراہم کردہ ایڈریس پر دوا بھیج دیں گے۔
                </p>
                <div style={styles.successBadge}>
                  طریقہ ادائیگی: {selectedPayment === 'COD' ? 'کیش آن ڈلیوری' : selectedPayment}
                </div>
                <button 
                  onClick={() => { setCart([]); setCheckoutStep('cart'); setActiveTab('home'); }} 
                  style={styles.actionBtn}
                >
                  مزید خریداری کریں 🏠
                </button>
              </div>
            )}
          </div>
        )}

        {/* 5. ایڈمن ڈیش بورڈ (ADMIN) */}
        {activeTab === 'admin' && (
          <div style={styles.adminMenuPanel}>
            <h4 style={styles.adminTitle}>مصنوعات کا انتظام (Admin Dashboard)</h4>
            <div style={styles.adminButtonsGroup}>
              <button 
                onClick={() => setAdminTab('add')} 
                style={{ ...styles.adminBtn, ...styles.addBtn }}
              >
                ➕ Add / Edit Product (پروڈکٹ شامل یا ترمیم کریں)
              </button>
              <button 
                onClick={() => setAdminTab('manage')} 
                style={{ ...styles.adminBtn, ...styles.manageBtn }}
              >
                📋 Manage List (تمام 30+ پروڈکٹس دیکھیں)
              </button>
            </div>

            {/* پروڈکٹ فارم */}
            {adminTab === 'add' && (
              <form onSubmit={handleSaveProduct} style={styles.form}>
                <h5 style={{ margin: '10px 0', color: '#1b5e20' }}>
                  {editingId ? 'پروڈکٹ میں ترمیم کریں' : 'نئی پروڈکٹ شامل کریں'}
                </h5>
                
                <input 
                  type="text" 
                  placeholder="مصنوعات کا اردو نام" 
                  value={formData.nameUrdu} 
                  onChange={(e) => setFormData({...formData, nameUrdu: e.target.value})} 
                  style={styles.input}
                />
                
                <input 
                  type="text" 
                  placeholder="English Name" 
                  value={formData.nameEng} 
                  onChange={(e) => setFormData({...formData, nameEng: e.target.value})} 
                  style={styles.input}
                />

                <textarea 
                  placeholder="تفصیل (پروڈکٹ کے فوائد)" 
                  value={formData.desc} 
                  onChange={(e) => setFormData({...formData, desc: e.target.value})} 
                  style={{ ...styles.input, height: '50px' }}
                />

                <input 
                  type="text" 
                  placeholder="Image URL (تصویر کا لنک)" 
                  value={formData.img} 
                  onChange={(e) => setFormData({...formData, img: e.target.value})} 
                  style={styles.input}
                />

                {/* وزن سلیکشن 100g, 250g, 500g, 1kg */}
                <select 
                  value={formData.weight} 
                  onChange={(e) => setFormData({...formData, weight: e.target.value})} 
                  style={styles.input}
                >
                  <option value="100 گرام">100 گرام</option>
                  <option value="250 گرام">250 گرام</option>
                  <option value="500 گرام">500 گرام</option>
                  <option value="1 کلو">1 کلو</option>
                </select>

                <input 
                  type="number" 
                  placeholder="قیمت (روپے)" 
                  value={formData.price} 
                  onChange={(e) => setFormData({...formData, price: e.target.value})} 
                  style={styles.input}
                />

                <button type="submit" style={styles.saveBtn}>
                  {editingId ? 'اپ ڈیٹ کریں' : '+ مصنوعات شامل کریں'}
                </button>
              </form>
            )}

            {/* پروڈکٹس لسٹ اور ڈیلیٹ/ایڈٹ */}
            {adminTab === 'manage' && (
              <div style={{ marginTop: '10px' }}>
                <h5>کل مصنوعات: {products.length}</h5>
                <ul style={styles.list}>
                  {products.map(p => (
                    <li key={p.id} style={styles.listItem}>
                      <div>
                        <strong>{p.nameUrdu}</strong> ({p.weight})
                        <br />
                        <span style={{ fontSize: '12px', color: '#666' }}>{p.price} Rs</span>
                      </div>
                      <div style={{ display: 'flex', gap: '5px' }}>
                        <button onClick={() => startEdit(p)} style={styles.editBtn}>ایڈٹ</button>
                        <button onClick={() => handleRemoveProduct(p.id)} style={styles.deleteBtn}>حذف</button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

// تمام ڈیزائن اسٹائلز
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '15px',
    maxWidth: '480px',
    margin: '0 auto',
    fontFamily: 'sans-serif',
    direction: 'rtl',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh'
  },
  headerTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: '15px'
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
    fontSize: '15px',
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
    gap: '8px',
    width: '100%',
    direction: 'ltr'
  },
  btn: {
    padding: '8px 14px',
    borderRadius: '20px',
    fontWeight: 'bold',
    fontSize: '13px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: 'none',
    boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
  },
  btnLight: {
    backgroundColor: '#f1f8e9',
    color: '#1b5e20'
  },
  btnDark: {
    backgroundColor: '#1b5e20',
    color: '#ffffff'
  },
  btnActive: {
    backgroundColor: '#004d40',
    color: '#ffffff',
    outline: '2px solid #2e7d32'
  },
  fullWidthBtn: {
    minWidth: '120px'
  },
  contentArea: {
    width: '100%',
    marginTop: '15px'
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '12px',
    border: '1px solid #e0e0e0',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
  },
  prodGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  productCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: '#fafafa',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #eee'
  },
  prodImg: {
    width: '70px',
    height: '70px',
    borderRadius: '6px',
    objectFit: 'cover',
    border: '1px solid #ddd'
  },
  subText: {
    fontSize: '12px',
    color: '#666',
    margin: '2px 0'
  },
  badge: {
    backgroundColor: '#e8f5e9',
    color: '#2e7d32',
    padding: '2px 6px',
    borderRadius: '4px',
    fontWeight: 'bold'
  },
  price: {
    color: '#2e7d32',
    fontWeight: 'bold',
    margin: '4px 0 0 0'
  },
  buyBtn: {
    padding: '8px 12px',
    backgroundColor: '#2e7d32',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: 'bold'
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid #eee'
  },
  checkoutBtn: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#1b5e20',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  paymentOptions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    margin: '15px 0'
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderRadius: '6px',
    border: '1px solid #ddd',
    cursor: 'pointer'
  },
  paymentAccountBox: {
    backgroundColor: '#e8f5e9',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #c8e6c9',
    fontSize: '13px'
  },
  backBtn: {
    flex: 1,
    padding: '10px',
    backgroundColor: '#757575',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  confirmBtn: {
    flex: 2,
    padding: '10px',
    backgroundColor: '#2e7d32',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  successBadge: {
    backgroundColor: '#e8f5e9',
    color: '#1b5e20',
    padding: '8px',
    borderRadius: '6px',
    margin: '15px 0',
    fontWeight: 'bold'
  },
  actionBtn: {
    padding: '10px 20px',
    backgroundColor: '#1b5e20',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  whatsappBtn: {
    display: 'inline-block',
    marginTop: '10px',
    padding: '10px 15px',
    backgroundColor: '#25D366',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold'
  },
  adminMenuPanel: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    border: '1px solid #e0e0e0',
    boxSizing: 'border-box'
  },
  adminTitle: {
    margin: '0 0 10px 0',
    color: '#1b5e20',
    textAlign: 'center'
  },
  adminButtonsGroup: {
    display: 'flex',
    gap: '8px'
  },
  adminBtn: {
    flex: 1,
    padding: '8px',
    borderRadius: '6px',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '12px',
    cursor: 'pointer'
  },
  addBtn: {
    backgroundColor: '#e8f5e9',
    color: '#2e7d32'
  },
  manageBtn: {
    backgroundColor: '#e3f2fd',
    color: '#1565c0'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginTop: '10px'
  },
  input: {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px'
  },
  saveBtn: {
    padding: '10px',
    backgroundColor: '#2b5e29',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: '10px 0'
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 0',
    borderBottom: '1px solid #eee'
  },
  editBtn: {
    padding: '4px 8px',
    backgroundColor: '#ffb300',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
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
