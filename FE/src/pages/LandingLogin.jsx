import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

function LandingLogin() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div>
      {/* <header>
        <img src="/assets/images/logo-rubiks.png" alt="logo" className="logo" />
        <nav>
          <ul className="nav-links">
            <li className="nav-item active"><a href="/">Beranda</a></li>
            <li className="nav-item"><a href="Eksplorasi.html">Eksplorasi</a></li>
            <li className="nav-item"><a href="#aboutme">Tentang Kami</a></li>
          </ul>
          <div className="auth">
            <a href="register" className="btn-register">Daftar</a>
            <a href="login" className="btn-login">Masuk</a>
          </div>
        </nav>
      </header> */}

      <section>
        <div className="hero">
          <div className="hero-content">
            <h1>Bikin karya? <br />Ayo, tunjukin karyamu!</h1>
            <p><strong>Ruang Bagi Karya Seniman</strong> hadir untuk memberikan tempat bagi semua orang membagikan karya dan portofolio</p>
            <div className="share">
              <a href="/KaryaPengguna" className="btn-share">Share Sekarang</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/assets/images/hero.png" alt="hero" className="hero-img" />
          </div>
        </div>

        <div className="about" id="aboutme">
          <h1>Tentang Kami</h1>
          <div className="about-content mt-4">
            <p>
              Selamat datang di RUBIKS, tempat bagi para kreator yang ingin berbagi karya dan portofolio mereka dengan dunia. Kami hadir dengan memberikan platform yang memungkinkan individu untuk memperluas jangkauan dan pengaruh dari
              karya-karya mereka. <br />
              RUBIKS menyediakan ruang untuk para kreator memamerkan bakat mereka dalam berbagai bentuk, mulai dari gambar, desain, tulisan, hingga karya-karya kreatif lainnya. <br />
              Bergabunglah dengan RUBIKS dan jadilah bagian dari perjalanan kreatif ini. Mari bersama-sama menciptakan ruang di mana setiap karya dihargai, setiap pencapaian diakui, dan setiap individu diberdayakan untuk berkembang dan
              bersinar dalam dunia kreatif.
            </p>
          </div>
        </div>

        <div className="benefits">
          <h1>Fitur Utama</h1>
          <div className="benefit-content">
            <div className="card">
              <img src="/assets/images/benefit-1.png" alt="benefit1" className="benefit-img mt-3" />
              <h2 className="mt-2">Share Karya Kamu</h2>
              <p className="mt-2">kamu bisa mengekspresikan diri kamu, memperluas jaringan, dan memperoleh inspirasi dari komunitas yang beragam.</p>
            </div>
            <div className="card">
              <img src="/assets/images/benefit-2.png" alt="benefit1" className="benefit-img mt-3" />
              <h2 className="mt-2">Unggah Karya</h2>
              <p className="mt-2">memberikan akses yang lebih mudah bagi kamu untuk memperkenalkan karya-karya kamu kepada pihak organisasi atau perusahaan dibidang kreatif.</p>
            </div>
            <div className="card">
              <img src="/assets/images/benefit-3.png" alt="benefit1" className="benefit-img mt-3" />
              <h2 className="mt-2">Sukai dan komentar</h2>
              <p className="mt-2">memberikan kamu kesempatan untuk menyatakan apresiasi, memberikan umpan balik, dan memperdalam hubungan antar pengguna serta konten yang dibagikan.</p>
            </div>
          </div>
        </div>

        {/* <div className="explore">
          <h1>Eksplorasi</h1>
          <div className="swiper mySwiper swiper-coverflow swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress">
            <div className="swiper-wrapper" id="swiper-wrapper-b19925d60dc0226e" aria-live="polite" style={{transitionDuration: '0ms', transitionDelay: '0ms', transform: 'translate3d(185.333px, 0px, 0px'}}>
              <!-- Masing-masing gambar dalam swiper-slide terpisah -->
              <div className="swiper-slide" role="group" aria-label="1 / 1" data-swiper-slide-index="0">
                <img style={{width: '100%', height: 'auto', objectFit: 'cover'}} src="/assets/images/lp-exsplore1.png" />
              </div>
              <div className="swiper-slide" role="group" aria-label="2 / 1" data-swiper-slide-index="1">
                <img style={{width: '100%', height: 'auto', objectFit: 'cover'}} src="/assets/images/lp-exsplore2.png" />
              </div>
              <div className="swiper-slide" role="group" aria-label="3 / 1" data-swiper-slide-index="2">
                <img style={{width: '100%', height: 'auto', objectFit: 'cover'}} src="/assets/images/lp-exsplore3.png" />
              </div>
              <div className="swiper-slide" role="group" aria-label="4 / 1" data-swiper-slide-index="3">
                <img style={{width: '100%', height: 'auto', objectFit: 'cover'}} src="/assets/images/lp-exsplore4.png" />
              </div>
              <div className="swiper-slide" role="group" aria-label="5 / 1" data-swiper-slide-index="4">
                <img style={{width: '100%', height: 'auto', objectFit: 'cover'}} src="/assets/images/lp-exsplore5.png" />
              </div>
            </div>
              <div className="swiper-button-next swiper-button-lock" tabIndex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-b19925d60dc0226e"></div>
              <div className="swiper-button-prev swiper-button-lock" tabIndex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-b19925d60dc0226e"></div>
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
          </div>
          <div className="others">
            <a href="/EksplorasiLogin" className="btn-other">Lainnya</a>
          </div>
        </div> */}

        <div className="explore">
          <h1>Eksplorasi</h1>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            pagination={{ clickable: true }}
            spaceBetween={5}
            slidesPerView={5}
            className="mySwiper"
          >
            <SwiperSlide>
              <img style={{ width: '100%', height: 'auto', objectFit: 'cover' }} src="/assets/images/lp-exsplore1.png" alt="Explore 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ width: '100%', height: 'auto', objectFit: 'cover' }} src="/assets/images/lp-exsplore2.png" alt="Explore 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ width: '100%', height: 'auto', objectFit: 'cover' }} src="/assets/images/lp-exsplore3.png" alt="Explore 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ width: '100%', height: 'auto', objectFit: 'cover' }} src="/assets/images/lp-exsplore4.png" alt="Explore 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ width: '100%', height: 'auto', objectFit: 'cover' }} src="/assets/images/lp-exsplore5.png" alt="Explore 5" />
            </SwiperSlide>
          </Swiper>

          {/* Tambahkan refs ke tombol navigasi */}
          <div ref={nextRef} className="swiper-button-next"></div>
          <div ref={prevRef} className="swiper-button-prev"></div>

          <div className="others">
            <a href="/EksplorasiLogin" className="btn-other">Lainnya</a>
          </div>
        </div>

       
        <div className="benefits">
          <h1>Gimana Caranya?</h1>
          <div className="benefit-content">
            <div className="card">
              <img src="/assets/images/cara-1.png" alt="benefit1" className="benefit-cara mt-3" />
              <p className="mt-2">Klik Daftar untuk membuat akun RUBIKS.</p>
            </div>
            <div className="card">
              <img src="/assets/images/cara-2.png" alt="benefit1" className="benefit-cara mt-3" />
              <p className="mt-2">Masukkan Username dan email beserta password untuk mendaftar.</p>
            </div>
            <div className="card">
              <img src="/assets/images/cara-3.png" alt="benefit1" className="benefit-cara mt-3" />
              <p className="mt-2">Lalu klik ikon profil kemudian klik “unggah karyamu”.</p>
            </div>
            <div className="card">
              <img src="/assets/images/cara-4.png" alt="benefit1" className="benefit-cara mt-3" />
              <p className="mt-2">kemudian klik “Unggah” untuk bisa mengunggah karya kamu.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingLogin