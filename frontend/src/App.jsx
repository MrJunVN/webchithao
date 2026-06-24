import { useMemo, useState } from 'react'
import './App.css'
import wellnessShelf from './assets/wellness-shelf.png'

const facebookUrl = 'https://www.facebook.com/thuthao.truong.927'
const groupUrl = 'https://www.facebook.com/groups/819004024935136/'

const products = [
  {
    id: 1,
    name: 'DHA cho học sinh',
    category: 'Tập trung mỗi ngày',
    price: 690000,
    accent: 'green',
    summary:
      'Bổ sung DHA hằng ngày cho bé trong giai đoạn học tập, cần đọc, viết và ghi nhớ tốt hơn.',
    details: ['Tư vấn theo độ tuổi', 'Dễ thêm vào thói quen sáng', 'Có ưu đãi mua 4 tặng 1'],
  },
  {
    id: 2,
    name: 'Bộ 3 tuần hoàn não',
    category: 'Người lớn 30+',
    price: 780000,
    accent: 'blue',
    summary:
      'Kết hợp nhóm dưỡng chất hỗ trợ lưu thông vi mạch, giảm cảm giác mệt đầu và thiếu tập trung.',
    details: ['Có Ginkgo biloba', 'Phù hợp người làm việc căng', 'Dùng theo liệu trình'],
  },
  {
    id: 3,
    name: 'Dưỡng tỳ vị cho bé',
    category: 'Ăn ngon, hấp thu',
    price: 520000,
    accent: 'coral',
    summary:
      'Gợi ý cho bé biếng ăn, hấp thu kém hoặc cần một lịch chăm sóc tiêu hóa nhẹ nhàng hơn.',
    details: ['Hỏi kỹ tình trạng bé', 'Theo dõi sau 2 tuần', 'Không ép mua nếu chưa hợp'],
  },
  {
    id: 4,
    name: 'Gan khỏe, người nhẹ',
    category: 'Gan và chuyển hóa',
    price: 480000,
    accent: 'gold',
    summary:
      'Nhóm sản phẩm được khách trong group hỏi nhiều khi cần chăm sóc gan, nóng trong hoặc muốn chọn dạng viên dễ dùng.',
    details: ['Có lựa chọn dạng viên', 'Không thay thuốc điều trị', 'Tư vấn theo sinh hoạt'],
  },
  {
    id: 5,
    name: 'Hỗ trợ kiểm soát cân nặng',
    category: 'Không giảm cân thần tốc',
    price: 590000,
    accent: 'mint',
    summary:
      'Tập trung ổn định thói quen ăn uống, đường huyết và hạn chế tích mỡ theo hướng bền vững.',
    details: ['Không hứa giảm nhanh', 'Kèm checklist ăn uống', 'Cần kiên trì theo lịch'],
  },
  {
    id: 6,
    name: 'Canxi tuổi 8-12',
    category: 'Giai đoạn xương phát triển',
    price: 640000,
    accent: 'lavender',
    summary:
      'Gợi ý cho giai đoạn trẻ cần nhiều canxi để hỗ trợ phát triển chiều cao và nền xương chắc hơn.',
    details: ['Hỏi chiều cao, cân nặng', 'Tư vấn lịch dùng', 'Phối hợp vận động và ngủ đủ'],
  },
]

const communityTopics = [
  {
    title: 'Chăm sóc sức khỏe chủ động',
    text: 'Group chia sẻ kiến thức để khách hiểu nhu cầu cơ thể trước khi chọn sản phẩm.',
  },
  {
    title: 'Sản phẩm khoa học Việt Nam',
    text: 'Ưu tiên sản phẩm có nguồn gốc rõ, hoạt chất rõ và cách dùng dễ theo dõi.',
  },
  {
    title: 'Tư vấn theo tình trạng thật',
    text: 'Khách được hỏi tuổi, thói quen, mục tiêu và sản phẩm đang dùng trước khi chốt.',
  },
]

const bundles = [
  {
    title: 'Combo bé học tốt',
    note: 'DHA + canxi theo tuổi + lịch dùng 4 tuần + nhắc lịch tái tư vấn',
    price: 'Tư vấn theo tuổi',
  },
  {
    title: 'Combo ba mẹ 30+',
    note: 'Tuần hoàn não + xương khớp + hướng dẫn dùng theo buổi',
    price: 'Chọn theo tình trạng',
  },
  {
    title: 'Combo gan và chuyển hóa',
    note: 'Sản phẩm hỗ trợ gan dạng viên + checklist sinh hoạt nhẹ nhàng hơn',
    price: 'Inbox để lọc nhu cầu',
  },
]

const promises = [
  'Không bán theo kiểu thần thánh hóa sản phẩm',
  'Không cam kết 100%, không nói dùng là hết bệnh',
  'Tư vấn trước khi chốt, ai chưa phù hợp thì chưa cần mua',
  'Ưu tiên hoạt chất, hàm lượng và cách dùng rõ ràng',
]

const faqs = [
  {
    question: 'Sản phẩm trong group có thay thuốc điều trị không?',
    answer:
      'Không. Đây là nhóm sản phẩm hỗ trợ và bổ sung. Nếu đang điều trị bệnh, khách nên hỏi bác sĩ và gửi tình trạng thật để được tư vấn cẩn thận hơn.',
  },
  {
    question: 'Muốn mua thì làm sao?',
    answer:
      'Bấm nút inbox Facebook, gửi tuổi, nhu cầu, tình trạng hiện tại và sản phẩm đang quan tâm. Chị Thảo sẽ lọc nhu cầu trước khi chốt đơn.',
  },
  {
    question: 'Group dùng để làm gì?',
    answer:
      'Group “Yêu Sản Phẩm Khoa Học Việt Nam” là nơi gom bài chia sẻ, câu hỏi khách hàng và nội dung chăm sóc sức khỏe chủ động để khách đọc trước khi inbox.',
  },
]

function formatPrice(value) {
  return new Intl.NumberFormat('vi-VN').format(value) + 'đ'
}

function App() {
  const [cart, setCart] = useState([])

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  const selectedNames = useMemo(
    () => cart.map((item) => `${item.name} x${item.quantity}`).join(', '),
    [cart],
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

  const inboxMessage =
    selectedNames.length > 0
      ? `Chị Thảo ơi, em muốn tư vấn: ${selectedNames}`
      : 'Chị Thảo ơi, em muốn được tư vấn sản phẩm phù hợp.'

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Về đầu trang">
          <span>Thu Thảo</span>
          <strong>Wellness Shop</strong>
        </a>
        <nav className="topnav" aria-label="Điều hướng chính">
          <a href="#products">Sản phẩm</a>
          <a href="#community">Group</a>
          <a href="#bundles">Combo</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="nav-cta" href={facebookUrl} target="_blank" rel="noreferrer">
          Inbox Facebook
        </a>
      </header>

      <main id="home">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Từ group Yêu Sản Phẩm Khoa Học Việt Nam</p>
            <h1>Chọn sản phẩm bổ sung theo đúng nhu cầu, không chạy theo lời hứa thần tốc.</h1>
            <p className="hero-text">
              Website gom lại các nhóm sản phẩm chị Thảo hay tư vấn trên Facebook và trong group:
              DHA, canxi tuổi 8-12, dưỡng tỳ vị, tuần hoàn não, gan, cân nặng và xương khớp.
              Khách đọc nhanh hơn, chọn đúng hơn và inbox để được lọc nhu cầu trước khi mua.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#products">
                Xem sản phẩm
              </a>
              <a className="btn btn-secondary" href={groupUrl} target="_blank" rel="noreferrer">
                Vào group
              </a>
            </div>
          </div>
          <div className="hero-media" aria-label="Các sản phẩm bổ sung sức khỏe">
            <img src={wellnessShelf} alt="Kệ sản phẩm bổ sung sức khỏe" />
            <div className="floating-card">
              <span>Giỏ tư vấn</span>
              <strong>{cartCount} sản phẩm</strong>
              <p>{cartTotal > 0 ? formatPrice(cartTotal) : 'Chọn sản phẩm để hỏi thêm'}</p>
            </div>
          </div>
        </section>

        <section className="trust-band" id="consult">
          {promises.map((item) => (
            <article key={item}>
              <span aria-hidden="true">✓</span>
              <p>{item}</p>
            </article>
          ))}
        </section>

        <section className="section-block community-panel" id="community">
          <div>
            <p className="eyebrow">Cộng đồng 2,6K thành viên</p>
            <h2>Yêu Sản Phẩm Khoa Học Việt Nam</h2>
            <p className="section-copy">
              Đây là nhóm riêng tư do chị Thảo quản trị, tập trung vào chăm sóc sức khỏe chủ động,
              câu hỏi thực tế của khách và cách dùng sản phẩm rõ ràng hơn trước khi mua.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={groupUrl} target="_blank" rel="noreferrer">
                Mở group Facebook
              </a>
              <a className="btn btn-secondary" href={facebookUrl} target="_blank" rel="noreferrer">
                Nhắn chị Thảo
              </a>
            </div>
          </div>
          <div className="community-grid">
            {communityTopics.map((topic) => (
              <article key={topic.title}>
                <h3>{topic.title}</h3>
                <p>{topic.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="products">
          <div className="section-heading">
            <p className="eyebrow">Nhóm sản phẩm đang tư vấn</p>
            <h2>Khách chọn theo nhu cầu, chị Thảo lọc lại trước khi chốt.</h2>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className={`product-card ${product.accent}`} key={product.id}>
                <div className="product-topline">
                  <span>{product.category}</span>
                  <strong>{formatPrice(product.price)}</strong>
                </div>
                <div className="product-pack" aria-hidden="true">
                  <span>{product.name.split(' ')[0]}</span>
                </div>
                <h3>{product.name}</h3>
                <p>{product.summary}</p>
                <ul>
                  {product.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <button className="btn btn-card" type="button" onClick={() => addToCart(product)}>
                  Thêm vào giỏ tư vấn
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block split-section" id="bundles">
          <div>
            <p className="eyebrow">Combo dễ hỏi, dễ theo dõi</p>
            <h2>Không ép mua nhiều, chỉ gom đúng nhóm nhu cầu.</h2>
            <p className="section-copy">
              Các combo dưới đây là khung tư vấn. Khi khách inbox, chị Thảo vẫn
              hỏi tuổi, tình trạng, thói quen dùng và mục tiêu để chọn lại cho phù hợp.
            </p>
          </div>
          <div className="bundle-list">
            {bundles.map((bundle) => (
              <article className="bundle-card" key={bundle.title}>
                <span>{bundle.price}</span>
                <h3>{bundle.title}</h3>
                <p>{bundle.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block consult-panel">
          <div>
            <p className="eyebrow">Luồng chốt đơn hiện tại</p>
            <h2>Website giới thiệu rõ, Facebook dùng để tư vấn và chốt đơn.</h2>
          </div>
          <div className="checkout-box">
            <div>
              <span>1</span>
              <p>Khách chọn nhóm sản phẩm hoặc combo đang quan tâm.</p>
            </div>
            <div>
              <span>2</span>
              <p>Inbox Facebook kèm tuổi, nhu cầu và tình trạng hiện tại.</p>
            </div>
            <div>
              <span>3</span>
              <p>Chị Thảo tư vấn lại, xác nhận đơn và hướng dẫn dùng.</p>
            </div>
          </div>
          <a
            className="btn btn-primary wide-cta"
            href={`${facebookUrl}?sk=about`}
            target="_blank"
            rel="noreferrer"
          >
            Mở Facebook chị Thảo
          </a>
        </section>

        <section className="section-block faq-section" id="faq">
          <div className="section-heading">
            <p className="eyebrow">Câu hỏi thường gặp</p>
            <h2>Nói rõ trước để khách tin và hỏi đúng vấn đề.</h2>
          </div>
          <div className="faq-grid">
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
          <strong>Thu Thảo Wellness Shop</strong>
          <p>
            Sản phẩm bổ sung không thay thế thuốc chữa bệnh. Nội dung trên web
            dùng để tham khảo và cần tư vấn theo tình trạng từng người.
          </p>
        </div>
        <a
          className="btn btn-secondary"
          href={`${facebookUrl}?text=${encodeURIComponent(inboxMessage)}`}
          target="_blank"
          rel="noreferrer"
        >
          Gửi nhu cầu tư vấn
        </a>
      </footer>
    </div>
  )
}

export default App
