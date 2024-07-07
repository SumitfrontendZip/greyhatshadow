import { Link, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import './ProductDetails.css';
import productData from "../CourseList/list";
import { useState } from "react";
import softwareDataList from "../SoftwareList/softwareDataList";

function ProductDetails() {
    const { id, title, category } = useParams();
    const [productCount, setProductCount] = useState(1)
    const [addToCartItem, setAddToCartItem] = useState(1)

    const handleAddtoCart = () => {
        if (productCount >= 0) {
            setAddToCartItem(productCount)
        }
    }

    const software = softwareDataList.find((item) => item.title === title || item.id === id);
    const product = productData.find((item) => item.title === title || item.id === id);

    const cartItem = category === 'software' ? software : product;

    if (!cartItem) {
        return <div className="product-details-wrapper">
            <Navbar />
            <h1>404</h1>
            <p>Oops! Something is wrong.</p>
            <Link className="button" to="/">
                <i className="icon-home"></i>
                Go back in initial page, is better.
            </Link>
        </div>;
    }

    return (
        <div className="product-details-wrapper">
            <Navbar addToCartItem={addToCartItem} />
            <div className="product-details-container">
                <span>
                    <Link to='/'>Home</Link>
                    /
                    <Link to={cartItem.category === 'product' ? '/shop' : '/software'}>{cartItem.category}</Link>
                    /
                    {title}
                </span>
                <section>
                    <img src={cartItem.image} alt={cartItem.title} />
                    <div className="product-details">
                        <h3>{cartItem.title}</h3>
                        <span>₹ {cartItem.price}</span>
                        <div className="buttonSection">
                            <input type="number" value={productCount} onChange={(e) => setProductCount(e.target.value)} />

                            <Link to='/contact-us'>
                                <button onClick={handleAddtoCart}>
                                    ADD TO CART
                                    {/* <img src="" alt="" /> */}
                                </button>
                            </Link>
                        </div>
                        <div className="category">
                            <strong>Category:</strong>
                            <span> {cartItem.category}</span>
                        </div>
                        <div className="tagDescription">
                            <strong>Tags:</strong>
                            <span> {cartItem.description}</span>
                        </div>
                    </div>
                </section>
            </div>
            <Header />
        </div>
    );
}

export default ProductDetails;
