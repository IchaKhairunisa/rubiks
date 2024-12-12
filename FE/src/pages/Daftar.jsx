import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Daftar() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Hook untuk navigasi

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message); // Tampilkan pesan sukses
        navigate('/Masuk'); // Arahkan ke halaman Masuk
      } else {
        alert(result.message); // Tampilkan pesan error
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan. Coba lagi nanti.');
    }
  };

  return (
    <div>
      <a href="/LandingPage" className="back-link">
        <img src="/assets/images/arrow-left.png" alt="back" width="47px" className="back" />
      </a>
      <div className="container">
        {/* <!-- Logo Section --> */}
        <div className="logo">
          <img src="/assets/images/logo-rubiks.png" alt="Logo" className="w-full h-auto" />
        </div>

        {/* <!-- Daftar Form Section --> */}
        <div className="login-form">
          <h2>DAFTAR</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Minimal 8 Karakter"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span className="toggle-password"></span>
            </div>

            <div className="button-container">
              <button type="submit" className="signup-btn">DAFTAR</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Daftar;
