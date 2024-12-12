import React from 'react'

function Header() {
  return (
    <div>
        <header>
            <img src="/assets/images/logo-rubiks.png" alt="logo" className="logo" />
            <nav>
            <ul className="nav-links">
                <li className="nav-item active"><a href="/LandingPage">Beranda</a></li>
                <li className="nav-item"><a href="/Eksplorasi">Eksplorasi</a></li>
                <li className="nav-item"><a href="/LandingPage">Tentang Kami</a></li>
            </ul>
            <div className="auth">
                <a href="/Daftar" className="btn-register">Daftar</a>
                <a href="/Masuk" className="btn-login">Masuk</a>
            </div>
            </nav>
      </header>
    </div>
  )
}

export default Header