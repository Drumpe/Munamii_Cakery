# Munamii Cakery

A responsive website for Munamii Cakery, built with React and Vite.

## Features

- Fully responsive design for mobile and desktop
- Four main pages: Home, About, Products, Contact
- Product page with Cupcakes and Wedding Cakes (each with images, titles, and prices)
- Hamburger menu for easy navigation on mobile devices
- Consistent header and footer across all pages
- Footer links to Instagram, Facebook, and email contact

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

## Project Structure

```
public/
  images/           # All product and logo images
src/
  components/       # Reusable React components (Header, Footer, ProductCard)
  pages/            # Page components (Home, About, Products, Contact)
  style/Style.css   # Main stylesheet
  App.jsx           # Main app component with routing
  index.jsx         # Entry point
index.html          # HTML template
```

## Customization

- Update images in `public/images/` as needed.
- Edit product data in [`src/pages/Products.jsx`](src/pages/Products.jsx).
- Update contact information and social links in [`src/components/Footer.jsx`](src/components/Footer.jsx) and [`src/pages/Contact.jsx`](src/pages/Contact.jsx).

## License

This project is for educational and demonstration purposes.