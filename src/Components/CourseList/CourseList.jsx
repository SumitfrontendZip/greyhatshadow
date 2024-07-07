import Product from "../Product/Product"
import productData from "./list"
import './CourseList.css'
import { Link } from "react-router-dom"
function CourseList() {
    return (

        <div className="Course-list-wrapper">
            <div className="Course-list-title">Course & Products</div>
            <span>Pure Practical Courses</span>
            <div className="course-list">
                {
                    productData.map((product) =>
                        <Link  key={product.id} to={`/${product.category}/${product.title}/${product.id}`}>
                            <Product
                                title={product.title}
                                image={product.image}
                                price={product.price}
                                discountPrice={product.discountPrice}
                                category={product.category}
                            />
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default CourseList
