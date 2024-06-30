import './Product.css'
import cartIcon from './cart.png'
function Product({ title, image, price, discountPrice, category }) {
  return (
    <div className="product-cart">
      <img src={image} alt="" />
      <h2>{category}</h2>
      <h3>{title}</h3>
      <div className="priceCart">
        <div className="price-section">
          <span>₹{discountPrice}</span>
          <span>₹{price}</span>
        </div>
        <img src={cartIcon} alt="" />
      </div>
    </div>
  )
}

export default Product
