import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer-balanced">
            <div className="container footer-grid">
                <div className="footer-brand-area">
                    <Link to="/" className="logo">
                        <div className="logo-icon">S</div>
                        <span>Shop<span>Sphere</span></span>
                    </Link>
                    <p className="footer-bio">India's destination for quality fashion, electronics, and home essentials.</p>
                    <div className="social-row-modern">
                        <a href="#" title="Instagram">Instagram</a>
                        <a href="#" title="Twitter">Twitter</a>
                    </div>
                </div>

                <div className="footer-nav-simple">
                    <div className="nav-column-group">
                        <h4>Shop</h4>
                        <Link to="/products?category=Fashion">Fashion</Link>
                        <Link to="/products?category=Electronics">Electronics</Link>
                        <Link to="/products?category=Home">Home Decor</Link>
                        <Link to="/products?category=Beauty">Beauty</Link>
                    </div>
                    <div className="nav-column-group">
                        <h4>Your Account</h4>
                        <Link to="/orders">My Orders</Link>
                        <Link to="/wishlist">Wishlist</Link>
                        <Link to="/cart">Cart</Link>
                    </div>
                    <div className="nav-column-group">
                        <h4>Support</h4>
                        <a href="#">Contact Us</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-balanced">
                <div className="container btm-flex">
                    <p>&copy; 2025 ShopSphere. All rights reserved.</p>
                    <div className="payment-row-mini">
                        <span title="UPI"><i className="bi bi-qr-code"></i> UPI</span>
                        <span title="Visa/Mastercard"><i className="bi bi-credit-card-2-front"></i> Cards</span>
                        <span title="RuPay"><i className="bi bi-shield-check"></i> RuPay</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
