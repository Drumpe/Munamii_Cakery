import ProductCard from "../components/ProductCard";
import "../style/Style.css";
import productsData from "../data/products.json";

const cupcakes = productsData.cupcakes;
const weddingCakes = productsData.weddingCakes;

function Products({ onAddToCart }) {
  return (
    <main className="products-page">
      <h1>Our Products</h1>
      <section>
        <h2>Cupcakes</h2>
        <div className="product-grid">
          {cupcakes.map((cupcake, idx) => (
            <ProductCard key={idx} {...cupcake} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>
      <section>
        <h2>Wedding Cakes</h2>
        <div className="product-grid">
          {weddingCakes.map((cake, idx) => (
            <ProductCard key={idx} {...cake} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Products;