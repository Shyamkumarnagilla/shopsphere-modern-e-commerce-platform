import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import { useToast } from '../context/ToastContext';
import '../styles/Home.css';

const Home = () => {
    const featuredProducts = products.slice(0, 4);
    const { addToast } = useToast();
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            addToast(`Thank you for subscribing with ${email} !`, 'success');
            setEmail('');
        }
    };

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-modern">
                <div className="container hero-layout">
                    <div className="hero-text">
                        <span className="badge-promo">India's Biggest Fashion Festival</span>
                        <h1>Upgrade Your <span>Lifestyle</span> Today</h1>
                        <p>Explore high-quality electronics, traditional & modern fashion, and home essentials at unbeatable Indian prices.</p>
                        <div className="hero-btns">
                            <Link to="/products" className="btn-primary-modern">Start Shopping</Link>
                            <Link to="/products?category=Electronics" className="btn-outline-modern">View Electronics</Link>
                        </div>
                        <div className="hero-stats">
                            <div className="stat">
                                <b>10k+</b>
                                <span>Products</span>
                            </div>
                            <div className="stat">
                                <b>50k+</b>
                                <span>Customers</span>
                            </div>
                            <div className="stat">
                                <b>24h</b>
                                <span>Delivery</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="image-wrapper">
                            <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80" alt="Premium Shopping" />
                            <div className="floating-card glass">
                                <div className="card-icon"><i className="bi bi-star-fill"></i></div>
                                <div className="card-content">
                                    <b>Top Rated</b>
                                    <span>99% Satisfaction</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="categories-modern container">
                <div className="section-title-modern">
                    <h2>Shop by Category</h2>
                    <p>Find exactly what you're looking for</p>
                </div>
                <div className="cat-grid">
                    {categories.filter(cat => cat !== 'All').map(category => (
                        <Link
                            key={category}
                            to={`/products?category=${category}`}
                            className="cat-card-modern"
                        >
                            <div className="cat-icon-box">
                                {category === 'Electronics' && <i className="bi bi-laptop"></i>}
                                {category === 'Fashion' && <i className="bi bi-tag"></i>}
                                {category === 'Home' && <i className="bi bi-house-door"></i>}
                                {category === 'Beauty' && <i className="bi bi-brush"></i>}
                            </div>
                            <h3>{category}</h3>
                            <span>Explore Now →</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Trending Section */}
            <section className="trending-modern">
                <div className="container">
                    <div className="trending-header">
                        <div className="section-title-modern left">
                            <h2>Trending Now</h2>
                            <p>Most popular items this week</p>
                        </div>
                        <Link to="/products" className="link-arrow">See All Items →</Link>
                    </div>
                    <div className="products-grid-modern">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-modern container">
                <div className="feature-grid">
                    <div className="feature-card-modern">
                        <div className="f-icon"><i className="bi bi-truck"></i></div>
                        <h4>Free Express Shipping</h4>
                        <p>For all orders over ₹2500</p>
                    </div>
                    <div className="feature-card-modern">
                        <div className="f-icon"><i className="bi bi-shield-check"></i></div>
                        <h4>Secure Payment</h4>
                        <p>100% secure payment methods</p>
                    </div>
                    <div className="feature-card-modern">
                        <div className="f-icon"><i className="bi bi-arrow-repeat"></i></div>
                        <h4>Flexible Returns</h4>
                        <p>30-day money back guarantee</p>
                    </div>
                    <div className="feature-card-modern">
                        <div className="f-icon"><i className="bi bi-headset"></i></div>
                        <h4>24/7 Support</h4>
                        <p>Available via chat or phone</p>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="newsletter-modern container">
                <div className="newsletter-card">
                    <div className="nl-content">
                        <h2>Join Our Community</h2>
                        <p>Subscribe for exclusive deals, early access to sales, and more!</p>
                        <form className="nl-form" onSubmit={handleSubscribe}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
