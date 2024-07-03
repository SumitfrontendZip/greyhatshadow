import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar"
import './Aboutus.css'

function AboutUs() {
    return (
        <div className="about-page-wrapper">
            <Navbar />
            <div className="heading">About Us</div>
            <div className="Course-list-container">
                <div className="software-list-container aboutus-content">
                    <div>Hey Guys Its GrayHatShadow, Founder of GrayHatShadow. I spend most of my free time creating content for my YouTube channel and this website. I started my YouTube channel at age 15 and my goal was to teach people what they can do with their gadgets. I gained a substantial amount of subscribers and viewers. Honestly, at the end of the day, it’s my audience who really inspire me. They are the ones watching my content and giving me feedback. Without them, there would be no point in doing YouTube</div>
                    <hr />
                    <h4>WE ARE ON A MISSION TO TOUCH EVERY TECH CONSUMER’S LIFE BY HELPING THEM DO MORE WITH THEIR DEVICES.</h4>
                    <hr />
                    <div>GrayHatShadow.com basically aims at spreading the knowledge outside YouTube through brief and theoretical posts, screenshots, images and useful links for the readers. This is a page where you can learn all about the latest tips, tricks, tutorials, and hacks regarding various trending topics, apps, devices, etc. Besides doing YouTube, I’m also a 12th Science Student. Follow and stay connected with us on Facebook and YouTube. If you ever have any questions or comments feel free to contact me. I might not reply immediately (or within a week) but I usually at least glance over each email.</div>
                </div>
            </div>
            <Header />
        </div>
    )
}

export default AboutUs