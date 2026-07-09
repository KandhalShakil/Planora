import './Products.css'
import { useState } from 'react'
import { products } from '../../data/products'

function ProductCard({ product }) {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    setIsAdded(true)
    window.setTimeout(() => setIsAdded(false), 1400)
  }

  return (
    <article className="product-card">
      <div className="product-image-wrap" aria-hidden="true">
        <img className="product-image" src={product.image} alt="" loading="lazy" />
        <span className="product-badge">{product.badge}</span>
      </div>

      <div className="product-copy">
        <div className="product-header">
          <h3>{product.name}</h3>
          <span className="product-rating">★ {product.rating}</span>
        </div>

        <div className="product-pricing">
          <span className="product-price product-price--original">${product.originalPrice.toFixed(2)}</span>
          <span className="product-price product-price--discounted">${product.discountedPrice.toFixed(2)}</span>
        </div>

        <button type="button" className="product-button" onClick={handleAddToCart}>
          {isAdded ? 'Added' : 'Add to Cart'}
        </button>
      </div>
    </article>
  )
}

export default function Products() {
  return (
    <section className="products-section" aria-labelledby="products-title">
      <div className="section-heading">
        <p className="section-kicker">Featured products</p>
        <h2 id="products-title">Handpicked deals for your everyday shopping list</h2>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
