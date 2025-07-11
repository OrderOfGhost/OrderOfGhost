const { useState, useEffect, useRef } = React;

function App() {
  const [modalProduct, setModalProduct] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  const homeRef = useRef(null);
  const productsRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);

  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);
  const layer4Ref = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const sections = [
        { id: 'home', ref: homeRef },
        { id: 'products', ref: productsRef },
        { id: 'pricing', ref: pricingRef },
        { id: 'contact', ref: contactRef },
      ];
      let current = '';
      sections.forEach(({ id, ref }) => {
        if (ref.current) {
          const sectionTop = ref.current.offsetTop - 120;
          if (window.scrollY >= sectionTop) {
            current = id;
          }
        }
      });
      setActiveSection(current);

      const scrollY = window.scrollY;
      if (layer2Ref.current) layer2Ref.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      if (layer3Ref.current) layer3Ref.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      if (layer4Ref.current) layer4Ref.current.style.transform = `translateY(${scrollY * 0.7}px)`;
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="logo">Order Of Ghost Shop</div>
        <nav className="nav-links" id="nav-links">
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>
            <span className="icon">🏠</span><span className="label">Trang</span>
          </a>
          <a href="#products" className={activeSection === 'products' ? 'active' : ''}>
            <span className="icon">🎁</span><span className="label">Sản phẩm</span>
          </a>
          <a href="#pricing" className={activeSection === 'pricing' ? 'active' : ''}>
            <span className="icon">💰</span><span className="label">Giá</span>
          </a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
            <span className="icon">📩</span><span className="label">Liên hệ</span>
          </a>
        </nav>
      </header>

      <section id="home" ref={homeRef} className="section welcome">
        <div className="parallax layer1"></div>
        <div className="parallax layer2" ref={layer2Ref}></div>
        <div className="parallax layer3" ref={layer3Ref}></div>
        <div className="parallax layer4" ref={layer4Ref}></div>
        <div className="welcome-content">
          <h1>Order of Ghost</h1>
          <h4>Shop tài khoản bản quyền</h4>
          <p>ChatGPT, Netflix, Spotify, YouTube Premium...</p>
        </div>
      </section>

      <section id="products" ref={productsRef} className="section">
        <h2>Sản phẩm nổi bật</h2>
        <div className="product-grid">
          <div className="product-card">
            <h3>ChatGPT Plus</h3>
            <p>Truy cập AI mạnh mẽ</p>
            <button onClick={() => setModalProduct('ChatGPT Plus – 450K/tháng')}>Mua ngay</button>
          </div>
          <div className="product-card">
            <h3>YouTube Premium</h3>
            <p>Không quảng cáo, tải offline</p>
            <button onClick={() => setModalProduct('YouTube Premium – 180K/6 tháng')}>Mua ngay</button>
          </div>
          <div className="product-card">
            <h3>Spotify Premium</h3>
            <p>Nghe nhạc không giới hạn</p>
            <button onClick={() => setModalProduct('Spotify Premium – 350K/năm')}>Mua ngay</button>
          </div>
          <div className="product-card">
            <h3>Netflix</h3>
            <p>Kho phim cá nhân hóa</p>
            <button onClick={() => setModalProduct('Netflix – 75K/tháng')}>Mua ngay</button>
          </div>
        </div>
      </section>

      <section id="pricing" ref={pricingRef} className="section secondary">
        <h2>Bảng giá tổng hợp</h2>
        <ul>
          <li>🔹 ChatGPT Plus – 450K / tháng</li>
          <li>🔹 YouTube Premium – 180K / 6 tháng | 300K / 1 năm</li>
          <li>🔹 Netflix – 75K / tháng</li>
          <li>🔹 Spotify Premium – 350K / năm</li>
          <li>🔹 Super Duolingo – 250K / năm</li>
          <li>🔹 CapCut Pro – 750K / năm</li>
        </ul>
      </section>

      <section id="contact" ref={contactRef} className="section">
        <h2>Liên hệ đặt hàng</h2>
        <p>Inbox fanpage hoặc Zalo để được tư vấn nhanh nhất.</p>
        <a href="https://zalo.me" className="contact-button">Liên hệ ngay</a>
      </section>

      <footer>
        © 2025 Order of Ghost – Shop bán tài khoản bản quyền
      </footer>

      {modalProduct && (
        <div id="modal" className="modal" onClick={(e) => e.target.id === 'modal' && setModalProduct(null)}>
          <div className="modal-content">
            <span className="close" onClick={() => setModalProduct(null)}>&times;</span>
            <h3>Xác nhận mua hàng</h3>
            <p id="product-name">{modalProduct}</p>
            <a href="https://zalo.me" className="contact-button">Inbox Zalo</a>
          </div>
        </div>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
