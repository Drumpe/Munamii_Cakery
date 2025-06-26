import "../style/Cart.css";
import { Link } from "react-router";
import { parseSEK } from "../utils";

function CartPage({ cart, onCheckout, onQuantityChange, onRemoveFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.quantity * parseSEK(item.price),
    0
  );

  return (
    <div className="container cart-page">
      <div className="cart-header">
        <Link to="/products" className="back-link nav-link">
          &larr; Continue shopping
        </Link>
        <h2>Your Shopping Cart</h2>
      </div>
      {cart.length === 0 ? (
        <p className="empty-cart-msg">Your shopping cart is empty.</p>
      ) : (
        <div className="cart-table-wrapper">
          <div className="cart-table-header">
            <span className="cart-col product-col">Product</span>
            <span className="cart-col price-col">Price</span>
            <span className="cart-col qty-col">Quantity</span>
            <span className="cart-col subtotal-col">Subtotal</span>
            <span className="cart-col remove-col"></span>
          </div>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-main">
                  <span className="item-name product-col">{item.name}</span>
                </div>
                <div className="cart-item-controls">
                  <span className="item-price price-col">{item.price} SEK</span>
                  <div className="item-qty qty-col">
                    <button
                      className="custom-button qty-btn"
                      onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        onQuantityChange(item.id, Math.max(1, Number(e.target.value)))
                      }
                      className="quantity-input cart-qty-input no-spinner"
                      aria-label={`Quantity of ${item.name}`}
                    />
                    <button
                      className="custom-button qty-btn"
                      onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                  <span className="item-subtotal subtotal-col">
                    {(parseSEK(item.price) * item.quantity).toFixed(2)} SEK
                  </span>
                  <button
                    className="custom-button remove-btn"
                    aria-label={`Remove ${item.name} from cart`}
                    onClick={() => onRemoveFromCart(item.id)}
                  >
                    🗑️
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="cart-total">
        Total: <span>{total.toFixed(2)} SEK</span>
      </div>
      <button
        className="checkout-btn custom-button"
        onClick={onCheckout}
        disabled={cart.length === 0}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default CartPage;