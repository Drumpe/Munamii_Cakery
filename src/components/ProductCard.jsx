import "../style/Style.css";
import { useState } from "react";
import { parseSEK } from "../utils";

function ProductCard({ image, title, price, ingredients, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (quantity < 1 || isNaN(quantity)) return;
    onAddToCart({
      id: title,
      name: title,
      price: parseSEK(price),
      image,
      quantity,
      currency: "SEK"
    });
    setQuantity(1); // Reset after adding
  };

  const handleQuantityChange = (e) => {
    const val = Math.max(1, Number(e.target.value));
    setQuantity(val);
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
      <div className="product-qty-controls" >
        <button
          className="custom-button qty-btn"
          type="button"
          onClick={() => setQuantity(q => Math.max(1, q - 1))}
          disabled={quantity <= 1}
          aria-label={`Decrease quantity of ${title}`}
        >
          -
        </button>
        <input
          className="quantity-input no-spinner"
          id={`quantity-${title}`}
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
          aria-label={`Quantity of ${title}`}
        />
        <button
          className="custom-button qty-btn"
          type="button"
          onClick={() => setQuantity(q => q + 1)}
          aria-label={`Increase quantity of ${title}`}
        >
          +
        </button>
      </div>
      <button
        className="custom-button"
        onClick={handleAddToCart}
        disabled={quantity < 1}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;