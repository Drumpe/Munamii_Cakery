import ProductCard from "../components/ProductCard";
import "../style/Style.css";

const cupcakes = [
  { image: "/images/cupcake-1.png", title: "Pistage Dream", price: "$3.00", ingredients: "Pistachio, flour, sugar, eggs, butter" },
  { image: "/images/cupcake-2.png", title: "Strawberry Bliss", price: "$3.50", ingredients: "Strawberry, flour, sugar, eggs, butter" },
  { image: "/images/cupcake-3.png", title: "Yellow Velvet", price: "$3.50", ingredients: "Vanilla, flour, sugar, eggs, butter" },
  { image: "/images/cupcake-4.png", title: "Peanut Butter Cup", price: "$3.00", ingredients: "Peanut butter, flour, sugar, eggs, butter" },
  { image: "/images/cupcake-5.png", title: "Caramel Crunch", price: "$3.50", ingredients: "Caramel, flour, sugar, eggs, butter" },
  { image: "/images/cupcake-6.png", title: "Raspberry Piccolo", price: "$3.00", ingredients: "Raspberry, flour, sugar, eggs, butter" },
  { image: "/images/cupcake-7.png", title: "Cookies & Cream", price: "$3.50", ingredients: "Cookies, cream, flour, sugar, eggs, butter" },
  { image: "/images/cupcake-8.png", title: "Chocolate Zest", price: "$3.50", ingredients: "Chocolate, flour, sugar, eggs, butter" },
  { image: "/images/cupcake-9.png", title: "Strawberry Swirl", price: "$3.00", ingredients: "Strawberry, flour, sugar, eggs, butter" },
];

const weddingCakes = [
  { image: "/images/weddingcake-1.png", title: "Classic White", price: "$120.00", ingredients: "Vanilla, flour, sugar, eggs, butter" },
  { image: "/images/weddingcake-2.png", title: "Rustic Charm", price: "$150.00", ingredients: "Chocolate, flour, sugar, eggs, butter" },
  { image: "/images/weddingcake-3.png", title: "White Fantasy", price: "$180.00", ingredients: "Vanilla, cream, flour, sugar, eggs, butter" },
  { image: "/images/weddingcake-4.png", title: "Medieval Elegance", price: "$200.00", ingredients: "Almond, flour, sugar, eggs, butter" },
  { image: "/images/weddingcake-5.png", title: "Vintage Lace", price: "$170.00", ingredients: "Lemon, flour, sugar, eggs, butter" },
  { image: "/images/weddingcake-6.png", title: "Rosy Bliss", price: "$160.00", ingredients: "Rose, flour, sugar, eggs, butter" },
  { image: "/images/weddingcake-7.png", title: "Blue Glam", price: "$210.00", ingredients: "Blueberry, flour, sugar, eggs, butter" },
  { image: "/images/weddingcake-8.png", title: "Red Stripe", price: "$140.00", ingredients: "Raspberry, flour, sugar, eggs, butter" },
  { image: "/images/weddingcake-9.png", title: "Egyptian Drip", price: "$190.00", ingredients: "Date, honey, flour, sugar, eggs, butter" },
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