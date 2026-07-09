import { useState } from 'react'
import './Sidebar.css'

const navigationItems = [
  {
    id: 'start-shopping',
    icon: '🛍️',
    title: 'Start Shopping',
    description: 'Browse the latest essentials and featured picks.',
  },
  {
    id: 'food-beverage',
    icon: '🥗',
    title: 'Food & Beverage',
    description: 'Fresh, pantry, snacks, and daily grocery staples.',
  },
  {
    id: 'medical-care',
    icon: '💊',
    title: 'Medical Care',
    description: 'Wellness, first aid, and health support items.',
  },
  {
    id: 'skincare-relax',
    icon: '🧴',
    title: 'Skincare & Relax',
    description: 'Self-care, spa comforts, and beauty basics.',
  },
  {
    id: 'luxury-item',
    icon: '✨',
    title: 'Luxury Item',
    description: 'Premium choices for elevated everyday living.',
  },
  {
    id: 'electronics',
    icon: '📱',
    title: 'Electronics',
    description: 'Smart gadgets, accessories, and tech essentials.',
  },
]

const sectionIds = {
  'start-shopping': 'products-section',
  'food-beverage': 'categories-section',
  'medical-care': 'categories-section',
  'skincare-relax': 'categories-section',
  'luxury-item': 'categories-section',
  electronics: 'categories-section',
}

export default function Sidebar() {
  const [activeId, setActiveId] = useState(navigationItems[0].id)

  const handleNavigate = (targetId) => {
    const section = document.getElementById(sectionIds[targetId])

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveId(targetId)
    }
  }

  return (
    <aside className="app-sidebar">
      <div className="sidebar-inner">
        <div className="sidebar-header">
          <p className="sidebar-kicker">ShopEase</p>
          <h2>The Solution to Your Daily Needs</h2>
          <p className="sidebar-subtitle">
            Curated categories, smart shopping, and everyday convenience in one place.
          </p>
        </div>

        <nav className="sidebar-nav" aria-label="Product categories">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`sidebar-card${activeId === item.id ? ' is-active' : ''}`}
              onClick={() => handleNavigate(item.id)}
              aria-current={activeId === item.id ? 'true' : undefined}
            >
              <span className="sidebar-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span className="sidebar-copy">
                <span className="sidebar-title">{item.title}</span>
                <span className="sidebar-description">{item.description}</span>
              </span>
            </button>
          ))}
        </nav>

        <div className="sidebar-help">
          <p className="sidebar-help-title">Need Help?</p>
          <a href="mailto:help@shopease.com" className="sidebar-help-link">
            Customer Support
          </a>
          <a href="tel:+15552402040" className="sidebar-help-link">
            Contact Us
          </a>
        </div>
      </div>
    </aside>
  )
}
