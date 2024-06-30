import { useRef, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import './Home.css';
import CourseList from "../CourseList/CourseList";
 
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
                <button ref={btn}>BUY NOW</button>
            </div>
            <CourseList />
           
        </div>
    );
}

export default Home;

