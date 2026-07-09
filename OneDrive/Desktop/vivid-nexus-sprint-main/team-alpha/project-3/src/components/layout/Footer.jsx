import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="footer-grid">
        <div className="footer-brand-block">
          <span className="footer-logo">ShopEase</span>
          <p className="footer-description">
            Everyday shopping made calm, modern, and dependable with a pastel ecommerce experience.
          </p>
        </div>

        <div className="footer-links-block">
          <h3>Quick Links</h3>
          <nav aria-label="Footer quick links">
            <a href="#top">Home</a>
            <a href="#categories-section">Categories</a>
            <a href="#products-section">Products</a>
            <a href="#promo-section">Offers</a>
          </nav>
        </div>

        <div className="footer-support-block">
          <h3>Customer Support</h3>
          <p>help@shopease.com</p>
          <p>+1 (555) 240-2040</p>
          <div className="footer-socials" aria-label="Social links">
            <span>f</span>
            <span>ig</span>
            <span>in</span>
            <span>x</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 ShopEase. All rights reserved.</p>
      </div>
    </footer>
  )
}
