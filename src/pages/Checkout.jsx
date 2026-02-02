import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import '../styles/Checkout.css';

const Checkout = () => {
    const { cart, cartTotal, clearCart } = useCart();
    const { addToast } = useToast();
    const navigate = useNavigate();

    const [step, setStep] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState('Card'); // Card, UPI, RuPay
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        zipCode: '',
        cardNumber: '',
        expDate: '',
        cvv: '',
        upiId: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNextStep = (e) => {
        e.preventDefault();
        setStep(step + 1);
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        // Simulate order placement
        let methodMsg = paymentMethod;
        if (paymentMethod === 'UPI') methodMsg = `UPI (${formData.upiId})`;

        addToast(`Order placed successfully using ${methodMsg}! Thank you for shopping.`, 'success');
        clearCart();
        navigate('/orders');
    };

    if (cart.length === 0 && step === 1) {
        navigate('/cart');
        return null;
    }

    return (
        <div className="checkout-page-modern container">
            <div className="checkout-header">
                <h1>Complete Your Order</h1>
                <div className="checkout-steps">
                    <div className={`step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
                        <span className="step-num">{step > 1 ? <i className="bi bi-check-lg"></i> : '1'}</span>
                        <span className="step-label">Shipping</span>
                    </div>
                    <div className="step-line"></div>
                    <div className={`step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
                        <span className="step-num">{step > 2 ? <i className="bi bi-check-lg"></i> : '2'}</span>
                        <span className="step-label">Payment</span>
                    </div>
                </div>
            </div>

            <div className="checkout-layout">
                <main className="checkout-form-side">
                    {step === 1 ? (
                        <div className="checkout-section-card glass">
                            <h2>Shipping Information</h2>
                            <form onSubmit={handleNextStep} className="modern-form">
                                <div className="input-row">
                                    <div className="input-group-modern">
                                        <label>Full Name</label>
                                        <input name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="John Doe" required />
                                    </div>
                                    <div className="input-group-modern">
                                        <label>Email Address</label>
                                        <input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" required />
                                    </div>
                                </div>
                                <div className="input-group-modern">
                                    <label>Shipping Address</label>
                                    <input name="address" value={formData.address} onChange={handleInputChange} placeholder="123 Street Name" required />
                                </div>
                                <div className="input-row">
                                    <div className="input-group-modern">
                                        <label>City</label>
                                        <input name="city" value={formData.city} onChange={handleInputChange} placeholder="New York" required />
                                    </div>
                                    <div className="input-group-modern">
                                        <label>ZIP Code</label>
                                        <input name="zipCode" value={formData.zipCode} onChange={handleInputChange} placeholder="10001" required />
                                    </div>
                                </div>
                                <button type="submit" className="btn-primary-modern full">Continue to Payment</button>
                            </form>
                        </div>
                    ) : (
                        <div className="checkout-section-card glass anim-fade-in">
                            <h2>Payment Method</h2>
                            <form onSubmit={handlePlaceOrder} className="modern-form">
                                <div className="payment-options">
                                    <div
                                        className={`payment-tag ${paymentMethod === 'Card' ? 'active' : ''}`}
                                        onClick={() => setPaymentMethod('Card')}
                                    >
                                        <i className="bi bi-credit-card"></i> Card
                                    </div>
                                    <div
                                        className={`payment-tag ${paymentMethod === 'UPI' ? 'active' : ''}`}
                                        onClick={() => setPaymentMethod('UPI')}
                                    >
                                        <i className="bi bi-qr-code-scan"></i> UPI
                                    </div>
                                    <div
                                        className={`payment-tag ${paymentMethod === 'RuPay' ? 'active' : ''}`}
                                        onClick={() => setPaymentMethod('RuPay')}
                                    >
                                        <i className="bi bi-shield-check"></i> RuPay
                                    </div>
                                </div>

                                {paymentMethod === 'UPI' ? (
                                    <div className="input-group-modern anim-fade-in">
                                        <label>Enter UPI ID</label>
                                        <input
                                            name="upiId"
                                            value={formData.upiId}
                                            onChange={handleInputChange}
                                            placeholder="username@bank"
                                            required
                                        />
                                        <p className="input-hint">Order will be placed after verification</p>
                                    </div>
                                ) : (
                                    <div className="anim-fade-in">
                                        <div className="input-group-modern">
                                            <label>Card Number</label>
                                            <input
                                                name="cardNumber"
                                                value={formData.cardNumber}
                                                onChange={handleInputChange}
                                                placeholder="0000 0000 0000 0000"
                                                required
                                            />
                                        </div>
                                        <div className="input-row">
                                            <div className="input-group-modern">
                                                <label>Expiry Date</label>
                                                <input
                                                    name="expDate"
                                                    value={formData.expDate}
                                                    onChange={handleInputChange}
                                                    placeholder="MM/YY"
                                                    required
                                                />
                                            </div>
                                            <div className="input-group-modern">
                                                <label>CVV</label>
                                                <input
                                                    name="cvv"
                                                    type="password"
                                                    value={formData.cvv}
                                                    onChange={handleInputChange}
                                                    placeholder="***"
                                                    maxLength="3"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="btn-group-checkout">
                                    <button type="button" onClick={() => setStep(1)} className="btn-secondary-modern">Back</button>
                                    <button type="submit" className="btn-primary-modern flex-1">
                                        Place Order • ₹{cartTotal.toLocaleString('en-IN')}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </main>

                <aside className="checkout-summary-side">
                    <div className="summary-card glass">
                        <h3>Order Summary</h3>
                        <div className="item-mini-list">
                            {cart.map(item => (
                                <div key={item.id} className="item-mini">
                                    <img src={item.image} alt={item.name} />
                                    <div className="item-mini-info">
                                        <p>{item.name}</p>
                                        <span>{item.quantity} x ₹{item.price.toLocaleString('en-IN')}</span>
                                    </div>
                                    <b className="item-mini-price">₹{(item.price * item.quantity).toLocaleString('en-IN')}</b>
                                </div>
                            ))}
                        </div>
                        <div className="summary-divider"></div>
                        <div className="summary-row total">
                            <span>Total to Pay</span>
                            <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                        </div>
                        <p className="summary-policy">By placing this order, you agree to our terms and conditions.</p>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Checkout;
