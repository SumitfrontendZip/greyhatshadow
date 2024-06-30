import Product from "../Product/Product"
import productData from "./list"
import './CourseList.css'
function CourseList() {
    return (

        <div className="Course-list-wrapper">
            <div className="Course-list-title">Course & Products</div>
            <span>Pure Practical Courses In Your Mother tongue</span>
            <div className="course-list">
                {
                    productData.map((product) =>
                        <Product
                            key={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            discountPrice={product.discountPrice}
                            category={product.category}
                        />)
                }
            </div>
        </div>
    )
}

export default CourseList
