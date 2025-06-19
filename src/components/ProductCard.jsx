import "../style/Style.css";

function ProductCard({ image, title, price, ingredients }) {
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
        {price}</p>
      <a
        className="snipcart-add-item"
        data-item-id={title}
        data-item-price={parseFloat(price.replace("$", ""))}
        data-item-url="/products"
        data-item-description={title}
        data-item-image={image}
        data-item-name={title}
      >
        Add to Cart
      </a>
    </div>
  );
}

export default ProductCard;