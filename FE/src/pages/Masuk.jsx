import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Masuk() {
  const [formData, setFormData] = useState({
    username: '',
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
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message); // Tampilkan pesan sukses

        // Simpan data user di localStorage (opsional)
        localStorage.setItem('user', JSON.stringify(result.user));

        // Arahkan ke halaman Eksplorasi
        navigate('/Eksplorasi');
      } else {
        alert(result.message); // Tampilkan pesan error jika login gagal
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
        <div className="logo">
          <img src="/assets/images/logo-rubiks.png" alt="Logo" />
        </div>

        <div className="login-form">
          <h2>MASUK</h2>
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

            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="button-container">
              <button type="submit" className="signup-btn">MASUK</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Masuk;
