import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/products/ProductCard';
import '../styles/ProductList.css'; // Reusing list styles for now

const Wishlist = () => {
    const { wishlist } = useWishlist();

    return (
        <div className="wishlist-page container">
            <div className="section-title-modern">
                <h1>My Wishlist</h1>
                <p>{wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved for later</p>
            </div>

            {wishlist.length > 0 ? (
                <div className="products-grid-modern">
                    {wishlist.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="empty-content glass">
                    <div className="empty-icon"><i className="bi bi-heart"></i></div>
                    <h2>Your wishlist is empty</h2>
                    <p>Save items you like to find them easily later.</p>
                    <Link to="/products" className="btn-primary-modern">Discover Products</Link>
                </div>
            )}
        </div>
    );
};

export default Wishlist;
