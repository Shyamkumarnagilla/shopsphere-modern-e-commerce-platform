import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import '../../styles/Navbar.css';

const Navbar = () => {
    const { user, logout } = useAuth();
    const { cartCount } = useCart();
    const { wishlist } = useWishlist();
    const [searchQuery, setSearchQuery] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        const handleClickOutside = (e) => {
            if (!e.target.closest('.user-profile')) {
                setDropdownOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
    }, [location]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/products?search=${searchQuery}`);
            setSearchQuery('');
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="logo">
                    <div className="logo-icon">S</div>
                    <span>Shop<span>Sphere</span></span>
                </Link>

                <form className="search-bar" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search for sarees, mobile phones, etc."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="search-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                </form>

                <div className={`nav-actions ${mobileMenuOpen ? 'open' : ''}`}>
                    <Link to="/products" className="nav-item">Explore</Link>

                    <Link to="/wishlist" className="action-btn wishlist-icon" title="Wishlist">
                        <div className="icon-badge-wrapper">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                            {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
                        </div>
                    </Link>

                    <Link to="/cart" className="action-btn cart-icon" title="Cart">
                        <div className="icon-badge-wrapper">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                            {cartCount > 0 && <span className="badge primary">{cartCount}</span>}
                        </div>
                    </Link>

                    {user ? (
                        <div
                            className="user-profile"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            <div className="user-avatar">{user.name[0]}</div>
                            <div className={`user-dropdown-container glass ${dropdownOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
                                <div className="dropdown-header">
                                    <p className="user-name-full">{user.name}</p>
                                    <p className="user-email-full">{user.email}</p>
                                </div>
                                <div className="dropdown-divider"></div>
                                <Link to="/orders" className="dropdown-link">My Orders</Link>
                                <button onClick={logout} className="dropdown-link logout-btn">Logout</button>
                            </div>
                        </div>
                    ) : (
                        <Link to="/login" className="login-btn-modern">Sign In</Link>
                    )}
                </div>

                <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
