import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Main">
      <a className="navbar-brand" href="#top" aria-label="ShopEase home">
        <span className="navbar-logo">ShopEase</span>
        <span className="navbar-tagline">Your daily needs, delivered</span>
      </a>

      <div className="navbar-search">
        <span className="navbar-search-icon" aria-hidden="true">
          🔍
        </span>
        <input type="search" placeholder="Search products..." />
      </div>

      <div className="navbar-actions">
        <a className="navbar-action-button" href="#products-section" aria-label="Cart">
          <span aria-hidden="true">🛒</span>
          <span>Cart</span>
        </a>
        <button type="button" className="navbar-action-button" aria-label="Profile">
          <span aria-hidden="true">👤</span>
          <span>Profile</span>
        </button>
        <button type="button" className="navbar-login">Login</button>
      </div>
    </nav>
  )
}
