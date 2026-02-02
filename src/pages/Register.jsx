import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import '../styles/Auth.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const { addToast } = useToast();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && password) {
            login({ name, email });
            addToast('Account created successfully!', 'success');
            navigate('/');
        } else {
            addToast('Please fill in all fields', 'error');
        }
    };

    return (
        <div className="auth-page-modern">
            <div className="auth-container-modern container">
                <div className="auth-card-modern glass register">
                    <div className="auth-visual">
                        <div className="visual-content">
                            <h2>Join ShopSphere</h2>
                            <p>Create an account to start your journey with the best shopping experience.</p>
                            <div className="visual-decoration">
                                <div className="blob second"></div>
                            </div>
                        </div>
                    </div>
                    <div className="auth-form-side">
                        <div className="form-header">
                            <h1>Sign Up</h1>
                            <p>Get started with your free account</p>
                        </div>
                        <form onSubmit={handleSubmit} className="modern-form">
                            <div className="input-group-modern">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
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
                            </div>
                            <button type="submit" className="btn-auth-submit">Create Account</button>
                            <div className="auth-switch">
                                <span>Already have an account?</span>
                                <Link to="/login">Sign In</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
