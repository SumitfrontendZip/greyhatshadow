import { useState } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './ContactUs.css';
import emailjs from 'emailjs-com';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        productCode: '',
        email: '',
        contactNo: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            name: formData.name,
            productCode: formData.productCode,
            email: formData.email,
            contactNo: formData.contactNo,
            message: formData
        };

        emailjs.send(
            'service_ezy4zie',
            'template_ca1ks8x',
            templateParams,
            'tr9e4vWuT0VuKc9ri'
        )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                },
                (error) => {
                    console.error('FAILED...', error.text);
                }
            );
    };

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
                                <form onSubmit={handleSubmit}>
                                    <div className="app-form-group">
                                        <input
                                            className="app-form-control"
                                            type="text"
                                            placeholder="NAME"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="app-form-group">
                                        <input
                                            className="app-form-control"
                                            type="text"
                                            placeholder="Product code"
                                            name="productCode"
                                            value={formData.productCode}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="app-form-group">
                                        <input
                                            className="app-form-control"
                                            type="email"
                                            placeholder="EMAIL"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="app-form-group">
                                        <input
                                            className="app-form-control"
                                            type="text"
                                            placeholder="CONTACT NO"
                                            name="contactNo"
                                            value={formData.contactNo}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="app-form-group message">
                                        <input
                                            className="app-form-control"
                                            type="text"
                                            placeholder="MESSAGE"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="app-form-group buttons">
                                        <button className="app-form-button" type="button">CANCEL</button>
                                        <button className="app-form-button" type="submit" onClick={() => alert('Thanks for Enquiry')}>SEND</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Header />
        </div>
    );
};

export default ContactUs;
