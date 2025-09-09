import React from 'react';
import './Footer.css';

import kllogo from "./../../assets/kllogo.png";
import vedaLogo from './../../assets/images/VEDA.png';
import irdLogo from './../../assets/images/IRD.png';
import instagramQr from './../../assets/images/instagramQr.png';
import linkedinQr from './../../assets/images/linkedinQr.jpg';

function Footer() {
    return (
        <>
            <footer className="footer">
                {/* Left Section: Logos */}
                <div className="footer-section footer-left">
                    <div className="kl-logo-container">
                        <img src={kllogo} alt="KL Logo" className="kl-logo" />
                    </div>

                    <div className="right-logos">
                        <div className="logo-container">
                            <img src={irdLogo} alt="IRD Logo" className="footer-logo"  style={{scale: "1.4"}} />
                        </div>
                        <div className="logo-container" >
                            <img src={vedaLogo} alt="Veda Logo" className="footer-logo" style={{scale: "1.7"}}/>
                        </div>
                    </div>
                </div>

                <div className="separator"></div>

                {/* Center Section: Contact Info */}
                <div className="footer-section footer-center">
                    <h4 className="footer-heading">Contact Us</h4>
                    <p>
                        <a href="mailto:veda@kluniversity.in" className="email-link">veda@kluniversity.in</a>
                    </p>
                    <p>KL University, Andhra Pradesh</p>
                    <p>
                        <a href="https://www.kluniversity.in/" target="_blank" rel="noopener noreferrer" className="uni-link">
                            www.kluniversity.in
                        </a>
                    </p>
                </div>

                <div className="separator"></div>

                {/* Right Section: Social Media */}
                <div className="footer-section footer-right">
                    <div className="social-container">
                        <div className="social-item">
                            <img src={instagramQr} alt="Instagram QR" className="social-qr" />
                            <a
                                href="https://www.instagram.com/klu_veda?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                @klu_veda
                            </a>
                        </div>
                        <div className="social-item">
                            <img src={linkedinQr} alt="LinkedIn QR" className="social-qr" />
                            <a
                                href="https://in.linkedin.com/company/kl-veda"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                KL VEDA
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Copyright */}
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} IRD | KL University. All rights reserved.
            </div>
        </>
    );
}

export default Footer;
