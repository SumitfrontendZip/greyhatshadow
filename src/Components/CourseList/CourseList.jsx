import Product from "../Product/Product"
import productData from "./list"
import './CourseList.css'
import SoftwareList from "../SoftwareList/SoftwareList"
import Header from "../Header/Header"
function CourseList() {
    return (
        <div className="Course-list-container">
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
            <SoftwareList />
            <Header/>
        </div>
    )
}

export default CourseList
