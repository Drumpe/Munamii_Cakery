import ProductCard from "../components/ProductCard";
import "../style/Style.css";

const cupcakes = [
  { image: "/images/cupcake-1.png", title: "Vanilla Dream", price: "$3.00" },
  { image: "/images/cupcake-2.png", title: "Chocolate Bliss", price: "$3.50" },
  { image: "/images/cupcake-3.png", title: "Red Velvet", price: "$3.50" },
  { image: "/images/cupcake-4.png", title: "Lemon Zest", price: "$3.00" },
  { image: "/images/cupcake-5.png", title: "Caramel Crunch", price: "$3.50" },
  { image: "/images/cupcake-6.png", title: "Strawberry Swirl", price: "$3.00" },
  { image: "/images/cupcake-7.png", title: "Cookies & Cream", price: "$3.50" },
  { image: "/images/cupcake-8.png", title: "Peanut Butter Cup", price: "$3.50" },
  { image: "/images/cupcake-9.png", title: "Mint Chocolate", price: "$3.00" },
];

const weddingCakes = [
  { image: "/images/weddingcake-1.png", title: "Classic White", price: "$120.00" },
  { image: "/images/weddingcake-2.png", title: "Rustic Charm", price: "$150.00" },
  { image: "/images/weddingcake-3.png", title: "Floral Fantasy", price: "$180.00" },
  { image: "/images/weddingcake-4.png", title: "Modern Elegance", price: "$200.00" },
  { image: "/images/weddingcake-5.png", title: "Vintage Lace", price: "$170.00" },
  { image: "/images/weddingcake-6.png", title: "Berry Bliss", price: "$160.00" },
  { image: "/images/weddingcake-7.png", title: "Golden Glam", price: "$210.00" },
  { image: "/images/weddingcake-8.png", title: "Naked Cake", price: "$140.00" },
  { image: "/images/weddingcake-9.png", title: "Chocolate Drip", price: "$190.00" },
];

function Products() {
  return (
    <main className="products-page">
      <h1>Our Products</h1>
      <section>
        <h2>Cupcakes</h2>
        <div className="product-grid">
          {cupcakes.slice(0, 8).map((cupcake, idx) => (
            <ProductCard key={idx} {...cupcake} />
          ))}
        </div>
      </section>
      <section>
        <h2>Wedding Cakes</h2>
        <div className="product-grid">
          {weddingCakes.slice(0, 8).map((cake, idx) => (
            <ProductCard key={idx} {...cake} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Products;