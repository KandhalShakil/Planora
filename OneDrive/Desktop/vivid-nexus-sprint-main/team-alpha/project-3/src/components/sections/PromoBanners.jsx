import './PromoBanners.css'

const promoBanners = [
  {
    badge: 'Seasonal',
    title: 'Annual Sports Gear Sale',
    description: 'Upgrade active days with performance-ready essentials made for every routine.',
    cta: 'Shop Sports Gear',
    variant: 'featured',
  },
  {
    badge: 'New Arrival',
    title: 'Latest Electronics Launch',
    description: 'Discover compact tech, smart accessories, and the newest everyday devices.',
    cta: 'Explore Electronics',
    variant: 'secondary',
  },
  {
    badge: 'Limited Time',
    title: 'Summer Special Offers',
    description: 'Seasonal picks and cooling favorites to refresh your daily essentials.',
    cta: 'View Summer Deals',
    variant: 'secondary',
  },
]

export default function PromoBanners() {
  return (
    <section className="promo-section" aria-labelledby="promo-title">
      <div className="section-heading">
        <p className="section-kicker">Special promotions</p>
        <h2 id="promo-title">Limited-time offers designed to spotlight the best deals</h2>
      </div>

      <div className="promo-grid">
        {promoBanners.map((banner) => (
          <article
            key={banner.title}
            className={`promo-card promo-card--${banner.variant}`}
          >
            <div className="promo-copy">
              <span className="promo-badge">{banner.badge}</span>
              <h3>{banner.title}</h3>
              <p>{banner.description}</p>
              <a
                className="promo-button"
                href={banner.title.includes('Sports') ? '#products-section' : '#categories-section'}
              >
                {banner.cta}
              </a>
            </div>

            <div className="promo-visual" aria-hidden="true">
              {banner.variant === 'featured' ? (
                <>
                  <div className="promo-visual-shape promo-visual-shape--circle" />
                  <div className="promo-visual-shape promo-visual-shape--card promo-visual-shape--tall" />
                  <div className="promo-visual-shape promo-visual-shape--card promo-visual-shape--short" />
                </>
              ) : banner.title.includes('Electronics') ? (
                <>
                  <div className="promo-visual-shape promo-visual-shape--screen" />
                  <div className="promo-visual-shape promo-visual-shape--chip" />
                  <div className="promo-visual-shape promo-visual-shape--dot" />
                </>
              ) : (
                <>
                  <div className="promo-visual-shape promo-visual-shape--sun" />
                  <div className="promo-visual-shape promo-visual-shape--wave" />
                  <div className="promo-visual-shape promo-visual-shape--leaf" />
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
