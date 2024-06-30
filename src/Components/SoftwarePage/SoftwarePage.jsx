import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import SoftwareList from '../SoftwareList/SoftwareList'
import './SoftwarePage.css'
function SoftwarePage() {
    return (
        <div className="Software-page-wrapper">
            <Navbar />
            <div className="heading">Software</div>
            <div className="Course-list-container">
                <SoftwareList />
            </div>
            <Header />
        </div>
    )
}

export default SoftwarePage