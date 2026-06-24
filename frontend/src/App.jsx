import { useState } from 'react'
import './App.css'

const products = [
  {
    id: 1,
    name: 'DHA Gold Mama',
    badge: 'Ban chay',
    price: 690000,
    summary: 'Ho tro bo sung DHA cho me bau va me sau sinh.',
    benefits: ['De uong moi ngay', 'Hop 30 vien', 'Phu hop lieu trinh 1 thang'],
  },
  {
    id: 2,
    name: 'Slim Balance Tea',
    badge: 'Tu van nhieu',
    price: 420000,
    summary: 'Tra thao moc ho tro giu dang va giam cam giac day bung.',
    benefits: ['Thao moc thanh', 'De ket hop an kieng', 'Goi 20 tui loc'],
  },
  {
    id: 3,
    name: 'Brain Circulation Plus',
    badge: 'Danh cho 30+',
    price: 780000,
    summary: 'Ho tro tuan hoan nao, giam cam giac met moi va kho tap trung.',
    benefits: ['Dung theo lieu trinh', 'Hop 60 vien', 'Phu hop nguoi lam viec cang thang'],
  },
]

const bundles = [
  {
    title: 'Combo me bau',
    price: '1.190.000d',
    items: 'DHA + vitamin tong hop + huong dan su dung 4 tuan',
  },
  {
    title: 'Combo dep dang',
    price: '760.000d',
    items: 'Tra thao moc + che do an uong + checklist uong nuoc',
  },
  {
    title: 'Combo cham soc bo me',
    price: '1.450.000d',
    items: 'San pham ho tro xuong khop + tuan hoan + lich theo doi',
  },
]

const highlights = [
  'Noi dung se duoc chuyen tu Facebook sang website de khach xem de hon',
  'Co the chot don tren web thay vi chi inbox Facebook',
  'San sang de noi cong thanh toan online o buoc tiep theo',
  'Co khu vuc chatbot de tu van, loc nhu cau va de lai so dien thoai',
]

const testimonials = [
  {
    name: 'Chi Hanh, Q.7',
    quote: 'Xem web de hon Facebook, tim dung san pham nhanh hon va dat combo cung gon.',
  },
  {
    name: 'Em Tram, Thu Duc',
    quote: 'Phan FAQ va cach dung rat huu ich, chat hoi la duoc tu van ngay.',
  },
  {
    name: 'Co Mai, Bien Hoa',
    quote: 'Dat hang nhanh, khong bi troi tin nhan nhu luc hoi qua Messenger.',
  },
]

const faqs = [
  {
    question: 'Website nay da thanh toan online chua?',
    answer:
      'Ban scaffold hien tai da co san khu vuc checkout va cart demo. Buoc tiep theo minh se noi cong thanh toan nhu VNPay, MoMo hoac ZaloPay.',
  },
  {
    question: 'Chatbot se tra loi duoc gi?',
    answer:
      'Chatbot co the tra loi FAQ, goi y san pham theo nhu cau, huong dan dat hang va thu thong tin khach de ban tu van tiep.',
  },
  {
    question: 'Noi dung Facebook dua vao website bang cach nao?',
    answer:
      'Minh se chon bai viet, feedback, anh san pham va cac cau hoi thuong gap de dua thanh noi dung co cau truc, de doc va de chot don hon.',
  },
]

function formatPrice(value) {
  return new Intl.NumberFormat('vi-VN').format(value) + 'd'
}

function App() {
  const [cart, setCart] = useState([])

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  function addToCart(product) {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...current, { ...product, quantity: 1 }]
    })
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <div>
          <p className="brand-kicker">Web Chi Thao</p>
          <strong className="brand-name">Thuc pham bo sung va cham soc gia dinh</strong>
        </div>
        <nav className="topnav">
          <a href="#products">San pham</a>
          <a href="#bundles">Combo</a>
          <a href="#faq">FAQ</a>
          <a href="#chatbot">Chatbot</a>
        </nav>
      </header>

      <main>
        <section className="hero-panel">
          <div className="hero-copy">
            <p className="eyebrow">Tu noi dung Facebook sang website ban hang chuyen nghiep</p>
            <h1>Khung website moi cho chi Thao de ban hang, cham soc khach va chot don ngay tren web.</h1>
            <p className="hero-text">
              Day la scaffold moi, khong lien quan VanThinh hay NTS. Muc tieu la
              bien noi dung tu Facebook thanh mot website gon, de tin, de chot
              don va san sang cho thanh toan online.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#products">
                Xem san pham mau
              </a>
              <a className="btn btn-secondary" href="#chatbot">
                Xem khu chatbot
              </a>
            </div>
            <ul className="hero-points">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="hero-card">
            <p className="mini-label">Gio hang demo</p>
            <div className="cart-metric">
              <strong>{cartCount}</strong>
              <span>san pham trong gio</span>
            </div>
            <div className="cart-metric">
              <strong>{formatPrice(cartTotal)}</strong>
              <span>tam tinh don hang</span>
            </div>
            <div className="checkout-preview">
              <p>Buoc checkout se noi tiep:</p>
              <ul>
                <li>Thong tin nguoi mua</li>
                <li>Dia chi giao hang</li>
                <li>Thanh toan online</li>
              </ul>
            </div>
          </aside>
        </section>

        <section className="section-grid" id="products">
          <div className="section-heading">
            <p className="eyebrow">San pham noi bat</p>
            <h2>Card san pham da san sang cho trang shop</h2>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <span className="product-badge">{product.badge}</span>
                <div className="product-visual">
                  <span>{product.name.slice(0, 1)}</span>
                </div>
                <h3>{product.name}</h3>
                <p>{product.summary}</p>
                <ul className="benefit-list">
                  {product.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
                <div className="product-footer">
                  <strong>{formatPrice(product.price)}</strong>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => addToCart(product)}
                  >
                    Them vao gio
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-grid accent-panel" id="bundles">
          <div className="section-heading">
            <p className="eyebrow">Combo de chot don nhanh</p>
            <h2>Khach tu Facebook rat hop dang mua theo combo</h2>
          </div>
          <div className="bundle-grid">
            {bundles.map((bundle) => (
              <article className="bundle-card" key={bundle.title}>
                <h3>{bundle.title}</h3>
                <strong>{bundle.price}</strong>
                <p>{bundle.items}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-grid split-layout">
          <div className="content-card">
            <p className="eyebrow">Social proof</p>
            <h2>Feedback se duoc tach tu bai dang Facebook</h2>
            <div className="quote-list">
              {testimonials.map((item) => (
                <blockquote className="quote-card" key={item.name}>
                  <p>"{item.quote}"</p>
                  <footer>{item.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>

          <div className="content-card" id="chatbot">
            <p className="eyebrow">Khu chatbot</p>
            <h2>Vi tri san sang de gan chatbot tu van khach hang</h2>
            <div className="chatbot-card">
              <div className="chat-row">
                <span className="bot">Bot</span>
                <p>Chi dang quan tam van de nao: me bau, giam can hay suc khoe 30+?</p>
              </div>
              <div className="chat-row user-row">
                <span className="user">Khach</span>
                <p>Minh muon tim san pham cho me bau.</p>
              </div>
              <div className="chat-row">
                <span className="bot">Bot</span>
                <p>Em goi y combo me bau va xin so dien thoai de chi Thao tu van them.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-grid" id="faq">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Nhung cau hoi de chot don se dua len website thay vi troi trong inbox</h2>
          </div>

          <div className="faq-list">
            {faqs.map((item) => (
              <article className="faq-card" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer-bar">
        <div>
          <strong>Scaffold website chi Thao</strong>
          <p>Buoc tiep theo: tach noi dung tu Facebook, them backend don hang, thanh toan online va chatbot that.</p>
        </div>
        <a className="btn btn-primary" href="#products">
          Tiep tuc xay dung
        </a>
      </footer>
    </div>
  )
}

export default App
