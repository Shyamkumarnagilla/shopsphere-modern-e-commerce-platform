import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Orders.css';

const Orders = () => {
    // Mock orders data
    const orders = [
        {
            id: 'ORD-82910',
            date: '24 Jan 2026',
            status: 'Delivered',
            total: 18498,
            items: [
                { name: 'Samsung Galaxy M34 5G', quantity: 1, image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&q=80' },
                { name: 'boAt Airdopes 141', quantity: 1, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80' }
            ]
        },
        {
            id: 'ORD-77215',
            date: '12 Jan 2026',
            status: 'Shipped',
            total: 3499,
            items: [
                { name: 'Women Silk Kanjeevaram Saree', quantity: 1, image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80' }
            ]
        }
    ];

    return (
        <div className="orders-page container">
            <div className="section-title-modern left">
                <h1>My Orders</h1>
                <p>Track and manage your recent purchases</p>
            </div>

            <div className="orders-list">
                {orders.length > 0 ? (
                    orders.map(order => (
                        <div key={order.id} className="order-card-modern glass">
                            <div className="order-header">
                                <div className="order-info-group">
                                    <span className="info-label">Order ID</span>
                                    <span className="info-val">#{order.id}</span>
                                </div>
                                <div className="order-info-group">
                                    <span className="info-label">Date</span>
                                    <span className="info-val">{order.date}</span>
                                </div>
                                <div className="order-info-group">
                                    <span className="info-label">Total Amount</span>
                                    <span className="info-val">₹{order.total.toLocaleString('en-IN')}</span>
                                </div>
                                <div className={`order-status-badge ${order.status.toLowerCase()}`}>
                                    {order.status}
                                </div>
                            </div>

                            <div className="order-items-mini">
                                {order.items.map((item, idx) => (
                                    <div key={idx} className="mini-item">
                                        <img src={item.image} alt={item.name} />
                                        <div className="mini-item-details">
                                            <p className="item-name">{item.name}</p>
                                            <p className="item-qty">Qty: {item.quantity}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="order-footer">
                                <button className="btn-secondary-modern sm">View Order Details</button>
                                <button className="btn-outline-modern sm">Need Help?</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="empty-orders glass">
                        <div className="empty-icon"><i className="bi bi-box-seam"></i></div>
                        <h2>No orders yet</h2>
                        <p>You haven't placed any orders yet. Start exploring our collection!</p>
                        <Link to="/products" className="btn-primary-modern">Shop Now</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Orders;
