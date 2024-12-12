import React from 'react'

function HeaderLogin() {
  return (
    <div>
        <header>
            <img src="/assets/images/logo-rubiks.png" alt="logo" className="logo" />
            <nav>
                <ul className="nav-links">
                    <li className="nav-item"><a href="/LandingLogin">Beranda</a></li>
                    <li className="nav-item"><a href="/EksplorasiLogin">Eksplorasi</a></li>
                    <li className="nav-item"><a href="/LandingLogin">Tentang Kami</a></li>
                </ul>
                <div className="auth">
                    <div className="dropdown">
                    <button class="dropdown-toggle show" type="button" data-bs-toggle="dropdown" aria-expanded="true">
                        <img src="/assets/images/Akun.png" alt="Default" width="50px" style={{borderRadius: '50%'}}/>
                    </button>
                    <ul className="dropdown-menu">
                        <div className="profile">
                            <img src="/assets/images/Akun.png" alt="Default" width="50px" style={{borderRadius: '50%'}} />
                            <h6>Admin</h6>
                        </div>
                        <div className="menu mt-2">
                            <a href="/KaryaPengguna">Profil</a>
                            {/* <!-- <a href="#">Unggah Karya</a> --> */}
                            <a href="/LandingPage" onClick="event.preventDefault(); document.getElementById('logout-form').submit();"> keluar </a>
                            <form id="logout-form" action="/LandingPage" method="POST" style={{display: 'none'}}>
                                <input type="hidden" name="_token" value="nq0ImsgunkckeF9mhr30EeyT8pltYMjGlIZzrbv2" autoComplete="off" />
                            </form>
                        </div>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default HeaderLogin