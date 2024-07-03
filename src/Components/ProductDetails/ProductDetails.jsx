import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import './ProductDetails.css';
import productData from "../CourseList/list";

function ProductDetails() {
    const { id, title } = useParams();

    const product = productData.find((item) => item.title === title || item.id === id);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-details-wrapper">
            <Navbar />
            <div className="product-details-container">
                <span>
                    <Link to='/'>Home</Link>
                    / 
                    <Link to={product.category === 'product' ? '/shop' : '/software'}>{product.category}</Link>
                    / 
                    {title}
                </span>
                <section>
                    <img src={product.image} alt={product.title} />
                    <div className="product-details">
                        <h3>{product.title}</h3>
                        <span>₹ {product.price}</span>
                        <div className="buttonSection">
                            <input type="number"  />
                            <button>
                                <span>ADD TO CART</span>
                                <img src="" alt="" />
                            </button>
                        </div>
                        <div className="category">
                            <strong>Category:</strong>
                            <span> {product.category}</span>
                        </div>
                        <div className="tagDescription">
                            <strong>Tags:</strong>
                            <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus magnam deserunt nemo alias harum animi doloribus enim dicta nam laborum qui delectus aspernatur nihil error rem maxime, deleniti rerum fugit? Eius expedita fuga facilis quibusdam nihil quidem aspernatur non eligendi libero vero totam fugiat iure, consequuntur veritatis, deleniti quae necessitatibus neque praesentium nobis aut officiis. Excepturi soluta molestias officiis necessitatibus, quo totam quidem deleniti aut, rem dignissimos sed dolore incidunt aliquam animi hic eum delectus vero facere natus nemo error amet saepe? Consectetur magni eius corporis soluta perferendis cum saepe rem, ducimus natus non totam, expedita ea laudantium error amet?</span>
                        </div>
                    </div>
                </section>
            </div>
            <Header />
        </div>
    );
}

export default ProductDetails;
