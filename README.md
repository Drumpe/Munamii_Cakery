# Munamii Cakery

A responsive website for Munamii Cakery, built with React and Vite.

## 🌐 Live Demo

[View the live site on Netlify](https://munamii.netlify.app)

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [Tech Stack](#tech-stack)
- [License](#license)

---

## Features

- **Fully responsive design** for mobile and desktop
- Four main pages: Home, About, Products, Contact
- Product page with Cupcakes and Wedding Cakes (each with images, titles, and prices)
- Hamburger menu for easy navigation on mobile devices
- Consistent header and footer across all pages
- Footer links to Instagram, Facebook, and email contact
- **Stripe payment integration** for secure online payments
- Easy to customize with your own images and product data

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/munamii-cakery.git
   cd munamii-cakery
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Development Server

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site in your browser.

### Building for Production

```sh
npm run build
```

### Previewing the Production Build

```sh
npm run preview
```

---

## Project Structure

```
public/
  images/           # Product and logo images
src/
  components/       # Reusable React components (Header, Footer, ProductCard)
  pages/            # Page components (Home, About, Products, Contact)
  style/Style.css   # Main stylesheet
  App.jsx           # Main app component with routing
  index.jsx         # Entry point
index.html          # HTML template
```

---

## Customization

- Update images in `public/images/` as needed.
- Edit product data in [`src/pages/Products.jsx`](src/pages/Products.jsx).
- Update contact information and social links in [`src/components/Footer.jsx`](src/components/Footer.jsx) and [`src/pages/Contact.jsx`](src/pages/Contact.jsx).
- Change colors and styles in [`src/style/Style.css`](src/style/Style.css).
- **Stripe payment:** Configure your Stripe API keys and payment settings in the relevant payment component or environment variables.

---

## Deployment

This project is ready to be deployed on platforms like [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).

**Example (Netlify):**
1. Create a new project on Netlify and connect your repository.
2. Build command: `npm run build`
3. Publish directory: `dist`

---

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Stripe](https://stripe.com/) (for payments)
- [Netlify](https://www.netlify.com/) (for hosting)

---

## License

This project is made for educational purposes