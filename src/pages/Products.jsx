import ProductCard from "../components/ProductCard";
import "../style/Style.css";

const cupcakes = [
  { image: "/images/cupcake-1.png", title: "Pistachio Dream", price: "30 kr", ingredients: "Pistachio, flour, sugar, eggs, butter" },
  { image: "/images/cupcake-2.png", title: "Strawberry Bliss", price: "35 kr", ingredients: "Strawberry, flour, sugar, eggs, butter" },
  { image: "/images/cupcake-3.png", title: "Yellow Velvet", price: "35 kr", ingredients: "Vanilla, flour, sugar, eggs, butter" },
  { image: "/images/cupcake-4.png", title: "Peanut Butter Cup", price: "30 kr", ingredients: "Peanut butter, flour, sugar, eggs, butter" },
  { image: "/images/cupcake-5.png", title: "Caramel Crunch", price: "35 kr", ingredients: "Caramel, flour, sugar, eggs, butter" },
  { image: "/images/cupcake-6.png", title: "Raspberry Piccolo", price: "30 kr", ingredients: "Raspberry, flour, sugar, eggs, butter" },
  { image: "/images/cupcake-7.png", title: "Cookies & Cream", price: "35 kr", ingredients: "Cookies, cream, flour, sugar, eggs, butter" },
  { image: "/images/cupcake-8.png", title: "Chocolate Zest", price: "35 kr", ingredients: "Chocolate, flour, sugar, eggs, butter" },
  { image: "/images/cupcake-9.png", title: "Strawberry Swirl", price: "30 kr", ingredients: "Strawberry, flour, sugar, eggs, butter" },
];

const weddingCakes = [
  { image: "/images/weddingcake-1.png", title: "Classic White", price: "1200 kr", ingredients: "Vanilla, flour, sugar, eggs, butter" },
  { image: "/images/weddingcake-2.png", title: "Rustic Charm", price: "1500 kr", ingredients: "Chocolate, flour, sugar, eggs, butter" },
  { image: "/images/weddingcake-3.png", title: "White Fantasy", price: "1800 kr", ingredients: "Vanilla, cream, flour, sugar, eggs, butter" },
  { image: "/images/weddingcake-4.png", title: "Medieval Elegance", price: "2000 kr", ingredients: "Almond, flour, sugar, eggs, butter" },
  { image: "/images/weddingcake-5.png", title: "Vintage Lace", price: "1700 kr", ingredients: "Lemon, flour, sugar, eggs, butter" },
  { image: "/images/weddingcake-6.png", title: "Rosy Bliss", price: "1600 kr", ingredients: "Rose, flour, sugar, eggs, butter" },
  { image: "/images/weddingcake-7.png", title: "Blue Glam", price: "2100 kr", ingredients: "Blueberry, flour, sugar, eggs, butter" },
  { image: "/images/weddingcake-8.png", title: "Red Stripe", price: "1400 kr", ingredients: "Raspberry, flour, sugar, eggs, butter" },
  { image: "/images/weddingcake-9.png", title: "Egyptian Drip", price: "1900 kr", ingredients: "Dates, honey, flour, sugar, eggs, butter" },
];

function Products() {
  return (
    <main className="products-page">
      <h1>Our Products</h1>
      <section>
        <h2>Cupcakes</h2>
        <div className="product-grid">
          {cupcakes.map((cupcake, idx) => (
            <ProductCard key={idx} {...cupcake} />
          ))}
        </div>
      </section>
      <section>
        <h2>Wedding Cakes</h2>
        <div className="product-grid">
          {weddingCakes.map((cake, idx) => (
            <ProductCard key={idx} {...cake} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Products;