import { Link, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import './ProductDetails.css';
import productData from "../CourseList/list"; // Assuming this is where you import your product data
import softwareDataList from "../SoftwareList/softwareDataList"; // Assuming this is where you import your software data
import { useState } from "react";

function ProductDetails() {
    const { id, title, category } = useParams();
    const [productCount, setProductCount] = useState(1); // State to manage product count
    const [addToCartItem, setAddToCartItem] = useState(1); // State to manage added cart item

    // Function to handle adding product to cart
    const handleAddtoCart = () => {
        if (productCount >= 0) {
            setAddToCartItem(productCount); // Update addToCartItem with productCount
        }
    }

    // Function to render description data as list items
    const renderDescriptionData = (descriptionData) => {
        return descriptionData.map((data, index) => <li key={index}>{data}</li>);
    }

    const software = softwareDataList.find((item) => item.title === title || item.id === id);
    const product = productData.find((item) => item.title === title || item.id === id);
    const cartItem = category === 'Software' ? software : product;
       
    if (!cartItem) {
        return (
            <div className="product-details-wrapper">
                <Navbar />
                <h1>404</h1>
                <p>Oops! Something is wrong.</p>
                <Link className="button" to="/">
                    <i className="icon-home"></i>
                    Go back to the home page
                </Link>
            </div>
        );
    }

    return (
        <div className="product-details-wrapper">
            <Navbar addToCartItem={addToCartItem} />
            <div className="product-details-container">
                <span>
                    <Link to='/'>Home</Link>
                    /
                    <Link to={cartItem.category !== 'product' ? '/shop' : '/softwares'}>{cartItem.category}</Link>
                    /
                    {title}
                </span>
                <section>
                    <img src={cartItem.image} alt={cartItem.title} />
                    <div className="product-details">
                        <h3>{cartItem.title}</h3>
                        <span>₹ {cartItem.price}</span> <br /><br />
                        <span>{cartItem.category} code: {cartItem.productCode}</span>
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
                            <span>{cartItem.category}</span>
                        </div>
                        <div className="tagDescription">
                            <strong>Description:</strong>
                            <ul>{renderDescriptionData(cartItem.description)}</ul>
                        </div>
                    </div>
                </section>
            </div>
            <Header />
        </div>
    );
}

export default ProductDetails;
