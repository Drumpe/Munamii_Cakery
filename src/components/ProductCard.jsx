import "../style/Style.css";
import { useState, useEffect, useCallback } from "react";

function parseSEK(priceStr) {
  // Extract number from e.g. "30 kr"
  return parseFloat(priceStr.replace(/[^\d,\.]/g, '').replace(',', '.'));
}

function ProductCard({ image, title, price, ingredients }) {
  const [quantity, setQuantity] = useState(1);
  const [snipcartReady, setSnipcartReady] = useState(false);

  useEffect(() => {
    function handleReady() {
      setSnipcartReady(true);
    }
    if (window.Snipcart) {
      setSnipcartReady(true);
    } else {
      window.Snipcart?.events?.on("snipcart.ready", handleReady);
      return () => window.Snipcart?.events?.off("snipcart.ready", handleReady);
    }
  }, []);

  const handleAddToCart = useCallback(
    (e) => {
      e.preventDefault();
      if (!snipcartReady || !window.Snipcart?.api?.cart) return;
      try {
        // TRY TO NOT OPEN CART ON ADDING

        // // Hack: force the cart to close before adding
        // await window.Snipcart.api.theme.cart.close();

        // // Wait a tiny moment (important!)
        // await new Promise(r => setTimeout(r, 100));

         window.Snipcart.api.cart.items.add({
          id: title,
          name: title,
          price: parseSEK(price),
          url: "/",
          description: title,
          image: image,
          quantity: quantity,
          currency: "SEK"
      });

      // await window.Snipcart.api.theme.cart.close();

      } catch (error) {
        console.error("Error adding item to cart:", error);
      }

    },
    [snipcartReady, title, price, image, quantity]
  );

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>
        {title}
      </h3>
      <p className="price">
        <span className="info-tooltip">
          <span className="info-icon" tabIndex={0}>
            ⓘ
          </span>
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
        disabled={!snipcartReady}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;