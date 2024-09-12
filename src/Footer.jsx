import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import AmericanExpressImage from './assets/images-payment-methods/american-express.svg';
import BitcoinImage from './assets/images-payment-methods/bitcoin.svg';
import GooglePayImage from './assets/images-payment-methods/google-pay.svg';
import MastercardImage from './assets/images-payment-methods/mastercard.svg';
import PaypalImage from './assets/images-payment-methods/paypal.svg';
import VisaImage from './assets/images-payment-methods/visa.svg';

function Footer() {

    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-row">
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Pressroom</a></li>
                            <li><a href="#">Career</a></li>
                            <li><a href="#">Eco Aware</a></li>
                            <li><a href="#">Our Commitments</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Blockchain</h4>
                        <ul>
                            <li><a href="#">Wallet</a></li>
                            <li><a href="#">Exchange</a></li>
                            <li><a href="#">Ethereum</a></li>
                            <li><a href="#">Hyperledger</a></li>
                            <li><a href="#">Smart Contracts</a></li>
                            <li><a href="#">Private Blockhains</a></li>
                            <li><a href="#">NFT Marketplace</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>My Account</h4>
                        <ul>
                            <li><a href="#">Orders</a></li>
                            <li><a href="#">Account Settings</a></li>
                            <li><a href="#">Change Password</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Follow Us</h4>
                        <div className="social-links">
                            <a href="#">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row-newsletter-payment">
                    <form className="footer-form">
                        <h4>Newsletter</h4>
                        <p>Do you want to receive the newest trends and special offers? <br></br>
                            <a href="#">Sign up</a> and get 10% off
                        </p>

                        <div className="email">
                            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff", width: 30, height: 30 }} />/
                            <input type="email" name="email" placeholder="Enter your email"/>
                        </div>

                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms"> I accept </label><a href="#">newsletter terms</a>
                        <br />

                        <button>send</button>
                    </form>

                    <div class="footer-payment-methods">
                        <span>We accept</span>
                        <div className="payment-methods-list">
                            <img src={AmericanExpressImage} alt="american-express-image" />
                            <img src={BitcoinImage} alt="bitcoin-image" />
                            <img src={GooglePayImage} alt="google-pay-image" />
                            <img src={MastercardImage} alt="mastercard-image" />
                            <img src={PaypalImage} alt="paypal-image" />
                            <img src={VisaImage} alt="visa-image" />
                        </div>
                    </div>
                </div>

                <hr />

                <div className="copyright">
                    © 2024 <b>HyperLink InfoSystem</b> | All Rights Reserved
                </div>
            </div>
        </div>
    );
}

export default Footer;