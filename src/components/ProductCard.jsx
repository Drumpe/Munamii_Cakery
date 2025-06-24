import "../style/Style.css";
import { useState } from "react";

function parseSEK(priceStr) {
  // Extract number from e.g. "30 kr"
  return parseFloat(priceStr.replace(/[^\d,\.]/g, '').replace(',', '.'));
}

function ProductCard({ image, title, price, ingredients, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (quantity < 1) return;
    onAddToCart({
      id: title,
      name: title,
      price: parseSEK(price),
      image,
      quantity,
      currency: "SEK"
    });
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="price">
        <span className="info-tooltip">
          <span className="info-icon" tabIndex={0}>ⓘ</span>
          <span className="tooltip-text">{ingredients}</span>
        </span>
        {price}
      </p>
      <input
        className="quantity-input"
        id={`quantity-${title}`}
        type="number"
        min="1"
        value={quantity}
        onChange={e => setQuantity(Number(e.target.value))}
      />
      <br />
      <button
        className="custom-add-to-cart"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;