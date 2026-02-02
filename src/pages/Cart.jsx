import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import '../styles/Cart.css';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();
    const { addToast } = useToast();
    const navigate = useNavigate();

    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);

    const handleRemove = (id, name) => {
        removeFromCart(id);
        addToast(`${name} removed from cart`, 'info');
    };

    const handleQuantityChange = (id, current, delta) => {
        const next = current + delta;
        if (next < 1) return;
        updateQuantity(id, next);
    };

    const handleApplyCoupon = () => {
        if (couponCode.toUpperCase() === 'SAVE10') {
            const amount = cartTotal * 0.1;
            setDiscount(amount);
            addToast('Coupon applied! 10% discount added.', 'success');
        } else if (couponCode.toUpperCase() === 'SHOPSPHERE25') {
            const amount = cartTotal * 0.25;
            setDiscount(amount);
            addToast('Mega Reveal! 25% discount applied.', 'success');
        } else {
            addToast('Invalid coupon code', 'error');
            setDiscount(0);
        }
    };

    const finalTotal = cartTotal - discount;

    if (cart.length === 0) {
        return (
            <div className="cart-empty-state container">
                <div className="empty-content glass">
                    <div className="empty-icon"><i className="bi bi-cart-x"></i></div>
                    <h2>Your cart is currently empty</h2>
                    <p>Looks like you haven't added anything to your cart yet. Explore our latest products and find something you love!</p>
                    <Link to="/products" className="btn-primary-modern">Start Shopping</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page-modern container">
            <div className="cart-layout">
                <div className="cart-main">
                    <div className="cart-title-row">
                        <h1>Shopping Cart</h1>
                        <span className="cart-status">{cartCount} {cartCount === 1 ? 'item' : 'items'}</span>
                    </div>

                    <div className="cart-items-list">
                        {cart.map(item => (
                            <div key={item.id} className="cart-item-modern">
                                <div className="item-img-box">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="item-details">
                                    <div className="item-header">
                                        <Link to={`/product/${item.id}`} className="item-name">{item.name}</Link>
                                        <button className="delete-btn" onClick={() => handleRemove(item.id, item.name)}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                        </button>
                                    </div>
                                    <p className="item-sub">{item.category} • In Stock</p>
                                    <div className="item-footer">
                                        <div className="qty-control-modern">
                                            <button onClick={() => handleQuantityChange(item.id, item.quantity, -1)} disabled={item.quantity <= 1}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => handleQuantityChange(item.id, item.quantity, 1)}>+</button>
                                        </div>
                                        <div className="item-price-info">
                                            {item.quantity > 1 && <span className="unit-price">₹{item.price.toLocaleString('en-IN')} each</span>}
                                            <span className="total-item-price">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-actions-bottom">
                        <Link to="/products" className="btn-secondary-modern">← Continue Shopping</Link>
                    </div>
                </div>

                <div className="cart-sidebar">
                    <div className="summary-card glass">
                        <h3>Order Summary</h3>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                        </div>
                        {discount > 0 && (
                            <div className="summary-row discount">
                                <span>Coupon Discount</span>
                                <span className="free-text">- ₹{discount.toLocaleString('en-IN')}</span>
                            </div>
                        )}
                        <div className="summary-row">
                            <span>Shipping</span>
                            <span className="free-text">FREE</span>
                        </div>
                        <div className="summary-row">
                            <span>Tax (Included)</span>
                            <span>₹0.00</span>
                        </div>
                        <div className="summary-divider"></div>
                        <div className="summary-row total">
                            <span>Total</span>
                            <span>₹{finalTotal.toLocaleString('en-IN')}</span>
                        </div>

                        <div className="coupon-box">
                            <input
                                type="text"
                                placeholder="TRY SAVE10 or SHOPSPHERE25"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                            />
                            <button onClick={handleApplyCoupon}>Apply</button>
                        </div>

                        <button onClick={() => navigate('/checkout')} className="checkout-btn-full">
                            Complete Purchase
                        </button>

                        <div className="secure-checkout-note">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            Secure Checkout Guarantee
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
