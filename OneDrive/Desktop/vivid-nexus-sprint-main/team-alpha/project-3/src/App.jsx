import Sidebar from './components/layout/Sidebar'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Categories from './components/sections/Categories'
import Products from './components/sections/Products'
import PromoBanners from './components/sections/PromoBanners'
import Testimonials from './components/sections/Testimonials'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="content-shell">
        <section className="navbar-shell" id="top">
          <Navbar />
        </section>
        <div className="content-stack">
          <section className="content-panel content-panel--hero" id="hero-section">
            <Hero />
          </section>
          <section className="content-panel content-panel--categories" id="categories-section">
            <Categories />
          </section>
          <section className="content-panel content-panel--products" id="products-section">
            <Products />
          </section>
          <section className="content-panel content-panel--promo" id="promo-section">
            <PromoBanners />
          </section>
          <section className="content-panel content-panel--testimonials" id="testimonials-section">
            <Testimonials />
          </section>
          <section className="content-panel content-panel--footer" id="footer-section">
            <Footer />
          </section>
        </div>
      </main>
    </div>
  )
}
