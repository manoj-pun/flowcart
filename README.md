# Flowcart
An assignment built with Next.js, TypeScript, Tailwind CSS, GSAP, Zustand, and TanStack Query.

## Features

- Product listing and product detail pages
- Featured products section
- Shopping cart
- Wishlist
- Quick View
- Animated mobile menu
- FAQ accordion
- Product card hover animations
- Responsive design
- TanStack Query for product fetching
- Zustand for client-side state management

---
## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- GSAP
- Zustand
- TanStack Query
- Lucide React

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/manoj-pun/flowcart.git
cd flowcart
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

---
## GSAP Usage
GSAP is used to add subtle animations and improve the overall interaction experience.
### Hero
File: `components/home/Hero.tsx` <br>
The hero section uses GSAP to animate the text and hero image when the page loads. <br>
The text elements enter sequentially, followed by the hero image.

### Featured Products
File: `components/home/FeaturedProducts.tsx` <br>
GSAP is used to reveal product cards as the featured products section enters the viewport.<br>
The cards appear with a small vertical movement and opacity transition.

### Product Cards
File: `components/home/ProductCard.tsx` <br>
GSAP is used for hover interactions:
- Image scale
- Shadow
- Overlay opacity
- Quick View button movement

### Mobile Menu
File: `components/layout/MobileMenu.tsx` <br>
GSAP controls the mobile navigation panel's slide-in and slide-out animation.

### FAQ
File: `components/home/FAQ.tsx` <br>
GSAP is used to animate the FAQ content when an item is expanded or collapsed.

---
## TanStack Query Usage
TanStack Query is used for fetching product data from the application's API.

### Product API
File: app/api/products/route.ts <br>
The API exposes the product data through: <br>
GET /api/products <br>
The endpoint returns the products as JSON.

### API function
File: lib/api.ts <br>
The getProducts() function fetches product data from: <br>
`/api/products`

### Query hook
`hooks/useProducts.ts` <br>

The useProducts() hook uses TanStack Query's useQuery() to manage the product request.<br>
Products page <br>
      ↓ <br>
useProducts() <br>
      ↓ <br>
TanStack Query <br>
      ↓ <br>
getProducts() <br>
      ↓ <br>
/api/products <br>
      ↓ <br>
products.ts <br>

TanStack Query handles the request state, loading state, and error state of the product data.<br>
The full products page uses this query to display the available products.<br>

---

## State Management
Zustand is used for client-side application state. <br>
File: `store/useStore.ts` <br>
The store manages: <br>
### Cart
- Products added to the cart
- Product quantities
- Removing products
- Cart updates

### Wishlist
- Adding/removing products
- Tracking wishlisted products

### Quick View
- Currently selected product
- Opening the Quick View modal
- Closing the Quick View modal

### Mobile Menu
- Whether the mobile menu is open
- Opening and closing the mobile menu

This allows shared state to be accessed by components such as: <br>

Navbar <br>
ProductCard <br>
QuickView <br>
Cart <br>
Wishlist <br>
MobileMenu <br>
ProductActions <br>

without passing state through multiple levels of props.

---
## One Design Decision
Reusable Product Card <br>
One design decision I'm particularly proud of is making the ProductCard a reusable component. <br>

File: `components/home/ProductCard.tsx` <br>
The component accepts a product through props:<br>
```<ProductCard product={product} />``` <br>
This allows the same component to be reused across different sections of the application, including:<br>
- Featured products
- Products listing
- Wishlist <br>
The product data is separated from the UI, which keeps the components easier to maintain and reuse.

---

## One Improvement
With more time, I would connect the product catalog and checkout flow to a real backend and database instead of using static product data.<br>
This would allow the application to support:<br>
- Real product inventory
- Persistent carts and wishlists
- User accounts
- Product management
- Real checkout and order processing

---

## Folder Structure
```
.
├── AGENTS.md
├── app
│   ├── about
│   │   └── page.tsx
│   ├── api
│   │   └── products
│   ├── cart
│   │   └── page.tsx
│   ├── checkout
│   │   └── page.tsx
│   ├── dashboard
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── products
│   │   ├── [id]
│   │   └── page.tsx
│   ├── stores
│   │   └── page.tsx
│   └── wishlist
│       └── page.tsx
├── CLAUDE.md
├── components
│   ├── home
│   │   ├── FAQ.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── Hero.tsx
│   │   ├── ProductCard.tsx
│   │   ├── PromoBanner.tsx
│   │   └── QuickView.tsx
│   ├── layout
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Navbar.tsx
│   ├── product
│   │   └── ProductActions.tsx
│   └── providers
│       └── QueryProvider.tsx
├── data
│   ├── dashboard.ts
│   ├── faqs.ts
│   ├── featuredproducts.ts
│   ├── products.ts
│   └── stores.ts
├── eslint.config.mjs
├── hooks
│   └── useProducts.ts
├── lib
│   └── api.ts
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── banner.jpg
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── products
│   │   ├── beige.webp
│   │   ├── courtside.webp
│   │   ├── navy.webp
│   │   ├── phantom.webp
│   │   └── shirt.webp
│   ├── shirt-front.webp
│   ├── vercel.svg
│   └── window.svg
├── README.md
├── store
│   └── useStore.ts
├── tsconfig.json
└── types
    └── product.ts
```

---

## Dashboard
You can find the mock dashboard at: <br>
https://flowcart-zeta.vercel.app/dashboard

---

The project is live at:
https://flowcart-zeta.vercel.app
