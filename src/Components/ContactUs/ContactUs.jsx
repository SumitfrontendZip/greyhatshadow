import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar"
import './ContactUs.css'
const ContactUs = () => {
    return (
        <div className="about-page-wrapper imageStrech">
            <Navbar />
            <div className="heading">Contact Us</div>
            <div className="container">
                <div className="screen">
                    <div className="screen-header">
                        <div className="screen-header-left">
                            <div className="screen-header-button close"></div>
                            <div className="screen-header-button maximize"></div>
                            <div className="screen-header-button minimize"></div>
                        </div>
                        <div className="screen-header-right">
                            <div className="screen-header-ellipsis"></div>
                            <div className="screen-header-ellipsis"></div>
                            <div className="screen-header-ellipsis"></div>
                        </div>
                    </div>
                    <div className="screen-body">
                        <div className="screen-body-item left">
                            <div className="app-title">
                                <span>CONTACT</span>
                                <span>US</span>
                            </div>
                            <div className="app-contact">
                                <span>CONTACT INFO : +91 8266828647 <br /> G-MAIL INFO:- sujal@greyhatshadow.com</span>
                            </div>
                        </div>
                        <div className="screen-body-item">
                            <div className="app-form">
                                <div className="app-form-group">
                                    <input className="app-form-control" placeholder="NAME" />
                                </div>
                                <div className="app-form-group">
                                    <input className="app-form-control" placeholder="EMAIL" />
                                </div>
                                <div className="app-form-group">
                                    <input className="app-form-control" placeholder="CONTACT NO" />
                                </div>
                                <div className="app-form-group message">
                                    <input className="app-form-control" placeholder="MESSAGE" />
                                </div>
                                <div className="app-form-group buttons">
                                    <button className="app-form-button">CANCEL</button>
                                    <button className="app-form-button">SEND</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Header />
        </div>
    )
}

export default ContactUs
