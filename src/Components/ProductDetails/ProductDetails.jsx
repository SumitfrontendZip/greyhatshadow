import { Link, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import "./ProductDetails.css";
import productData from "../CourseList/list";
import softwareDataList from "../SoftwareList/softwareDataList";
import { useRef, useState } from "react";

function ProductDetails() {
  const { id, title, category } = useParams();
  const [productCount, setProductCount] = useState(1);
  const [addToCartItem, setAddToCartItem] = useState(1);

  const handleAddtoCart = () => {
    if (productCount >= 0) {
      setAddToCartItem(productCount);
    }
  };

  const renderData = (descriptionData) => {
    return descriptionData.map((data, index) => <li key={index}>{data}</li>);
  };

  const software = softwareDataList.find(
    (item) => item.title === title || item.id === id
  );
  const product = productData.find(
    (item) => item.title === title || item.id === id
  );
  const cartItem = category === "Software" ? software : product;

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
          <Link to="/">Home</Link>/
          <Link to={cartItem.category !== "product" ? "/shop" : "/softwares"}>
            {cartItem.category}
          </Link>
          /{title}
        </span>
        <section>
          <div className="imgSection">
            <img src={cartItem.image} alt={cartItem.title} />
          </div>
          <div className="product-details">
            <h3>{cartItem.title}</h3>
            <span>₹ {cartItem.price}</span> <br />
            <br />
            <span>
              {cartItem.category} code: {cartItem.productCode}
            </span>
            <div className="buttonSection">
              {cartItem.category === "Software" ? (
                ""
              ) : (
                <input
                  type="number"
                  value={productCount}
                  onChange={(e) => setProductCount(e.target.value)}
                />
              )}
              {cartItem.category === "Software" ? (
                <Link to={cartItem.download}>
                  <button>DOWNLOAD</button>
                </Link>
              ) : (
                <Link to="/contact-us">
                  <button onClick={handleAddtoCart}>ADD TO CART</button>
                </Link>
              )}
            </div>
            <div className="category">
              <strong>Category:</strong>
              <span>{cartItem.category}</span>
            </div>
            <div className="tagDescription">
              <strong>Description:</strong>
              <ul>{renderData(cartItem.description)}</ul>
            </div>
            {cartItem.requirements.length > 0 ? (
              <div className="tagDescription">
                <strong>requirements:</strong>
                <ul>{renderData(cartItem.requirements)}</ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </section>
        {cartItem.ytLink === "" ? (
          ""
        ) : (
          <div className="demoVideo">
            <h2>Demo Video</h2>
            <iframe
              src={cartItem.ytLink}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        )}
      </div>
      <Header />
    </div>
  );
}

export default ProductDetails;
