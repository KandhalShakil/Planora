import './Categories.css'

const categories = [
  {
    icon: '🥗',
    title: 'Food & Beverage',
    description: 'Fresh pantry picks, snacks, and daily grocery essentials.',
  },
  {
    icon: '💊',
    title: 'Medical Care',
    description: 'Health, wellness, and home-care basics for every day.',
  },
  {
    icon: '🧴',
    title: 'Skincare & Relax',
    description: 'Self-care, calm routines, and skin-friendly essentials.',
  },
  {
    icon: '✨',
    title: 'Luxury Item',
    description: 'Premium picks for elevated lifestyle and gifting.',
  },
  {
    icon: '📱',
    title: 'Electronics',
    description: 'Smart gadgets, accessories, and compact tech helpers.',
  },
  {
    icon: '🛒',
    title: 'Daily Needs',
    description: 'Everything you reach for most often in one place.',
  },
]

export default function Categories() {
  return (
    <section className="categories-section" aria-labelledby="categories-title">
      <div className="section-heading">
        <p className="section-kicker">Shop by category</p>
        <h2 id="categories-title">Browse essentials with a clean, calm shopping flow</h2>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <a key={category.title} className="category-card" href="#products-section">
            <div className="category-icon" aria-hidden="true">
              {category.icon}
            </div>
            <div className="category-copy">
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
