import React, { useState } from 'react';
import './RegisterHero.css';
const RegisterHero = () => {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Registration data:', formData);
    };
  
    return (
      <section className="register-hero">
        <div className="hero-content">
          <div className="register-container">
            <div className="form-header">
              <div className="medical-icon">⚕</div>
              <h2 className="form-title">Create Your Account</h2>
            </div>
            <div className="register-form">
              <div className="input-group">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <button onClick={handleSubmit} className="signup-button">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default RegisterHero;