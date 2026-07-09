import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-badge">Up to 30% off this week</p>
        <h1 id="hero-title">Buy More, Save More</h1>
        <p className="hero-description">
          Discover everyday essentials, fresh picks, and premium products crafted to make
          daily shopping simpler, smarter, and more rewarding.
        </p>

        <div className="hero-actions">
          <a className="hero-button hero-button--primary" href="#products-section">
            Shop Now
          </a>
          <a className="hero-link" href="#categories-section">
            Explore Categories
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-visual-backdrop" />
        <div className="hero-card hero-card--large">
          <div className="hero-product hero-product--bottle" />
          <div className="hero-product hero-product--box" />
          <div className="hero-product hero-product--bag" />
          <div className="hero-price-tag">
            <span className="hero-price-tag-label">Today&apos;s deal</span>
            <strong>$24.90</strong>
          </div>
        </div>
        <div className="hero-card hero-card--small hero-card--top">
          <span className="hero-mini-icon">✨</span>
          <span>Fresh arrivals</span>
        </div>
        <div className="hero-card hero-card--small hero-card--bottom">
          <span className="hero-mini-icon">🚚</span>
          <span>Fast delivery</span>
        </div>
      </div>
    </section>
  )
}
