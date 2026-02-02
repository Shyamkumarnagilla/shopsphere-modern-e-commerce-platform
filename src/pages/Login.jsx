import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import '../styles/Auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const { addToast } = useToast();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            login({ name: 'Shyam Kumar', email });
            addToast('Welcome back to ShopSphere!', 'success');
            const origin = location.state?.from?.pathname || '/';
            navigate(origin);
        } else {
            addToast('Please enter your credentials', 'error');
        }
    };

    return (
        <div className="auth-page-modern">
            <div className="auth-container-modern container">
                <div className="auth-card-modern glass">
                    <div className="auth-visual">
                        <div className="visual-content">
                            <h2>Welcome Back</h2>
                            <p>Login to access your orders, wishlist, and personalized recommendations.</p>
                            <div className="visual-decoration">
                                <div className="blob"></div>
                            </div>
                        </div>
                    </div>
                    <div className="auth-form-side">
                        <div className="form-header">
                            <h1>Sign In</h1>
                            <p>Enter your details to continue</p>
                        </div>
                        <form onSubmit={handleSubmit} className="modern-form">
                            <div className="input-group-modern">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group-modern">
                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <Link to="#" className="forgot-pass">Forgot password?</Link>
                            </div>
                            <button type="submit" className="btn-auth-submit">Sign In</button>
                            <div className="auth-switch">
                                <span>Don't have an account?</span>
                                <Link to="/register">Create Account</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
