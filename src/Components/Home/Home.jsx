import { useRef, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import './Home.css';
import CourseList from "../CourseList/CourseList";
import { Link } from "react-router-dom";
import SoftwareList from "../SoftwareList/SoftwareList";
import Header from "../Header/Header";

function Home() {
    const btn = useRef();

    useEffect(() => {
        if (btn.current) {
            btn.current.innerHTML = '<div><span>' + btn.current.textContent.trim().split('').join('</span><span>') + '</span></div>';
        }
    }, []);

    return (
        <div>
            <Navbar />
            <div className="home-wrapper">
                <h2>GREYHATSHADOW</h2>
                <span>In the digital age, cybersecurity is not just a technical necessity; it's a mindset of vigilance and resilience.</span>
                <Link to='/shop'><button ref={btn}>BUY NOW</button></Link>
            </div>
            <div className="Course-list-container">
                <CourseList />
                <SoftwareList />
                <Header />
            </div>
        </div>
    );
}

export default Home;

