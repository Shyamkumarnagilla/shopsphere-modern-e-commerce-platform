import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useToast } from '../context/ToastContext';
import ProductCard from '../components/products/ProductCard';
import '../styles/ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();
    const { addToast } = useToast();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const foundProduct = products.find(p => p.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            setRelatedProducts(products.filter(p => p.category === foundProduct.category && p.id !== foundProduct.id).slice(0, 4));
        }
        setLoading(false);
    }, [id]);

    if (loading) return <div className="container loading">Loading...</div>;
    if (!product) return (
        <div className="container error-page">
            <div className="error-content glass">
                <h2>Oops! Product Not Found</h2>
                <p>The item you're looking for might have been moved or is no longer available.</p>
                <Link to="/products" className="btn-primary-modern">Back to Collection</Link>
            </div>
        </div>
    );

    const isLiked = isInWishlist(product.id);

    const handleAddToCart = () => {
        addToCart(product, quantity);
        addToast(`${quantity} ${product.name} added to cart!`, 'success');
    };

    return (
        <div className="product-details-page-modern container">
            <div className="breadcrumb-modern">
                <Link to="/">Home</Link> /
                <Link to={`/products?category=${product.category}`}>{product.category}</Link> /
                <span>{product.name}</span>
            </div>

            <div className="details-layout">
                <div className="details-visuals">
                    <div className="main-image-box">
                        <img src={product.image} alt={product.name} />
                        <button
                            className={`wishlist-fab ${isLiked ? 'active' : ''}`}
                            onClick={() => toggleWishlist(product)}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        </button>
                    </div>
                </div>

                <div className="details-info">
                    <div className="info-header">
                        <span className="info-cat">{product.category}</span>
                        <h1>{product.name}</h1>
                        <div className="info-rating">
                            <div className="stars-row">
                                {[...Array(5)].map((_, i) => (
                                    <i key={i} className={`bi ${i < Math.floor(product.rating) ? 'bi-star-fill filled' : 'bi-star'}`}></i>
                                ))}
                            </div>
                            <span className="rating-text"><b>{product.rating}</b> ({product.reviews} customer reviews)</span>
                        </div>
                    </div>

                    <div className="info-price-row">
                        <div className="price-box">
                            <span className="curr">₹</span>
                            <span className="val">{product.price.toLocaleString('en-IN')}</span>
                        </div>
                        {product.stock > 0 ? (
                            <span className="stock-tag in">In Stock • Ready to ship</span>
                        ) : (
                            <span className="stock-tag out">Out of Stock</span>
                        )}
                    </div>

                    <p className="product-desc-modern">{product.description}</p>

                    <div className="purchase-section">
                        <div className="qty-selector-details">
                            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                            <span>{quantity}</span>
                            <button onClick={() => setQuantity(q => q + 1)}>+</button>
                        </div>
                        <button
                            className="btn-add-large"
                            onClick={handleAddToCart}
                            disabled={product.stock === 0}
                        >
                            Add to Cart
                        </button>
                    </div>

                    <div className="trust-badges">
                        <div className="badge-item-trust">
                            <span className="icon"><i className="bi bi-shield-check"></i></span>
                            <div className="txt">
                                <b>1 Year Warranty</b>
                                <p>Authentic products only</p>
                            </div>
                        </div>
                        <div className="badge-item-trust">
                            <span className="icon"><i className="bi bi-arrow-repeat"></i></span>
                            <div className="txt">
                                <b>30-Day Returns</b>
                                <p>Hassle-free exchange</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {relatedProducts.length > 0 && (
                <section className="related-section">
                    <div className="section-title-modern left">
                        <h2>You Might Also Like</h2>
                        <p>Similar products from {product.category}</p>
                    </div>
                    <div className="products-grid-modern">
                        {relatedProducts.map(p => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default ProductDetails;
