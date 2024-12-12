import React from 'react';
import Daftar from './pages/Daftar';
import EditProfile from './pages/EditProfile';
import Eksplorasi from './pages/Eksplorasi';
import EksplorasiLogin from './pages/EksplorasiLogin';
import KaryaExplore from './pages/KaryaExplore';
import KaryaPengguna from './pages/KaryaPengguna';
import LandingPage from './pages/LandingPage';
import LandingLogin from './pages/LandingLogin';
import Masuk from './pages/Masuk';
import TentangKamu from './pages/TentangKamu';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HeaderLogin from './components/HeaderLogin';
import Footer from './components/Footer';

function Layout() {
  const location = useLocation();

  const noHeaderFooterRoutes = ['/Masuk', '/Daftar'];

  const header1Routes = [
    '/EditProfile',
    '/EksplorasiLogin',
    '/KaryaPengguna',
    '/KaryaExplore',
    '/TentangKamu',
    '/LandingLogin'
  ];

  return (
    <div>
      {/* Menampilkan Header1 jika di salah satu rute yang sesuai */}
      {header1Routes.includes(location.pathname) ? (
        <HeaderLogin />
      ) : !noHeaderFooterRoutes.includes(location.pathname) ? (
        <Header />
      ) : null}

      <Routes>
        <Route path='/LandingPage' element={<LandingPage />} />
        <Route path='/EditProfile' element={<EditProfile />} />
        <Route path='/Eksplorasi' element={<Eksplorasi />} />
        <Route path='/EksplorasiLogin' element={<EksplorasiLogin />} />
        <Route path='/KaryaExplore' element={<KaryaExplore />} />
        <Route path='/KaryaPengguna' element={<KaryaPengguna />} />
        <Route path='/Daftar' element={<Daftar />} />
        {/* <Route path='/Login' element={<Login />} /> */}
        <Route path='/Masuk' element={<Masuk />} />
        <Route path='/TentangKamu' element={<TentangKamu />} />
        <Route path='/LandingLogin' element={<LandingLogin />} />
      </Routes>

      {/* Hanya tampilkan Footer jika bukan di rute tanpa Header/Footer */}
      {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter className="w-full m-0 p-0">
      <Layout className='w-full m-0 p-0' />
    </BrowserRouter>
  );
}

export default App
