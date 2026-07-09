const createProductImage = (background, foreground, shape) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 260" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${background[0]}" />
          <stop offset="100%" stop-color="${background[1]}" />
        </linearGradient>
        <linearGradient id="fg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${foreground[0]}" />
          <stop offset="100%" stop-color="${foreground[1]}" />
        </linearGradient>
      </defs>
      <rect width="320" height="260" rx="34" fill="url(#bg)" />
      <ellipse cx="160" cy="216" rx="94" ry="18" fill="rgba(47,72,88,0.08)" />
      ${shape}
    </svg>
  `.replace(/\s+/g, ' ').trim()

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

export const products = [
  {
    id: 1,
    name: 'Herbal Cleanser Duo',
    rating: 4.9,
    originalPrice: 28.0,
    discountedPrice: 19.9,
    badge: 'Best Seller',
    image: createProductImage(
      ['#eaf6f5', '#ddefea'],
      ['#7fb8b4', '#5e9f99'],
      `
        <rect x="94" y="54" width="132" height="150" rx="28" fill="url(#fg)" />
        <rect x="112" y="32" width="96" height="42" rx="18" fill="#ffffff" opacity="0.95" />
        <circle cx="160" cy="128" r="30" fill="#ffffff" opacity="0.88" />
      `,
    ),
  },
  {
    id: 2,
    name: 'Fresh Market Box',
    rating: 4.8,
    originalPrice: 34.5,
    discountedPrice: 26.25,
    badge: 'New',
    image: createProductImage(
      ['#fff8ef', '#f4e6d8'],
      ['#d3a16e', '#b97a4a'],
      `
        <rect x="78" y="78" width="164" height="110" rx="24" fill="url(#fg)" />
        <rect x="92" y="52" width="136" height="40" rx="18" fill="#ffffff" opacity="0.95" />
        <rect x="112" y="98" width="96" height="42" rx="14" fill="#fff8ef" opacity="0.9" />
      `,
    ),
  },
  {
    id: 3,
    name: 'Soft Skin Ritual Set',
    rating: 4.7,
    originalPrice: 42.0,
    discountedPrice: 31.2,
    badge: 'Limited',
    image: createProductImage(
      ['#f7f3fb', '#ece3f6'],
      ['#b18ad8', '#8f64c2'],
      `
        <rect x="86" y="66" width="64" height="132" rx="22" fill="url(#fg)" />
        <rect x="160" y="52" width="72" height="144" rx="26" fill="#ffffff" opacity="0.95" />
        <circle cx="197" cy="122" r="28" fill="#d9c7ef" opacity="0.8" />
      `,
    ),
  },
  {
    id: 4,
    name: 'Premium Aroma Diffuser',
    rating: 4.9,
    originalPrice: 56.0,
    discountedPrice: 44.8,
    badge: 'Luxury',
    image: createProductImage(
      ['#eef6f4', '#e1efea'],
      ['#a9bdb8', '#7fb8b4'],
      `
        <rect x="110" y="70" width="100" height="112" rx="34" fill="url(#fg)" />
        <rect x="92" y="182" width="136" height="24" rx="12" fill="#ffffff" opacity="0.95" />
        <path d="M160 34 C176 56 182 74 182 92 C182 110 170 122 160 122 C150 122 138 110 138 92 C138 74 144 56 160 34Z" fill="#ffffff" opacity="0.88" />
      `,
    ),
  },
  {
    id: 5,
    name: 'Compact Smart Earbuds',
    rating: 4.6,
    originalPrice: 39.99,
    discountedPrice: 29.99,
    badge: 'Hot Deal',
    image: createProductImage(
      ['#f1f7fb', '#e0eef8'],
      ['#78a9d3', '#4d7fb0'],
      `
        <rect x="70" y="58" width="180" height="144" rx="32" fill="url(#fg)" />
        <rect x="104" y="90" width="42" height="74" rx="18" fill="#ffffff" opacity="0.9" />
        <rect x="174" y="90" width="42" height="74" rx="18" fill="#ffffff" opacity="0.9" />
        <rect x="126" y="152" width="68" height="22" rx="11" fill="#ffffff" opacity="0.9" />
      `,
    ),
  },
  {
    id: 6,
    name: 'Daily Essentials Pack',
    rating: 4.8,
    originalPrice: 24.5,
    discountedPrice: 17.95,
    badge: 'Popular',
    image: createProductImage(
      ['#f8fbfa', '#ddefea'],
      ['#7fb8b4', '#9ccdc8'],
      `
        <rect x="84" y="60" width="74" height="132" rx="22" fill="url(#fg)" />
        <rect x="162" y="76" width="74" height="116" rx="22" fill="#ffffff" opacity="0.95" />
        <rect x="104" y="84" width="34" height="78" rx="12" fill="#ffffff" opacity="0.92" />
        <rect x="180" y="96" width="34" height="66" rx="12" fill="#ddefea" opacity="0.95" />
      `,
    ),
  },
]