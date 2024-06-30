import CourseList from "../CourseList/CourseList"
import Navbar from "../Navbar/Navbar"
import './ShopPage.css'
import Header from "../Header/Header"
function ShopPage() {
    return (
        <div className="Shop-page-wrapper">
            <Navbar />
            <div className="heading">Shop</div>
            <div className="Course-list-container">
                <CourseList />
            </div>
            <Header/>
        </div>
    )
}

export default ShopPage
