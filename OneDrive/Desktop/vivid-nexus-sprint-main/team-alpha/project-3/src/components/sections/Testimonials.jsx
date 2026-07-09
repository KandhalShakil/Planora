import './Testimonials.css'

const testimonials = [
  {
    name: 'Ayesha Khan',
    rating: 5,
    text: 'The layout makes browsing feel effortless, and the deals are easy to spot. Ordering daily essentials is much faster now.',
    initials: 'AK',
  },
  {
    name: 'Ryan Patel',
    rating: 5,
    text: 'The product cards are clear and clean, and the whole shopping flow feels polished from the homepage onward.',
    initials: 'RP',
  },
  {
    name: 'Maya Chen',
    rating: 5,
    text: 'I like the calm color palette and the organized sections. It feels premium without being overwhelming.',
    initials: 'MC',
  },
  {
    name: 'Noah Wilson',
    rating: 5,
    text: 'On mobile everything stacks neatly, and the buttons are easy to tap. The experience feels complete and modern.',
    initials: 'NW',
  },
]

function StarRating() {
  return (
    <div className="testimonial-rating" aria-label="5 out of 5 stars">
      {'★★★★★'}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="section-heading">
        <p className="section-kicker">Customer reviews</p>
        <h2 id="testimonials-title">Trusted by shoppers who want fast, calm, and easy buying</h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="testimonial-card">
            <div className="testimonial-avatar" aria-hidden="true">
              {testimonial.initials}
            </div>
            <div className="testimonial-copy">
              <div className="testimonial-header">
                <h3>{testimonial.name}</h3>
                <StarRating />
              </div>
              <p>{testimonial.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
