import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useToast } from '../../context/ToastContext';
import '../../styles/ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();
    const { addToast } = useToast();

    const isLiked = isInWishlist(product.id);

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
        addToast(`${product.name} added to cart!`, 'success');
    };

    const handleToggleWishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(product);
        addToast(isLiked ? 'Removed from wishlist' : 'Added to wishlist', isLiked ? 'info' : 'success');
    };

    return (
        <div className="product-card-modern">
            <Link to={`/product/${product.id}`} className="card-media">
                <img src={product.image} alt={product.name} loading="lazy" />
                <div className="card-badges">
                    {product.stock <= 5 && product.stock > 0 && (
                        <span className="badge-item warning">Low Stock</span>
                    )}
                    {product.stock === 0 && (
                        <span className="badge-item danger">Sold Out</span>
                    )}
                </div>
                <button
                    className={`wishlist-toggle ${isLiked ? 'active' : ''}`}
                    onClick={handleToggleWishlist}
                    title={isLiked ? "Remove from wishlist" : "Add to wishlist"}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
                <div className="quick-view">Quick View</div>
            </Link>

            <div className="card-body">
                <div className="card-category">{product.category}</div>
                <Link to={`/product/${product.id}`}>
                    <h3 className="card-title">{product.name}</h3>
                </Link>
                <div className="card-meta">
                    <div className="rating">
                        <i className="bi bi-star-fill"></i>
                        <span className="score">{product.rating}</span>
                        <span className="count">({product.reviews})</span>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="price-tag">
                        <span className="currency">₹</span>
                        <span className="amount">{product.price.toLocaleString('en-IN')}</span>
                    </div>
                    <button
                        className="add-btn-mini"
                        onClick={handleAddToCart}
                        disabled={product.stock === 0}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
